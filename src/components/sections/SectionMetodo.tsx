"use client";

import React, { useRef, memo } from 'react';
import { m, useInView } from 'framer-motion';
import { BorderRotate } from '../ui/border-rotate';

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

const TimelineStep = memo(({ step, i, isEven, isLast }: { step: typeof steps[0], i: number, isEven: boolean, isLast: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "100% 0% -30% 0%" });

  return (
    <div 
      ref={ref}
      className={`flex items-start md:items-center w-full relative ${
        isEven ? "md:flex-row-reverse" : "md:flex-row"
      } flex-row`}
    >
      
      <div className="hidden md:block md:w-1/2" />

      {/* Circle dot */}
      <div className={`absolute left-[24px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0A0D18] border-2 border-[#3B82F6]/30 z-20`}>
         <m.div 
          className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#3B82F6]"
          initial="inactive"
          animate={isInView ? "active" : "inactive"}
          variants={{
             inactive: { scale: 0.5, opacity: 0.2, boxShadow: "0 0 0px rgba(59,130,246,0)" },
             active: { scale: 1, opacity: 1, boxShadow: "0 0 20px rgba(59,130,246,0.8), 0 0 8px rgba(255,255,255,0.6)" }
          }}
          transition={{ duration: 0.4 }}
         />
      </div>

      {/* Segment Line (connecting to next) */}
      {!isLast && (
        <div className="absolute left-[24px] md:left-1/2 top-12 md:top-16 bottom-[-3rem] md:bottom-[-8rem] w-[2px] bg-[#3B82F6]/10 -translate-x-1/2 z-10 overflow-hidden">
          <m.div 
            className="w-full h-full bg-[#3B82F6] origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ 
              boxShadow: "0 0 10px rgba(59,130,246,0.6)",
              willChange: "transform"
            }}
          />
        </div>
      )}

      <div className={`w-full pl-16 pr-0 md:pl-0 md:pr-0 md:w-1/2 ${isEven ? 'md:pl-16 lg:pl-28' : 'md:pr-16 lg:pr-28'}`}>
        <m.div
           animate={isInView ? { opacity: 1, scale: 1, filter: "brightness(1) grayscale(0%)" } : { opacity: 0.3, scale: 0.98, filter: "brightness(0.5) grayscale(100%)" }}
           transition={{ duration: 0.5 }}
           className="h-full will-change-transform"
        >
          <BorderRotate
            active={isInView}
            animationMode="auto-rotate"
            animationSpeed={8}
            borderRadius={32}
            backgroundColor="rgba(10, 13, 24, 0.96)"
            className="group transition-all duration-700 h-full"
          >
            <div className="relative z-10 p-8 md:p-12 h-full overflow-hidden">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#3B82F6]/10 blur-[60px] md:blur-[100px] rounded-full transition-opacity duration-700 opacity-50 group-hover:opacity-100" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#3B82F6]/5 blur-[50px] md:blur-[80px] rounded-full transition-opacity duration-700 opacity-30 group-hover:opacity-60" />
              
              <m.div 
                initial={{ x: "-100%", skewX: -25 }}
                animate={isInView ? { x: "200%" } : { x: "-100%" }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none z-20"
              />
              
              <div className="relative z-10 flex h-full flex-col gap-4 md:gap-6">
                <span className="text-[#3B82F6] font-display text-5xl md:text-6xl font-bold select-none drop-shadow-md text-aurora w-fit">
                  {step.num}
                </span>
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  {step.title}
                </h4>
                <p className="text-white/80 text-lg md:text-xl leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            </div>
          </BorderRotate>
        </m.div>
      </div>

    </div>
  );
});

TimelineStep.displayName = "TimelineStep";

export const SectionMetodo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="relative z-10 bg-gradient-to-b from-black via-[#040814] to-[#0A1026] pt-12 md:pt-24 pb-32 content-visibility-auto overflow-hidden" style={{ containIntrinsicSize: '0 1000px' }}>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6]/60 to-transparent">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-48 h-48 bg-[#3B82F6]/20 blur-[60px] rounded-full -translate-y-1/2" />
      </div>

      <div className="absolute top-0 right-1/4 w-[30vw] h-[30vw] bg-[#3B82F6]/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#3B82F6]/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        <div className="flex flex-col items-center text-center mb-24 md:mb-40">
          <m.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <BorderRotate
              active={true}
              animationSpeed={10}
              borderWidth={1}
              borderRadius={999}
              backgroundColor="#06080F"
              className="inline-flex items-center"
            >
              <div className="px-5 py-1.5 flex items-center gap-2 text-[10px] md:text-xs text-[#60A5FA] font-bold tracking-[0.2em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
                O QUE A DAURER FAZ?
              </div>
            </BorderRotate>
          </m.div>
          
          <m.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-white mb-6 max-w-5xl leading-[1.05]"
          >
            A Daurer cria o método que <span className="text-glow-animated font-['Lora'] italic whitespace-nowrap block md:inline">sua loja precisa</span> para vender
          </m.h2>
          
          <m.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base md:text-xl text-white/70 max-w-3xl leading-relaxed"
          >
            Da estrutura do site até as campanhas de tráfego, organizamos o caminho para sua loja atrair clientes, gerar pedidos e vender com mais clareza.
          </m.p>
        </div>

        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto pb-16">
          
          {/* Background guide line (fixed) */}
          <div className="absolute left-[24px] md:left-1/2 top-4 bottom-0 w-[2px] bg-[#3B82F6]/5 -translate-x-1/2 rounded-full" />

          <div className="flex flex-col gap-12 md:gap-32 w-full relative z-20">
            {steps.map((step, i) => (
              <TimelineStep 
                key={i} 
                step={step} 
                i={i} 
                isEven={i % 2 !== 0} 
                isLast={i === steps.length - 1}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

