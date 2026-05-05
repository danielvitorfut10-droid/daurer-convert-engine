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
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full h-[200px] bg-blue-400/15 blur-[100px] rounded-full pointer-events-none z-0" />
      <GridBackground className="py-24 md:py-32" style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)" }}>
        <div className="container relative">
          <div className="flex flex-col items-center text-center">
            <div className={`max-w-4xl mb-16 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
              {/* Glowing Badge */}
              <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 md:px-5 md:py-2 mb-8 rounded-full border border-blue-500/40 bg-blue-900/20 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.2)] max-w-[90vw]">
                <div className="relative flex h-2 w-2 items-center justify-center flex-shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                </div>
                <span className="text-[11px] xs:text-[12px] md:text-sm font-bold text-blue-300 uppercase tracking-wider whitespace-nowrap">Uma entrega diferente do mercado</span>
              </div>

              <h2 className={`font-display text-[22px] sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 md:whitespace-nowrap ${visible ? "animate-reveal-fall" : "opacity-0"}`}>
                Seja sincero... <span className="font-['Playfair_Display'] italic font-medium">o que você prefere?</span>
              </h2>
              <p className={`text-lg md:text-xl text-slate-200 leading-relaxed font-medium ${visible ? "animate-reveal-left" : "opacity-0"}`} style={{ animationDelay: "150ms" }}>
                Dois tipos de entrega. Um único resultado que importa: <span className="font-bold text-white">vender.</span>
              </p>
            </div>

            <style>{`
              .entr-left { opacity: 0; transform: translateX(-20px) scale(0.95); transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1); }
              @media (min-width: 1024px) { .entr-left { transform: translateX(-40px) scale(0.95); } }
              .entr-left.is-visible { opacity: 1; transform: translateX(0) scale(1); }

              .entr-right { opacity: 0; transform: translateX(30px) scale(0.95); transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.2s; }
              @media (min-width: 1024px) { .entr-right { transform: translateX(60px) scale(0.95); } }
              .entr-right.is-visible { opacity: 1; transform: translateX(0) scale(1); }
              
              .entr-cta { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s; }
              @media (min-width: 1024px) { .entr-cta { transform: translateY(50px); } }
              .entr-cta.is-visible { opacity: 1; transform: translateY(0); }

              .card-diferencial-dark { transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease; }
              @media (min-width: 1024px) {
                .card-diferencial-dark:hover { transform: translateY(-8px) scale(1.04); box-shadow: 0 0 80px rgba(0, 255, 170, 0.25); }
              }
              @media (max-width: 1023px) {
                .card-diferencial-dark:hover { transform: translateY(-4px) scale(1.01); box-shadow: 0 0 80px rgba(0, 255, 170, 0.25); }
              }

              #diferencial {
                 mask-image: linear-gradient(to bottom, transparent 0%, black 150px);
                 -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 150px);
              }

               #diferencial::before {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 400px;
                background: linear-gradient(
                  to bottom,
                  transparent 0%,
                  rgba(0, 71, 255, 0.1) 30%,
                  rgba(59, 130, 246, 0.4) 60%,
                  rgba(6, 182, 212, 0.7) 85%,
                  rgba(6, 182, 212, 0.9) 100%
                );
                filter: blur(50px);
                pointer-events: none;
                z-index: 5;
              }

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

            <div className="w-full max-w-[900px] mx-auto flex flex-col lg:flex-row items-center justify-center relative z-10 gap-6 mt-4 lg:pb-[60px]">
              {/* CARD ESQUERDO */}
              <div className={`relative z-10 w-full lg:w-[360px] self-center entr-left ${visible ? "is-visible" : ""}`}>
                <div className="w-full h-full rounded-[22px] p-8 md:p-9 bg-[#e8e8e8] text-gray-900 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-2 text-left">
                  <div className="w-11 h-11 rounded-full border-[3px] border-red-500 text-red-500 flex items-center justify-center text-xl mb-3 font-bold">
                    ✖
                  </div>
                  <h3 className="font-bold text-xl md:text-[22px] tracking-tight mb-5 mt-2">Entrega comum dos "Web Designers"</h3>
                  <ul className="space-y-4 relative z-10">
                    <li className="flex items-start gap-3 text-[15px] text-gray-800">
                      <span className="flex-shrink-0 mt-0.5">❌</span> 
                      <span>Página que <b className="font-semibold text-black">desperdiça seu tráfego</b></span>
                    </li>
                    <li className="flex items-start gap-3 text-[15px] text-gray-800">
                      <span className="flex-shrink-0 mt-0.5">❌</span> 
                      <span>Site com <b className="font-semibold text-black">carregamento lento</b></span>
                    </li>
                    <li className="flex items-start gap-3 text-[15px] text-gray-800">
                      <span className="flex-shrink-0 mt-0.5">❌</span> 
                      <span>Copy que <b className="font-semibold text-black">não conecta o usuário</b></span>
                    </li>
                    <li className="flex items-start gap-3 text-[15px] text-gray-800">
                      <span className="flex-shrink-0 mt-0.5">❌</span> 
                      <span>Sem nenhuma <b className="font-semibold text-black">análise de dados</b></span>
                    </li>
                    <li className="flex items-start gap-3 text-[15px] text-gray-800">
                      <span className="flex-shrink-0 mt-0.5">❌</span> 
                      <span>Sem nenhuma <b className="font-semibold text-black">otimização pós-entrega</b></span>
                    </li>
                    <li className="flex items-start gap-3 text-[15px] mt-4 font-bold uppercase text-red-600/90">
                      <span className="flex-shrink-0">❌</span>
                      <span>DESIGNER ENTREGA O LINK E SOME...</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CARD DIREITO */}
              <div className={`relative z-30 w-full lg:w-[480px] entr-right ${visible ? "is-visible" : ""}`}>
                <div className="w-full h-full rounded-[22px] p-8 md:p-9 bg-[#050510] border border-[#00ffaa]/15 text-white shadow-[0_0_60px_rgba(0,255,170,0.15)] card-diferencial-dark text-left">
                  <div className="flex justify-center mb-0">
                    <div className="w-full max-w-[240px] flex items-center justify-center">
                      <img 
                        src="/daurer-logo.png" 
                        alt="Daurer Logo" 
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-center text-sm mb-6 text-white">
                    Nós entregamos:<br/>
                    <span className="text-xs text-white/50">Marque o que faz sentido pra você:</span>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { title: "Página criada com MÉTODO", sub: "Não achismo..." },
                      { title: "Estrutura que guia o usuário" },
                      { title: "Copy que engaja e retém" },
                      { title: "Performance Extrema" },
                      { title: "Um parceiro estrategista" },
                      { title: "Otimização com dados reais" },
                      { title: "Suporte após a entrega", bold: true }
                    ].map((item, idx) => {
                      const isSelected = selectedItems.includes(idx);
                      return (
                        <li key={idx}>
                          <button
                            onClick={() => toggleItem(idx)}
                            className={`select-item ${isSelected ? "is-selected" : ""}`}
                          >
                            <span className="check-box" />
                            <span>
                              {item.bold ? <b className="font-semibold">{item.title}</b> : item.title}
                              {item.sub && <small className="block text-[11px] text-[#00ffa6] mt-0.5 opacity-90">{item.sub}</small>}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="mt-6 text-center text-[13px] text-white/60">
                    Se você valoriza pelo menos 3 desses pontos,<br/>
                    já entendeu meu trabalho.
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA SECTION OVERLAYING GRADIENT */}
            <div className={`mt-32 md:mt-[220px] relative z-30 w-full flex flex-col items-center entr-cta ${visible ? "is-visible" : ""}`}>
              <p className="text-center text-[15px] md:text-lg lg:text-xl font-medium tracking-wide mb-8 text-white max-w-3xl">
                Não é sobre página. É sobre construir a estrutura certa para converter mais e aumentar suas conversões.
              </p>
              <ShinyButton 
                onClick={() => {
                  const contactSection = document.getElementById("contato");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth", block: "center" });
                  }
                }}
                className="px-10 py-5 text-base font-bold uppercase tracking-wider"
                style={{ 
                  "--duration": "6s",
                  "--shiny-cta-highlight": "#06b6d4",
                  boxShadow: "0 0 60px rgba(6, 182, 212, 0.4), 0 0 100px rgba(59, 130, 246, 0.2)"
                } as any}
              >
                <div className="flex items-center justify-center gap-3">
                  SOLICITAR ORÇAMENTO
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
              </ShinyButton>
            </div>
            
          </div>
        </div>
      </GridBackground>
    </section>
  );
};
