import { useReveal } from "@/hooks/use-reveal";
import { FeatureCarousel } from "@/components/ui/feature-carousel";

export const Diferencial = () => {
  const { ref, visible } = useReveal();
  return (
    <section id="diferencial" ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={visible ? "animate-fade-in-up" : "opacity-0"}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-4">Por que Daurer Tech</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-6 text-white">
              A diferença está em <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">como pensamos</span> o seu site.
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
              A maioria das agências entrega bonito. Nós entregamos resultado.
              Cada projeto é construído para resolver um problema real do seu negócio.
            </p>
          </div>

          <div className={`${visible ? "animate-fade-in delay-300" : "opacity-0"}`}>
            <FeatureCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};
