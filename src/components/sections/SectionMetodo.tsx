"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Análise da loja",
    desc: "Estudamos seu público, produto, conteúdos e forma atual de venda."
  },
  {
    num: "02",
    title: "Plano de venda",
    desc: "Alinhamos o melhor caminho para sua loja vender online com clareza."
  },
  {
    num: "03",
    title: "Site estratégico",
    desc: "Criamos uma estrutura bonita, profissional e focada em conversão."
  },
  {
    num: "04",
    title: "Tráfego preparado",
    desc: "Deixamos sua loja pronta para receber campanhas e gerar oportunidades."
  }
];

const TimelineStep = ({ step, i, isEven }: { step: typeof steps[0], i: number, isEven: boolean }) => {
  const ref = useRef(null);
  // Ativação baseada na cobertura da linha: Ativo se estiver acima da ponta da linha (60% do viewport)
  // A margem "100% 0% -40% 0%" captura tudo desde o topo até a linha de 60% (vinda do topo)
  const isInView = useInView(ref, { once: false, margin: "100% 0% -40% 0%" });

  return (
    <motion.div 
      ref={ref}
      initial="inactive"
      animate={isInView ? "active" : "inactive"}
      className={`flex items-start md:items-center w-full relative ${
        isEven ? "md:flex-row-reverse" : "md:flex-row"
      } flex-row ${isInView ? 'active-neon' : ''}`}
    >
      
      {/* Space filler for the empty half on Desktop */}
      <div className="hidden md:block md:w-1/2" />

      {/* Bullet Node */}
      <div className={`absolute left-[24px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0A0D18] border-2 border-[#3B82F6]/30 z-20`}>
         <motion.div 
          className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#3B82F6]"
          variants={{
             inactive: { scale: 0.5, opacity: 0.2, boxShadow: "0 0 0px rgba(59,130,246,0)" },
             active: { scale: 1, opacity: 1, boxShadow: "0 0 25px rgba(59,130,246,1), 0 0 10px rgba(255,255,255,0.8)" }
          }}
          transition={{ duration: 0.5 }}
         />
      </div>

      {/* Step Card Content */}
      <div className={`w-full pl-16 pr-0 md:pl-0 md:pr-0 md:w-1/2 ${isEven ? 'md:pl-16 lg:pl-28' : 'md:pr-16 lg:pr-28'}`}>
        <motion.div 
          variants={{
            inactive: { opacity: 0.2, scale: 0.95, filter: "brightness(0.3) grayscale(100%)" },
            active:   { 
              opacity: 1,   
              scale: 1,    
              filter: "brightness(1) grayscale(0%)",
            }
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="neon-border-wrapper group relative p-[1px] rounded-[2rem] transition-all duration-700"
        >
          {/* Neon Border Trace (Animated rotation) - Disparado pela classe quando ativo */}
          <div className="neon-border-trace group-[.active-neon]:animate-[spin-once_1.5s_cubic-bezier(0.4,0,0.2,1)_forwards]" />
          
          {/* Static Neon Border - Aparece após a volta e permanece ativa */}
          <div className="static-neon-border" />
          
          <motion.div
            className="absolute inset-0 z-[-1] opacity-0"
            variants={{
               inactive: { opacity: 0 },
               active: { opacity: 1 }
            }}
            transition={{ duration: 1 }}
          >
             <div className="neon-border-trace opacity-20 filter blur-xl" />
          </motion.div>
          
          {/* Card Content Interior */}
          <div className="relative z-10 p-8 md:p-12 rounded-[1.95rem] bg-[#0F142A]/90 backdrop-blur-xl border border-[#3B82F6]/10 group-hover:border-[#3B82F6]/30 group-hover:bg-[#151D3A]/90 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-500 overflow-hidden h-full">
            {/* Subtle Internal Glow highlighting the card number */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#3B82F6]/10 blur-[60px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col gap-4 md:gap-6">
              <span className="text-[#3B82F6] font-display text-5xl md:text-6xl font-bold select-none drop-shadow-md text-aurora w-fit">
                {step.num}
              </span>
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                {step.title}
              </h4>
              <p className="text-white/70 text-base md:text-lg leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

    </motion.div>
  );
};

export const SectionMetodo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // The animation starts when the top of the container crosses 60% of the viewport.
    // It ends when the bottom of the container crosses 40% of the viewport.
    offset: ["start 60%", "end 60%"] 
  });

  // Adding a slight spring physics makes the line follow smoothly
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-[#040814] to-[#0A1026] pt-24 pb-32">
      {/* Top light divider to separate from previous section */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6]/60 to-transparent shadow-[0_0_10px_rgba(59,130,246,0.3)]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-48 h-48 bg-[#3B82F6]/30 blur-[60px] rounded-full -translate-y-1/2" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-3 h-3 bg-[#3B82F6] rounded-full -translate-y-1/2 shadow-[0_0_20px_#3B82F6,0_0_40px_#3B82F6,0_0_60px_rgba(59,130,246,0.8)]" />
      </div>

      {/* Background ambient glows */}
      <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] bg-[#3B82F6]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[60vw] h-[60vw] bg-[#3B82F6]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24 md:mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 text-xs md:text-sm text-[#3B82F6] font-medium tracking-wide mb-8 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            O QUE A DAURER FAZ?
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-white mb-6 max-w-5xl leading-[1.05]"
          >
            A Daurer cria o método que <span className="text-glow-animated font-['Lora'] italic whitespace-nowrap block md:inline">sua loja precisa</span> para vender
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-white/70 max-w-3xl leading-relaxed"
          >
            Da estrutura do site até as campanhas de tráfego, organizamos o caminho para sua loja atrair clientes, gerar pedidos e vender com mais clareza.
          </motion.p>
        </div>

        {/* Interactive Timeline Area */}
        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto pb-16">
          
          {/* Base track: Pale/Inactive Line */}
          <div className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#3B82F6]/30 via-[#3B82F6]/10 to-transparent -translate-x-1/2 rounded-full" />

          {/* Fill track: Glowing Active Line following scroll */}
          <motion.div 
            className="absolute left-[24px] md:left-1/2 top-4 w-[2px] bg-[#3B82F6] -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] origin-top z-10"
            style={{ height: lineHeight }}
          />

          {/* Timeline Steps */}
          <div className="flex flex-col gap-12 md:gap-32 w-full relative z-20">
            {steps.map((step, i) => (
              <TimelineStep 
                key={i} 
                step={step} 
                i={i} 
                isEven={i % 2 !== 0} 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
