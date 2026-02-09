import { useState } from "react";
import { motion } from "motion/react";
import { SectionTitle } from "../common/SectionTitle";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { toast } from "sonner";
import { FileCheck, Printer, Monitor, Globe } from "lucide-react";
import { enviarParaSheets } from "../../services/googleSheets";

export function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceCategory: "",
    serviceType: "",
    description: "",
    urgency: "",
    budget: "",
    acceptTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceCategories = {
    graphic: {
      label: "Serviços Gráficos",
      icon: Printer,
      services: [
        "Cartões de Visita",
        "Panfletos e Flyers",
        "Etiquetas e Adesivos",
        "Plotagem",
        "Impressão de Apostilas",
        "Encadernação",
        "Mini-Banners e Quadros",
        "Outro",
      ],
    },
    it: {
      label: "Serviços de Informática",
      icon: Monitor,
      services: [
        "Formatação",
        "Limpeza e Otimização",
        "Troca de Peças",
        "Upgrade de Hardware",
        "Instalação de Sistemas",
        "Configuração de Impressoras",
        "Manutenção Preventiva",
        "Instalação Office/Adobe",
        "Outro",
      ],
    },
    digital: {
      label: "Serviços Digitais",
      icon: Globe,
      services: [
        "Mini-Site",
        "Landing Page",
        "Cartão Digital com QR Code",
        "Logotipo",
        "Social Media",
        "Gestão de Nuvem",
        "Templates Digitais",
        "Artes Básicas",
        "Outro",
      ],
    },
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await enviarParaSheets("orcamento", {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      serviceCategory: formData.serviceCategory,
      serviceType: formData.serviceType,
      description: formData.description,
      urgency: formData.urgency,
      budget: formData.budget
    });

    alert("Orçamento enviado com sucesso!");
    setFormData(initialState);
  } catch (error) {
    alert("Erro ao enviar orçamento.");
  } finally {
    setIsSubmitting(false);
  }
};



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getCurrentServices = () => {
    if (!formData.serviceCategory) return [];
    return serviceCategories[formData.serviceCategory as keyof typeof serviceCategories]?.services || [];
  };

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
            <h1 className="mb-6">Solicitar Orçamento</h1>
            <p className="text-lg text-white/90">
              Preencha o formulário abaixo e receba uma proposta personalizada sem compromisso
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Orçamento Grátis", description: "Sem compromisso ou taxas" },
              { title: "Resposta Rápida", description: "Em até 24 horas úteis" },
              { title: "Proposta Detalhada", description: "Com todas as especificações" },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="mb-3 flex justify-center">
                      <FileCheck className="h-10 w-10" style={{ color: "#04BFFD" }} />
                    </div>
                    <h4 className="mb-2">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Info */}
                    <div>
                      <h3 className="mb-4">Informações Pessoais</h3>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Nome Completo *</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              placeholder="Seu nome"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">E-mail *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="seu@email.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              placeholder="(11) 99999-9999"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company">Empresa (opcional)</Label>
                            <Input
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Nome da empresa"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <h3 className="mb-4">Serviço Desejado</h3>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="serviceCategory">Categoria do Serviço *</Label>
                          <Select
                            value={formData.serviceCategory}
                            onValueChange={(value) => {
                              setFormData({ ...formData, serviceCategory: value, serviceType: "" });
                            }}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione uma categoria" />
                            </SelectTrigger>
                            <SelectContent>
                              {Object.entries(serviceCategories).map(([key, category]) => (
                                <SelectItem key={key} value={key}>
                                  {category.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        {formData.serviceCategory && (
                          <div className="space-y-2">
                            <Label htmlFor="serviceType">Tipo de Serviço *</Label>
                            <Select
                              value={formData.serviceType}
                              onValueChange={(value) =>
                                setFormData({ ...formData, serviceType: value })
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione o serviço" />
                              </SelectTrigger>
                              <SelectContent>
                                {getCurrentServices().map((service) => (
                                  <SelectItem key={service} value={service}>
                                    {service}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        )}

                        <div className="space-y-2">
                          <Label htmlFor="description">Descrição do Projeto *</Label>
                          <Textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            placeholder="Descreva com detalhes o que você precisa..."
                            rows={5}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div>
                      <h3 className="mb-4">Informações Adicionais</h3>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="urgency">Urgência *</Label>
                            <Select
                              value={formData.urgency}
                              onValueChange={(value) =>
                                setFormData({ ...formData, urgency: value })
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="normal">Normal (7-15 dias)</SelectItem>
                                <SelectItem value="urgent">Urgente (3-7 dias)</SelectItem>
                                <SelectItem value="express">Expresso (1-3 dias)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="budget">Orçamento Estimado</Label>
                            <Select
                              value={formData.budget}
                              onValueChange={(value) =>
                                setFormData({ ...formData, budget: value })
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione (opcional)" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="100-300">R$ 100 - R$ 300</SelectItem>
                                <SelectItem value="300-500">R$ 300 - R$ 500</SelectItem>
                                <SelectItem value="500-1000">R$ 500 - R$ 1.000</SelectItem>
                                <SelectItem value="1000+">Acima de R$ 1.000</SelectItem>
                                <SelectItem value="negotiate">A negociar</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-2">
                      <Checkbox
                        id="terms"
                        checked={formData.acceptTerms}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, acceptTerms: checked as boolean })
                        }
                      />
                      <Label htmlFor="terms" className="cursor-pointer text-sm">
                        Concordo em receber o orçamento e comunicações da SoftWave Solutions *
                      </Label>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#04BFFD] to-[#10CFA3]"
                    >
                      {isSubmitting ? "Enviando..." : "Solicitar Orçamento Grátis"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTitle title="Perguntas Frequentes" />
            <div className="space-y-4">
              {[
                {
                  q: "Quanto tempo leva para receber o orçamento?",
                  a: "Normalmente respondemos em até 24 horas úteis com um orçamento detalhado.",
                },
                {
                  q: "O orçamento é realmente gratuito?",
                  a: "Sim! Não cobramos nada pela elaboração do orçamento e você não tem compromisso.",
                },
                {
                  q: "Posso fazer alterações depois de aprovar?",
                  a: "Sim, oferecemos revisões conforme especificado em cada tipo de serviço.",
                },
                {
                  q: "Quais são as formas de pagamento?",
                  a: "Aceitamos PIX, cartão de crédito/débito, transferência e dinheiro.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="mb-2">{faq.q}</h4>
                      <p className="text-sm text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
