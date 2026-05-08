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
      <GridBackground className="py-24 md:py-32" style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)" }}>
        <div className="container relative">
          <div className="flex flex-col items-center text-center">
            <div className={`max-w-4xl mb-16 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
              {/* Glowing Badge */}
              <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 md:px-5 md:py-2 mb-8 rounded-full border border-blue-400 bg-blue-900/20 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.6)] w-fit mx-auto max-w-[95vw]">
                <div className="hidden sm:flex relative min-w-[8px] min-h-[8px] w-2 h-2 items-center justify-center flex-none mt-[1px]">
                  <span className="absolute block h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative block h-full w-full rounded-full bg-blue-500 shadow-[0_0_12px_#3b82f6]"></span>
                </div>
                <span className="text-[10px] xs:text-[11px] sm:text-[12px] md:text-sm font-bold text-blue-300 uppercase tracking-widest whitespace-normal sm:whitespace-nowrap leading-tight">Uma entrega diferente do mercado</span>
              </div>

              <h2 className={`font-display text-3xl xs:text-[32px] sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white mb-6 ${visible ? "animate-reveal-fall" : "opacity-0"}`}>
                Nós criamos a estrutura que conecta sua loja aos clientes certos.
              </h2>
              <p className={`text-base md:text-lg text-slate-400 leading-relaxed font-medium max-w-2xl mx-auto ${visible ? "animate-reveal-left" : "opacity-0"}`} style={{ animationDelay: "150ms" }}>
                A Daurer cria seu e-commerce e o conecta ao tráfego pago para atrair clientes e vender online com mais previsibilidade.
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
                .card-diferencial-dark:hover { transform: translateY(-8px) scale(1.04); box-shadow: 0 0 80px rgba(0, 255, 170, 0.25); }
              }
              @media (max-width: 1023px) {
                .card-diferencial-dark:hover { transform: translateY(-4px) scale(1.01); box-shadow: 0 0 80px rgba(0, 255, 170, 0.25); }
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

            <div className="w-full max-w-[900px] mx-auto flex flex-col lg:flex-row items-center justify-center relative z-10 gap-6 mt-4 lg:pb-[60px]">
              {/* CARD ESQUERDO */}
              <div className={`relative z-10 w-full lg:w-[360px] self-center entr-left ${visible ? "is-visible" : ""}`}>
                <div className="w-full h-full rounded-[22px] p-8 md:p-9 bg-[#e8e8e8] text-gray-900 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-2 text-left">
                  <div className="w-11 h-11 rounded-full border-[3px] border-red-500 text-red-500 flex items-center justify-center text-xl mb-3 font-bold">
                    ✖
                  </div>
                  <h3 className="font-bold text-xl md:text-[22px] tracking-tight mb-5 mt-2">Entrega comum de “site bonito”</h3>
                  <ul className="space-y-4 relative z-10">
                    <li className="flex items-start gap-3 text-[15px] text-gray-800">
                      <span className="flex-shrink-0 mt-0.5">✕</span> 
                      <span>Loja virtual <b className="font-semibold text-black">sem estratégia de venda</b></span>
                    </li>
                    <li className="flex items-start gap-3 text-[15px] text-gray-800">
                      <span className="flex-shrink-0 mt-0.5">✕</span> 
                      <span>Produtos cadastrados <b className="font-semibold text-black">sem jornada de compra</b></span>
                    </li>
                    <li className="flex items-start gap-3 text-[15px] text-gray-800">
                      <span className="flex-shrink-0 mt-0.5">✕</span> 
                      <span>Site que <b className="font-semibold text-black">não passa confiança suficiente</b></span>
                    </li>
                    <li className="flex items-start gap-3 text-[15px] text-gray-800">
                      <span className="flex-shrink-0 mt-0.5">✕</span> 
                      <span><b className="font-semibold text-black">Nenhum plano</b> para atrair clientes</span>
                    </li>
                    <li className="flex items-start gap-3 text-[15px] text-gray-800">
                      <span className="flex-shrink-0 mt-0.5">✕</span> 
                      <span>Tráfego pago <b className="font-semibold text-black">sem estrutura para converter</b></span>
                    </li>
                    <li className="flex items-start gap-3 text-[15px] text-gray-800">
                      <span className="flex-shrink-0 mt-0.5">✕</span> 
                      <span>Você recebe o site e <b className="font-semibold text-black">precisa se virar sozinho</b></span>
                    </li>
                    <li className="flex items-start gap-3 text-[15px] mt-4 font-bold uppercase text-red-600/90 whitespace-normal">
                      <span className="flex-shrink-0">✕</span>
                      <span>SITE ENTREGUE. VENDAS POR SUA CONTA.</span>
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
                    <span className="font-bold block text-lg mb-2">Estrutura Daurer para e-commerce</span>
                    <span className="text-xs text-white/50">O que sua loja recebe com a gente:</span>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { title: "E-commerce profissional e responsivo" },
                      { title: "Jornada pensada para transformar visitas em pedidos" },
                      { title: "Copy estratégica para apresentar seus produtos" },
                      { title: "Estrutura preparada para tráfego pago" },
                      { title: "Campanhas para atrair clientes certos" },
                      { title: "Análise e otimização com base em dados" },
                      { title: "Suporte para sua loja sair do improviso", bold: true }
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
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="mt-6 text-center text-[13px] text-white/60">
                    Se você quer vender online com mais consistência, esse é o caminho.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`mt-10 md:mt-12 entr-cta ${visible ? "is-visible" : ""}`}>
              <ShinyButton 
                onClick={() => {
                  const contactSection = document.getElementById("contato");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth", block: "center" });
                  }
                }} 
                className="w-full sm:w-auto px-10 md:px-16 py-6 text-base md:text-lg font-bold uppercase tracking-[0.1em]"
              >
                Quero recuperar essas vendas
              </ShinyButton>
            </div>
          </div>
        </div>
      </GridBackground>

    </section>
  );
};
