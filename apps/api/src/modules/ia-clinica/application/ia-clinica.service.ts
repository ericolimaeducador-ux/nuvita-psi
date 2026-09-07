import {
  ConflictException,
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AuthTokenPayload } from '../../../../../../packages/shared/src/auth';
import { AUDIT_LOG_REPOSITORY } from '../../auth/auth.constants';
import { AuditLogRepository } from '../../auth/application/ports/audit-log.repository';
import { AuditEvent } from '../../auth/domain/audit-event.enum';
import { AppConfigService } from '../../../common/security/config.service';
import { resolveTenantClinicaId } from '../../../common/tenancy/resolve-clinica-id';
import { LinhaTerapeutica } from '../../pacientes/domain/paciente.entity';
import { DecisaoUsoIa } from '../domain/decisao-uso-ia.entity';
import { DecisaoUsoIA, TipoUsoIA } from '../domain/registro-uso-ia.enum';
import { AnthropicClient } from '../infrastructure/anthropic.client';
import { IaUsoCryptoService } from '../infrastructure/crypto/ia-uso-crypto.service';
import { DECISAO_USO_IA_REPOSITORY, REGISTRO_USO_IA_REPOSITORY } from '../ia-clinica.constants';
import { DecisaoUsoIaRepository } from './ports/decisao-uso-ia.repository';
import { RegistroUsoIaRepository } from './ports/registro-uso-ia.repository';
import { SugerirAbordagemDto } from './dto/sugerir-abordagem.dto';
import { GerarPrescricaoDto } from './dto/gerar-prescricao.dto';

const LINHA_LABEL: Record<LinhaTerapeutica, string> = {
  [LinhaTerapeutica.TCC]: 'Terapia Cognitivo-Comportamental (TCC)',
  [LinhaTerapeutica.PSICANALISE]: 'Psicanálise',
  [LinhaTerapeutica.HUMANISTA]: 'Abordagem Centrada na Pessoa (Humanista/Rogeriana)',
  [LinhaTerapeutica.GESTALT]: 'Gestalt-Terapia',
  [LinhaTerapeutica.JUNGUIANA]: 'Psicologia Analítica (Junguiana)',
};

const SYSTEM_PROMPT_BASE =
  'Você é um assistente de apoio clínico para psicólogos, dentro de um sistema de gestão de clínica de ' +
  'psicologia (Nuvita Psi). Você NUNCA recebe nome, CPF ou qualquer dado que identifique o paciente — só ' +
  'conteúdo clínico já registrado pelo próprio psicólogo. Seu papel é um Sistema de Suporte à Decisão ' +
  'Clínica (CDSS): você sugere, o psicólogo humano decide. Nunca dê diagnóstico fechado, nunca prescreva ' +
  'medicação, e sempre que o contexto sugerir risco (ideação suicida, autolesão, crise psicótica aguda), ' +
  'comece a resposta recomendando avaliação/contenção imediata antes de qualquer outra sugestão. Responda ' +
  'sempre em português do Brasil, em texto corrido ou lista curta — sem markdown pesado, pronto para ser ' +
  'lido por um profissional em poucos segundos entre uma sessão e outra.';

export interface IaClinicaRequestContext {
  ip: string;
  userAgent: string;
  user: AuthTokenPayload;
}

interface PromptIA {
  user: string;
  maxTokens: number;
}

@Injectable()
export class IaClinicaService {
  constructor(
    private readonly anthropic: AnthropicClient,
    private readonly crypto: IaUsoCryptoService,
    @Inject(REGISTRO_USO_IA_REPOSITORY) private readonly registros: RegistroUsoIaRepository,
    @Inject(DECISAO_USO_IA_REPOSITORY) private readonly decisoes: DecisaoUsoIaRepository,
    @Inject(AUDIT_LOG_REPOSITORY) private readonly auditLogs: AuditLogRepository,
    private readonly configService: AppConfigService,
  ) {}

