import { Star } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const depoimentos = [
  {
    name: "Carolina Mendes",
    role: "Sócia, Estúdio Linha Fina",
    quote: "Em duas semanas após o lançamento, dobramos o número de orçamentos pelo WhatsApp. Foi outro patamar.",
  },
  {
    name: "Rafael Lima",
    role: "CEO, Lima Consultoria",
    quote: "O site que tínhamos parecia amador. A Daurer Tech entregou algo que finalmente representa o nível do nosso serviço.",
  },
  {
    name: "Juliana Castro",
    role: "Fundadora, Clínica Vivere",
    quote: "Não é só design — é estratégia. Eles pensaram em cada detalhe pensando na nossa paciente. Resultado fala por si.",
  },
];

export const Depoimentos = () => {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-surface/30 border-y border-border">
      <div className="container">
        <div className={`max-w-2xl mx-auto text-center mb-16 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Prova social</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Quem confiou, <span className="text-gradient">cresceu.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {depoimentos.map((d, i) => (
            <figure
              key={d.name}
              className={`rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-all duration-500 ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="flex gap-0.5 mb-5 text-primary">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed mb-6">
                "{d.quote}"
              </blockquote>
              <figcaption>
                <p className="font-semibold">{d.name}</p>
                <p className="text-sm text-muted-foreground">{d.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
