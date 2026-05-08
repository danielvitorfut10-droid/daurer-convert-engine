import React, { useEffect, useRef, useState } from "react";

const trackItems = [
  "Copywriting Premium",
  "Análise Estratégica",
  "Sites Responsivos",
  "Tráfego Pago",
  "Landing Pages"
];

export const DaurerMarquee = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section 
        ref={sectionRef}
        className="daurer-marquee z-10 relative content-visibility-auto"
        style={{ contain: 'paint' }}
      >
        <div 
          className="daurer-marquee-track transform-gpu will-change-transform"
          style={{ 
            animationPlayState: isVisible ? 'running' : 'paused',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden'
          }}
        >
          {[...trackItems, ...trackItems, ...trackItems, ...trackItems].map((item, index) => (
            <div className="daurer-marquee-item" key={index}>
              <span className="daurer-check">✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .daurer-marquee {
          width: 100%;
          overflow: hidden;
          background: hsl(var(--background));
          border-top: 1px solid hsl(var(--primary) / 0.15);
          border-bottom: 1px solid hsl(var(--primary) / 0.15);
          padding: 24px 0;
          position: relative;
        }

        .daurer-marquee::before,
        .daurer-marquee::after {
          content: "";
          position: absolute;
          top: 0;
          width: 150px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .daurer-marquee::before {
          left: 0;
          background: linear-gradient(to right, hsl(var(--background)), transparent);
        }

        .daurer-marquee::after {
          right: 0;
          background: linear-gradient(to left, hsl(var(--background)), transparent);
        }

        .daurer-marquee-track {
          display: flex;
          align-items: center;
          gap: 100px;
          width: max-content;
          animation: daurerMarquee 50s linear infinite;
        }

        .daurer-marquee-item {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }

        .daurer-marquee-item p {
          margin: 0;
          color: hsl(var(--foreground) / 0.85);
          font-size: 16px;
          font-weight: 800;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          white-space: nowrap;
          font-family: inherit;
        }

        .daurer-check {
          width: 32px;
          height: 32px;
          background: hsl(var(--primary) / 0.1);
          border: 1px solid hsl(var(--primary) / 0.3);
          border-radius: 8px;
          color: hsl(var(--primary));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 800;
          box-shadow: 0 0 15px hsl(var(--primary) / 0.1);
          flex-shrink: 0;
        }

        @keyframes daurerMarquee {
          from {
            transform: translateX(0) translateZ(0);
          }

          to {
            transform: translateX(-50%) translateZ(0);
          }
        }

        @media (max-width: 768px) {
          .daurer-marquee {
            padding: 14px 0;
          }

          .daurer-marquee-track {
            gap: 50px;
            animation-duration: 45s;
          }

          .daurer-marquee-item p {
            font-size: 14px;
          }

          .daurer-check {
            width: 30px;
            height: 30px;
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};
