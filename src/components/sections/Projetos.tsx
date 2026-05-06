import { useEffect, useState, useRef } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { ShinyButton } from "@/components/ui/shiny-button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FloatingPaths } from "@/components/ui/background-paths";

// Projetos data structure atualizado com os nomes de arquivo corretos encontrados na pasta public
const projetos = [
  {
    id: 1,
    title: "Ola pet",
    category: "Site institucional - Pet shop",
    description: "Uma solução completa para clínicas veterinárias, com atendimento ágil, gestão eficiente e produtos de qualidade, garantindo o cuidado ideal para o seu pet em todas as etapas.",
    image: "/project-1.jpg.jpeg",
    link: "https://olapetfarma.com.br/",
  },
  {
    id: 2,
    title: "Doce lar",
    category: "Sistema de Encomendas - Confeitaria",
    description: "Um site moderno e envolvente, desenvolvido para destacar produtos, facilitar pedidos e proporcionar uma experiência intuitiva, conectando clientes à marca de forma prática e atrativa.",
    image: "/project-2.jpg.jpeg",
    link: "https://www.docelardacarol.com/",
  },
  {
    id: 3,
    title: "Óticas Théo",
    category: "E-commerce PRO - Ótica",
    description: "Uma experiência online pensada para atrair e converter, com design estratégico, organização eficiente dos produtos e navegação simples para aproximar clientes da marca.",
    image: "/project-3.jpg.jpeg",
    link: "https://xn--oticasthotavares-iqb.com.br/",
  },
  {
    id: 4,
    title: "Ximendes Artesanal",
    category: "Sistema de Delivery - Artesanal",
    description: "Uma plataforma digital pensada para valorizar o artesanal, com design atrativo, navegação simples e estrutura otimizada para transformar visitantes em clientes.",
    image: "/project-4.jpg.jpeg",
    link: "https://www.ximendesartesanal.com.br/",
  },
];

export const Projetos = () => {
  const { ref, visible } = useReveal();
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % projetos.length);
    }, 8000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleManualChange = (newIndex: number) => {
    setIndex(newIndex);
    resetTimer();
  };

  const nextProject = () => {
    handleManualChange((index + 1) % projetos.length);
  };

  const prevProject = () => {
    handleManualChange((index - 1 + projetos.length) % projetos.length);
  };

  return (
    <section id="projetos" ref={ref} className="relative py-24 md:py-40 overflow-hidden bg-[#000005]">
      {/* Background Animated Paths */}
      <div className="absolute inset-0 z-0 opacity-80">
         <FloatingPaths position={1} />
         <FloatingPaths position={-1} />
      </div>

      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none z-0" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* LADO ESQUERDO: Conteúdo */}
          <div className={`${visible ? "animate-fade-in-up" : "opacity-0"} space-y-10`}>
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">Projetos</p>
              <h2 className={`font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-white ${visible ? "animate-reveal-fall" : "opacity-0"}`}>
                Resultado real,{" "}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">na tela.</span>
              </h2>
              <p className={`text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light ${visible ? "animate-reveal-left" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
                Cada pixel é planejado estrategicamente para transformar visitantes em oportunidades reais de negócio.
              </p>
            </div>

            {/* Project Info Card - Fundo Fosco e Borda Neon */}
            <div className="relative bg-black/60 backdrop-blur-2xl border border-cyan-500/20 rounded-[32px] p-8 md:p-12 shadow-[0_0_50px_rgba(34,211,238,0.1)] overflow-hidden group">
               {/* Brilho interno sutil */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/5 blur-3xl rounded-full" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <a href={projetos[index].link} target="_blank" rel="noopener noreferrer" className="inline-block group/link">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400/80 group-hover/link:text-cyan-300 transition-colors">
                      {projetos[index].category} (Ver Site →)
                    </p>
                  </a>
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
                    {projetos[index].title}
                  </h3>
                  <p className="text-base text-slate-400 leading-relaxed max-w-lg">
                    {projetos[index].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center">
              <a href="#contato">
                <ShinyButton className="px-16 py-5 text-xl rounded-full font-bold !bg-gradient-to-r !from-cyan-400 !to-blue-500 !text-black shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all duration-300">
                  Solicitar Orçamento
                </ShinyButton>
              </a>
            </div>
          </div>

          {/* LADO DIREITO: Mockup Macbook Carousel */}
          <div className={`relative flex flex-col items-center pt-10 ${visible ? "animate-fade-in delay-300" : "opacity-0"}`}>
            
            <div className="relative w-full max-w-[850px] mx-auto">
              
              <div className="relative z-20 group">
                
                <div className="relative bg-[#d1d5db] rounded-t-[22px] p-[6px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t border-x border-white/30">
                  <div className="bg-[#0a0a0a] rounded-[16px] p-3 md:p-4 overflow-hidden relative">
                    
                    {/* Display - Carrossel Sincronizado */}
                    <div className="relative bg-[#000] rounded-lg overflow-hidden aspect-[16/10] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                      <AnimatePresence mode="wait">
                        <motion.a
                          key={index}
                          href={projetos[index].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                          className="block w-full h-full cursor-pointer hover:scale-105 transition-transform duration-700"
                        >
                          <img 
                            src={projetos[index].image} 
                            alt={projetos[index].title} 
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover object-top transform-gpu"
                          />
                        </motion.a>
                      </AnimatePresence>
                      
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-30 pointer-events-none" />
                    </div>

                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#111] border border-white/5" />
                  </div>
                </div>

                {/* Base */}
                <div className="relative w-[110%] -left-[5%] h-[12px] md:h-[18px] bg-gradient-to-b from-[#e5e7eb] via-[#d1d5db] to-[#9ca3af] rounded-b-[24px] shadow-[0_15px_35px_rgba(0,0,0,0.4)] z-10 border-t border-white/40" />
                
                {/* Notch central da base */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[15%] h-[4px] bg-black/20 blur-[2px] rounded-full" />
              </div>

              {/* Navigation Controls */}
              <div className="mt-24 flex flex-col items-center gap-12">
                
                <div className="flex items-center gap-12 md:gap-16">
                  <button 
                    onClick={prevProject}
                    className="p-6 rounded-full bg-white/5 border border-white/10 text-white hover:bg-blue-500 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-xl shadow-2xl group"
                  >
                    <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
                  </button>

                  {/* Pagination Dots */}
                  <div className="flex gap-4">
                    {projetos.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => handleManualChange(i)}
                        className={`h-2.5 rounded-full transition-all duration-700 ${
                          i === index 
                            ? "w-16 bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_25px_rgba(59,130,246,0.6)]" 
                            : "w-2.5 bg-slate-700 hover:bg-slate-500"
                        }`}
                        aria-label={`Go to project ${i + 1}`}
                      />
                    ))}
                  </div>

                  <button 
                    onClick={nextProject}
                    className="p-6 rounded-full bg-white/5 border border-white/10 text-white hover:bg-blue-500 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-xl shadow-2xl group"
                  >
                    <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
