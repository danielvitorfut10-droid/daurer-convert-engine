import { cn } from "@/lib/utils";
import { useState } from "react";

export const GridBackground = ({ className, style, children }: { className?: string; style?: React.CSSProperties; children?: React.ReactNode }) => {
  return (
    <div className={cn("w-full relative", className)} style={style}>
      {/* Black Basic Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "transparent",
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />
      {/* Your Content/Components */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GridBackground;
