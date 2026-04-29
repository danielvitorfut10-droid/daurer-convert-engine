import { useEffect, useState, useRef } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { ShinyButton } from "@/components/ui/shiny-button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FloatingPaths } from "@/components/ui/background-paths";

// Projetos data structure
const projetos = [
  {
    id: 1,
    title: "Barça Academy Pro",
    category: "Site Institucional",
    score: "A",
    description: "Plataforma oficial da FC Barcelona Academy no Brasil. Foco em performance e conversão de novos alunos com design esportivo premium.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "Clínica Médica",
    category: "Site Institucional",
    score: "A",
    description: "Presença digital profissional que transmite confiança e autoridade. Inclui área para os pacientes e sistema de agendamento ágil totalmente integrado.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    title: "E-commerce Premium",
    category: "Loja Virtual",
    score: "98/100",
    description: "Foco total na experiência de compra do usuário com checkout otimizado, design minimalista e moderno, projetado para aumentar as vendas.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 4,
    title: "Plataforma SaaS",
    category: "Dashboard / Web App",
    score: "A",
    description: "Um sistema completo para gestão de frotas com análise de dados em tempo real e relatórios automatizados, entregando informações cruciais.",
    image: "https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 5,
    title: "Restaurante Conceitual",
    category: "Landing Page",
    score: "A",
    description: "Uma imersão visual no menu e ambiente do restaurante, focado em alta gastronomia, com seções dedicadas à captação de reservas VIP.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
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
    <section id="projetos" ref={ref} className="relative py-24 md:py-40 overflow-hidden bg-[#0A1121]">
      {/* Background Animated Paths */}
      <div className="absolute inset-0 z-0">
         <FloatingPaths position={1} />
         <FloatingPaths position={-1} />
      </div>

      {/* Profundidade suave: escurece só as bordas para mesclar suavemente com o fundo e não sumir no meio */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1121] via-transparent to-[#0A1121] z-0 pointer-events-none" />

      {/* Background Deep Blue Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#22d3ee]/5 to-transparent opacity-50 z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1200px] w-[1200px] rounded-full bg-[#22d3ee]/5 blur-[250px] pointer-events-none z-0" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* LADO ESQUERDO: Conteúdo */}
          <div className={`${visible ? "animate-fade-in-up" : "opacity-0"} space-y-12`}>
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.5em] text-blue-400">Portfólio</p>
              <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-white">
                Resultado real,{" "}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-sm">na tela.</span>
              </h2>
              <p className="text-xl text-slate-300/70 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Cada pixel é planejado estrategicamente para transformar visitantes em oportunidades reais de negócio.
              </p>
            </div>

            {/* Project Info Card */}
            <div className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[40px] p-10 md:p-14 shadow-[0_32px_64px_rgba(0,0,0,0.5)] overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-400/20 transition-all duration-700" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6"
                >
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400/90 font-display">
                    {projetos[index].category}
                  </p>
                  <h3 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter">
                    {projetos[index].title}
                  </h3>
                  <p className="text-lg text-slate-400/90 leading-relaxed max-w-lg">
                    {projetos[index].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center lg:justify-start">
              <a href="#contato">
                <ShinyButton className="px-16 py-6 text-xl rounded-full font-bold">Solicitar Orçamento</ShinyButton>
              </a>
            </div>
          </div>

          {/* LADO DIREITO: Mockup Macbook Pro Silver (Clean & Realista - Igual Imagem 2) */}
          <div className={`relative flex flex-col items-center pt-10 ${visible ? "animate-fade-in delay-300" : "opacity-0"}`}>
            
            <div className="relative w-full max-w-[850px] mx-auto">
              
              {/* Macbook Structure - SILVER MINIMAL */}
              <div className="relative z-20 group">
                
                {/* Upper Screen (Bezel Silver Slim) */}
                <div className="relative bg-[#d1d5db] rounded-t-[22px] p-[6px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t border-x border-white/30">
                  <div className="bg-[#0a0a0a] rounded-[16px] p-3 md:p-4 overflow-hidden relative">
                    
                    {/* Display */}
                    <div className="relative bg-[#000] rounded-lg overflow-hidden aspect-[16/10] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                          className="w-full h-full"
                        >
                          <img 
                            src={projetos[index].image} 
                            alt={projetos[index].title} 
                            className="w-full h-full object-cover object-top"
                          />
                        </motion.div>
                      </AnimatePresence>
                      {/* Realistic Subtle Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-30 pointer-events-none" />
                    </div>

                    {/* Camera Dot */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#111] border border-white/5" />
                  </div>
                </div>

                {/* Base (Corpo do Macbook - Fino e Prateado) */}
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
