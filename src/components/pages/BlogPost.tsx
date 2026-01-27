import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft, Calendar, User, Clock, Tag, Share2 } from "lucide-react";
import { BlogPosts } from "../../data/blog";
import { toast } from "sonner";

interface BlogPostProps {
  slug: string;
  onNavigate: (page: "blog" | "blog-post" | "contact", params?: { slug?: string }) => void;
}

export function BlogPost({ slug, onNavigate }: BlogPostProps) {
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4">Post não encontrado</h2>
          <Button onClick={() => onNavigate("blog")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Blog
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    toast.success("Link copiado para a área de transferência!");
  };

  // Convert markdown-style content to HTML for display
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.JSX.Element[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith("# ")) {
        elements.push(<h1 key={key++} className="mb-6">{line.slice(2)}</h1>);
      } else if (line.startsWith("## ")) {
        elements.push(<h2 key={key++} className="mt-8 mb-4">{line.slice(3)}</h2>);
      } else if (line.startsWith("### ")) {
        elements.push(<h3 key={key++} className="mt-6 mb-3">{line.slice(4)}</h3>);
      } else if (line.startsWith("#### ")) {
        elements.push(<h4 key={key++} className="mt-4 mb-2">{line.slice(5)}</h4>);
      } else if (line.startsWith("- ")) {
        const listItems: string[] = [line.slice(2)];
        while (i + 1 < lines.length && lines[i + 1].startsWith("- ")) {
          i++;
          listItems.push(lines[i].slice(2));
        }
        elements.push(
          <ul key={key++} className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
            {listItems.map((item, idx) => {
              // Handle bold text
              const parts = item.split("**");
              return (
                <li key={idx}>
                  {parts.map((part, i) => 
                    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                  )}
                </li>
              );
            })}
          </ul>
        );
      } else if (line.startsWith("✅ ") || line.startsWith("♻️ ") || line.startsWith("🌱 ") || 
                 line.startsWith("🌍 ") || line.startsWith("💚 ") || line.startsWith("📱 ") || 
                 line.startsWith("📧 ") || line.startsWith("🌐 ") || line.startsWith("📍 ") ||
                 line.startsWith("🎥 ") || line.startsWith("📄 ") || line.startsWith("⭐ ")) {
        const listItems: string[] = [line];
        while (i + 1 < lines.length && /^[✅♻️🌱🌍💚📱📧🌐📍🎥📄⭐]/.test(lines[i + 1])) {
          i++;
          listItems.push(lines[i]);
        }
        elements.push(
          <ul key={key++} className="space-y-2 mb-4 text-muted-foreground">
            {listItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="shrink-0">{item.slice(0, 2)}</span>
                <span>{item.slice(2).trim()}</span>
              </li>
            ))}
          </ul>
        );
      } else if (line.startsWith("|")) {
        // Table handling
        const tableRows: string[] = [line];
        while (i + 1 < lines.length && lines[i + 1].startsWith("|")) {
          i++;
          tableRows.push(lines[i]);
        }
        
        const headers = tableRows[0].split("|").filter(cell => cell.trim()).map(cell => cell.trim());
        const rows = tableRows.slice(2).map(row => 
          row.split("|").filter(cell => cell.trim()).map(cell => cell.trim())
        );
        
        elements.push(
          <div key={key++} className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  {headers.map((header, idx) => (
                    <th key={idx} className="border border-border p-3 text-left">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIdx) => (
                  <tr key={rowIdx} className="hover:bg-muted/50">
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="border border-border p-3">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      } else if (line.startsWith("**") && line.endsWith("**")) {
        elements.push(
          <p key={key++} className="mb-4">
            <strong>{line.slice(2, -2)}</strong>
          </p>
        );
      } else if (line.trim().length > 0 && !line.startsWith("---")) {
        // Handle bold text in paragraphs
        const parts = line.split("**");
        elements.push(
          <p key={key++} className="mb-4 text-muted-foreground leading-relaxed">
            {parts.map((part, i) => 
              i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
            )}
          </p>
        );
      } else if (line === "---") {
        elements.push(<Separator key={key++} className="my-8" />);
      }
    }

    return elements;
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#10CFA3] via-[#04BFFD] to-[#10CFA3] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            className="mb-6 text-white hover:text-white hover:bg-white/10"
            onClick={() => onNavigate("blog")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Blog
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Badge className="mb-4 bg-white/20 hover:bg-white/30">
              {post.category}
            </Badge>
            <h1 className="mb-4">{post.title}</h1>
            <p className="text-lg text-white/90 mb-6">{post.description}</p>
            <div className="flex flex-wrap gap-4 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("pt-BR")}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Featured Image */}
                <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-8">
                  <ImageWithFallback
                    src={`https://source.unsplash.com/1200x675/?${post.thumbnail}`}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Article Content */}
                <Card>
                  <CardContent className="p-8 prose prose-lg max-w-none">
                    {renderContent(post.content)}
                  </CardContent>
                </Card>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="gap-1">
                      <Tag className="h-3 w-3" />
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Share */}
                <div className="mt-8 flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">Compartilhar:</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleShare}
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Compartilhar
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Author Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h4 className="mb-4">Sobre o Autor</h4>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#10CFA3] to-[#04BFFD] flex items-center justify-center text-white">
                        SW
                      </div>
                      <div>
                        <div>{post.author}</div>
                        <div className="text-sm text-muted-foreground">Especialistas em soluções</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Equipe dedicada a compartilhar conhecimento e dicas práticas sobre design gráfico, 
                      tecnologia e marketing digital.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Recent Posts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h4 className="mb-4">Posts Recentes</h4>
                    <div className="space-y-4">
                      {BlogPosts
                        .filter((p) => p.slug !== post.slug)
                        .slice(0, 3)
                        .map((recentPost) => (
                          <div
                            key={recentPost.slug}
                            className="group cursor-pointer"
                            onClick={() => onNavigate("blog-post", { slug: recentPost.slug })}
                          >
                            <Badge variant="outline" className="mb-2">
                              {recentPost.category}
                            </Badge>
                            <h5 className="text-sm group-hover:text-primary transition-colors mb-1">
                              {recentPost.title}
                            </h5>
                            <div className="text-xs text-muted-foreground">
                              {new Date(recentPost.date).toLocaleDateString("pt-BR")}
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-gradient-to-br from-[#10CFA3] to-[#04BFFD] text-white">
                  <CardContent className="p-6">
                    <h4 className="mb-3">Precisando de Ajuda?</h4>
                    <p className="text-sm text-white/90 mb-4">
                      Entre em contato e descubra como podemos ajudar seu negócio!
                    </p>
                    <Button
                      className="w-full bg-white text-primary hover:bg-white/90"
                      size="lg"
                      onClick={() => onNavigate("contact")}
                    >
                      Falar com Especialista
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center">Leia Também</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BlogPosts
              .filter((p) => p.category === post.category && p.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 h-full"
                    onClick={() => onNavigate("blog-post", { slug: relatedPost.slug })}
                  >
                    <div className="aspect-video bg-muted overflow-hidden">
                      <ImageWithFallback
                        src={`https://source.unsplash.com/600x400/?${relatedPost.thumbnail}`}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                        <Badge variant="secondary">{relatedPost.category}</Badge>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {relatedPost.readTime}
                        </span>
                      </div>
                      <h4 className="mb-2 line-clamp-2">{relatedPost.title}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}