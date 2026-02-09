import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "../common/Logo";

type Page = "home" | "about" | "services" | "portfolio" | "blog" | "contact" | "quote";

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home" as Page, label: "Início" },
    { id: "about" as Page, label: "Sobre" },
    { id: "services" as Page, label: "Serviços" },
    { id: "portfolio" as Page, label: "Portfólio" },
//    { id: "blog" as Page, label: "Blog" },
    { id: "contact" as Page, label: "Contato" },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavigate("home")}
            className="transition-opacity hover:opacity-80"
          >
            <Logo className="h-10" textClassName="text-lg" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "secondary" : "ghost"}
                onClick={() => handleNavigate(item.id)}
              >
                {item.label}
              </Button>
            ))}
            <Button
              onClick={() => handleNavigate("quote")}
              className="ml-4 bg-gradient-to-r from-[#04BFFD] to-[#10CFA3] hover:opacity-90"
            >
              Orçamento
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-background"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? "secondary" : "ghost"}
                  onClick={() => handleNavigate(item.id)}
                  className="justify-start"
                >
                  {item.label}
                </Button>
              ))}
              <Button
                onClick={() => handleNavigate("quote")}
                className="bg-gradient-to-r from-[#0066CC] to-[#0047AB] hover:opacity-90"
              >
                Orçamento
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