  async sugerirAbordagem(
    dto: SugerirAbordagemDto,
    context: IaClinicaRequestContext,
  ): Promise<{ sugestao: string; registroUsoIaId: string }> {
    const { texto, registroUsoIaId } = await this.gerarERegistrar(
      dto,
      TipoUsoIA.SUGESTAO_ABORDAGEM,
      context,
      this.promptAbordagem(dto),
    );
    return { sugestao: texto, registroUsoIaId };
  }

  async gerarPrescricao(
    dto: GerarPrescricaoDto,
    context: IaClinicaRequestContext,
  ): Promise<{ prescricao: string; registroUsoIaId: string }> {
    const { texto, registroUsoIaId } = await this.gerarERegistrar(
      dto,
      TipoUsoIA.PRESCRICAO_CUIDADOS,
      context,
      this.promptPrescricao(dto),
    );
    return { prescricao: texto, registroUsoIaId };
  }

  /**
   * Registra a decisão humana (aceitar/descartar) sobre uma sugestão da IA.
   *
   * Não repúdio: só o mesmo profissional que gerou a sugestão pode decidir
   * sobre ela. Ordem das checagens: existe (404) → é do usuário (403) → ainda
   * não foi decidido (409). O `existsForRegistro` é fast-path; a garantia real
   * contra corrida é o índice único de `decisoes_uso_ia` — um `E11000` do
   * `create` também vira 409.
   */
  async registrarDecisao(
    registroUsoIaId: string,
    decisao: DecisaoUsoIA,
    context: IaClinicaRequestContext,
  ): Promise<DecisaoUsoIa> {
    const clinicaId = resolveTenantClinicaId(context.user);

    const registro = await this.registros.findByIdAndClinica(registroUsoIaId, clinicaId);
    if (!registro) {
      throw new NotFoundException('Registro de uso de IA nao encontrado.');
    }
    if (registro.usuarioId !== context.user.sub) {
      throw new ForbiddenException(
        'Somente o profissional que gerou a sugestao pode registrar a decisao sobre ela.',
      );
    }
    if (await this.decisoes.existsForRegistro(registroUsoIaId)) {
      throw new ConflictException('Decisao de uso de IA ja registrada.');
    }

    let decisaoRegistrada: DecisaoUsoIa;
    try {
      decisaoRegistrada = await this.decisoes.create({
        registroUsoIaId,
        usuarioId: context.user.sub,
        decisao,
      });
    } catch (erro) {
      if (this.ehErroDeChaveDuplicada(erro)) {
        throw new ConflictException('Decisao de uso de IA ja registrada.');
      }
      throw erro;
    }

    await this.auditLogs.create({
      event: AuditEvent.AI_SUGGESTION_DECISION_RECORDED,
      userId: context.user.sub,
      email: context.user.email,
      ip: context.ip,
      userAgent: context.userAgent,
      metadata: { clinicaId, registroUsoIaId, decisao },
    });

    return decisaoRegistrada;
  }

  private ehErroDeChaveDuplicada(erro: unknown): boolean {
    return typeof erro === 'object' && erro !== null && (erro as { code?: number }).code === 11000;
  }

  /**
   * Esqueleto compartilhado (Template Method) das duas operações de IA:
   * valida o tenant → chama a IA → cifra input e output → persiste o
   * RegistroUsoIa imutável → grava o audit log → devolve texto + id.
   *
   * Fail-closed: qualquer falha depois da resposta da IA (persistência ou
   * audit) propaga — a sugestão nunca sai sem trilha. Escrita de audit sem
   * try/catch, mesmo comportamento dos outros módulos.
   */
  private async gerarERegistrar<D>(
    dto: D,
    tipo: TipoUsoIA,
    context: IaClinicaRequestContext,
    prompt: PromptIA,
  ): Promise<{ texto: string; registroUsoIaId: string }> {
    // Antes de gastar uma chamada paga à IA: o tenant precisa estar resolvido.
    // resolveTenantClinicaId lança se não estiver — nunca há registro de
    // auditoria sem clinicaId.
    const clinicaId = resolveTenantClinicaId(context.user);

    const texto = await this.anthropic.gerarTexto(SYSTEM_PROMPT_BASE, prompt.user, prompt.maxTokens);

    const input = this.crypto.encrypt(JSON.stringify(dto));
    const output = this.crypto.encrypt(texto);

    const registro = await this.registros.create({
      clinicaId,
      usuarioId: context.user.sub,
      tipo,
      modelo: this.configService.getConfig().anthropicModel,
      inputCifrado: input.cifrado,
      inputIv: input.iv,
      inputAuthTag: input.authTag,
      outputCifrado: output.cifrado,
      outputIv: output.iv,
      outputAuthTag: output.authTag,
    });

    await this.auditLogs.create({
      event: AuditEvent.AI_SUGGESTION_GENERATED,
      userId: context.user.sub,
      email: context.user.email,
      ip: context.ip,
      userAgent: context.userAgent,
      metadata: { clinicaId, tipo, registroUsoIaId: registro.id },
    });

    return { texto, registroUsoIaId: registro.id };
  }

