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
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center -translate-y-6 md:-translate-y-12">
            <h1 className="font-display text-[32px] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[0.95] mb-12 md:mb-20 animate-reveal-fall text-white max-w-5xl mx-auto drop-shadow-2xl">
              Se sua loja ainda não vende online, ela está deixando{" "}
              <span className="text-glow-animated font-['Playfair_Display'] italic font-medium block mt-3 md:mt-0 md:inline-block text-[1.25em] sm:text-[1.15em] md:text-[1.12em] leading-[0.9] tracking-normal">dinheiro na mesa</span> todos os dias.
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed animate-reveal-right font-medium text-balance" style={{ animationDelay: "150ms" }}>
              Criamos sua loja virtual e campanhas de tráfego pago para atrair clientes, gerar pedidos e fazer sua marca vender além do ponto físico.
            </p>

            <div className="relative inline-flex flex-col items-center justify-center gap-14 animate-fade-in-up" style={{ animationDelay: "240ms" }}>
              <div className="relative z-10 w-[90vw] sm:w-auto">
                <ShinyButton 
                  onClick={handleCtaClick} 
                  className="relative z-10 w-full px-8 md:px-14 py-6 text-[16px] md:text-[19px] font-bold uppercase tracking-wider whitespace-nowrap"
                >
                  <span className="text-white">Quero recuperar essas vendas</span>
                </ShinyButton>
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
