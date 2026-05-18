import React, { useEffect, useRef, useState } from "react";

// Fileira 1 → esquerda
const items = [
  "PERSONALIZAÇÃO",
  "OTIMIZAÇÃO",
  "PROFISSIONALISMO",
  "CONVERSÃO",
  "COMUNICAÇÃO",
];

// Fileira 2 → direita
const itemsRow2 = [
  "OTIMIZAÇÃO",
  "CONVERSÃO",
  "PERSONALIZAÇÃO",
  "COMUNICAÇÃO",
  "PROFISSIONALISMO",
];

interface SkillsMarqueeProps {
  variant?: "blue" | "white";
}

export const SkillsMarquee = ({ variant = "blue" }: SkillsMarqueeProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animationState = isVisible ? 'running' : 'paused';

  return (
    <section
      ref={sectionRef}
      className="content-visibility-auto"
      style={{
        width: "100%",
        overflow: "hidden",
        padding: "0",
        background: variant === "white" ? "#000000" : "transparent",
        position: "relative",
        marginTop: variant === "white" ? "-2px" : "-60px",
        paddingTop: variant === "white" ? "30px" : "30px",
        paddingBottom: variant === "white" ? "30px" : "30px",
        zIndex: 5,
        contain: 'paint'
      }}
    >
      {/* Fileira 1 — vai para a ESQUERDA */}
      <div style={{ display: "flex", width: "100%", overflow: "hidden", marginBottom: "14px" }}>
        <div
          style={{
            display: "flex",
            gap: "14px",
            animation: "skills-scroll-left 60s linear infinite",
            animationPlayState: animationState,
            willChange: 'transform'
          }}
        >
          {/* Multi sets para garantir que nunca haja espaço vazio */}
          {[...items, ...items, ...items, ...items].map((item, i) => (
            <MarqueeItem key={`r1-${i}`} label={item} variant={variant} />
          ))}
        </div>
      </div>

      {/* Fileira 2 — vai para a DIREITA */}
      <div style={{ display: "flex", width: "100%", overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            gap: "14px",
            animation: "skills-scroll-right 70s linear infinite",
            animationPlayState: animationState,
            willChange: 'transform'
          }}
        >
          {[...itemsRow2, ...itemsRow2, ...itemsRow2, ...itemsRow2].map((item, i) => (
            <MarqueeItem key={`r2-${i}`} label={item} variant={variant} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes skills-scroll-left {
          from { transform: translateX(0) translateZ(0); }
          to   { transform: translateX(-50%) translateZ(0); }
        }
        @keyframes skills-scroll-right {
          from { transform: translateX(-50%) translateZ(0); }
          to   { transform: translateX(0) translateZ(0); }
        }
      `}</style>
    </section>
  );
};

const MarqueeItem = ({ label, variant }: { label: string; variant: "blue" | "white" }) => {
  const isWhite = variant === "white";

  return (
    <span
      className="marquee-item"
      style={{
        minWidth: "200px",
        height: "56px",
        padding: "0 36px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "9999px",
        border: isWhite ? "1px solid rgba(255, 255, 255, 0.1)" : "1.5px solid rgba(0, 212, 255, 0.4)",
        background: isWhite ? "#ffffff" : "rgba(0, 212, 255, 0.04)",
        color: isWhite ? "#000000" : "#e0f8ff",
        fontSize: "13px",
        letterSpacing: "1.2px",
        fontWeight: 900,
        whiteSpace: "nowrap",
        backdropFilter: isWhite ? "none" : "blur(12px)",
        WebkitBackdropFilter: isWhite ? "none" : "blur(12px)",
        boxShadow: isWhite ? "0 8px 24px rgba(0,0,0,0.12)" : "0 0 14px rgba(0,212,255,0.18), inset 0 0 8px rgba(0,212,255,0.07)",
        transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        cursor: "default",
        flexShrink: 0,
        textTransform: "uppercase",
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    >
      {label}
    </span>
  );
};

