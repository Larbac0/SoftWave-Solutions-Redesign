/**
 * CONTEÚDOS ESTÁTICOS DO SITE
 * 
 * Este arquivo centraliza textos, depoimentos e outros conteúdos que aparecem no site.
 * Organize e edite facilmente sem mexer nos componentes.
 */

import { Zap, Award, Users, Shield, CheckCircle2, TrendingUp } from "lucide-react";
import type { Testimonial, Stat, WhyChooseItem } from "../types";

/**
 * ESTATÍSTICAS DA HOME
 * Atualize conforme o crescimento da empresa
 */
export const homeStats: Stat[] = [
  { value: "500+", label: "Clientes Atendidos" },
  { value: "1000+", label: "Projetos Concluídos" },
  { value: "98%", label: "Satisfação" },
  { value: "5+", label: "Anos de Mercado" },
];

/**
 * POR QUE ESCOLHER A SOFTWAVE
 * Diferenciais da empresa
 */
export const whyChooseUs: WhyChooseItem[] = [
  {
    icon: Zap,
    title: "Agilidade",
    description: "Prazos rápidos sem comprometer a qualidade",
  },
  {
    icon: Award,
    title: "Qualidade",
    description: "Padrão profissional em todos os serviços",
  },
  {
    icon: Users,
    title: "Atendimento",
    description: "Suporte personalizado e consultoria dedicada",
  },
  {
    icon: Shield,
    title: "Confiança",
    description: "Anos de experiência e clientes satisfeitos",
  },
];

/**
 * DEPOIMENTOS DE CLIENTES
 * Adicione ou edite depoimentos reais
 */
export const testimonials: Testimonial[] = [
  {
    name: "Damião José",
    company: "Claris Casa & Clube",
    text: "Site incrível! A equipe da SoftWave entendeu exatamente o que precisávamos e entregou um site moderno e funcional que realmente ajudou a aumentar nossos leads",
    rating: 5,
  },
  {
    name: "Rogério Silva",
    company: "Cliente",
    text: "Resolveram todos os problemas do meu computador de forma rápida e profissional.",
    rating: 5,
  },
  {
    name: "João Santos",
    company: "Rei do corte Barbershop",
    text: "Excelente atendimento! O site aumentou a marcação de horários e melhorou a visibilidade do meu negócio.",
    rating: 5,
  },
];

/**
 * TEXTOS DA PÁGINA HOME
 */
export const homeContent = {
  hero: {
    badge: "Tecnologia + Gráfica + Digital",
    title: "Soluções Completas para o Seu Negócio",
    subtitle: "Da impressão ao digital, da manutenção à presença online. Tudo que você precisa em um só lugar.",
    primaryCta: "Solicitar Orçamento",
    secondaryCta: "Nossos Serviços",
  },
  services: {
    title: "Nossos Serviços",
    subtitle: "Soluções integradas para todas as necessidades do seu negócio",
  },
  whyChoose: {
    title: "Por Que Escolher a SoftWave?",
    subtitle: "Compromisso com a excelência em cada projeto",
  },
  testimonials: {
    title: "O Que Nossos Clientes Dizem",
    subtitle: "Depoimentos reais de quem confia no nosso trabalho",
  },
  cta: {
    title: "Pronto Para Começar?",
    subtitle: "Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer.",
    primaryCta: "Solicitar Orçamento Grátis",
    secondaryCta: "Fale Conosco",
  },
};

/**
 * TEXTOS DA PÁGINA SOBRE
 */
export const aboutContent = {
  hero: {
    title: "Sobre a SoftWave Solutions",
    subtitle: "Sua parceira em soluções gráficas, tecnológicas e digitais",
  },
  mission: {
    title: "Nossa Missão",
    text: "Fornecer soluções completas e integradas que ajudem nossos clientes a se destacar no mercado, combinando qualidade, agilidade e inovação em cada projeto.",
  },
  vision: {
    title: "Nossa Visão",
    text: "Ser referência em soluções integradas de gráfica, informática e serviços digitais, reconhecida pela excelência no atendimento e compromisso com o sucesso dos nossos clientes.",
  },
  values: {
    title: "Nossos Valores",
    items: [
      {
        icon: CheckCircle2,
        title: "Qualidade",
        text: "Compromisso com a excelência em cada detalhe",
      },
      {
        icon: Zap,
        title: "Agilidade",
        text: "Prazos cumpridos sem comprometer a qualidade",
      },
      {
        icon: Users,
        title: "Atendimento",
        text: "Relacionamento próximo e personalizado",
      },
      {
        icon: TrendingUp,
        title: "Inovação",
        text: "Sempre atualizados com as melhores tecnologias",
      },
      {
        icon: Shield,
        title: "Confiabilidade",
        text: "Transparência e honestidade em todas as relações",
      },
      {
        icon: Award,
        title: "Resultado",
        text: "Foco no sucesso e crescimento dos nossos clientes",
      },
    ],
  },
  story: {
    title: "Nossa História",
    paragraphs: [
      "A SoftWave Solutions nasceu da união de três paixões por tecnologia e inovação digital. Fundada há mais de 2 anos, começamos como uma pequena gráfica rápida atendendo a comunidade local.",
      "Com o tempo, percebemos que nossos clientes precisavam de mais do que apenas impressão. Eles buscavam um parceiro completo que pudesse cuidar de toda a comunicação visual de seus negócios, desde o cartão de visita até a presença digital.",
      "Hoje, somos uma empresa completa que oferece serviços integrados de gráfica, manutenção de informática e soluções digitais. Atendemos desde pequenos empreendedores até empresas estabelecidas, sempre com o mesmo compromisso: qualidade, agilidade e resultados.",
    ],
  },
  achievements: [
    { value: "500+", label: "Clientes Satisfeitos" },
    { value: "1000+", label: "Projetos Entregues" },
    { value: "98%", label: "Taxa de Satisfação" },
    { value: "5+", label: "Anos de Experiência" },
  ],
  team: {
    title: "Nossa Equipe",
    subtitle: "Profissionais qualificados e apaixonados pelo que fazem",
    text: "Nossa equipe é formada por designers, técnicos de informática e desenvolvedores web com ampla experiência em suas áreas. Cada membro é cuidadosamente selecionado não apenas pela competência técnica, mas também pelo compromisso com a satisfação do cliente.",
  },
  cta: {
    title: "Vamos Trabalhar Juntos?",
    text: "Conheça nossas soluções e descubra como podemos ajudar seu negócio a crescer.",
    button: "Entre em Contato",
  },
};

