/**
 * INFORMAÇÕES DA EMPRESA
 * 
 * Este arquivo centraliza todas as informações de contato e dados da empresa.
 * Altere aqui para atualizar em todo o site.
 */

export const company = {
  // Nome e identidade
  name: "SoftWave Solutions",
  tagline: "Soluções Completas para o Seu Negócio",
  description: "Da impressão ao digital, da manutenção à presença online. Tudo que você precisa em um só lugar.",
  
  // Contato principal
  contact: {
    phone: "(21) 97001-6069",
    phoneRaw: "5521970016069",
    email: "contato@softwavesl.com.br",
    whatsapp: "5521970016069",
    whatsappMessage: "Olá! Vim pelo site e gostaria de mais informações.",
  },
  
  // Endereço
  address: {
    street: "Estrada da boiuna, 1133",
    district: "Taquara",
    city: "Rio de Janeiro",
    state: "RJ",
    zipCode: "01000-000",
    full: "Estrada da boiuna, 1133 - Taquara, Rio de Janeiro - RJ, 22723-019",
  },
  
  // Redes sociais
  social: {
    facebook: "https://facebook.com/softwave_solu",
    instagram: "https://instagram.com/softwave_solu",
    linkedin: "https://linkedin.com/company/softwavesl",
    youtube: "https://youtube.com/@softwavesl",
  },
  
  // Horário de funcionamento
  hours: {
    weekdays: "Segunda a Sexta: 8h às 18h",
    saturday: "Sábado: 9h às 13h",
    sunday: "Domingo: Fechado",
  },
  
  // SEO e meta informações
  seo: {
    domain: "softwavesl.com.br",
    title: "SoftWave Solutions - Gráfica, Informática e Serviços Digitais",
    description: "Serviços completos de gráfica rápida, manutenção de computadores e desenvolvimento web em São Paulo. Qualidade e agilidade para sua empresa.",
    keywords: "gráfica rápida, impressão, manutenção computador, sites, design gráfico, são paulo",
  },
  
  // Estatísticas (atualize conforme crescimento)
  stats: {
    clients: "500+",
    projects: "1000+",
    satisfaction: "98%",
    years: "5+",
  },
} as const;

/**
 * CONFIGURAÇÃO DO WHATSAPP
 * URL completa para o botão flutuante
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || company.contact.whatsappMessage;
  return `https://wa.me/${company.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
