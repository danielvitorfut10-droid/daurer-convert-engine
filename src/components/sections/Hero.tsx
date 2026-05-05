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
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center pt-10">
            <h1 className="font-sans text-3xl md:text-5xl lg:text-[2.75rem] font-semibold tracking-tight leading-[1.2] mb-10 animate-reveal-fall text-white max-w-3xl">
              Seu concorrente entrega menos,
              <br className="hidden md:block" />
              mas cobra mais caro. O que te falta
              <br className="hidden md:block" />
              não é qualidade. <span className="text-glow-animated italic font-['Lora',_serif] font-normal inline-block">É posicionamento.</span>
            </h1>

            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-16 leading-relaxed animate-reveal-right font-medium text-balance" style={{ animationDelay: "200ms" }}>
              Enquanto sua presença digital não sustentar seu valor, 
              <br className="hidden md:block" />
              você continuará atraindo curiosos <span className="font-bold whitespace-nowrap">Não compradores.</span>
              <br className="hidden md:block" />
              Nós construímos estruturas feitas para escalar resultados.
            </p>

            <div className="relative inline-flex flex-col items-center justify-center gap-14 animate-fade-in-up" style={{ animationDelay: "240ms" }}>
              <div className="relative z-10">
                <ShinyButton onClick={handleCtaClick} className="px-6 md:px-10 py-4 text-[13px] md:text-base font-bold uppercase tracking-wider">
                  Melhorar meu posicionamento
                </ShinyButton>
              </div>

              {/* Badges e info extra */}
              <div className="flex flex-col items-center gap-10 mt-2">
                <div className="bg-black/40 backdrop-blur-sm border border-white/10 px-5 py-2.5 rounded-full flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border border-primary/50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  </div>
                  <p className="text-[12px] md:text-[13px] text-white/80">
                    Projetos exclusivos com investimento a partir de <span className="text-white font-bold">R$ 497</span>
                  </p>
                </div>

                <div className="text-center space-y-1.5">
                  <p className="text-[16px] md:text-[18px] text-white font-medium">Pare de queimar seu tráfego.</p>
                  <p className="text-[14px] md:text-[15px] text-white/60">Tenha uma estrutura que aproveita seu investimento.</p>
                </div>

                <div className="mt-4">
                  <div className="w-12 h-12 rounded-full border-2 border-primary/40 bg-primary/10 flex items-center justify-center animate-bounce shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary fill-none stroke-current" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 13l5 5 5-5M7 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TubesCursor>
    </section>
  );
};
