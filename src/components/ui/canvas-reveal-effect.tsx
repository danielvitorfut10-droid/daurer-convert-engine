"use client";

import React, { useRef, useEffect } from "react";

export const CanvasRevealEffect = ({
  animationSpeed = 3,
  colors = [[0, 180, 255]],
  containerClassName,
  dotSize = 4,
  showGradient = true,
}: {
  animationSpeed?: number;
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  return (
    <div className={`h-full w-full relative ${containerClassName}`}>
      <DotMatrixCanvas
        animationSpeed={animationSpeed}
        colors={colors}
        dotSize={dotSize}
      />

      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
      )}
    </div>
  );
};

const DotMatrixCanvas = ({
  animationSpeed,
  colors,
  dotSize,
}: {
  animationSpeed: number;
  colors: number[][];
  dotSize: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const spacing = 20;
    let time = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          const wave =
            Math.sin((x + time * animationSpeed) * 0.01) +
            Math.cos((y + time * animationSpeed) * 0.01);

          const opacity = (wave + 2) / 4;

          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);

          const color = colors[0];
          ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${opacity})`;

          ctx.fill();
        }
      }

      time += 1;
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [animationSpeed, colors, dotSize]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
};
