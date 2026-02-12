import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft, Calendar, User, CheckCircle, Wrench } from "lucide-react";
import { portfolioItems } from "../../data/portfolio";

interface PortfolioDetailProps {
  slug: string;
  onNavigate: (page: "portfolio" | "portfolio-detail" | "quote", params?: { slug?: string }) => void;
}

export function PortfolioDetail({ slug, onNavigate }: PortfolioDetailProps) {
  const project = portfolioItems.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4">Projeto não encontrado</h2>
          <Button onClick={() => onNavigate("portfolio")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Portfólio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#10CFA3] via-[#04BFFD] to-[#10CFA3] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            className="mb-6 text-white hover:text-white hover:bg-white/10"
            onClick={() => onNavigate("portfolio")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Portfólio
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Badge className="mb-4 bg-white/20 hover:bg-white/30">
              {project.categoryLabel}
            </Badge>
            <h1 className="mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Cliente: {project.client}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {project.date}
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
            <div className="lg:col-span-2 space-y-8">
              {/* Images Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4"
              >
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={project.thumbnail.startsWith('http') || project.thumbnail.startsWith('/') 
                      ? project.thumbnail 
                      : `https://source.unsplash.com/1200x675/?${project.thumbnail}`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-video rounded-lg overflow-hidden bg-muted"
                    >
                      <ImageWithFallback
                        src={image.startsWith('http') || image.startsWith('/') 
                          ? image 
                          : `https://source.unsplash.com/600x400/?${image}`}
                        alt={`${project.title} - Imagem ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4">Sobre o Projeto</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="mb-4 flex items-center gap-2">
                        <Wrench className="h-5 w-5" />
                        Tecnologias Utilizadas
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <Badge key={index} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Results */}
              {project.results && project.results.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="mb-4 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Resultados Alcançados
                      </h3>
                      <ul className="space-y-3">
                        {project.results.map((result, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4">Detalhes do Projeto</h3>
                    <div className="space-y-4">
                      {project.details.map((detail, index) => (
                        <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                          <div className="text-sm text-muted-foreground mb-1">
                            {detail.label}
                          </div>
                          <div>{detail.value}</div>
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
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="bg-gradient-to-br from-[#10CFA3] via-[#04BFFD] to-[#04BFFD] text-white">
                  <CardContent className="p-6">
                    <h4 className="mb-3">Gostou do Projeto?</h4>
                    <p className="text-sm text-white/90 mb-4">
                      Podemos criar algo incrível para você também!
                    </p>
                    <Button
                      className="w-full bg-white text-primary hover:bg-white/90"
                      size="lg"
                      onClick={() => onNavigate("quote", { slug: project.slug })}
                    >
                      Solicitar Orçamento
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center">Projetos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioItems
              .filter((item) => item.category === project.category && item.slug !== project.slug)
              .slice(0, 3)
              .map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300"
                    onClick={() => onNavigate("portfolio-detail", { slug: relatedProject.slug })}
                  >
                    <div className="aspect-video bg-muted overflow-hidden">
                      <ImageWithFallback
                        src={`https://source.unsplash.com/600x400/?${relatedProject.thumbnail}`}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-4">
                      <Badge className="mb-2" variant="secondary">
                        {relatedProject.categoryLabel}
                      </Badge>
                      <h4 className="mb-2">{relatedProject.title}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedProject.description}
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