import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "../ui/button";
import { Logo } from "../common/Logo";
import { company } from "../../config/company";
import type { Page } from "../../types";

interface FooterProps {
  onNavigate: (page: Page) => void;
}

/**
 * RODAPÉ DO SITE
 * 
 * Informações de contato configuradas em /config/company.ts
 */
export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <div className="mb-4">
              <Logo className="h-10" textClassName="text-lg" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {company.description}
            </p>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="h-9 w-9"
                onClick={() => window.open(company.social.facebook, '_blank')}
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-9 w-9"
                onClick={() => window.open(company.social.instagram, '_blank')}
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-9 w-9"
                onClick={() => window.open(company.social.linkedin, '_blank')}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("portfolio")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Portfólio
                </button>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="mb-4">Nossos Serviços</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Serviços Gráficos</li>
              <li>Serviços de Informática</li>
              <li>Serviços Digitais</li>
              <li>Consultoria em TI</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{company.contact.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{company.contact.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  {company.address.city} - {company.address.state}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {company.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}