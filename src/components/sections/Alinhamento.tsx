import React, { useEffect, useRef } from "react";
import {
  PackageCheck,
  CircleHelp,
  ShieldAlert,
  Route,
  Clock3,
  LucideIcon,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

const alignmentCards = [
  {
    step: "PASSO 01",
    icon: PackageCheck,
    title: "Produto bom, percepção fraca",
    description: "Sua loja tem qualidade, mas no digital ainda não mostra todo o valor que entrega.",
    color: "bg-blue-600",
    shadow: "shadow-blue-500/20"
  },
  {
    step: "PASSO 02",
    icon: CircleHelp,
    title: "Cliente com dúvida antes de comprar",
    description: "Quando a página não explica bem, o cliente pensa demais e acaba deixando para depois.",
    color: "bg-cyan-600",
    shadow: "shadow-cyan-500/20"
  },
  {
    step: "PASSO 03",
    icon: ShieldAlert,
    title: "Medo de investir e não vender",
    description: "Você quer crescer online, mas não quer gastar com site ou anúncio sem ter retorno.",
    color: "bg-blue-800",
    shadow: "shadow-blue-900/20"
  },
  {
    step: "PASSO 04",
    icon: Route,
    title: "Venda sem organização",
    description: "Sua loja precisa de um caminho mais claro para transformar visita em pedido.",
    color: "bg-cyan-500",
    shadow: "shadow-cyan-400/20"
  },
  {
    step: "PASSO 05",
    icon: Clock3,
    title: "Falta de tempo para cuidar disso",
    description: "Você sabe que precisa melhorar sua presença online, mas não tem tempo para resolver tudo sozinha.",
    color: "bg-blue-500",
    shadow: "shadow-blue-400/20"
  },
];

function MeteorCard({
  children,
  className = "",
  meteorColor = "rgba(37, 99, 235, 0.95)", // Blue
  glowColor = "rgba(37, 99, 235, 0.12)"     // blueish glow
}: {
  children: React.ReactNode;
  className?: string;
  meteorColor?: string;
  glowColor?: string;
}) {
  return (
    <div className={`meteor-card ${className}`}>
      <div className="meteor-card-inner">{children}</div>

      <style>{`
        @property --meteor-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        .meteor-card {
          position: relative;
          border-radius: 22px;
          padding: 1px;
          overflow: hidden;
          isolation: isolate;
          background: rgba(255, 255, 255, 0.04);
          box-shadow:
            0 18px 50px rgba(0, 0, 0, 0.35),
            inset 0 0 0 1px rgba(255, 255, 255, 0.03);
          transition: all 0.3s ease;
        }

        .meteor-card::before {
          content: "";
          position: absolute;
          inset: -40%;
          z-index: -2;
          background:
            conic-gradient(
              from var(--meteor-angle),
              transparent 0deg,
              transparent 245deg,
              ${glowColor} 285deg,
              ${meteorColor} 330deg,
              rgba(255, 255, 255, 0.95) 345deg,
              ${meteorColor} 355deg,
              transparent 360deg
            );
          animation: meteor-border-spin 5.5s linear infinite;
        }

        .meteor-card::after {
          content: "";
          position: absolute;
          inset: 1px;
          z-index: -1;
          border-radius: 21px;
          background:
            radial-gradient(circle at 20% 0%, ${glowColor}, transparent 34%),
            linear-gradient(135deg, rgba(8, 13, 28, 0.96), rgba(3, 6, 18, 0.98));
        }

        .meteor-card-inner {
          position: relative;
          z-index: 2;
          height: 100%;
          border-radius: 21px;
          background: rgba(4, 8, 20, 0.72);
          backdrop-filter: blur(14px);
          padding: 22px;
          border: 1px solid rgba(255, 255, 255, 0.04);
        }

        .meteor-card:hover {
          box-shadow:
            0 22px 70px rgba(0, 0, 0, 0.45),
            0 0 34px rgba(37, 99, 235, 0.15);
          transform: translateY(-2px);
        }

        @keyframes meteor-border-spin {
          from {
            --meteor-angle: 0deg;
          }
          to {
            --meteor-angle: 360deg;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .meteor-card::before {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

export const Alinhamento = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section 
      id="alinhamento"
      ref={containerRef}
      className="relative overflow-hidden bg-black py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.08),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(37,99,235,0.10),transparent_36%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={isInView ? { opacity: 1, x: 0 } : {}}
           transition={{ duration: 0.6 }}
        >
          <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
            Alinhamento estratégico
          </div>

          <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Esse caminho faz sentido para sua loja?
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
            Antes de criar seu e-commerce ou investir em tráfego pago, veja se sua loja está no momento certo para vender online com mais direção.
          </p>


        </motion.div>

        <div className="flex flex-col gap-4">
          {alignmentCards.map((card, index) => {
            const Icon = card.icon;

            const meteorColor = "rgba(37, 99, 235, 0.95)";
            const glowColor = "rgba(37, 99, 235, 0.15)";

            return (
              <motion.div
                key={card.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <MeteorCard 
                  meteorColor={meteorColor}
                  glowColor={glowColor}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 ${card.color} ${card.shadow} text-white shadow-lg`}>
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                          {card.step}
                        </span>
                        <div className="h-px flex-1 bg-white/5" />
                      </div>

                      <h3 className="text-lg font-bold tracking-tight text-white md:text-xl">
                        {card.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-slate-400 md:text-base">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </MeteorCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
