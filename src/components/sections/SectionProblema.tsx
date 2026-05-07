import React from "react";
import { useReveal } from "@/hooks/use-reveal";
import { AlertCircle, LayoutGrid, Zap, Store } from "lucide-react";

export const SectionProblema = () => {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative py-16 md:py-24 bg-black overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>
      <div className="container relative z-10 px-6 mx-auto lg:-translate-x-12">
        <div className={`max-w-3xl text-left mb-12 md:mb-16 ${visible ? "animate-reveal-left" : "opacity-0"}`}>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2] mb-6 font-problem">
            Sua loja pode estar perdendo vendas não por falta de qualidade, mas por{" "}
            <span className="text-shimmer-gray font-['Playfair_Display'] italic font-medium block mt-4 md:mt-2 lg:inline-block">falta de estrutura.</span>
          </h2>
          <div className="h-px w-16 bg-gradient-to-r from-cyan-500 to-transparent mt-8 opacity-50" />
        </div>        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className={`lg:col-span-6 w-full space-y-10 py-6 ${visible ? "animate-reveal-left" : "opacity-0"}`} style={{ animationDelay: "400ms" }}>
            <div className="flex flex-col gap-6 md:gap-8 max-w-3xl w-full">
              
              {/* Point 1 */}
              <div className="flex items-start gap-4 group">
                <div className="flex flex-col items-start pt-1">
                  <div className="flex items-center text-cyan-400 font-bold text-xl md:text-2xl leading-none">
                    <span>&gt;</span>
                    <span className="w-3 h-[2px] bg-cyan-400 ml-1 mt-3 animate-pulse" />
                  </div>
                </div>
                <p className="text-base md:text-lg text-white/90 leading-relaxed font-problem group-hover:text-white transition-colors duration-300">
                  Sua empresa é boa, mas não transmite a mesma <span className="text-white font-bold underline decoration-cyan-500/30 underline-offset-4">confiança</span> no ambiente online.
                </p>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-4 group">
                <div className="flex flex-col items-start pt-1">
                  <div className="flex items-center text-cyan-400 font-bold text-xl md:text-2xl leading-none">
                    <span>&gt;</span>
                    <span className="w-3 h-[2px] bg-cyan-400 ml-1 mt-3 animate-pulse" style={{ animationDelay: '200ms' }} />
                  </div>
                </div>
                <p className="text-base md:text-lg text-white/90 leading-relaxed font-problem group-hover:text-white transition-colors duration-300">
                  O cliente chega interessado, mas se perde em um processo de venda <span className="text-white font-bold">manual e desorganizado.</span>
                </p>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-4 group">
                <div className="flex flex-col items-start pt-1">
                  <div className="flex items-center text-cyan-400 font-bold text-xl md:text-2xl leading-none">
                    <span>&gt;</span>
                    <span className="w-3 h-[2px] bg-cyan-400 ml-1 mt-3 animate-pulse" style={{ animationDelay: '400ms' }} />
                  </div>
                </div>
                <p className="text-base md:text-lg text-white/90 leading-relaxed font-problem group-hover:text-white transition-colors duration-300">
                  Você depende exclusivamente de redes sociais e <span className="text-white font-bold">está refém do algoritmo</span> para aparecer.
                </p>
              </div>

              {/* Point 4 */}
              <div className="flex items-start gap-4 group">
                <div className="flex flex-col items-start pt-1">
                  <div className="flex items-center text-cyan-400 font-bold text-xl md:text-2xl leading-none">
                    <span>&gt;</span>
                    <span className="w-3 h-[2px] bg-cyan-400 ml-1 mt-3 animate-pulse" style={{ animationDelay: '600ms' }} />
                  </div>
                </div>
                <p className="text-base md:text-lg text-white/90 leading-relaxed font-problem group-hover:text-white transition-colors duration-300">
                  Seu produto é superior, mas seu concorrente vende mais apenas por ter uma <span className="text-white font-bold">estrutura melhor.</span>
                </p>
              </div>

              {/* Point 5 */}
              <div className="flex items-start gap-4 group">
                <div className="flex flex-col items-start pt-1">
                  <div className="flex items-center text-cyan-400 font-bold text-xl md:text-2xl leading-none">
                    <span>&gt;</span>
                    <span className="w-3 h-[2px] bg-cyan-400 ml-1 mt-3 animate-pulse" style={{ animationDelay: '800ms' }} />
                  </div>
                </div>
                <p className="text-base md:text-lg text-white/90 leading-relaxed font-problem group-hover:text-white transition-colors duration-300">
                  Você não tem tempo para gerenciar o marketing e acaba perdendo <span className="text-white font-bold">previsibilidade de lucro.</span>
                </p>
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => window.open(`https://wa.me/5511993424151?text=Olá! Gostaria de uma análise da estrutura da minha loja.`, "_blank")}
                  className="px-6 py-3 rounded-xl border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 font-bold uppercase tracking-widest text-[10px] hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.1)] group"
                >
                  SOLICITAR ANÁLISE +
                </button>
              </div>

            </div>
          </div>

          {/* Rocket Image Column */}
          <div className={`lg:col-span-6 flex items-center justify-end ${visible ? "animate-reveal-right" : "opacity-0"}`} style={{ animationDelay: "600ms" }}>
            <div className="relative group lg:translate-x-16">
              <div className="absolute inset-0 bg-cyan-500/15 blur-[140px] rounded-full group-hover:bg-cyan-500/25 transition-all duration-700" />
              <img 
                src="/foguete.png.svg" 
                alt="Foguete Estratégico" 
                className="relative z-10 w-full max-w-[700px] h-auto object-contain animate-float drop-shadow-[0_0_80px_rgba(6,182,212,0.4)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
