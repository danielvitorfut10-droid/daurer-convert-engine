import { Monitor, MousePointer2, ShoppingCart, Database } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { GlowCard } from "@/components/ui/spotlight-card";
import {
  FaReact, FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp
} from "react-icons/fa";
import {
  SiNextdotjs, SiVercel, SiRedux, SiTypescript, SiOpenai, SiGoogle, SiCanva, SiMeta, SiAnthropic
} from "react-icons/si";

const iconConfigs = [
  { Icon: SiVercel, color: "#ffffff" },
  { Icon: SiOpenai, color: "#10a37f" },
  { Icon: null, img: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Google_Gemini_icon_2025.svg", color: "#4285F4" }, // Gemini
  { Icon: SiCanva, color: "#00C4CC" },
  { Icon: FaWhatsapp, color: "#25D366" },
  { Icon: FaFacebook, color: "#1877F2" },
  { Icon: SiMeta, color: "#0668E1" },
  { Icon: FaInstagram, color: "#E4405F" },
  { Icon: FaGithub, color: "#ffffff" },
  { Icon: SiAnthropic, color: "#D97757" }, // Claude.ai
  { Icon: FaReact, color: "#61DAFB" }, // React
];



const servicos = [
  { icon: Monitor, title: "Site Institucional", desc: "Apresente sua empresa com autoridade e profissionalismo. Um site pensado para gerar confiança e atrair novos clientes." },
  { icon: MousePointer2, title: "Landing Page", desc: "Páginas focadas em conversão, ideais para campanhas e anúncios que transformam visitantes em contatos." },
  { icon: ShoppingCart, title: "E-commerce", desc: "Venda online 24 horas por dia com uma loja rápida, segura e otimizada para gerar mais pedidos." },
  { icon: Database, title: "Hospedagem e Suporte", desc: "Seu site sempre online, rápido e protegido. Cuidamos de tudo para você focar no crescimento." },
];

export const Problema = () => {
  const { ref, visible } = useReveal();
  const orbitCount = 3;
  const orbitGap = 8;
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section id="solucoes" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LADO ESQUERDO: TEXTO E CARDS */}
          <div className={`${visible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400 mb-4">Soluções</p>
              <h2 className={`font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 ${visible ? "animate-reveal-fall" : "opacity-0"}`}>
                Nossos <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]">Serviços</span>
              </h2>
              <p className={`text-lg text-slate-400 ${visible ? "animate-reveal-left" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
                Soluções estratégicas para atrair, converter e vender mais todos os dias.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {servicos.map((s, i) => (
                <div
                  key={s.title}
                  className={`group ${visible ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <GlowCard className="h-full hover:-translate-y-1 transition-all duration-300">
                    <div className="flex flex-col h-full">
                      <div className="h-10 w-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 grid place-items-center text-cyan-400 mb-4 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display font-bold text-lg mb-2 text-white group-hover:text-cyan-400 transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </GlowCard>
                </div>
              ))}
            </div>
          </div>

          {/* LADO DIREITO: ORBIT EFFECT */}
          <div className={`relative flex items-center justify-center h-[500px] transition-all duration-1000 delay-300 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              {/* Centro */}
              <div className="w-16 h-16 rounded-full bg-surface border border-primary/20 flex items-center justify-center z-10 shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)]">
                <FaReact className="w-8 h-8 text-primary animate-pulse" />
              </div>

              {[...Array(orbitCount)].map((_, orbitIdx) => {
                const size = `${8 + orbitGap * (orbitIdx + 1)}rem`;
                const angleStep = (2 * Math.PI) / iconsPerOrbit;

                return (
                  <div
                    key={orbitIdx}
                    className="absolute rounded-full border border-dashed border-primary/10"
                    style={{
                      width: size,
                      height: size,
                      animation: `spin ${15 + orbitIdx * 8}s linear infinite`,
                    }}
                  >
                    {iconConfigs
                      .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                      .map((cfg, iconIdx) => {
                        const angle = iconIdx * angleStep;
                        const x = 50 + 50 * Math.cos(angle);
                        const y = 50 + 50 * Math.sin(angle);

                        return (
                          <div
                            key={iconIdx}
                            className="absolute rounded-full p-2.5"
                            style={{
                              left: `${x}%`,
                              top: `${y}%`,
                              transform: "translate(-50%, -50%)",
                              background: "rgba(6, 182, 212, 0.08)",
                              border: "1.5px solid rgba(0, 212, 255, 0.55)",
                              boxShadow: "0 0 12px rgba(0,212,255,0.3), inset 0 0 6px rgba(0,212,255,0.08)",
                              backdropFilter: "blur(8px)",
                            }}
                          >
                            {cfg.Icon ? (
                              <cfg.Icon className="w-8 h-8" style={{ color: cfg.color }} />
                            ) : (
                              <img
                                src={cfg.img}
                                alt="icon"
                                className="w-8 h-8 object-contain"
                              />
                            )}
                          </div>
                        );
                      })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

