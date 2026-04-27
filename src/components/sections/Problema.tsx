import { TrendingDown, Users, ShieldAlert, Clock } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const dores = [
  { icon: Users, title: "Poucos clientes chegando", desc: "Seu site existe, mas não trabalha. Visitantes entram, olham e somem sem deixar contato." },
  { icon: TrendingDown, title: "Baixa conversão", desc: "Sem estrutura estratégica e copy direto, cada visita vira oportunidade perdida." },
  { icon: ShieldAlert, title: "Falta de credibilidade", desc: "Site ultrapassado passa a impressão errada e afasta clientes que procuram profissionalismo." },
  { icon: Clock, title: "Tempo e dinheiro desperdiçados", desc: "Soluções genéricas não foram pensadas para o seu negócio — e o crescimento trava." },
];

export const Problema = () => {
  const { ref, visible } = useReveal();
  return (
    <section id="sobre" ref={ref} className="relative py-24 md:py-32">
      <div className="container">
        <div className={`max-w-2xl mb-16 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">O problema</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Você está perdendo clientes <span className="text-gradient">todos os dias</span> — e nem percebe.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {dores.map((d, i) => (
            <div
              key={d.title}
              className={`group relative rounded-2xl border border-border bg-surface/40 p-6 hover:border-primary/40 hover:bg-surface transition-all duration-500 ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="h-11 w-11 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                <d.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
