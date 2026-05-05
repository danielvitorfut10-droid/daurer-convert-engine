import { useState, useEffect } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { whatsappUrl } from "@/lib/site";
import { useReveal } from "@/hooks/use-reveal";
import { ShinyButton } from "@/components/ui/shiny-button";

const solutions = [
  {
    id: "lp",
    tab: "Landing Page",
    tag: "Presença digital",
    title: "Landing Page",
    price: "497",
    description: "Sua landing page não é apenas uma página bonita. Ela precisa guiar o visitante até a ação certa. Criamos páginas focadas em conversão, com estrutura clara, copy direcionada e visual profissional para transformar cliques em contatos e vendas.",
    benefits: [
      "Estrutura de conversão validada",
      "Design Premium (Conversão)",
      "Copy estratégica com funil",
      "Botões de WhatsApp e CTA estratégicos",
      "Carregamento ultra-rápido",
      "Ideal para tráfego pago"
    ],
    image: "/notbook-lading.png",
    color: "#06b6d4"
  },
  {
    id: "pv",
    tab: "Página de Vendas",
    tag: "Promova suas ofertas",
    title: "Página de Vendas",
    price: "497",
    description: "Sua página de vendas não pode ser só uma vitrine bonita. Ela precisa apresentar sua oferta com clareza, quebrar objeções e conduzir o visitante até a decisão de compra. Criamos infraestruturas dark premium projetadas para lucrar.",
    benefits: [
      "Estrutura de conversão validada",
      "Apresentação clara da oferta",
      "Seções para benefícios e provas",
      "Copy persuasiva focada em ROI",
      "Design premium e responsivo",
      "Ideal para lançamentos e produtos"
    ],
    image: "/tablet-PG.png",
    color: "#3b82f6"
  },
  {
    id: "eco",
    tab: "Ecommerce",
    tag: "Vendas 24 hrs",
    title: "Loja Virtual / Ecommerce",
    price: "497",
    description: "Um ecommerce precisa passar confiança desde o primeiro clique. Criamos lojas virtuais com visual profissional, organização clara dos produtos e experiência pensada para facilitar a compra e aumentar seu faturamento online.",
    benefits: [
      "Loja virtual com visual profissional",
      "Organização estratégica de produtos",
      "Experiência pensada para conversão",
      "Layout responsivo premium",
      "Integração com WhatsApp e Checkouts",
      "Gestão simplificada de pedidos"
    ],
    image: "/Celular-ecomm.png",
    color: "#6366f1"
  }
];

