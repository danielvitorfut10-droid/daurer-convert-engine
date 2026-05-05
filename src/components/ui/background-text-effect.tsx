"use client";
import React from "react";

export const BackgroundTextEffect = ({
  text = "DAURER",
  className = "",
}: {
  text?: string;
  className?: string;
}) => {
  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none flex items-end justify-center overflow-hidden ${className}`}>
      
      {/* Texto DAURER no Fundo - Ponta a Pontap - Enviado para trás de tudo */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
         <h1 className="text-[22vw] md:text-[350px] font-black text-white/[0.06] tracking-[-0.05em] select-none whitespace-nowrap w-full text-center md:scale-x-[1.2] translate-y-4 md:translate-y-0">
           {text}
         </h1>
      </div>
      
      {/* Container do Radar (180 graus - Semicírculos) */}
      <div className="absolute bottom-0 flex justify-center items-center z-10 w-full h-full">
        {/* Semicírculos (Semi-anéis) */}
        <div className="absolute w-[400px] h-[400px] rounded-full border-t border-blue-500/40 translate-y-1/2"></div>
        <div className="absolute w-[800px] h-[800px] rounded-full border-t border-blue-400/30 translate-y-1/2"></div>
        <div className="absolute w-[1200px] h-[1200px] rounded-full border-t border-blue-500/20 translate-y-1/2"></div>
        <div className="absolute w-[1600px] h-[1600px] rounded-full border-t border-blue-400/15 translate-y-1/2"></div>
        <div className="absolute w-[2000px] h-[2000px] rounded-full border-t border-blue-500/10 translate-y-1/2"></div>
        
        {/* Linhas Radiais (Radar) */}
        <div className="absolute w-[1px] h-[1000px] bg-gradient-to-t from-blue-500/40 to-transparent origin-bottom rotate-[-60deg] bottom-0"></div>
        <div className="absolute w-[1px] h-[1000px] bg-gradient-to-t from-blue-400/40 to-transparent origin-bottom rotate-[-30deg] bottom-0"></div>
        <div className="absolute w-[1px] h-[1000px] bg-gradient-to-t from-blue-600/50 to-transparent origin-bottom rotate-0 bottom-0"></div>
        <div className="absolute w-[1px] h-[1000px] bg-gradient-to-t from-blue-400/40 to-transparent origin-bottom rotate-[30deg] bottom-0"></div>
        <div className="absolute w-[1px] h-[1000px] bg-gradient-to-t from-blue-500/40 to-transparent origin-bottom rotate-[60deg] bottom-0"></div>
      </div>
    </div>
  );
};
