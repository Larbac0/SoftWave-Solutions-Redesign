/**
 * CONFIGURAÇÃO DE CORES E TEMA
 * 
 * Este arquivo centraliza todas as cores oficiais da marca SoftWave Solutions.
 * Altere aqui para mudar as cores em todo o site.
 */

export const colors = {
  // Cores principais da marca
  primary: "#10CFA3",     // Verde água - cor principal
  secondary: "#04BFFD",   // Azul claro - cor secundária
  tertiary: "#F8F9FA",    // Cinza claro - cor terciária
  dark: "#343A40",        // Cinza escuro - textos e elementos
  
  // Cores complementares
  white: "#FFFFFF",
  black: "#000000",
  
  // Cores para estados
  success: "#10CFA3",
  error: "#DC3545",
  warning: "#FFC107",
  info: "#04BFFD",
} as const;

/**
 * GRADIENTES PRONTOS
 * Use estes gradientes para manter consistência visual
 */
export const gradients = {
  primary: "from-[#10CFA3] via-[#04BFFD] to-[#10CFA3]",
  primaryReverse: "from-[#04BFFD] via-[#10CFA3] to-[#04BFFD]",
  darkToPrimary: "from-[#343A40] to-[#10CFA3]",
} as const;

/**
 * ESPAÇAMENTOS PADRÃO
 * Mantenha consistência nos espaçamentos
 */
export const spacing = {
  sectionPadding: "py-20",
  containerPadding: "px-4 sm:px-6 lg:px-8",
  cardGap: "gap-8",
} as const;