export const CtaFinal = () => {
  const { ref, visible } = useReveal();
  const [activeTab, setActiveTab] = useState(solutions[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="contato" ref={ref} className="relative py-20 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className={`text-center max-w-4xl mx-auto mb-8 ${visible ? "animate-reveal-fall" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tighter leading-[0.9]">
            Qual é o seu objetivo?
          </h2>
          <p className="text-white text-xs md:text-base leading-tight max-w-2xl mx-auto px-4 tracking-tight font-medium opacity-80">
            Escolha abaixo o tipo de site que mais combina com o momento do seu negócio. Cada opção foi pensada para transformar visitantes em oportunidades reais.
          </p>
        </div>

        <div className="flex flex-row justify-center items-center gap-2 md:gap-3 mb-12 overflow-x-auto pb-2 no-scrollbar">
          {solutions.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s)}
              className={`whitespace-nowrap px-4 md:px-6 py-3 rounded-xl text-[13px] md:text-base font-bold transition-all duration-300 border h-11 md:h-14 min-w-[100px] md:min-w-[120px] flex items-center justify-center text-center ${
                activeTab.id === s.id 
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
                  : "bg-black text-white border-white/5 hover:border-white/20"
              }`}
            >
              {s.tab}
            </button>
          ))}
        </div>

        <div className={`max-w-6xl mx-auto ${visible ? "animate-reveal-fall" : "opacity-0"}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              <div className="relative order-1 flex justify-center items-center scale-95 lg:scale-100">
                <div 
                  className="absolute -inset-20 blur-[150px] opacity-10 transition-colors duration-700 pointer-events-none" 
                  style={{ backgroundColor: activeTab.color }}
                />
                
                {activeTab.id === 'eco' && (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-[280px] md:w-[380px] lg:w-[480px] h-[380px] md:h-[500px] lg:h-[620px] rounded-full bg-purple-600/20 blur-[80px]" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-[200px] md:w-[300px] lg:w-[380px] h-[300px] md:h-[420px] lg:h-[540px] rounded-[40px] bg-purple-500/15 blur-[40px]" />
                    </div>
                  </>
                )}

                <div className="relative group/mockup">
                  {activeTab.id === 'lp' && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                      <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full bg-amber-500/40 blur-[100px]" />
                    </div>
                  )}
                  {activeTab.id === 'pv' && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                      <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] rounded-full bg-blue-500/40 blur-[120px]" />
                    </div>
                  )}
                  <div className={`relative z-10 overflow-hidden flex items-center justify-center transition-all ${
                    activeTab.id === 'lp' 
                      ? 'rounded-[12px] w-[300px] md:w-[420px] lg:w-[600px] aspect-[16/10] bg-transparent border-none' 
                      : activeTab.id === 'eco' 
                        ? 'rounded-[24px] aspect-[3/4] md:aspect-[4/5] w-[240px] md:w-[340px] lg:w-[440px] bg-transparent border-none' 
                        : 'rounded-[12px] aspect-[16/10] w-[300px] md:w-[420px] lg:w-[600px] bg-transparent border-none'
                  }`}>
                    <img 
                      src={activeTab.image} 
                      alt={activeTab.title} 
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full transition-all duration-700 ${activeTab.id === 'lp' || activeTab.id === 'eco' || activeTab.id === 'pv' ? 'object-contain' : 'object-cover opacity-90'}`} 
                    />
                    {activeTab.id !== 'lp' && activeTab.id !== 'eco' && activeTab.id !== 'pv' && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    )}
                  </div>
                  {activeTab.id === 'eco' && (
                    <>
                      <div className="absolute -inset-3 rounded-[32px] bg-purple-500/10 blur-[20px] pointer-events-none" />
                      <div className="absolute -inset-6 rounded-[40px] bg-purple-700/8 blur-[35px] pointer-events-none" />
                    </>
                  )}
                </div>
              </div>

              <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left order-2 mt-8 lg:mt-0 px-2 lg:px-0">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/10 bg-blue-500/5 backdrop-blur-md mb-6 group/tag">
                  <div className="relative w-1.5 h-1.5"><div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75" /><div className="relative w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]" /></div>
                  <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">{activeTab.tag}</span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tighter leading-none opacity-95">
                  {activeTab.tab}
                </h3>

                <div className="flex flex-col gap-0 mb-8 relative">
                  {activeTab.id === 'pv' && (
                    <div className="absolute -inset-4 -left-8 bg-blue-600/30 blur-[50px] rounded-full pointer-events-none" />
                  )}
                  {activeTab.id === 'eco' && (
                    <div className="absolute -inset-4 -left-8 bg-purple-600/20 blur-[50px] rounded-full pointer-events-none" />
                  )}
                  {activeTab.id === 'lp' && (
                    <div className="absolute -inset-4 -left-8 bg-amber-500/15 blur-[50px] rounded-full pointer-events-none" />
                  )}
                  <span className="text-white text-[10px] uppercase font-bold tracking-[0.2em] mb-1 opacity-60 relative">à partir de:</span>
                  <span className="text-4xl md:text-7xl font-medium text-white tracking-tighter leading-none relative">R$ {activeTab.price}</span>
                </div>

                <p className="text-white text-sm md:text-base leading-tight mb-8 font-medium max-w-lg opacity-80 tracking-tight">
                  {activeTab.description}
                </p>

                <div className="flex flex-col gap-3 mb-10 w-full max-w-sm">
                  {activeTab.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2.5 transition-transform hover:translate-x-1 duration-300">
                      <div className="bg-emerald-500/20 rounded-full p-1 flex-shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.2)]"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /></div>
                      <span className="text-white text-xs md:text-sm font-medium leading-tight tracking-tight text-left opacity-90">{benefit}</span>
                    </div>
                  ))}
                </div>

                <ShinyButton 
                  onClick={() => {
                    const message = `Oiii. vim pelo seu site e preciso de uma infraestrutura de um(a) ${activeTab.tab}. Como funciona a sua consultoria e o desenvolvimento?`;
                    window.open(whatsappUrl(message), "_blank");
                  }}
                  className="w-full lg:w-fit text-sm font-bold uppercase tracking-widest"
                >
                  SOLICITAR ANÁLISE{" "}
                  <svg className="w-5 h-5 inline-block ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </ShinyButton>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
