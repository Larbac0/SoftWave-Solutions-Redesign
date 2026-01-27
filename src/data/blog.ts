import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug: filename.replace(/\.md$/, ''),
      ...data,
      content
    };
  });
  
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}