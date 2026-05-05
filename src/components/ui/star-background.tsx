"use client";
import React, { useEffect, useRef } from "react";

/**
 * StarBackground — Optimizado com offscreen canvas pré-renderizado.
 * Cada partícula é desenhada como uma imagem pré-blur, eliminando
 * o uso de ctx.filter em cada frame (que era o gargalo de performance).
 */
export const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let particles: Particle[] = [];
    const particleCount = 17;
    let rafId: number;

    // Pré-renderiza um "sprite" de estrela com blur usando offscreen canvas (1x só)
    const starSprite = document.createElement("canvas");
    const spriteSize = 16; // px
    starSprite.width = spriteSize;
    starSprite.height = spriteSize;
    const sCtx = starSprite.getContext("2d");
    if (sCtx) {
      const center = spriteSize / 2;
      const gradient = sCtx.createRadialGradient(center, center, 0, center, center, center);
      gradient.addColorStop(0, "rgba(210, 225, 255, 0.9)");
      gradient.addColorStop(0.15, "rgba(255, 255, 255, 0.6)");
      gradient.addColorStop(0.4, "rgba(200, 220, 255, 0.15)");
      gradient.addColorStop(1, "rgba(200, 220, 255, 0)");
      sCtx.fillStyle = gradient;
      sCtx.fillRect(0, 0, spriteSize, spriteSize);
    }

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number = 0;
      y: number = 0;
      scale: number = 0;
      speedY: number = 0;
      speedX: number = 0;
      opacity: number = 0;
      maxOpacity: number = 0;
      fadeSpeed: number = 0;
      fadingIn: boolean = true;
      life: number = 0;
      maxLife: number = 0;

      constructor() {
        this.spawn(true);
      }

      spawn(initial = false) {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.scale = Math.random() * 0.6 + 0.3; // 0.3x a 0.9x do sprite
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.5 + 0.2;
        this.speedX = Math.cos(angle) * speed;
        this.speedY = Math.sin(angle) * speed;
        this.maxOpacity = Math.random() * 0.4 + 0.6;
        this.opacity = initial ? Math.random() * this.maxOpacity : 0;
        this.fadeSpeed = Math.random() * 0.012 + 0.005;
        this.fadingIn = initial ? Math.random() > 0.5 : true;
        this.life = initial ? Math.floor(Math.random() * 150) : 0;
        this.maxLife = Math.random() * 180 + 80;
      }

      update() {
        if (!canvas) return;
        this.x += this.speedX;
        this.y += this.speedY;
        this.life++;

        if (this.fadingIn) {
          this.opacity += this.fadeSpeed;
          if (this.opacity >= this.maxOpacity) {
            this.opacity = this.maxOpacity;
            this.fadingIn = false;
          }
        } else if (this.life > this.maxLife * 0.5) {
          this.opacity -= this.fadeSpeed;
          if (this.opacity <= 0) {
            this.opacity = 0;
            this.spawn(false);
          }
        }

        if (this.x < -30 || this.x > canvas.width + 30 ||
            this.y < -30 || this.y > canvas.height + 30) {
          this.spawn(false);
        }
      }

      draw() {
        if (!ctx || this.opacity <= 0) return;
        const size = spriteSize * this.scale;
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(starSprite, this.x - size / 2, this.y - size / 2, size, size);
      }
    }

    const setup = () => {
      resize();
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.globalAlpha = 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(animate);
    };

    setup();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div 
        className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
        id="snow-container"
      >
        <canvas 
          ref={canvasRef} 
          id="snowCanvas" 
          className="w-full h-full block" 
        />
      </div>
    </>
  );
};
