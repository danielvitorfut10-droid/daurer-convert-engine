"use client";

import * as React from "react";
import { m, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { whatsappUrl } from "@/lib/site";
import { ShinyButton } from "@/components/ui/shiny-button";

type CardItem = {
  number: string;
  label: string;
  title: string;
  highlightedWord: string;
  highlightColor: string;
  description: string;
};

const cards: CardItem[] = [
  {
    number: "01",
    label: "Problema",
    title: "Sua loja pode estar perdendo vendas todos os dias",
    highlightedWord: "vendas",
    highlightColor: "#FF4D4D",
    description:
      "Quando o cliente chega pelo Instagram ou WhatsApp e não encontra uma forma clara de comprar, ele esfria, adia a decisão ou compra de um concorrente.",
  },
  {
    number: "02",
    label: "Clareza",
    title: "O cliente precisa entender rápido como comprar",
    highlightedWord: "comprar",
    highlightColor: "#4ADE80",
    description:
      "Um site bem estruturado mostra seus produtos, diferenciais, formas de pagamento e chamadas para ação sem confusão. Quanto mais simples a experiência, maior a chance de venda.",
  },
  {
    number: "03",
    label: "Estrutura",
    title: "Criamos uma loja online pronta para vender",
    highlightedWord: "vender",
    highlightColor: "#60A5FA",
    description:
      "A Daurer transforma sua presença digital em uma estrutura profissional, com visual premium, navegação fácil e páginas pensadas para gerar confiança no comprador.",
  },
  {
    number: "04",
    label: "Tráfego",
    title: "Depois do site pronto, levamos pessoas até ele",
    highlightedWord: "pessoas",
    highlightColor: "#C084FC",
    description:
      "Com a estrutura certa, as campanhas de tráfego deixam de jogar pessoas no improviso e passam a levar clientes qualificados para uma página preparada para converter.",
  },
  {
    number: "05",
    label: "Resultado",
    title: "Sua loja vendendo com mais previsibilidade",
    highlightedWord: "previsibilidade",
    highlightColor: "#FBBF24",
    description:
      "O objetivo é tirar sua marca da dependência do direct e criar uma base completa: site, clareza, confiança e anúncios trabalhando juntos para vender online.",
  },
];

export const SectionProblema = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeIndexRef = React.useRef(0); // ref to track true index for clamping
  const [isMobile, setIsMobile] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Scroll tracking for pinning effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate active index based on scroll progress
  // Clamp to ±1 step at a time to prevent skipping on mobile fast-swipes
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const target = Math.min(
      Math.floor(latest * cards.length),
      cards.length - 1
    );
    const current = activeIndexRef.current;
    if (target === current) return;

    // Clamp: only allow moving 1 step at a time
    const next = target > current ? current + 1 : current - 1;
    activeIndexRef.current = next;
    setActiveIndex(next);
  });

  React.useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const goTo = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    // Calculate the scroll position for the target index
    const totalHeight = container.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollableDistance = totalHeight - viewportHeight;
    const targetProgress = (index + 0.5) / cards.length; // Center of the segment
    
    window.scrollTo({
      top: container.offsetTop + targetProgress * scrollableDistance,
      behavior: "smooth",
    });
  };

  const handleCtaClick = () => {
    const message = "Olá, vim pelo site da Daurer. Vi que minha loja pode estar perdendo vendas por falta de um método mais claro, e quero entender como posso resolver isso.";
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  const getCardStyle = (index: number): React.CSSProperties => {
    const offset = index - activeIndex;

    // Card Ativo (Centro)
    if (offset === 0) {
      return {
        transform: "translate(-50%, -50%) scale(1)",
        opacity: 1,
        zIndex: 50,
        pointerEvents: "auto",
      };
    }

    // Card Seguinte (Espreitando na base)
    if (offset === 1) {
      const yOffset = isMobile ? 85 : 78; // Push further on mobile
      return {
        transform: `translate(-50%, calc(-50% + ${yOffset}%)) scale(0.92)`,
        opacity: isMobile ? 0 : 0.8,
        zIndex: 20,
        pointerEvents: "auto",
      };
    }

    // Card Anterior (Espreitando no topo)
    if (offset === -1) {
      const yOffset = isMobile ? 85 : 78; // Push further on mobile
      return {
        transform: `translate(-50%, calc(-50% - ${yOffset}%)) scale(0.92)`,
        opacity: isMobile ? 0 : 0.8,
        zIndex: 20,
        pointerEvents: "auto",
      };
    }

    // Cards muito distantes (Escondidos)
    if (offset > 1) {
      return {
        transform: "translate(-50%, 150%) scale(0.8)",
        opacity: 0,
        zIndex: 10,
        pointerEvents: "none",
      };
    }

    return {
      transform: "translate(-50%, -150%) scale(0.8)",
      opacity: 0,
      zIndex: 10,
      pointerEvents: "none",
    };
  };

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-black text-white transition-all duration-500"
      style={{ height: isMobile ? "350vh" : "450vh" }} // Adjusted for better stability on mobile
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(47,127,247,0.08),transparent_70%)]" />

        <div className="mx-auto w-full max-w-6xl px-4 md:px-6 flex flex-col items-center justify-center gap-6 md:gap-12 py-8 md:py-12">
          
          {/* Header - Raised z-index to stay above peeking cards */}
          <div className="relative w-full z-[60] text-center">
            <m.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[32px] sm:text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight leading-[1.1] text-white/95"
            >
              O Problema não é <br />
              o <span className="text-white">produto</span>... é o <br />
              <span className="text-glow-animated font-['Lora'] italic font-medium block mt-1 md:mt-4 text-[1.15em] md:text-[1.25em] drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">Método de vendas!</span>
            </m.h2>
            
            <div
              className="absolute pointer-events-none left-1/2 -translate-x-1/2 -top-10 opacity-30 md:opacity-60"
              style={{
                width: '100%',
                maxWidth: '600px',
                height: '250px',
                background: 'conic-gradient(from 180deg at 50% 0%, transparent 0deg, rgba(96,165,250,0.1) 20deg, rgba(147,197,253,0.05) 30deg, rgba(96,165,250,0.1) 40deg, transparent 60deg)',
                filter: 'blur(35px)',
              }}
            />
          </div>

          <div className="relative w-full max-w-[100vw] h-[340px] sm:h-[400px] md:h-[520px] select-none outline-none z-50 flex items-center px-2">
            <div className="relative h-full flex-grow overflow-hidden">
              <div className="relative h-full w-full">
                {cards.map((card, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <div
                      key={card.number}
                      onClick={() => goTo(index)}
                      style={getCardStyle(index)}
                      className={`absolute left-1/2 top-1/2 h-[82%] md:h-[82%] w-[94%] sm:w-[88%] md:w-[72%] overflow-hidden rounded-[20px] md:rounded-[32px] border text-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive
                          ? "border-[#2F7FF7]/40 bg-[#050505] shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(47,127,247,0.1)] scale-100"
                          : "cursor-pointer border-white/5 bg-white/[0.02] shadow-none scale-90"
                      }`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,127,247,0.15),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />
                      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] md:[background-size:34px_34px]" />

                      <div className="relative flex h-full flex-col p-4 sm:p-6 md:p-14 text-left">
                        <div className="flex items-center justify-between gap-4 mb-3 sm:mb-6 md:mb-12 w-full">
                          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[8px] md:text-[13px] font-bold tracking-[0.2em] text-white/60">
                            {card.number}
                          </span>

                          <span
                            className={`rounded-full border border-[#2F7FF7]/30 bg-[#2F7FF7]/15 px-2 py-0.5 text-[9px] md:text-[14px] font-bold text-[#9ac4ff] transition-all duration-500 shadow-[0_0_15px_rgba(47,127,247,0.2)] ${
                              isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                            }`}
                          >
                            {card.label}
                          </span>
                        </div>

                        <div className={`flex flex-col items-start justify-center flex-grow transition-all duration-500 ${isActive ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-4"}`}>
                          <h3 className="w-full text-center text-[1.15rem] sm:text-2xl md:text-[3.2rem] font-bold leading-[1.15] tracking-tight text-white mb-4 sm:mb-8 md:mb-12 max-w-[22ch] mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                            {card.title.split(card.highlightedWord).map((part, i, arr) => (
                              <React.Fragment key={i}>
                                {part}
                                {i < arr.length - 1 && (
                                  <span style={{ color: card.highlightColor }}>
                                    {card.highlightedWord}
                                  </span>
                                )}
                              </React.Fragment>
                            ))}
                          </h3>

                          <p className="max-w-full sm:max-w-[50ch] text-[13px] sm:text-[16px] md:text-[22px] leading-[1.6] text-white/85 font-medium text-left">
                            {card.description}
                          </p>
                        </div>
                      </div>

                      {!isActive && (
                        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-[1px] transition-all duration-500 rounded-[20px] md:rounded-[32px] border border-white/5" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots Navigation — Positioned at the side on mobile */}
            <div className="flex-none flex flex-col items-center gap-2 md:gap-3 pl-2 sm:pl-4">
              {/* Dots */}
              {cards.map((_, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Ir para o card ${index + 1}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      goTo(index);
                    }}
                    className={`rounded-full transition-all duration-300 flex items-center justify-center ${
                      isActive
                        ? "w-[5px] md:w-[7px] h-6 md:h-10 bg-[#2F7FF7] shadow-[0_0_20px_rgba(47,127,247,0.8)]"
                        : "w-[5px] md:w-[7px] h-[5px] md:h-[7px] bg-white/20 hover:bg-white/40"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative z-[70] mt-2 md:mt-6">
              <ShinyButton 
                onClick={handleCtaClick}
                className="px-8 sm:px-12 py-3.5 sm:py-5 text-base sm:text-xl md:text-2xl font-bold shadow-[0_0_50px_rgba(59,130,246,0.4)] transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                style={{
                  '--shiny-cta-bg': '#1a3a8f',
                  '--shiny-cta-bg-subtle': '#2563eb',
                  '--shiny-cta-highlight': '#3b82f6',
                  '--shiny-cta-highlight-subtle': '#60a5fa',
                } as React.CSSProperties}
              >
                RESOLVER AGORA!
              </ShinyButton>
          </div>

        </div>
      </div>
    </section>
  );
};