  private promptAbordagem(dto: SugerirAbordagemDto): PromptIA {
    const linha = dto.linhaTerapeutica ? LINHA_LABEL[dto.linhaTerapeutica] : undefined;

    const partes: string[] = [];
    partes.push(
      linha
        ? `Linha terapêutica do paciente: ${linha}.`
        : 'O paciente ainda não tem linha terapêutica classificada — sugira de forma genérica, sem presumir uma abordagem específica.',
    );
    if (dto.numeroSessoesAnteriores !== undefined) {
      partes.push(
        dto.numeroSessoesAnteriores === 0
          ? 'Esta é a primeira consulta com o paciente.'
          : `O paciente já teve ${dto.numeroSessoesAnteriores} sessão(ões) anteriores.`,
      );
    }
    if (dto.motivoAtendimento) partes.push(`Motivo do atendimento / queixa principal: ${dto.motivoAtendimento}`);
    if (dto.diagnosticosSaudeMental) partes.push(`Diagnósticos de saúde mental (prévios ou atuais): ${dto.diagnosticosSaudeMental}`);
    if (dto.avaliacaoRisco) partes.push(`Avaliação de risco já registrada: ${dto.avaliacaoRisco}`);
    if (dto.evolucao) partes.push(`Evolução registrada na sessão atual: ${dto.evolucao}`);
    if (dto.anotacoesLivres) partes.push(`Anotações livres da sessão atual: ${dto.anotacoesLivres}`);

    const user =
      `${partes.join('\n')}\n\n` +
      'Com base nesse contexto, sugira ao psicólogo, de forma objetiva: ' +
      '(1) 1-2 técnicas ou intervenções coerentes com a linha terapêutica indicada para usar nesta sessão ou na próxima; ' +
      '(2) 2-3 perguntas ou direções de condução de sessão que ajudem a aprofundar o que já foi registrado. ' +
      'No máximo 150 palavras.';

    return { user, maxTokens: 600 };
  }

  private promptPrescricao(dto: GerarPrescricaoDto): PromptIA {
    const linha = dto.linhaTerapeutica ? LINHA_LABEL[dto.linhaTerapeutica] : undefined;

    const partes: string[] = [];
    partes.push(
      linha
        ? `Linha terapêutica do paciente: ${linha}.`
        : 'O paciente ainda não tem linha terapêutica classificada — sugira cuidados genéricos, aplicáveis a qualquer abordagem.',
    );
    if (dto.checklistSelecionado?.length) {
      partes.push(`Itens do checklist de cuidados já marcados pelo psicólogo: ${dto.checklistSelecionado.join(', ')}.`);
    }
    if (dto.contextoClinico) partes.push(`Contexto clínico relevante: ${dto.contextoClinico}`);

    const user =
      `${partes.join('\n')}\n\n` +
      'Redija um parágrafo curto de "Prescrição de Cuidados em Psicologia" para o paciente, coerente com a ' +
      'linha terapêutica informada — cuidados práticos entre sessões (ex.: respiração/relaxamento, diário ' +
      'comportamental ou de sonhos, leituras/filmes, exercícios específicos da linha). Escreva em linguagem ' +
      'simples, direta ao paciente, pronta para ser impressa como orientação. No máximo 120 palavras.';

    return { user, maxTokens: 500 };
  }
}
