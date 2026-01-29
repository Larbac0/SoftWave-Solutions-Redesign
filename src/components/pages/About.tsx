import { motion } from "motion/react";
import { SectionTitle } from "../common/SectionTitle";
import { Card, CardContent } from "../ui/card";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Foco no Cliente",
      description:
        "Priorizamos as necessidades e objetivos de cada cliente em todos os projetos.",
    },
    {
      icon: Award,
      title: "Excelência",
      description:
        "Buscamos sempre a qualidade máxima em cada serviço que entregamos.",
    },
    {
      icon: Heart,
      title: "Comprometimento",
      description:
        "Dedicação total para garantir a satisfação e sucesso dos nossos clientes.",
    },
    {
      icon: TrendingUp,
      title: "Inovação",
      description:
        "Acompanhamos as tendências e tecnologias mais atuais do mercado.",
    },
  ];

  const timeline = [
    {
      year: "2018",
      title: "Fundação",
      description:
        "Início das atividades focadas em serviços gráficos",
    },
    {
      year: "2020",
      title: "Expansão",
      description:
        "Inclusão de serviços de informática e suporte técnico",
    },
    {
      year: "2022",
      title: "Digitalização",
      description:
        "Lançamento dos serviços digitais e presença online",
    },
    {
      year: "2024",
      title: "Consolidação",
      description:
        "Referência em soluções integradas de tecnologia",
    },
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
            <h1 className="mb-6">Sobre a SoftWave Solutions</h1>
            <p className="text-lg text-white/90">
              Transformando ideias em realidade através de
              tecnologia, design e inovação
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4">Nossa História</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A SoftWave Solutions nasceu da visão de
                  oferecer soluções integradas que combinam o
                  melhor dos mundos gráfico, tecnológico e
                  digital. Fundada em 2024, começamos focados em
                  serviços de suporte técnico e manutenção de
                  computadores, garantindo alta qualidade.
                </p>
                <p>
                  Com o passar dos anos, percebemos que nossos
                  clientes precisavam de mais do que apenas
                  suporte técnico. Eles buscavam parceiros que
                  pudessem ajudá-los em todas as frentes: desde
                  a impressão de cartões de visita até a
                  criação de sua presença digital.
                </p>
                <p>
                  Hoje, somos uma empresa completa que oferece
                  desde cartões de visita até sites
                  profissionais, passando por manutenção de
                  computadores e consultoria em TI. Nosso
                  compromisso é ser o parceiro único que nossos
                  clientes precisam para crescer.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Equipe trabalhando"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Missão, Visão e Valores" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#04BFFD] to-[#10CFA3]">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3">Missão</h3>
                  <p className="text-muted-foreground">
                    Fornecer soluções integradas de tecnologia,
                    gráfica e digital que impulsionem o sucesso
                    dos nossos clientes, com qualidade,
                    agilidade e atendimento excepcional.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#04BFFD] to-[#10CFA3]">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3">Visão</h3>
                  <p className="text-muted-foreground">
                    Ser a empresa referência em soluções
                    integradas, reconhecida pela inovação,
                    qualidade e compromisso com o sucesso dos
                    nossos clientes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#04BFFD] to-[#10CFA3]">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3">Valores</h3>
                  <p className="text-muted-foreground">
                    Integridade, excelência, inovação,
                    comprometimento e foco no cliente são os
                    pilares que guiam todas as nossas ações e
                    decisões.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="text-center"
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0066CC]/10">
                    <value.icon className="h-7 w-7" style={{ color: '#04BFFD' }} />
                  </div>
                </div>
                <h4 className="mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nossa Trajetória"
            subtitle="Crescimento contínuo e evolução constante"
          />
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -30 : 30,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="flex gap-6 mb-12 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#04BFFD] to-[#10CFA3] text-white shrink-0">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-[#04BFFD] to-transparent mt-2"></div>
                  )}
                </div>
                <div className="pb-12">
                  <h3 className="mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team (Placeholder) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nossa Equipe"
            subtitle="Profissionais dedicados e qualificados"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-[#04BFFD] to-[#10CFA3] flex items-center justify-center">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <h4 className="mb-1">
                      Nome do Colaborador
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Cargo / Função
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