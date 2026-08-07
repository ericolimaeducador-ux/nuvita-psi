/**
 * Lista padrão de documentos que a secretaria/administrativo cobra do
 * paciente. Fonte única — usada pelo backend para popular o checklist de um
 * paciente de uma vez, em vez de a secretaria digitar cada item manualmente.
 */
export const DOCUMENTOS_PADRAO: string[] = [
  'RG ou CNH (documento de identificação com foto)',
  'Comprovante de endereço',
  'Termo de consentimento assinado',
];
