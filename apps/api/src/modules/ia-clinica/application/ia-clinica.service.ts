import { Injectable } from '@nestjs/common';
import { LinhaTerapeutica } from '../../pacientes/domain/paciente.entity';
import { AnthropicClient } from '../infrastructure/anthropic.client';
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

@Injectable()
export class IaClinicaService {
  constructor(private readonly anthropic: AnthropicClient) {}

  async sugerirAbordagem(dto: SugerirAbordagemDto): Promise<{ sugestao: string }> {
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

    const userPrompt =
      `${partes.join('\n')}\n\n` +
      'Com base nesse contexto, sugira ao psicólogo, de forma objetiva: ' +
      '(1) 1-2 técnicas ou intervenções coerentes com a linha terapêutica indicada para usar nesta sessão ou na próxima; ' +
      '(2) 2-3 perguntas ou direções de condução de sessão que ajudem a aprofundar o que já foi registrado. ' +
      'No máximo 150 palavras.';

    const sugestao = await this.anthropic.gerarTexto(SYSTEM_PROMPT_BASE, userPrompt, 600);
    return { sugestao };
  }

  async gerarPrescricao(dto: GerarPrescricaoDto): Promise<{ prescricao: string }> {
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

    const userPrompt =
      `${partes.join('\n')}\n\n` +
      'Redija um parágrafo curto de "Prescrição de Cuidados em Psicologia" para o paciente, coerente com a ' +
      'linha terapêutica informada — cuidados práticos entre sessões (ex.: respiração/relaxamento, diário ' +
      'comportamental ou de sonhos, leituras/filmes, exercícios específicos da linha). Escreva em linguagem ' +
      'simples, direta ao paciente, pronta para ser impressa como orientação. No máximo 120 palavras.';

    const prescricao = await this.anthropic.gerarTexto(SYSTEM_PROMPT_BASE, userPrompt, 500);
    return { prescricao };
  }
}
