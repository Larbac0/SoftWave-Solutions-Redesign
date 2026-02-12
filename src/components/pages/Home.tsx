import { motion } from "motion/react";
import { Button } from "../ui/button";
import { SectionTitle } from "../common/SectionTitle";
import { ServiceCard } from "../common/ServiceCard";
import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";

// Importações dos arquivos de configuração e dados
import { gradients } from "../../config/theme";
import { mainServices } from "../../config/services";
import { 
  homeStats, 
  whyChooseUs, 
  testimonials, 
  homeContent 
} from "../../data/content";
import type { Page, NavigationParams } from "../../types";

interface HomeProps {
  onNavigate: (
    page: Page,
    params?: NavigationParams,
  ) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${gradients.primary} text-white py-20 sm:py-32`}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNC40MTggMy41ODItOCA4LThzOCAzLjU4MiA4IDgtMy41ODIgOC04IDgtOC0zLjU4Mi04LTh6TTQgNTJjMC00LjQxOCAzLjU4Mi04IDgtOHM4IDMuNTgyIDggOC0zLjU4MiA4LTggOC04LTMuNTgyLTgtOHptMzItMzZjLTQuNDE4IDAtOCAzLjU4Mi04IDhzMy41ODIgOCA4IDggOC0zLjU4MiA4LTgtMy41ODItOC04LTh6TTE2IDRjLTQuNDE4IDAtOCAzLjU4Mi04IDhzMy41ODIgOCA4IDggOC0zLjU4MiA4LTgtMy41ODItOC04LTh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6">
              {homeContent.hero.title}
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              {homeContent.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => onNavigate("quote", {})}
                className="bg-white text-[#10CFA3] hover:bg-white/90 hover:border-white/80"
              >
                {homeContent.hero.primaryCta}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("services", {})}
                className="bg-white text-[#10CFA3] hover:bg-white/90 hover:border-white/80"
              >
                {homeContent.hero.secondaryCta}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 -15 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="currentColor"
              className="text-background"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section 
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {homeStats.map((stat, index) => (
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
                <div className="text-3xl md:text-4xl text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> 
        */}

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={homeContent.services.title}
            subtitle={homeContent.services.subtitle}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                delay={index * 0.1}
                onLearnMore={() =>
                  onNavigate("services", {
                    section: service.section,
                  })
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={homeContent.whyChoose.title}
            subtitle={homeContent.whyChoose.subtitle}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
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
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#10CFA3] to-[#04BFFD]">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={homeContent.testimonials.title}
            subtitle={homeContent.testimonials.subtitle}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
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
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-[#FFD700] text-[#FFD700]"
                          />
                        ),
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <div className="font-medium">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-br ${gradients.primary} text-white`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">{homeContent.cta.title}</h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              {homeContent.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => onNavigate("quote", {})}
                className="bg-white text-[#10CFA3] hover:bg-white/90 shadow-lg"
              >
                {homeContent.cta.primaryCta}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("contact", {})}
                className="bg-white text-[#10CFA3] hover:bg-white/90 shadow-lg"
              >
                {homeContent.cta.secondaryCta}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}