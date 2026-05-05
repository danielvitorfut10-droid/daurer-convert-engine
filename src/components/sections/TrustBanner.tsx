import React from "react";
import { BackgroundTextEffect } from "@/components/ui/background-text-effect";
import { useReveal } from "@/hooks/use-reveal";
import { Counter } from "@/components/ui/counter";

export const TrustBanner = () => {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative pt-4 pb-8 md:pt-6 md:pb-12 bg-transparent overflow-hidden">

      
      {/* Background Effect */}
      <BackgroundTextEffect text="DAURER" />

      <div className="container relative z-10">
        <div 
          key={visible ? "visible" : "hidden"}
          className={`max-w-4xl mx-auto text-center ${visible ? "animate-reveal-fall" : "opacity-0"}`}
        >
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-10 tracking-tight leading-[1.2] px-2">
            Páginas validadas que <br className="hidden md:block" /> transformaram negócios.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div className="flex flex-col items-center relative overflow-hidden group">
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent relative z-10">
                <Counter target={50} prefix="+" />
              </h3>
              <p className="font-serif italic text-white/70 mt-2 text-sm uppercase tracking-widest">sites entregues</p>
            </div>
            <div className="flex flex-col items-center relative overflow-hidden group">
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent relative z-10">
                <Counter target={7} />
              </h3>
              <p className="font-serif italic text-white/70 mt-2 text-sm uppercase tracking-widest">dias para entrega</p>
            </div>
            <div className="flex flex-col items-center relative overflow-hidden group">
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent relative z-10">
                <Counter target={10} prefix="+" />
              </h3>
              <p className="font-serif italic text-white/70 mt-2 text-sm uppercase tracking-widest">nichos atendidos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
