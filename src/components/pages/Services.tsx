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
  Network,
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
    {
      icon: Wrench,
      title: "Implantação e manutenção de servidores",
      description: "Configuração e manutenção de servidores para ambientes corporativos.",
      features: ["Configuração de servidor", "Manutenção preventiva", "Suporte técnico", "Backup e segurança"],
    }
  ];

  const digitalServices = [
    {
      icon: Globe,
      title: "Sites",
      description: "Sites institucionais modernos e responsivos.",
      features: ["Design responsivo", "SEO otimizado", "Formulário de contato", "Domínio e hospedagem"],
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
      title: "Logotipo",
      description: "Criação de identidade visual para sua marca.",
      features: ["3 opções de design", "Arquivos vetoriais", "Versões colorida e PB", "Revisões incluídas"],
    },
    {
      icon: Share2,
      title: "Social Media",
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
      title: "Artes Gráficas",
      description: "Criação de artes para diversos fins.",
      features: ["Posts", "Stories", "Banners web", "Miniaturas"],
    },
    {
      icon: Shield,
      title: "Segurança Digital",
      description: "Proteção e segurança de seus dados e equipamentos.",
      features: ["Antivirus", "Firewall", "Backup de segurança", "Atualizações regulares"],
    },
    {
      icon: Network,
      title: "Monitoramento de Redes",
      description: "Análise e monitoramento de redes para garantir performance.",
      features: ["Análise de tráfego", "Detecção de intrusos", "Relatórios detalhados", "Suporte técnico"],
    }
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
              initialSection === "informatica" ? "it" : 
              initialSection === "digitais" ? "digital" : 
              "graphic"
            } 
            className="w-full"
          >
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-12">
              {/*<TabsTrigger value="graphic">Gráficos</TabsTrigger>*/}
              <TabsTrigger value="it">Informática</TabsTrigger>
              <TabsTrigger value="digital">Digitais</TabsTrigger>
            </TabsList>

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
