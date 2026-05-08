import React from "react";
import { cn } from "@/lib/utils";

interface ShiningTextProps {
  children: React.ReactNode;
  className?: string;
}

export const ShiningText = ({ children, className }: ShiningTextProps) => {
  return (
    <span
      className={cn(
        "relative inline-block animate-shine bg-gradient-to-r from-white via-cyan-300 to-white bg-[length:200%_auto] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
};
