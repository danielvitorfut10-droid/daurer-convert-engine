import { whatsappUrl } from "@/lib/site";
import { ShinyButton } from "@/components/ui/shiny-button";
import AuroraBackgroundHero from "@/components/ui/aurora-section-hero";

export const Hero = () => {
  const handleCtaClick = () => {
    window.open(whatsappUrl(), "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-32 bg-[#0A1121] overflow-hidden">
      {/* FUNDO AURORA ANIMADO REACT (z-index 0) */}
      <div className="absolute inset-0 z-0">
        <AuroraBackgroundHero />
      </div>

      {/* OVERLAY ESCURO pra dar contraste — fade forte no bottom para não vazar */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 20%, #000005 85%), linear-gradient(to bottom, transparent 55%, #000005 92%)",
        }}
      />

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[1.05] mb-8 animate-fade-in-up text-white">
            Sites <span className="text-glow-animated">bonitos</span> chamam atenção.
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl mt-4 block text-white/90 leading-[1.1] tracking-tight">
              Sites <span className="text-glow-animated">estratégicos</span> vendem.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: "120ms" }}>
            A Daurer Tech cria sites e landing pages com design moderno, copy estratégico e estrutura inteligente — pensados para gerar resultado real.
          </p>

          <div className="relative inline-flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "240ms" }}>
            <img 
              src="/arrow-neon.png" 
              alt="" 
              className="absolute hidden lg:block -left-48 -top-32 w-48 h-auto animate-float-arrow pointer-events-none z-10" 
            />
            
            <div className="relative z-10">
              <ShinyButton onClick={handleCtaClick} className="px-10 py-5 text-xl font-bold uppercase tracking-wide">
                Quero vender mais
              </ShinyButton>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};
