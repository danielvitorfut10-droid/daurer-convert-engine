import { whatsappUrl } from "@/lib/site";
import { ShinyButton } from "@/components/ui/shiny-button";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export const Hero = () => {
  const handleCtaClick = () => {
    window.open(whatsappUrl(), "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#000005]">
      <div className="absolute inset-0 z-0">
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-[#000005]"
          colors={[
            [0, 180, 255],
            [0, 255, 200],
          ]}
          dotSize={4}
        />

        {/* Overlay pra dar contraste e profundidade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,5,0.9)_100%)]" />

        {/* Glow sutil azul */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,150,255,0.15),transparent_60%)]" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[1.05] mb-8 animate-fade-in-up text-white">
            Um site bonito chama atenção.
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl mt-4 block text-white/90 leading-[1.1] tracking-tight">
              Um site estratégico gera vendas.
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
              <ShinyButton onClick={handleCtaClick}>
                Quero vender mais
              </ShinyButton>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs text-muted-foreground animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-primary" />
              <span>Alta Performance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-primary" />
              <span>Design Premium</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-primary" />
              <span>Foco em Conversão</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
