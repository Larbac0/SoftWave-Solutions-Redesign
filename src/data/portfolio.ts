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

  {
    id: '1',                              // Próximo número
    slug: 'claris-casa-e-clube',              // URL amigável
    title: 'Claris Casa & Clube',
    category: 'digital',                  // ou 'informatica' ou 'digital'
    categoryLabel: 'Serviços Digitais',
    thumbnail: '/images/portfolio/claris-casa-e-clube/thumb.webp',   // Palavras para buscar imagem
    description: 'Um projeto de landing page premium para o condomínio de luxo Claris Casa & Clube, localizado na Barra da Tijuca, Rio de Janeiro. O projeto foi desenvolvido com foco em performance, design sofisticado e uma experiência de usuário imersiva.',
    client: 'Damião José',
    date: 'Agosto 2025',
    images: ['/images/portfolio/claris-casa-e-clube/img-1.jpg',
      '/images/portfolio/claris-casa-e-clube/img-2.jpg',],
    details: [
      { label: 'Tipo', value: 'Website Institucional' },
      { label: 'Páginas', value: '1 página' },
      { label: 'Tecnologias', value: 'React, Node.js' },
      { label: 'Hospedagem', value: '1 ano incluso' },
      { label: 'Domínio', value: '.com.br incluso' },
    ],
    results: [
      'Melhoria da captação de leads',
      'Design sofisticado',
    ],
  },
];
