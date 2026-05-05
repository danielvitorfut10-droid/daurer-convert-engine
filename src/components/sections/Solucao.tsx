import { Target, Palette, Rocket } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const pilares = [
  { icon: Target, title: "Estratégia primeiro", desc: "Cada decisão de layout e copy nasce do objetivo do seu negócio." },
  { icon: Palette, title: "Design premium", desc: "Visual moderno e tipografia forte que comunicam autoridade na primeira impressão." },
  { icon: Rocket, title: "Conversão real", desc: "Estrutura inteligente que guia o visitante até a ação que importa." },
];

export const Solucao = () => {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-surface/30 border-y border-border">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className={`text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 ${visible ? "animate-fade-in" : "opacity-0"}`}>
            A solução
          </p>
          <h2 className={`font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6 ${visible ? "animate-reveal-fall" : "opacity-0"}`}>
            Não é só um site.
            <br />
            É uma <span className="text-gradient">ferramenta de venda</span>.
          </h2>
          <p className={`text-lg text-muted-foreground leading-relaxed ${visible ? "animate-reveal-right" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
            A Daurer Tech combina design moderno, estrutura estratégica e copy persuasivo
            para transformar a sua presença digital em uma máquina ativa de geração de clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pilares.map((p, i) => (
            <div
              key={p.title}
              className={`relative rounded-2xl border border-border bg-card p-8 overflow-hidden group hover:border-primary/40 transition-all duration-500 ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 120}ms` }}
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-brand grid place-items-center text-primary-foreground mb-6 shadow-[0_8px_24px_-6px_hsl(var(--primary)/0.5)]">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
