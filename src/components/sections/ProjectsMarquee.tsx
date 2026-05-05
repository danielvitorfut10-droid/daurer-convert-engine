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
    let currentTranslate = 0;
    let rafId: number;

    const animate = () => {
      scrollPos -= speed;
      
      const halfWidth = items.scrollWidth / 2;
      
      if (speed > 0 && Math.abs(scrollPos) >= halfWidth) {
        scrollPos = 0;
      } else if (speed < 0 && scrollPos >= 0) {
        scrollPos = -halfWidth;
      }
      
      items.style.transform = `translateX(${scrollPos}px)`;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <div 
      ref={trackRef} 
      className="marquee-track flex overflow-hidden whitespace-nowrap w-full cursor-grab active:cursor-grabbing select-none"
    >
      <div 
        ref={itemsRef} 
        className="marquee-items flex gap-[25px] will-change-transform"
      >
        {/* Renderizamos 2 vezes para o loop de 50% de largura funcionar */}
        {[...images, ...images].map((img, idx) => (
          <img 
            key={idx} 
            src={img} 
            alt="Project" 
            loading="lazy"
            decoding="async"
            className="w-[300px] md:w-[400px] h-auto rounded-[15px] select-none pointer-events-none border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
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
