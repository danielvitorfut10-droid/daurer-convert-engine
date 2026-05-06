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
      {/* Texto DAURER no Fundo */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none mt-14 md:mt-0">
         <h1 className="text-[25vw] md:text-[240px] font-black text-white/[0.04] tracking-[-0.03em] select-none whitespace-nowrap w-full text-center">
           {text}
         </h1>
      </div>
    </div>
  );
};
