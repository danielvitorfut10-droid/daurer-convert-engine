"use client";

import React, { CSSProperties, ReactNode, HTMLAttributes, memo } from "react";
import { cn } from "@/lib/utils";

type AnimationMode = "auto-rotate" | "rotate-on-hover" | "stop-rotate-on-hover";

interface BorderRotateProps extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
  children: ReactNode;
  className?: string;
  animationMode?: AnimationMode;
  animationSpeed?: number;
  active?: boolean;
  gradientColors?: {
    primary: string;
    secondary: string;
    accent: string;
  };
  backgroundColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  style?: CSSProperties;
}

const daurerGradientColors = {
  primary: "#020617",
  secondary: "#06b6d4",
  accent: "#38bdf8",
};

export const BorderRotate = memo(({
  children,
  className = "",
  animationMode = "auto-rotate",
  animationSpeed = 8,
  active = true,
  gradientColors = daurerGradientColors,
  backgroundColor = "rgba(2, 6, 23, 0.94)",
  borderWidth = 1,
  borderRadius = 28,
  style = {},
  ...props
}: BorderRotateProps) => {
  const getAnimationClass = () => {
    if (!active) return "";
    switch (animationMode) {
      case "auto-rotate":
        return "daurer-gradient-border-auto";
      case "rotate-on-hover":
        return "daurer-gradient-border-hover";
      case "stop-rotate-on-hover":
        return "daurer-gradient-border-stop-hover";
      default:
        return "";
    }
  };

  const combinedStyle: CSSProperties = {
    "--gradient-primary": gradientColors.primary,
    "--gradient-secondary": gradientColors.secondary,
    "--gradient-accent": gradientColors.accent,
    "--bg-color": backgroundColor,
    "--border-width": `${borderWidth}px`,
    "--border-radius": `${borderRadius}px`,
    "--animation-duration": `${animationSpeed}s`,
    border: `${borderWidth}px solid transparent`,
    borderRadius: `${borderRadius}px`,
    backgroundImage: active ? `
      linear-gradient(var(--bg-color), var(--bg-color)),
      conic-gradient(
        from var(--gradient-angle, 0deg),
        rgba(56, 189, 248, 0.1) 0%,
        rgba(56, 189, 248, 0.8) 32%,
        rgba(125, 211, 252, 0.4) 36%,
        rgba(56, 189, 248, 0.1) 50%,
        rgba(56, 189, 248, 0.8) 82%,
        rgba(125, 211, 252, 0.4) 86%,
        rgba(56, 189, 248, 0.1) 100%
      )
    ` : `linear-gradient(var(--bg-color), var(--bg-color)), linear-gradient(rgba(255,255,255,0.05), rgba(255,255,255,0.05))`,
    backgroundClip: "padding-box, border-box",
    backgroundOrigin: "padding-box, border-box",
    willChange: active ? "background-image" : "auto",
    ...style,
  } as CSSProperties;

  return (
    <>
      <div
        className={cn("daurer-gradient-border-component", getAnimationClass(), className)}
        style={combinedStyle}
        {...props}
      >
        {children}
      </div>

      <style>{`
        @property --gradient-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        .daurer-gradient-border-component {
          position: relative;
          isolation: isolate;
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.04),
            0 24px 80px -20px rgba(0, 0, 0, 0.4);
        }

        .daurer-gradient-border-component::before {
          content: "";
          position: absolute;
          inset: -1px;
          z-index: -1;
          border-radius: inherit;
          background: radial-gradient(circle at 50% 0%, rgba(34, 211, 238, 0.15), transparent 50%);
          opacity: 0.3;
          filter: blur(12px);
          transition: opacity 300ms ease;
        }

        .daurer-gradient-border-component:hover::before {
          opacity: 0.6;
        }

        .daurer-gradient-border-auto {
          animation: daurer-gradient-rotate var(--animation-duration) linear infinite;
        }

        @keyframes daurer-gradient-rotate {
          from { --gradient-angle: 0deg; }
          to { --gradient-angle: 360deg; }
        }

        @media (prefers-reduced-motion: reduce) {
          .daurer-gradient-border-auto {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
});

BorderRotate.displayName = "BorderRotate";

