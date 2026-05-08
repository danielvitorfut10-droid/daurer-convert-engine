import React from "react";
import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const GridBackground = ({ children, className, style }: GridBackgroundProps) => {
  return (
    <div
      className={cn("relative", className)}
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
