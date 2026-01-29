import { useState } from "react";
import { motion } from "motion/react";
import { SectionTitle } from "../common/SectionTitle";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { submitToGoogleSheets } from '../../lib/googleSheets';

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const result = await submitToGoogleSheets({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    });

    if (result.success) {
      toast.success("Mensagem enviada com sucesso!", {
        description: "Entraremos em contato em breve.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      throw new Error(result.error);
    }
  } catch (error) {
    toast.error("Erro ao enviar mensagem", {
      description: "Por favor, tente novamente ou entre em contato pelo WhatsApp.",
    });
    console.error('Erro:', error);
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(21) 97001-6069",
      action: "tel:+5521970016069",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@softwavesl.com.br",
      action: "mailto:contato@softwavesl.com.br",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rio de Janeiro, RJ - Brasil",
      action: null,
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg-Sex: 9h às 18h",
      action: null,
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
            <h1 className="mb-6">Entre em Contato</h1>
            <p className="text-lg text-white/90">
              Estamos prontos para atender você. Envie sua mensagem ou utilize um dos canais abaixo
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#04BFFD] to-[#10CFA3]">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h4 className="mb-2">{info.title}</h4>
                    {info.action ? (
                      <a
                        href={info.action}
                        className="text-sm text-muted-foreground hover:text-[#0066CC] transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{info.content}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Envie Sua Mensagem"
              subtitle="Preencha o formulário abaixo e retornaremos em breve"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Seu nome completo"
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
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(21) 97001-6069"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Assunto *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Como podemos ajudar?"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Descreva sua necessidade ou dúvida..."
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#04BFFD] to-[#10CFA3]"
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar Mensagem <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 bg-background">
        <div className="w-full h-96 relative overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837.4722188262783!2d-43.40289461995164!3d-22.9154201373267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd8cd10768751%3A0x38ada028ea3843db!2sCondom%C3%ADnio%20Vale%20do%20Rio%20Grande!5e0!3m2!1spt-BR!2sbr!4v1769537351552!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização SoftWave Solutions"
            className="grayscale hover:grayscale-0 transition-all duration-300"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
