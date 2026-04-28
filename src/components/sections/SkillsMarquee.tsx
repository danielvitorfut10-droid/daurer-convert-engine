import React from "react";

// Fileira 1 → esquerda
const items = [
  "VENDAS",
  "WORDPRESS",
  "HTML",
];

// Fileira 2 → direita
const itemsRow2 = [
  "ESTRATÉGIAS",
  "LEADS",
  "CONVERSÃO",
];

export const SkillsMarquee = () => {
  return (
    <section
      style={{
        width: "100%",
        overflow: "hidden",
        padding: "0",
        background: "transparent",
        position: "relative",
        marginTop: "-60px",
        paddingTop: "60px",
        paddingBottom: "60px",
        zIndex: 5,
      }}
    >
      {/* Fade vertical TOPO — funde com o hero acima */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "80px",
          background: "linear-gradient(to bottom, #000005, transparent)",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />
      {/* Fade vertical BAIXO — funde com a próxima seção */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "80px",
          background: "linear-gradient(to top, #020617, transparent)",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />
      {/* Fade lateral esquerdo */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "120px",
          height: "100%",
          background: "linear-gradient(to right, #000005, transparent)",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />
      {/* Fade lateral direito */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "120px",
          height: "100%",
          background: "linear-gradient(to left, #020617, transparent)",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />

      {/* Fileira 1 — vai para a ESQUERDA */}
      <div style={{ display: "flex", width: "100%", overflow: "hidden", marginBottom: "14px" }}>
        <div
          style={{
            display: "flex",
            gap: "14px",
            animation: "skills-scroll-left 20s linear infinite",
          }}
        >
          {/* 6 sets para garantir que nunca haja espaço vazio */}
          {[...items, ...items, ...items, ...items, ...items, ...items].map((item, i) => (
            <MarqueeItem key={`r1-${i}`} label={item} />
          ))}
        </div>
      </div>

      {/* Fileira 2 — vai para a DIREITA */}
      <div style={{ display: "flex", width: "100%", overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            gap: "14px",
            animation: "skills-scroll-right 24s linear infinite",
          }}
        >
          {[...itemsRow2, ...itemsRow2, ...itemsRow2, ...itemsRow2, ...itemsRow2, ...itemsRow2].map((item, i) => (
            <MarqueeItem key={`r2-${i}`} label={item} />
          ))}
        </div>
      </div>


      <style>{`
        @keyframes skills-scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes skills-scroll-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

const MarqueeItem = ({ label }: { label: string }) => (
  <span
    style={{
      width: "220px",
      height: "64px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "14px",
      border: "1.5px solid rgba(0, 212, 255, 0.5)",
      background: "rgba(0, 212, 255, 0.05)",
      color: "#e0f8ff",
      fontSize: "15px",
      letterSpacing: "2px",
      fontWeight: 700,
      whiteSpace: "nowrap",
      backdropFilter: "blur(12px)",
      boxShadow: "0 0 14px rgba(0,212,255,0.18), inset 0 0 8px rgba(0,212,255,0.07)",
      transition: "all 0.3s ease",
      cursor: "default",
      flexShrink: 0,
      textTransform: "uppercase" as const,
    }}
    onMouseEnter={(e) => {
      const el = e.currentTarget as HTMLSpanElement;
      el.style.borderColor = "#00d4ff";
      el.style.boxShadow = "0 0 28px rgba(0,212,255,0.6), inset 0 0 14px rgba(0,212,255,0.12)";
      el.style.color = "#00d4ff";
      el.style.transform = "translateY(-4px)";
    }}
    onMouseLeave={(e) => {
      const el = e.currentTarget as HTMLSpanElement;
      el.style.borderColor = "rgba(0, 212, 255, 0.5)";
      el.style.boxShadow = "0 0 14px rgba(0,212,255,0.18), inset 0 0 8px rgba(0,212,255,0.07)";
      el.style.color = "#e0f8ff";
      el.style.transform = "translateY(0)";
    }}
  >
    {label}
  </span>
);
