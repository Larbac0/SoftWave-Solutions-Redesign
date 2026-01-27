import softwaveLogo from "../../assets/3d1d6cf2eba2272ea17b36a0d20ee04d1cdf5d7b.png";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface LogoProps {
  className?: string;
  textClassName?: string;
  showText?: boolean;
}

export function Logo({ className = "h-8", textClassName = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <ImageWithFallback
        src={softwaveLogo}
        alt="SoftWave Solutions"
        className="h-full w-auto"
      />
      
      {showText && (
        <span className={`font-bold ${textClassName}`}>
          <span className="text-primary">Soft</span>
          <span className="text-secondary">Wave</span>
        </span>
      )}
    </div>
  );
}
