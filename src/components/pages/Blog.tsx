import { motion } from "motion/react";
import { SectionTitle } from "../common/SectionTitle";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPosts } from "../../data/blog";

interface BlogProps {
  onNavigate: (page: "blog-post", params?: { slug: string }) => void;
}

export function Blog({ onNavigate }: BlogProps) {

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#10CFA3] via-[#04BFFD] to-[#10CFA3] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="mb-6">Blog</h1>
            <p className="text-lg text-white/90">
              Dicas, tutoriais e novidades sobre tecnologia, gráfica e serviços digitais
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card 
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => onNavigate("blog-post", { slug: blogPosts[0].slug })}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-[16/10] lg:aspect-auto">
                  <ImageWithFallback
                    src={`https://source.unsplash.com/800x500/?${blogPosts[0].thumbnail}`}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">
                    Destaque
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">
                    {blogPosts[0].category}
                  </Badge>
                  <h2 className="mb-4">{blogPosts[0].title}</h2>
                  <p className="text-muted-foreground mb-6">{blogPosts[0].description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString("pt-BR")}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{blogPosts[0].readTime} de leitura</span>
                    </div>
                  </div>
                  <Button className="w-fit bg-gradient-to-r from-[#10CFA3] to-[#04BFFD]">
                    Ler Artigo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Artigos Recentes" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                  onClick={() => onNavigate("blog-post", { slug: post.slug })}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <ImageWithFallback
                      src={`https://source.unsplash.com/800x500/?${post.thumbnail}`}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <Badge variant="secondary" className="w-fit mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="w-fit p-0 h-auto">
                      Ler mais <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="mb-4">Receba Nossas Novidades</h2>
            <p className="text-muted-foreground mb-8">
              Inscreva-se em nossa newsletter para receber dicas e novidades diretamente no seu e-mail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
              />
              <Button className="bg-gradient-to-r from-[#04BFFD] to-[#04BFFD]">
                Inscrever-se
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
