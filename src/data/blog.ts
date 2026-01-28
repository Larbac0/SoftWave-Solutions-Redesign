export function BlogPosts() {
  // In browser (client-side) we must not attempt to use Node-only APIs like fs/path.
  // Return a placeholder post on the client to preserve layout and avoid runtime errors
  // when components access `blogPosts[0]`.
  if (typeof window !== 'undefined') {
    return [
      {
        slug: 'placeholder',
        title: 'Nenhum artigo disponível',
        description: 'Ainda não há posts publicados. Volte em breve para mais novidades.',
        thumbnail: 'news',
        category: 'Geral',
        date: new Date().toISOString(),
        readTime: '1 min',
        content: '',
        id: 'placeholder',
      },
    ];
  }

  const fs = require('fs');
  const path = require('path');
  const matter = require('gray-matter');

  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename: string) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ''),
      ...data,
      content,
    };
  });

  return posts.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
}