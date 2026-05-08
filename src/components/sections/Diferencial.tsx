import React, { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { GridBackground } from "@/components/ui/grid-background";
import { ShiningText } from "@/components/ui/shining-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import { whatsappUrl } from "@/lib/site";

export const Diferencial = () => {
  const { ref, visible } = useReveal();

  const [selectedItems, setSelectedItems] = useState<number[]>([0, 1, 2, 3, 4]);

  const toggleItem = (idx: number) => {
    setSelectedItems(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };
  return (
    <section id="diferencial" ref={ref} className="relative min-h-[110vh] z-10 overflow-hidden">
      {/* Top Transition Divider */}
      <div className="absolute top-0 left-0 right-0 h-64 md:h-96 z-0 pointer-events-none overflow-hidden">
        {/* Smoother Gradient fade from the previous section's end color */}
        <div className="w-full h-full bg-gradient-to-b from-[#0A1026] via-[#0A1026]/60 via-[#0A1026]/20 to-transparent" />
        
        {/* Smooth Glow Transition instead of solid dot */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-cyan-500/30 blur-[40px] rounded-full -translate-y-1/2 z-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-blue-400/40 blur-[20px] rounded-full -translate-y-1/2 z-20" />
      </div>

      <GridBackground className="py-24 md:py-32" style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)" }}>
        <div className="container relative">
          <div className="flex flex-col items-center text-center">
            <div className={`max-w-4xl mb-16 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
              {/* Glowing Badge */}


              <h2 className={`font-display text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white mb-6 ${visible ? "animate-reveal-fall is-visible" : "opacity-0"}`}>
                Página que tem fundamento, o cliente entende, confia e{" "}
                <span className="select-highlight-word">
                  <span className="select-highlight-box"></span>
                  <span className="select-highlight-text">compra</span>
                  <svg
                    className="select-highlight-cursor"
                    viewBox="0 0 26 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2L23 16.5L13.5 18.5L9.5 28L2 2Z"
                      fill="#22D3EE"
                      stroke="#A5F3FC"
                      strokeWidth="1.2"
                    />
                  </svg>
                </span>
                .
              </h2>
              <p className={`text-base md:text-lg text-slate-400 leading-relaxed font-medium max-w-2xl mx-auto ${visible ? "animate-reveal-left" : "opacity-0"}`} style={{ animationDelay: "150ms" }}>
                A Daurer não entrega só aparência. Entrega direção para sua loja vender online com mais clareza.
              </p>
            </div>

            <style>{`
              .entr-left { opacity: 0; transform: translateX(-20px) scale(0.95); transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1); will-change: transform, opacity; }
              @media (min-width: 1024px) { .entr-left { transform: translateX(-40px) scale(0.95); } }
              .entr-left.is-visible { opacity: 1; transform: translateX(0) scale(1); }

              .entr-right { opacity: 0; transform: translateX(30px) scale(0.95); transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1) 0.1s; will-change: transform, opacity; }
              @media (min-width: 1024px) { .entr-right { transform: translateX(60px) scale(0.95); } }
              .entr-right.is-visible { opacity: 1; transform: translateX(0) scale(1); }
              
              .entr-cta { opacity: 0; transform: translateY(30px); transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.15s; will-change: transform, opacity; }
              @media (min-width: 1024px) { .entr-cta { transform: translateY(50px); } }
              .entr-cta.is-visible { opacity: 1; transform: translateY(0); }

              .card-diferencial-dark { transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease; }
              @media (min-width: 1024px) {
                .card-diferencial-dark:hover { transform: translateY(-8px) scale(1.04); box-shadow: 0 0 80px rgba(59, 130, 246, 0.25); }
              }
              @media (max-width: 1023px) {
                .card-diferencial-dark:hover { transform: translateY(-4px) scale(1.01); box-shadow: 0 0 80px rgba(59, 130, 246, 0.25); }
              }

              .select-highlight-word {
                position: relative;
                display: inline-block;
                padding: 0.02em 0.16em 0.04em;
                color: #22d3ee;
                white-space: nowrap;
                isolation: isolate;
                text-shadow:
                  0 0-16px rgba(34, 211, 238, 0.55),
                  0 0 36px rgba(34, 211, 238, 0.25);
                transition: color 0.3s ease 0.4s;
              }

              .select-highlight-text {
                position: relative;
                z-index: 2;
              }

              .select-highlight-box {
                position: absolute;
                left: 0;
                top: 0.02em;
                width: 100%;
                height: 0.94em;
                z-index: 1;
                background: rgba(34, 211, 238, 0.18);
                border: 1px solid rgba(34, 211, 238, 0.75);
                box-shadow:
                  0 0 22px rgba(34, 211, 238, 0.22),
                  inset 0 0 16px rgba(34, 211, 238, 0.08);
                clip-path: inset(0 100% 0 0);
              }

              .select-highlight-cursor {
                position: absolute;
                z-index: 5;
                left: -0.12em;
                bottom: -0.42em;
                width: 1.2rem;
                height: auto;
                opacity: 0;
                filter:
                  drop-shadow(0 0 8px rgba(34, 211, 238, 0.9))
                  drop-shadow(0 0 18px rgba(34, 211, 238, 0.35));
                transform: translate(-10px, 8px);
                pointer-events: none;
              }

              .is-visible .select-highlight-box {
                animation: selectBoxDrag 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.5s forwards;
              }

              .is-visible .select-highlight-cursor {
                animation: mouseDragSelect 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.5s forwards;
              }

              @keyframes selectBoxDrag {
                0% { clip-path: inset(0 100% 100% 0); opacity: 0; }
                10% { opacity: 1; }
                100% { clip-path: inset(0 0 0 0); opacity: 1; }
              }

              @keyframes mouseDragSelect {
                0% { 
                  opacity: 0; 
                  left: -0.15em; 
                  top: -0.2em; 
                  transform: translate(-10px, -10px); 
                }
                10% { opacity: 1; }
                100% { 
                  opacity: 1; 
                  left: 100%; 
                  top: 0.85em; 
                  transform: translate(-8px, 0); 
                }
              }

              @media (max-width: 768px) {
                .select-highlight-cursor {
                  width: 0.9rem;
                }
              }

              /* Removida interferência azul de fundo */

              /* Selectable checkboxes for the right card */
              .select-item {
                width: 100%;
                display: flex;
                align-items: center;
                gap: 12px;
                background: transparent;
                border: 0;
                padding: 0;
                cursor: pointer;
                text-align: left;
                color: rgba(255, 255, 255, 0.9);
                font: inherit;
                font-size: 15px;
                transition: color 0.25s ease;
              }

              .check-box {
                width: 18px;
                height: 18px;
                flex: 0 0 18px;
                border-radius: 6px;
                border: 2px solid #00ffa6;
                box-shadow: 0 0 8px rgba(0, 255, 166, 0.6), 0 0 16px rgba(0, 255, 166, 0.2);
                position: relative;
                transition: all 0.25s ease;
              }

              .check-box::after {
                content: "";
                position: absolute;
                inset: 0;
                display: grid;
                place-items: center;
                font-size: 12px;
                font-weight: 900;
                color: #06120c;
                opacity: 0;
                transform: scale(0.5);
                transition: all 0.2s ease;
              }

              .select-item.is-selected {
                color: #00ffa6;
              }

              .select-item.is-selected .check-box {
                background: #00ffa6;
                border-color: #00ffa6;
                box-shadow: 0 0 8px #00ffa6, 0 0 16px rgba(0, 255, 166, 0.6);
              }

              .select-item.is-selected .check-box::after {
                content: "✓";
                opacity: 1;
                transform: scale(1);
              }
            `}</style>

            <div className="w-full max-w-[1000px] mx-auto flex flex-col lg:flex-row items-center justify-center relative z-10 gap-8 mt-4 lg:pb-[60px] px-4">
              {/* CARD ESQUERDO */}
              <div className={`relative z-10 w-full lg:w-[440px] max-w-full self-center entr-left ${visible ? "is-visible" : ""}`}>
                <div className="w-full h-full rounded-[22px] p-6 md:p-9 bg-[#e8e8e8] text-gray-900 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-2 text-left">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-11 h-11 rounded-full border-[3px] border-red-500 text-red-500 flex items-center justify-center text-xl font-bold flex-shrink-0">
                      ✖
                    </div>
                    <h3 className="font-bold text-lg md:text-xl tracking-tight leading-tight">Entrega comum, sem direção e fundamentos</h3>
                  </div>
                  <ul className="space-y-5 relative z-10">
                    <li className="flex items-start gap-2.5 text-[15px] sm:text-[16px] text-gray-950 font-semibold whitespace-normal sm:whitespace-nowrap">
                      <span className="flex-shrink-0 mt-1 text-red-500 font-bold">✕</span> 
                      <span>Página bonita, <span className="relative inline-block"><span className="absolute bottom-0.5 left-0 w-full h-[2px] bg-red-500/60"></span>mas sem lógica de venda</span></span>
                    </li>
                    <li className="flex items-start gap-2.5 text-[15px] sm:text-[16px] text-gray-950 font-semibold whitespace-normal sm:whitespace-nowrap">
                      <span className="flex-shrink-0 mt-1 text-red-500 font-bold">✕</span> 
                      <span>Produtos exibidos <span className="relative inline-block"><span className="absolute bottom-0.5 left-0 w-full h-[2px] bg-red-500/60"></span>sem jornada clara de compra</span></span>
                    </li>
                    <li className="flex items-start gap-2.5 text-[15px] sm:text-[16px] text-gray-950 font-semibold whitespace-normal sm:whitespace-nowrap">
                      <span className="flex-shrink-0 mt-1 text-red-500 font-bold">✕</span> 
                      <span>Textos genéricos <span className="relative inline-block"><span className="absolute bottom-0.5 left-0 w-full h-[2px] bg-red-500/60"></span>que não valorizam sua oferta</span></span>
                    </li>
                    <li className="flex items-start gap-2.5 text-[15px] sm:text-[16px] text-gray-950 font-semibold whitespace-normal sm:whitespace-nowrap">
                      <span className="flex-shrink-0 mt-1 text-red-500 font-bold">✕</span> 
                      <span>Visual que <span className="relative inline-block"><span className="absolute bottom-0.5 left-0 w-full h-[2px] bg-red-500/60"></span>não transmite confiança suficiente</span></span>
                    </li>
                    <li className="flex items-start gap-2.5 text-[15px] sm:text-[16px] text-gray-950 font-semibold whitespace-normal sm:whitespace-nowrap">
                      <span className="flex-shrink-0 mt-1 text-red-500 font-bold">✕</span> 
                      <span>Botões e seções <span className="relative inline-block"><span className="absolute bottom-0.5 left-0 w-full h-[2px] bg-red-500/60"></span>sem foco em conversão</span></span>
                    </li>
                    <li className="flex items-start gap-2.5 text-[15px] sm:text-[16px] text-gray-950 font-semibold whitespace-normal sm:whitespace-nowrap">
                      <span className="flex-shrink-0 mt-1 text-red-500 font-bold">✕</span> 
                      <span>Tráfego enviado para <span className="relative inline-block"><span className="absolute bottom-0.5 left-0 w-full h-[2px] bg-red-500/60"></span>uma página despreparada</span></span>
                    </li>
                    <li className="flex items-start gap-2.5 text-[16px] mt-6 font-bold uppercase text-red-600 whitespace-normal">
                      <span className="flex-shrink-0">✕</span>
                      <span>SITE ENTREGUE. VENDAS POR SUA CONTA</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CARD DIREITO */}
              <div className={`relative z-30 w-full lg:w-[440px] max-w-full entr-right ${visible ? "is-visible" : ""}`}>
                <div className="w-full h-full rounded-[22px] p-6 md:p-9 bg-[#050510] border border-blue-500/15 text-white shadow-[0_0_60px_rgba(59,130,246,0.15)] card-diferencial-dark text-left">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-full max-w-[240px] flex items-center justify-center">
                      <img 
                        src="/daurer-logo.png" 
                        alt="Daurer Logo" 
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-center text-sm mb-6 text-white">
                    <span className="font-bold block text-lg mb-1">O que nós entregamos!</span>
                    <span className="text-xs text-white/70 block mb-4">Marque o que faz sentido para sua loja:</span>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { title: "Uma loja online fácil de entender" },
                      { title: "Produtos organizados para o cliente comprar com menos dúvida" },
                      { title: "Textos que mostram melhor o valor da sua marca" },
                      { title: "Visual mais profissional e confiável" },
                      { title: "Botões claros para transformar interesse em pedido" },
                      { title: "Anúncios levando clientes para uma página preparada" },
                      { title: "Mais clareza para vender sem depender só do Instagram" }
                    ].map((item, idx) => {
                      const isSelected = selectedItems.includes(idx);
                      return (
                        <li key={idx}>
                          <button
                            onClick={() => toggleItem(idx)}
                            className={`select-item ${isSelected ? "is-selected" : ""}`}
                          >
                            <span className="check-box" />
                            <span>{item.title}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="mt-6 text-center text-[12px] leading-relaxed text-white/60 px-4">
                    Se 2 ou mais desses pontos fazem sentido para sua loja, você já entendeu a diferença da nossa entrega.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`mt-10 md:mt-12 entr-cta ${visible ? "is-visible" : ""}`}>
              <ShinyButton 
                onClick={() => {
                  const message = "Olá, vim pelo site da Daurer. Vi a diferença entre um site comum e uma entrega pensada para vender, e quero entender como isso poderia funcionar para minha loja.";
                  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
                }} 
                className="w-full sm:w-auto px-10 md:px-16 py-6 text-base md:text-lg font-bold uppercase tracking-[0.1em]"
              >
                Quero uma entrega assim
              </ShinyButton>
            </div>
          </div>
        </div>
      </GridBackground>

      {/* Bottom Transition & Light Point */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-20">
        {/* Soft Ambient Radial Glow - Intensificado */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-40 bg-blue-500/25 blur-[100px] rounded-full translate-y-1/2" />

        {/* Pure Glow Core (No solid dot) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-cyan-500/40 blur-[40px] rounded-full translate-y-1/2 z-30" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-blue-400/50 blur-[20px] rounded-full translate-y-1/2 z-30" />
      </div>
    </section>
  );
};

