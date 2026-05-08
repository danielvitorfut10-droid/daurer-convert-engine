"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

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
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-[#040814] to-[#0A1026] pt-12 pb-32">
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
            className="text-3xl md:text-5xl lg:text-[64px] font-bold tracking-tight text-white mb-6 max-w-4xl leading-[1.1]"
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
            {steps.map((step, i) => {
              // Decide alignment for desktop (alternating left/right)
              const isEven = i % 2 !== 0; // index 1 = step 02 (right), index 0 = step 01 (left)
              
              return (
                <motion.div 
                  key={i} 
                  initial="inactive"
                  whileInView="active"
                  viewport={{ once: false, margin: "-40% 0%" }} // Triggers when item reaches mid-screen
                  className={`flex items-start md:items-center w-full relative ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  } flex-row`}
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
                        inactive: { opacity: 0.4, scale: 0.95, filter: "brightness(0.6) grayscale(100%)" },
                        active:   { opacity: 1,   scale: 1,    filter: "brightness(1) grayscale(0%)" }
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="group relative p-8 md:p-12 rounded-[2rem] bg-[#0F142A]/60 backdrop-blur-xl border border-[#3B82F6]/15 hover:border-[#3B82F6]/30 hover:bg-[#151D3A]/60 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] transition-all duration-500 overflow-hidden"
                    >
                      {/* Subtle Internal Glow highlighting the card number */}
                      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#3B82F6]/10 blur-[60px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                      
                      <div className="relative z-10 flex flex-col gap-4 md:gap-6">
                        <span className="text-[#3B82F6]/50 font-display text-5xl md:text-6xl font-bold select-none drop-shadow-md">
                          {step.num}
                        </span>
                        <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                          {step.title}
                        </h4>
                        <p className="text-white/70 text-base md:text-lg leading-relaxed font-medium">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
