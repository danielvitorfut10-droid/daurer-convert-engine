import React, { useRef, useEffect } from "react";

interface MarqueeTrackProps {
  images: string[];
  speed: number;
}

const MarqueeTrack = ({ images, speed }: MarqueeTrackProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const items = itemsRef.current;
    if (!track || !items) return;

    let scrollPos = 0;
    let isDragging = false;
    let startX = 0;
    let lastScrollPos = 0;
    let rafId: number;

    const animate = () => {
      if (!isDragging) {
        scrollPos -= speed;
      }
      
      const halfWidth = items.scrollWidth / 2;
      
      // Lógica de loop infinito resiliente para drag para os dois lados
      if (scrollPos <= -halfWidth) {
        scrollPos %= halfWidth;
      } else if (scrollPos > 0) {
        scrollPos = (scrollPos % halfWidth) - halfWidth;
      }
      
      items.style.transform = `translateX(${scrollPos}px)`;
      rafId = requestAnimationFrame(animate);
    };

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      startX = e.clientX;
      lastScrollPos = scrollPos;
      track.setPointerCapture(e.pointerId);
      // Prevenir drag padrão da imagem
      e.preventDefault();
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startX;
      scrollPos = lastScrollPos + deltaX;
    };

    const handlePointerUp = (e: PointerEvent) => {
      isDragging = false;
      if (track.hasPointerCapture(e.pointerId)) {
        track.releasePointerCapture(e.pointerId);
      }
    };

    track.addEventListener('pointerdown', handlePointerDown);
    track.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    track.addEventListener('pointercancel', handlePointerUp);

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      track.removeEventListener('pointerdown', handlePointerDown);
      track.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      track.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [speed]);

  return (
    <div 
      ref={trackRef} 
      className="marquee-track flex overflow-hidden whitespace-nowrap w-full cursor-grab active:cursor-grabbing select-none contain-paint"
    >
      <div 
        ref={itemsRef} 
        style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        className="marquee-items flex gap-[25px] transform-gpu will-change-transform"
      >
        {/* Renderizamos 2 vezes para o loop de 50% de largura funcionar */}
        {[...images, ...images].map((img, idx) => (
          <img 
            key={idx} 
            src={img} 
            alt="Project" 
            loading="lazy"
            decoding="async"
            style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
            className="w-[280px] sm:w-[320px] md:w-[400px] h-auto rounded-[15px] select-none pointer-events-none border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transform-gpu"
          />
        ))}
      </div>
    </div>
  );
};

export const ProjectsMarquee = () => {
  const rows = [
    { 
      id: 1, 
      images: ["/lp1.jpg.jpeg", "/lp2.jpg.jpeg", "/lp3.jpg.jpeg", "/lp4.jpg.jpeg", "/lp5.jpg.jpeg"], 
      speed: 0.5 
    },
    { 
      id: 2, 
      images: ["/lp6.jpg.jpeg", "/lp7.jpg.jpeg", "/lp8.jpg.jpeg", "/lp9.jpg.jpeg", "/lp10.jpg.jpeg", "/lp11.jpg.jpeg"], 
      speed: -0.5 
    },
    { 
      id: 3, 
      images: ["/lp12.jpg.jpeg", "/lp13.jpg.jpeg", "/lp14.jpg.jpeg", "/lp15.jpg.jpeg", "/lp16.jpg.jpeg"], 
      speed: 0.5 
    }
  ];

  return (
    <section className="marquee-universe relative py-[50px] overflow-hidden bg-transparent flex flex-col gap-[30px]">
      {rows.map((row) => (
        <MarqueeTrack key={row.id} images={row.images} speed={row.speed} />
      ))}
    </section>
  );
};
