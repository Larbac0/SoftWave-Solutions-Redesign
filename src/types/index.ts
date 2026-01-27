/**
 * TIPOS E INTERFACES GLOBAIS
 * 
 * Centralize aqui todas as interfaces TypeScript usadas em múltiplos componentes.
 */

// Páginas disponíveis no site
export type Page =
  | "home"
  | "about"
  | "services"
  | "portfolio"
  | "portfolio-detail"
  | "blog"
  | "blog-post"
  | "contact"
  | "quote";

// Parâmetros de navegação
export interface NavigationParams {
  slug?: string;
  section?: string;
}

// Props de navegação (usado em vários componentes)
export interface NavigationProps {
  onNavigate: (page: Page, params?: NavigationParams) => void;
}

// Item de portfólio
export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: 'grafico' | 'informatica' | 'digital';
  categoryLabel: string;
  thumbnail: string;
  description: string;
  client: string;
  date: string;
  images: string[];
  details: {
    label: string;
    value: string;
  }[];
  technologies?: string[];
  results?: string[];
}

// Post do blog
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  thumbnail: string;
  readTime: string;
  content: string;
  tags: string[];
}

// Depoimento de cliente
export interface Testimonial {
  name: string;
  company: string;
  text: string;
  rating: number;
}

// Estatística da empresa
export interface Stat {
  value: string;
  label: string;
}

// Item "Por que escolher"
export interface WhyChooseItem {
  icon: any; // LucideIcon type
  title: string;
  description: string;
}

// Dados de formulário de contato
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Dados de formulário de orçamento
export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  description: string;
  deadline?: string;
  budget?: string;
}

// Categoria de serviço
export type ServiceCategory = 'grafico' | 'informatica' | 'digital' | 'todos';
