import { whatsappUrl } from "@/lib/site";
import { useReveal } from "@/hooks/use-reveal";
import { ShinyButton } from "@/components/ui/shiny-button";

export const CtaFinal = () => {
  const { ref, visible } = useReveal();

  return (
    <section id="contato" ref={ref} className="relative py-24 md:py-32 bg-black overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-black" />
      
      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center">
        <div className={`text-center max-w-5xl mx-auto mb-10 flex flex-col items-center ${visible ? "animate-reveal-fall" : "opacity-0"}`}>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.95]">
            Antes de investir, entenda o que está{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 blur-2xl bg-blue-500/30 -z-10 animate-pulse"></span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                travando sua loja.
              </span>
            </span>
          </h2>
          <p className="text-white text-base md:text-2xl leading-relaxed max-w-3xl mx-auto px-4 tracking-tight font-medium opacity-80 mb-14">
            A Daurer analisa sua presença digital, sua forma de vender e te mostra o caminho mais claro para transformar visitantes em pedidos.
          </p>
        </div>

        <div className={`relative group z-[100] px-4 flex justify-center w-full pointer-events-auto ${visible ? "animate-reveal-fall" : "opacity-0"}`} style={{ animationDelay: '150ms' }}>
          <div className="inline-flex relative z-10">
            <ShinyButton 
              onClick={() => {
                  const message = "Olá, vim pelo site da Daurer e quero analisar minha loja para entender o melhor caminho antes de investir em site ou tráfego pago.";
                  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
              }}
              className="relative z-20 w-auto py-5 px-12 md:py-6 md:px-16 text-[16px] md:text-xl font-black uppercase tracking-[0.15em] text-white shadow-[0_0_50px_rgba(37,99,235,0.4)] active:scale-95 flex justify-center items-center whitespace-nowrap rounded-full"
              style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.4)" }}
            >
              Analisar minha loja!
              <svg className="ml-3 w-6 h-6 text-white inline-block opacity-90" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </ShinyButton>
          </div>
        </div>

      </div>
    </section>
  );
};
