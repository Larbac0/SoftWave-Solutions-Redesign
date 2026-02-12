/**
 * CONFIGURAÇÃO DE SERVIÇOS
 * 
 * Este arquivo define todos os serviços oferecidos pela empresa.
 * Organize aqui as categorias, itens e preços.
 */

import { Printer, Monitor, Globe, LucideIcon } from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  section: string;
}

/**
 * SERVIÇOS PRINCIPAIS
 * Exibidos na home e página de serviços
 */
export const mainServices: ServiceItem[] = [
  {
    icon: Monitor,
    title: "Serviços de Informática",
    description: "Manutenção, upgrade e suporte técnico completo para seus equipamentos.",
    features: [
      "Formatação e otimização",
      "Troca de peças e upgrades",
      "Instalação de sistemas",
      "Configuração de impressoras",
    ],
    section: "informatica",
  },
  {
    icon: Globe,
    title: "Serviços Digitais",
    description: "Presença digital moderna com sites, landing pages e identidade visual.",
    features: [
      "Mini-sites e landing pages",
      "Cartão digital com QR Code",
      "Logotipos profissionais",
      "Social media básico",
    ],
    section: "digitais",
  },
];

/**
 * DETALHAMENTO DOS SERVIÇOS
 * Para a página de serviços com informações completas
 */

// Serviços de Informática Detalhados
export const computerServices = [
  {
    name: "Formatação Completa",
    description: "Formatação, instalação e configuração do sistema",
    price: "R$ 120",
    features: ["Windows original", "Drivers atualizados", "Antivírus incluso"],
  },
  {
    name: "Upgrade de Hardware",
    description: "Melhore o desempenho do seu computador",
    price: "Peça + R$ 80 instalação",
    features: ["Memória RAM", "SSD", "Placa de vídeo", "Fonte"],
  },
  {
    name: "Manutenção Preventiva",
    description: "Limpeza e otimização completa",
    price: "R$ 80",
    features: ["Limpeza física", "Troca de pasta térmica", "Otimização do sistema"],
  },
  {
    name: "Suporte Técnico",
    description: "Diagnóstico e solução de problemas",
    price: "R$ 60 (diagnóstico)",
    features: ["Atendimento rápido", "Orçamento sem compromisso", "Garantia do serviço"],
  },
];

// Serviços Digitais Detalhados
export const digitalServices = [
  {
    name: "Mini Site / Landing Page",
    description: "Site de uma página otimizado para conversão",
    price: "A partir de R$ 599",
    features: ["Design responsivo", "Hospedagem 1 ano", "Domínio incluso"],
  },
  {
    name: "Site Institucional",
    description: "Site completo com múltiplas páginas",
    price: "A partir de R$ 1.499",
    features: ["Até 5 páginas", "SEO básico", "Formulário de contato"],
  },
  {
    name: "Cartão Digital QR Code",
    description: "Cartão de visita digital interativo",
    price: "R$ 199",
    features: ["QR Code personalizado", "Atualizações grátis", "Analytics incluso"],
  },
  {
    name: "Identidade Visual",
    description: "Criação de logotipo profissional",
    price: "A partir de R$ 499",
    features: ["3 propostas", "Revisões ilimitadas", "Arquivos vetoriais"],
  },
];

/**
 * TABELA DE PREÇOS RÁPIDA
 * Para referência rápida
 */
export const quickPrices = {
  // Gráficos
  businessCards: "R$ 80/1000",
  flyers: "R$ 150/1000",
  banner: "Consulte",
  
  // Informática
  formatting: "R$ 120",
  upgrade: "Peça + R$ 80",
  maintenance: "R$ 80",
  
  // Digital
  landingPage: "R$ 599",
  website: "R$ 1.499",
  digitalCard: "R$ 199",
  logo: "R$ 499",
} as const;
