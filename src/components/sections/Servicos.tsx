import { Globe, Zap, LayoutTemplate, Search, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const servicos = [
  {
    icon: Globe,
    title: "Criação de sites",
    desc: "Sites institucionais e personalizados que comunicam autoridade e geram oportunidade desde a primeira visita.",
  },
  {
    icon: Zap,
    title: "Landing pages",
    desc: "Páginas focadas em uma única ação — perfeitas para campanhas, lançamentos e captação de leads qualificados.",
  },
  {
    icon: LayoutTemplate,
    title: "Design estratégico",
    desc: "Estrutura visual que guia o olhar, organiza a mensagem e conduz o visitante naturalmente até a conversão.",
  },
  {
    icon: Search,
    title: "Otimização e SEO",
    desc: "Performance, responsividade e SEO básico para o seu site carregar rápido e ser encontrado pelos clientes certos.",
  },
];

export const Servicos = () => {
  const { ref, visible } = useReveal();
  return (
    <section id="servicos" ref={ref} className="relative py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className={visible ? "animate-fade-in-up" : "opacity-0"}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Serviços</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-2xl">
              O que entregamos para o seu negócio crescer.
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {servicos.map((s, i) => (
            <div
              key={s.title}
              className={`group relative rounded-2xl border border-border bg-surface/40 p-8 overflow-hidden hover:border-primary/50 hover:bg-surface transition-all duration-500 hover:-translate-y-1 ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_24px_hsl(var(--primary)/0.5)] transition-all duration-500">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
