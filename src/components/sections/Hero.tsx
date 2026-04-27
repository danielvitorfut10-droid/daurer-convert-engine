import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/site";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-hero"
    >
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-glow/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-surface/50 backdrop-blur px-4 py-1.5 text-xs font-medium text-primary mb-8 animate-fade-in">
            <Sparkles className="h-3.5 w-3.5" />
            Sites estratégicos focados em conversão
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] leading-[0.95] mb-8 animate-fade-in-up">
            Sites que{" "}
            <span className="text-gradient">transformam</span>
            <br />
            visitantes em clientes.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: "120ms" }}>
            A Daurer Tech cria sites e landing pages com design moderno, copy estratégico e estrutura inteligente — pensados para gerar resultado real.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "240ms" }}>
            <Button asChild variant="hero" size="xl">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle />
                Falar com especialista
              </a>
            </Button>
            <Button asChild variant="glow" size="xl">
              <a href="#projetos">
                Ver projetos
                <ArrowRight />
              </a>
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs text-muted-foreground animate-fade-in" style={{ animationDelay: "400ms" }}>
            {["Design premium", "100% responsivo", "Copy estratégico", "Integração WhatsApp"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
