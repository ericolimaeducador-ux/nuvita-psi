// Identidade oficial do produto Nuvita Psi.
// Fonte única para logos e dados cadastrais usados na UI e nos documentos impressos/PDF.
// Assets de logo ainda são os do Nuvita original — trocar quando houver arte própria.
import logoColor from '@/assets/nuvita-logo.png';
import logoLight from '@/assets/nuvita-logo-light.png';
import markColor from '@/assets/nuvita-mark.png';
import markLight from '@/assets/nuvita-mark-light.png';

export const brand = {
  nome: 'Nuvita Psi',
  slogan: 'gestão para clínicas de psicologia',
  cnpj: '55.747.955/0001-07',
  endereco: 'Rua Levindo Lopes, 391 – Funcionários, Belo Horizonte – MG',
  telefone: '+55 (11) 94739-1805',
  // Logo completo (ícone + marca nominativa). `color` para superfícies claras /
  // documentos impressos; `light` para o tema escuro do app.
  logo: { color: logoColor, light: logoLight },
  // Apenas o ícone (nuvem + batimento).
  mark: { color: markColor, light: markLight },
} as const;
