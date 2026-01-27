import { useState, useEffect } from "react";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Services } from "./components/pages/Services";
import { Portfolio } from "./components/pages/Portfolio";
import { PortfolioDetail } from "./components/pages/PortfolioDetail";
import { Blog } from "./components/pages/Blog";
import { BlogPost } from "./components/pages/BlogPost";
import { Contact } from "./components/pages/Contact";
import { Quote } from "./components/pages/Quote";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { WhatsAppButton } from "./components/common/WhatsAppButton";
import { Toaster } from "./components/ui/sonner";

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

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [pageParams, setPageParams] = useState<{ slug?: string; section?: string }>({});

  const navigate = (page: Page, params?: { slug?: string; section?: string }) => {
    setCurrentPage(page);
    setPageParams(params || {});
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Handle hash navigation for services
    if (page === "services" && params?.section) {
      setTimeout(() => {
        const element = document.getElementById(params.section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={navigate} />;
      case "about":
        return <About />;
      case "services":
        return <Services onNavigate={navigate} initialSection={pageParams.section} />;
      case "portfolio":
        return <Portfolio onNavigate={navigate} />;
      case "portfolio-detail":
        return <PortfolioDetail slug={pageParams.slug || ""} onNavigate={navigate} />;
      case "blog":
        return <Blog onNavigate={navigate} />;
      case "blog-post":
        return <BlogPost slug={pageParams.slug || ""} onNavigate={navigate} />;
      case "contact":
        return <Contact />;
      case "quote":
        return <Quote />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        currentPage={currentPage}
        onNavigate={navigate}
      />
      <main>{renderPage()}</main>
      <Footer onNavigate={navigate} />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
}