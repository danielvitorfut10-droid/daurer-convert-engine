import { useState } from "react";
import { whatsappUrl } from "@/lib/site";
import { useReveal } from "@/hooks/use-reveal";
import { ShinyButton } from "@/components/ui/shiny-button";

const solutions = [
  { id: "vender", tab: "Vender mais" },
  { id: "organizacao", tab: "Organização" },
  { id: "posicionamento", tab: "Posicionamento" }
];

export const CtaFinal = () => {
  const { ref, visible } = useReveal();
  const [activeTab, setActiveTab] = useState(solutions[0]);

  return (
    <section id="contato" ref={ref} className="relative py-24 md:py-32 bg-black overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-black" />
      
      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center">
        <div className={`text-center max-w-4xl mx-auto mb-10 flex flex-col items-center ${visible ? "animate-reveal-fall" : "opacity-0"}`}>
          
          {/* Badge "Mas nos diga..." */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/10 bg-blue-500/5 backdrop-blur-md mb-8">
            <div className="relative w-1.5 h-1.5">
              <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75" />
              <div className="relative w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]" />
            </div>
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Mas nos diga...</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
            Qual é o seu objetivo?
          </h2>
          <p className="text-white text-xs md:text-base leading-tight max-w-2xl mx-auto px-4 tracking-tight font-medium opacity-80 mb-6">
            Escolha abaixo o seu principal foco do momento. Entender seu objetivo é o nosso primeiro passo para criar uma estrutura que transforma visitantes em oportunidades reais.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 md:gap-4 mb-16 md:mb-20 w-full max-w-[280px] sm:max-w-none mx-auto px-4">
          {solutions.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s)}
              className={`w-full sm:w-auto whitespace-nowrap px-6 md:px-8 py-3.5 rounded-xl text-[14px] md:text-base font-bold transition-all duration-300 border h-14 md:h-16 flex items-center justify-center text-center ${
                activeTab.id === s.id 
                  ? "bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.15)] scale-105" 
                  : "bg-black text-white border-white/10 hover:border-white/30 hover:scale-105"
              }`}
            >
              {s.tab}
            </button>
          ))}
        </div>

        <div className={`relative group w-full max-w-xs md:max-w-md mx-auto ${visible ? "animate-reveal-fall" : "opacity-0"}`} style={{ animationDelay: '150ms' }}>
          <div className="absolute inset-0 bg-[#000000] rounded-full" style={{ backgroundColor: "#000000", opacity: 1 }} />
          <ShinyButton 
            onClick={() => {
               const message = `Olá, vim pelo seu site e tenho o objetivo de ${activeTab.tab}. Como funciona a consultoria e o desenvolvimento de vocês?`;
               window.open(whatsappUrl(message), "_blank");
            }}
            className="relative z-10 w-full text-[15px] md:text-base font-bold uppercase tracking-widest !bg-[#000000] flex justify-center py-5 px-10"
          >
            <span className="text-white mr-1.5">PRÓXIMO PASSO</span>
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white inline-block ml-1 opacity-90" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </ShinyButton>
        </div>

      </div>
    </section>
  );
};
