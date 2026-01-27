import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  onLearnMore?: () => void;
  delay?: number;
  section?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  onLearnMore,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
    >
      <Card className="h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-[0_4px_20px_rgba(16,207,163,0.2)]">
        <CardContent className="p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#10CFA3] to-[#04BFFD]">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          {features && features.length > 0 && (
            <ul className="space-y-2 mb-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
          {onLearnMore && (
            <Button variant="outline" onClick={onLearnMore} className="w-full mt-4">
              Saiba Mais
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
