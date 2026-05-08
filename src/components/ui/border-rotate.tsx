"use client";

import React, { CSSProperties, ReactNode, HTMLAttributes } from "react";
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

export function BorderRotate({
  children,
  className = "",
  animationMode = "auto-rotate",
  animationSpeed = 6,
  active = true,
  gradientColors = daurerGradientColors,
  backgroundColor = "rgba(2, 6, 23, 0.92)",
  borderWidth = 1,
  borderRadius = 28,
  style = {},
  ...props
}: BorderRotateProps) {
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
        rgba(2, 6, 23, 0.4) 0%,
        rgba(6, 182, 212, 0.25) 20%,
        rgba(56, 189, 248, 1) 32%,
        rgba(125, 211, 252, 0.85) 36%,
        rgba(6, 182, 212, 0.25) 42%,
        rgba(2, 6, 23, 0.35) 50%,
        rgba(6, 182, 212, 0.25) 70%,
        rgba(56, 189, 248, 1) 82%,
        rgba(125, 211, 252, 0.85) 86%,
        rgba(6, 182, 212, 0.25) 92%,
        rgba(2, 6, 23, 0.4) 100%
      )
    ` : `linear-gradient(var(--bg-color), var(--bg-color)), linear-gradient(rgba(255,255,255,0.05), rgba(255,255,255,0.05))`,
    backgroundClip: "padding-box, border-box",
    backgroundOrigin: "padding-box, border-box",
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
            0 24px 80px rgba(0, 0, 0, 0.42);
        }

        .daurer-gradient-border-component::before {
          content: "";
          position: absolute;
          inset: -1px;
          z-index: -1;
          border-radius: inherit;
          background: radial-gradient(circle at 50% 0%, rgba(34, 211, 238, 0.22), transparent 42%);
          opacity: 0.45;
          filter: blur(18px);
          transition: opacity 300ms ease;
        }

        .daurer-gradient-border-component:hover::before {
          opacity: 0.9;
        }

        .daurer-gradient-border-auto {
          animation: daurer-gradient-rotate var(--animation-duration) linear infinite;
        }

        .daurer-gradient-border-hover {
          animation: none;
        }

        .daurer-gradient-border-hover:hover {
          animation: daurer-gradient-rotate var(--animation-duration) linear infinite;
        }

        .daurer-gradient-border-stop-hover {
          animation: daurer-gradient-rotate var(--animation-duration) linear infinite;
        }

        .daurer-gradient-border-stop-hover:hover {
          animation-play-state: paused;
        }

        @keyframes daurer-gradient-rotate {
          from {
            --gradient-angle: 0deg;
          }
          to {
            --gradient-angle: 360deg;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .daurer-gradient-border-auto,
          .daurer-gradient-border-hover,
          .daurer-gradient-border-stop-hover {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}