/**
 * TEXTOS DA PÁGINA DE SERVIÇOS
 */
export const servicesContent = {
  hero: {
    title: "Nossos Serviços",
    subtitle: "Soluções completas para todas as necessidades do seu negócio",
  },
  graphics: {
    id: "graficos",
    title: "Serviços Gráficos",
    subtitle: "Impressão profissional e design de alta qualidade",
    description: "Oferecemos serviços gráficos completos com equipamentos modernos e acabamento impecável. Da criação à impressão, cuidamos de cada detalhe para garantir que seu material gráfico transmita profissionalismo.",
  },
  computers: {
    id: "informatica",
    title: "Serviços de Informática",
    subtitle: "Manutenção e suporte técnico especializado",
    description: "Mantenha seus equipamentos sempre funcionando perfeitamente. Nossa equipe técnica oferece desde manutenção preventiva até upgrades completos, com garantia e atendimento ágil.",
  },
  digital: {
    id: "digitais",
    title: "Serviços Digitais",
    subtitle: "Presença online profissional e impactante",
    description: "Leve seu negócio para o mundo digital com sites modernos, identidade visual marcante e ferramentas que geram resultados. Do design à implementação, criamos soluções digitais que convertem.",
  },
  cta: {
    title: "Precisa de Uma Solução Personalizada?",
    text: "Fale com nossa equipe e encontre o serviço ideal para o seu negócio.",
    button: "Solicitar Orçamento",
  },
};

/**
 * TEXTOS DA PÁGINA DE CONTATO
 */
export const contactContent = {
  hero: {
    title: "Entre em Contato",
    subtitle: "Estamos prontos para atender você",
  },
  form: {
    title: "Envie sua Mensagem",
    subtitle: "Preencha o formulário abaixo e responderemos em breve",
    submitButton: "Enviar Mensagem",
    successMessage: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
  },
  info: {
    title: "Informações de Contato",
    subtitle: "Você também pode entrar em contato através de",
  },
  map: {
    title: "Nossa Localização",
  },
};

/**
 * TEXTOS DA PÁGINA DE ORÇAMENTO
 */
export const quoteContent = {
  hero: {
    title: "Solicite Seu Orçamento",
    subtitle: "Preencha o formulário e receba uma proposta personalizada",
  },
  form: {
    title: "Detalhes do Seu Projeto",
    subtitle: "Quanto mais informações você fornecer, mais preciso será o orçamento",
    submitButton: "Enviar Solicitação",
    successMessage: "Solicitação enviada! Entraremos em contato em até 24 horas.",
  },
  benefits: {
    title: "Por Que Solicitar um Orçamento?",
    items: [
      "Proposta personalizada para suas necessidades",
      "Resposta em até 24 horas",
      "Sem compromisso de contratação",
      "Consultoria gratuita incluída",
    ],
  },
};

/**
 * TEXTOS DA PÁGINA DE PORTFÓLIO
 */
export const portfolioContent = {
  hero: {
    title: "Nosso Portfólio",
    subtitle: "Conheça alguns dos projetos que já realizamos",
  },
  filters: {
    all: "Todos",
    grafico: "Gráficos",
    informatica: "Informática",
    digital: "Digital",
  },
  cta: {
    title: "Gostou do Que Viu?",
    text: "Vamos criar algo incrível juntos!",
    button: "Solicite Seu Orçamento",
  },
};

/**
 * TEXTOS DA PÁGINA DE BLOG
 */
export const blogContent = {
  hero: {
    title: "Blog SoftWave",
    subtitle: "Dicas, novidades e insights sobre gráfica, tecnologia e marketing digital",
  },
  filters: {
    all: "Todas as Categorias",
    grafica: "Gráfica",
    tecnologia: "Tecnologia",
    marketing: "Marketing Digital",
  },
  cta: {
    title: "Quer Ficar Por Dentro?",
    text: "Siga-nos nas redes sociais para não perder nenhuma novidade",
  },
};
