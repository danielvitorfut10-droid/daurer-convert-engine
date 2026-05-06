"use client";

import React from "react";

type FeedbackImage = {
  src: string;
  alt: string;
};

const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(" ");
};

interface FeedbackCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  images: FeedbackImage[];
  autoPlay?: boolean;
  autoPlayDelay?: number;
}

function FeedbackCarousel({
  images,
  autoPlay = true,
  autoPlayDelay = 4000,
  className,
  ...props
}: FeedbackCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(
    Math.floor(images.length / 2)
  );

  const handleNext = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = React.useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  React.useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      handleNext();
    }, autoPlayDelay);

    return () => clearInterval(timer);
  }, [autoPlay, autoPlayDelay, handleNext]);

  const [isDragging, setIsDragging] = React.useState(false);
  const startX = React.useRef(0);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    startX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX.current;
    
    if (deltaX > 50) {
      handlePrev();
      setIsDragging(false);
    } else if (deltaX < -50) {
      handleNext();
      setIsDragging(false);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <section
      id="feedbacks"
      className={cn(
        "relative flex min-h-[720px] w-full flex-col items-center justify-center overflow-hidden bg-black px-4 py-20 text-white",
        className
      )}
      {...props}
    >
      {/* Iluminação suave e segura */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.15),transparent_60%)]" />
      </div>

      {/* Grid de pontos (dots) uniforme e à prova de bugs no Safari/Mobile */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-40" 
        style={{ 
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }} 
      />

      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center text-center">
        <div className="mb-10 flex flex-col items-center w-full">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 md:px-5 md:py-2 mb-8 rounded-full border border-blue-400/50 bg-blue-900/20 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.5)] w-fit mx-auto max-w-[95vw]">
            <div className="relative flex min-w-[8px] min-h-[8px] w-2 h-2 items-center justify-center flex-none mt-[1px]">
               <span className="absolute block h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
               <span className="relative block h-full w-full rounded-full bg-blue-500 shadow-[0_0_12px_#3b82f6]"></span>
            </div>
            <span className="text-[10px] xs:text-[11px] sm:text-[12px] md:text-sm font-bold text-blue-300 uppercase tracking-widest whitespace-normal sm:whitespace-nowrap leading-tight">
              CASES DE SUCESSO
            </span>
          </div>

          <h2 className="text-[32px] sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-white leading-[1.1]">
            O que nossos clientes <br className="hidden md:block" /> dizem...
          </h2>
        </div>

        <div 
          className="relative flex h-[430px] w-full items-center justify-center md:h-[560px] touch-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div className="relative flex h-full w-full items-center justify-center [perspective:1200px] cursor-grab active:cursor-grabbing">
            {images.map((image, index) => {
              const offset = index - currentIndex;
              const total = images.length;

              let position = (offset + total) % total;

              if (position > Math.floor(total / 2)) {
                position = position - total;
              }

              const isCenter = position === 0;
              const isAdjacent = Math.abs(position) === 1;

              return (
                <div
                  key={index}
                  className="absolute flex items-center justify-center transition-all duration-500 ease-out transform-gpu will-change-transform"
                  style={{
                    transform: `
                      translateX(${position * 58}%)
                      scale(${isCenter ? 1 : isAdjacent ? 0.82 : 0.68})
                      rotateY(${position * -12}deg)
                    `,
                    zIndex: isCenter ? 30 : isAdjacent ? 20 : 10,
                    opacity: isCenter ? 1 : isAdjacent ? 0.45 : 0,
                    filter: isCenter ? "blur(0px)" : "blur(3px)",
                    visibility: Math.abs(position) > 1 ? "hidden" : "visible",
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                    style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                    className="
                      block
                      h-auto
                      w-auto
                      max-h-[360px]
                      max-w-[230px]
                      select-none
                      rounded-[18px]
                      object-contain
                      shadow-[0_30px_90px_rgba(0,0,0,0.55)]
                      transform-gpu
                      md:max-h-[500px]
                      md:max-w-[320px]
                    "
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FeedbackImageCarousel() {
  const [images] = React.useState<FeedbackImage[]>([
    {
      src: "/feedback1.png.jpeg",
      alt: "Feedback de cliente 1",
    },
    {
      src: "/feedback2.png.jpeg",
      alt: "Feedback de cliente 2",
    },
    {
      src: "/feedback3.png.jpeg",
      alt: "Feedback de cliente 3",
    },
    {
      src: "/feedback4.png.jpeg",
      alt: "Feedback de cliente 4",
    },
    {
      src: "/feedback5.png.jpeg",
      alt: "Feedback de cliente 5",
    },
  ]);

  return (
    <FeedbackCarousel
      images={images}
      autoPlay={true}
      autoPlayDelay={4000}
    />
  );
}
