import { Monitor, MousePointer2, ShoppingCart, Database, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { GlowCard } from "@/components/ui/spotlight-card";

const servicos = [
  {
    icon: Monitor,
    title: "Site Institucional",
    desc: "Apresente sua empresa com autoridade e profissionalismo. Um site pensado para gerar confiança e atrair novos clientes.",
  },
  {
    icon: MousePointer2,
    title: "Landing Page",
    desc: "Páginas focadas em conversão, ideais para campanhas e anúncios que transformam visitantes em contatos.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "Venda online 24 horas por dia com uma loja rápida, segura e otimizada para gerar mais pedidos.",
  },
  {
    icon: Database,
    title: "Hospedagem e Suporte",
    desc: "Seu site sempre online, rápido e protegido. Cuidamos de tudo para você focar no crescimento.",
  },
];

export const Servicos = () => {
  const { ref, visible } = useReveal();
  return (
    <section id="servicos" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col gap-6 mb-16">
          <div className={visible ? "animate-reveal-left" : "opacity-0"}>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400 mb-4">Soluções</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-tight max-w-2xl mb-6">
              Nossos <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">Serviços</span>
            </h2>
            <p className={`text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed ${visible ? "animate-reveal-right" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
              Soluções estratégicas para atrair, converter e vender mais todos os dias.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {servicos.map((s, i) => (
            <div
              key={s.title}
              className={`group ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <GlowCard className="h-full hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-start justify-between gap-6 h-full">
                  <div className="flex-1 flex flex-col h-full">
                    <div className="w-[50px] h-[50px] rounded-[12px] flex items-center justify-center bg-[rgba(34,211,238,0.1)] border border-[rgba(34,211,238,0.2)] shadow-[0_0_20px_rgba(34,211,238,0.3),inset_0_0_10px_rgba(34,211,238,0.2)]">
                      <s.icon className="text-[#67e8f9] h-[22px] w-[22px]" />
                    </div>
                    
                    <div className="mt-auto">
                      <h3 className="font-display text-white mt-[20px] mb-[8px] text-2xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
                        {s.title}
                      </h3>
                      <p className="text-[#94a3b8] text-[14px] leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-slate-600 group-hover:text-cyan-400 group-hover:rotate-12 transition-all duration-300 transform" />
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decoration to match the premium feel */}
      <div className="absolute top-1/2 -right-64 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-64 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};
