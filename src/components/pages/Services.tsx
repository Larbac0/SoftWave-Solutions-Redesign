import { motion } from "motion/react";
import { SectionTitle } from "../common/SectionTitle";
import { ServiceCard } from "../common/ServiceCard";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Printer,
  FileText,
  Tag,
  Image as ImageIcon,
  BookOpen,
  BookMarked,
  Frame,
  Monitor,
  HardDrive,
  Settings,
  TrendingUp,
  Package,
  Wrench,
  Shield,
  Download,
  Palette,
  Globe,
  Smartphone,
  QrCode,
  Sparkles,
  Share2,
  Cloud,
  FileCheck,
} from "lucide-react";

type Page =
  | "home"
  | "about"
  | "services"
  | "portfolio"
  | "portfolio-detail"
  | "blog"
  | "blog-post"
  | "contact"
  | "quote";

interface ServicesProps {
  onNavigate: (page: Page, params?: { slug?: string; section?: string }) => void;
  initialSection?: string;
}

export function Services({ onNavigate, initialSection }: ServicesProps) {
  const graphicServices = [
    {
      icon: FileText,
      title: "Cartões de Visita",
      description: "Cartões profissionais em diversos materiais e acabamentos.",
      features: ["Design personalizado", "Papel couché ou vergê", "Verniz ou laminação", "Entrega rápida"],
    },
    {
      icon: FileText,
      title: "Panfletos e Flyers",
      description: "Material promocional impresso com qualidade e cores vibrantes.",
      features: ["Diversos tamanhos", "4x0 ou 4x4 cores", "Papel couché 90g ou 115g", "Tiragem sob medida"],
    },
    {
      icon: Tag,
      title: "Etiquetas e Adesivos",
      description: "Etiquetas personalizadas para diversos fins comerciais.",
      features: ["Diversos formatos", "Adesivo resistente", "Acabamento opcional", "Quantidade flexível"],
    },
    {
      icon: ImageIcon,
      title: "Plotagem",
      description: "Impressão em grandes formatos para banners, lonas e fachadas.",
      features: ["Alta resolução", "Lona ou vinil", "Corte especial", "Instalação disponível"],
    },
    {
      icon: BookOpen,
      title: "Impressão de Apostilas",
      description: "Apostilas e materiais educacionais com ótimo custo-benefício.",
      features: ["PB ou colorido", "Diversos formatos", "Papel sulfite 75g", "Volume sob medida"],
    },
    {
      icon: BookMarked,
      title: "Encadernação",
      description: "Acabamento profissional para seus documentos e trabalhos.",
      features: ["Espiral ou térmica", "Capa dura ou flexível", "Diversos tamanhos", "Entrega imediata"],
    },
    {
      icon: Frame,
      title: "Mini-Banners e Quadros",
      description: "Impressões decorativas e promocionais para ambientes.",
      features: ["Diversos tamanhos", "Com ou sem moldura", "Papel fotográfico", "Qualidade superior"],
    },
  ];

  const itServices = [
    {
      icon: Monitor,
      title: "Formatação Completa",
      description: "Reinstalação do sistema operacional e otimização total.",
      features: ["Backup de dados", "Limpeza completa", "Drivers atualizados", "Antivírus instalado"],
    },
    {
      icon: Settings,
      title: "Limpeza e Otimização",
      description: "Manutenção preventiva para melhor desempenho.",
      features: ["Limpeza de vírus", "Remoção de programas", "Otimização de boot", "Atualização de sistema"],
    },
    {
      icon: HardDrive,
      title: "Troca de Peças",
      description: "Substituição de componentes com peças de qualidade.",
      features: ["HD/SSD", "Memória RAM", "Fonte de alimentação", "Coolers e ventilação"],
    },
    {
      icon: TrendingUp,
      title: "Consultoria de Upgrade",
      description: "Análise e recomendação de melhorias para seu equipamento.",
      features: ["Análise técnica", "Orçamento detalhado", "Melhor custo-benefício", "Instalação incluída"],
    },
    {
      icon: Download,
      title: "Instalação de Sistemas",
      description: "Instalação e configuração de sistemas operacionais.",
      features: ["Windows 10/11", "Linux", "Dual boot", "Configuração completa"],
    },
    {
      icon: Printer,
      title: "Configuração de Impressoras",
      description: "Instalação e configuração de impressoras e scanners.",
      features: ["Drivers atualizados", "Configuração de rede", "Teste de impressão", "Suporte técnico"],
    },
    {
      icon: Shield,
      title: "Manutenção Preventiva",
      description: "Serviço periódico para evitar problemas futuros.",
      features: ["Limpeza física", "Atualização de software", "Verificação de hardware", "Relatório técnico"],
    },
    {
      icon: Package,
      title: "Instalação Office/Adobe",
      description: "Instalação e ativação de pacotes de software profissional.",
      features: ["Microsoft Office", "Adobe Creative", "Configuração inicial", "Treinamento básico"],
    },
  ];

  const digitalServices = [
    {
      icon: Globe,
      title: "Mini-Sites",
      description: "Sites institucionais modernos e responsivos.",
      features: ["Design responsivo", "SEO básico", "Formulário de contato", "Domínio e hospedagem"],
    },
    {
      icon: Smartphone,
      title: "Landing Pages",
      description: "Páginas de conversão otimizadas para vendas e captação.",
      features: ["Design atrativo", "Call-to-action", "Integração WhatsApp", "Analytics incluído"],
    },
    {
      icon: QrCode,
      title: "Cartão Digital com QR",
      description: "Cartão de visita digital moderno e interativo.",
      features: ["QR Code personalizado", "Links para redes sociais", "Compartilhamento fácil", "Estatísticas de acesso"],
    },
    {
      icon: Sparkles,
      title: "Logotipo Simples",
      description: "Criação de identidade visual básica para sua marca.",
      features: ["3 opções de design", "Arquivos vetoriais", "Versões colorida e PB", "Revisões incluídas"],
    },
    {
      icon: Share2,
      title: "Social Media Básico",
      description: "Criação de posts e artes para redes sociais.",
      features: ["Posts personalizados", "Stories", "Identidade visual", "Formatos otimizados"],
    },
    {
      icon: Cloud,
      title: "Gestão de Nuvem",
      description: "Organização e configuração de armazenamento em nuvem.",
      features: ["Google Drive", "OneDrive", "Dropbox", "Backup automatizado"],
    },
    {
      icon: FileCheck,
      title: "Templates Digitais",
      description: "Modelos editáveis para diversos fins comerciais.",
      features: ["Cardápios digitais", "Catálogos", "Apresentações", "Formulários"],
    },
    {
      icon: Palette,
      title: "Artes Básicas",
      description: "Criação de artes simples para diversos fins.",
      features: ["Posts", "Stories", "Banners web", "Miniaturas"],
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
            <h1 className="mb-6">Nossos Serviços</h1>
            <p className="text-lg text-white/90">
              Soluções completas em gráfica, informática e digital para todas as necessidades do seu negócio
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs 
            defaultValue={
              initialSection === "graficos" ? "graphic" : 
              initialSection === "informatica" ? "it" : 
              initialSection === "digitais" ? "digital" : 
              "graphic"
            } 
            className="w-full"
          >
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="graphic">Gráficos</TabsTrigger>
              <TabsTrigger value="it">Informática</TabsTrigger>
              <TabsTrigger value="digital">Digitais</TabsTrigger>
            </TabsList>

            <TabsContent value="graphic" className="mt-0" id="graficos">
              <SectionTitle
                title="Serviços Gráficos"
                subtitle="Impressão profissional e acabamento de alta qualidade"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {graphicServices.map((service, index) => (
                  <ServiceCard key={index} {...service} delay={index * 0.05} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="it" className="mt-0" id="informatica">
              <SectionTitle
                title="Serviços de Informática"
                subtitle="Manutenção, upgrade e suporte técnico especializado"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {itServices.map((service, index) => (
                  <ServiceCard key={index} {...service} delay={index * 0.05} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="digital" className="mt-0" id="digitais">
              <SectionTitle
                title="Serviços Digitais"
                subtitle="Presença online moderna e soluções digitais criativas"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {digitalServices.map((service, index) => (
                  <ServiceCard key={index} {...service} delay={index * 0.05} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Como Funciona"
            subtitle="Processo simples e eficiente do pedido à entrega"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Contato", description: "Entre em contato via WhatsApp ou formulário" },
              { step: "2", title: "Orçamento", description: "Receba um orçamento detalhado sem compromisso" },
              { step: "3", title: "Aprovação", description: "Aprove o orçamento e especificações" },
              { step: "4", title: "Entrega", description: "Receba seu projeto no prazo combinado" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#04BFFD] to-[#10CFA3] text-white text-2xl">
                  {item.step}
                </div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
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
            <h2 className="mb-4">Pronto Para Começar Seu Projeto?</h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Solicite um orçamento gratuito e sem compromisso
            </p>
            <Button
              size="lg"
              onClick={() => onNavigate("quote")}
              className="bg-white text-[#10CFA3] hover:bg-white/90"
            >
              Solicitar Orçamento Grátis
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
