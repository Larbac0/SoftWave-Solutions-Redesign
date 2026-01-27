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

export const portfolioItems: PortfolioItem[] = [
  
];
