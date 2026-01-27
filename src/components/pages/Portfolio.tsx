import { useState } from "react";
import { motion } from "motion/react";
import { SectionTitle } from "../common/SectionTitle";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ExternalLink, Image as ImageIcon } from "lucide-react";
import { portfolioItems } from "../../data/portfolio";

interface PortfolioProps {
  onNavigate: (page: "portfolio-detail", params?: { slug: string }) => void;
}

export function Portfolio({ onNavigate }: PortfolioProps) {
  const [filter, setFilter] = useState<"all" | "grafico" | "informatica" | "digital">("all");

  const filteredProjects = filter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(p => p.category === filter);

  const categories = [
    { id: "all", label: "Todos" },
    { id: "grafico", label: "Gráficos" },
    { id: "informatica", label: "Informática" },
    { id: "digital", label: "Digitais" },
  ];

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
            <h1 className="mb-6">Portfólio</h1>
            <p className="text-lg text-white/90">
              Conheça alguns dos projetos que realizamos com excelência
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id as typeof filter)}
                className={filter === category.id ? "bg-gradient-to-r from-[#04BFFD] to-[#10CFA3]" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card 
                  className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => onNavigate("portfolio-detail", { slug: project.slug })}
                >
                  <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                    <ImageWithFallback
                      src={`https://source.unsplash.com/600x400/?${project.thumbnail}`}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="mb-2">{project.title}</h3>
                        <p className="text-sm text-white/90">{project.description}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="h-10 w-10 rounded-full bg-white/90 flex items-center justify-center">
                        <ExternalLink className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:hidden">
                    <h4 className="mb-1">{project.title}</h4>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <ImageIcon className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Nenhum projeto encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "500+", label: "Projetos Gráficos" },
              { value: "300+", label: "Computadores Atendidos" },
              { value: "200+", label: "Sites Criados" },
              { value: "98%", label: "Clientes Satisfeitos" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl mb-2" style={{ color: "#04BFFD" }}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#10CFA3] via-[#04BFFD] to-[#10CFA3] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Quer Ver Seu Projeto Aqui?</h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Entre em contato e vamos transformar suas ideias em realidade
            </p>
            <Button
              size="lg"
              className="bg-white text-[#10CFA3] hover:bg-white/90"
            >
              Solicitar Orçamento
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
