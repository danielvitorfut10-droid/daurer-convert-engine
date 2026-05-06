import TubesCursor from "@/components/ui/tubes-curor";
import { whatsappUrl } from "@/lib/site";
import { ShinyButton } from "@/components/ui/shiny-button";

export const Hero = () => {
  const handleCtaClick = () => {
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="relative overflow-hidden">
      <TubesCursor>
        <div className="container relative z-10 px-4 min-h-screen flex flex-col justify-center py-24">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <h1 className="font-sans text-3xl md:text-5xl lg:text-[3rem] font-semibold tracking-tight leading-[1.25] mb-6 animate-reveal-fall text-white max-w-3xl mx-auto">
              Sites e anúncios feitos para transformar visitantes em{" "}
              <span className="text-glow-animated italic font-['Lora',_serif] font-normal block mt-2 md:mt-0 md:inline-block text-[1.6em] md:text-[1.15em] leading-none">clientes</span>
            </h1>

            <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto mb-14 leading-relaxed animate-reveal-right font-medium text-balance" style={{ animationDelay: "150ms" }}>
              Criamos páginas profissionais e campanhas de tráfego pago para empresas que querem vender mais pelo digital.
            </p>

            <div className="relative inline-flex flex-col items-center justify-center gap-14 animate-fade-in-up" style={{ animationDelay: "240ms" }}>
              <div className="relative z-10 w-[90vw] sm:w-auto">
                <ShinyButton 
                  onClick={handleCtaClick} 
                  className="relative z-10 w-full px-8 md:px-14 py-6 text-[16px] md:text-[19px] font-bold uppercase tracking-wider whitespace-nowrap"
                >
                  <span className="text-white">Quero mais clientes!</span>
                </ShinyButton>
              </div>

              {/* Textos de foco */}
              <div className="flex flex-col items-center gap-8 mt-24 md:mt-2">
                <div className="text-center space-y-1.5 px-4 md:px-0">
                  <p className="text-[16px] md:text-[18px] text-white font-medium">Pare de queimar seu tráfego.</p>
                  <p className="text-[14px] md:text-[15px] text-white/80 font-medium">Tenha uma estrutura que aproveita seu investimento.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Seta absolute no footer da Hero */}
          <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 cursor-pointer" onClick={handleCtaClick}>
            <div className="w-12 h-12 rounded-full bg-[#3B82F6] flex items-center justify-center animate-bounce shadow-[0_0_20px_rgba(59,130,246,0.3)] ring-[6px] ring-[#0B0D17]">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </TubesCursor>
    </section>
  );
};
