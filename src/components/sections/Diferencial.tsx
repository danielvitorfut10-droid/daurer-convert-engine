import { Brain, LineChart, PenTool, Gauge } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const itens = [
  { icon: Brain, title: "Estratégia antes do design", desc: "Entendemos o seu negócio antes de desenhar uma única tela." },
  { icon: LineChart, title: "Foco em conversão", desc: "Cada seção tem propósito: levar o visitante para a próxima ação." },
  { icon: PenTool, title: "Copy persuasivo", desc: "Texto direto que comunica valor e elimina objeções de venda." },
  { icon: Gauge, title: "Performance real", desc: "Carregamento rápido, responsividade total e integração com WhatsApp." },
];

export const Diferencial = () => {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={visible ? "animate-fade-in-up" : "opacity-0"}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Por que Daurer Tech</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-6">
              A diferença está em <span className="text-gradient">como pensamos</span> o seu site.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A maioria das agências entrega bonito. Nós entregamos resultado.
              Cada projeto é construído para resolver um problema real do seu negócio.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {itens.map((d, i) => (
              <div
                key={d.title}
                className={`rounded-2xl border border-border bg-surface/60 backdrop-blur p-6 hover:border-primary/40 transition-all duration-500 ${
                  visible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <d.icon className="h-7 w-7 text-primary mb-4" />
                <h3 className="font-display font-semibold mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
