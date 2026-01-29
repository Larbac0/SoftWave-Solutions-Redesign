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

export const blogPosts: BlogPost[] = [
];
