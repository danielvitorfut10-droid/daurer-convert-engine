"use client" 

import * as React from "react"
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
 
export function ShiningText({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      className={cn("bg-[linear-gradient(110deg,#b3b3b3,40%,#ffffff,50%,#b3b3b3,60%,#b3b3b3)] bg-[length:200%_100%] bg-clip-text text-transparent", className)}
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        repeat: Infinity,
        duration: 3,
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
}
