import React from "react";
import { motion, Variants } from "framer-motion";
import { useReveal } from "@/hooks/use-reveal";
import { Features8 } from "@/components/ui/features-8";

export const Alinhamento = () => {
  const { ref, visible } = useReveal();

  return (
    <section 
      id="alinhamento" 
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-black"
    >
      {/* Top Transition & Light Point (Matching Skills/Diferencial style) */}
      <div className="absolute top-0 left-0 right-0 h-64 pointer-events-none z-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-64 bg-blue-500/10 blur-[100px] rounded-full -translate-y-1/2" />
        
        {/* The "Half Dot" core at the top divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-blue-400 rounded-full -translate-y-1/2 shadow-[0_0_20px_#3b82f6,0_0_45px_#3b82f6] z-30" />
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none z-0 opacity-50" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-8 rounded-full border border-blue-500/30 bg-blue-900/10 backdrop-blur-md">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em]">Alinhamento Estratégico</span>
            </div>
            
            <h2 className="text-[22px] xs:text-[26px] sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-6 tracking-tight whitespace-nowrap">
              A estrutura da Daurer é para sua loja?
            </h2>
            
            <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto font-medium">
              Antes de criar seu e-commerce e investir em tráfego pago, veja se sua loja está pronta para vender online com estratégia.
            </p>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Features8 />
        </div>
      </div>
    </section>
  );
};
