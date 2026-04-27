import { TrendingDown, Users, ShieldAlert, Clock } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
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
  { Icon: null, img: "https://lovable.dev/favicon.ico", color: "#ffffff" }, // Lovable
  { Icon: FaReact, color: "#61DAFB" }, // Antigravity placeholder or React
];



const dores = [
  { icon: Users, title: "Poucos clientes chegando", desc: "Seu site existe, mas não trabalha. Visitantes entram, olham e somem sem deixar contato." },
  { icon: TrendingDown, title: "Baixa conversão", desc: "Sem estrutura estratégica e copy direto, cada visita vira oportunidade perdida." },
  { icon: ShieldAlert, title: "Falta de credibilidade", desc: "Site ultrapassado passa a impressão errada e afasta clientes que procuram profissionalismo." },
  { icon: Clock, title: "Tempo e dinheiro desperdiçados", desc: "Soluções genéricas não foram pensadas para o seu negócio — e o crescimento trava." },
];

export const Problema = () => {
  const { ref, visible } = useReveal();
  const orbitCount = 3;
  const orbitGap = 8;
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section id="sobre" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LADO ESQUERDO: TEXTO E CARDS */}
          <div className={`${visible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">O problema</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Você está perdendo clientes <span className="text-gradient">todos os dias</span> — e nem percebe.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {dores.map((d, i) => (
                <div
                  key={d.title}
                  className="group relative rounded-2xl border border-border bg-surface/40 p-5 hover:border-primary/40 hover:bg-surface transition-all duration-500"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-semibold text-base mb-1">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
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
                            className="absolute bg-surface rounded-full p-2 border border-border shadow-soft"
                            style={{
                              left: `${x}%`,
                              top: `${y}%`,
                              transform: "translate(-50%, -50%)",
                            }}
                          >
                            {cfg.Icon ? (
                              <cfg.Icon className="w-5 h-5 text-foreground/80" style={{ color: cfg.color }} />
                            ) : (
                              <img
                                src={cfg.img}
                                alt="icon"
                                className="w-5 h-5 object-contain"
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

