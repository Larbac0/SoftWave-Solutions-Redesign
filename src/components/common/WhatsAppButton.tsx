import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { company } from "../../config/company";
import { getWhatsAppUrl } from "../../lib/utils";

/**
 * BOTÃO FLUTUANTE DO WHATSAPP
 * 
 * Configurações em /config/company.ts
 * - Número do WhatsApp
 * - Mensagem padrão
 */
export function WhatsAppButton() {
  const handleClick = () => {
    const url = getWhatsAppUrl(company.contact.whatsapp, company.contact.whatsappMessage);
    window.open(url, "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </motion.button>
  );
}