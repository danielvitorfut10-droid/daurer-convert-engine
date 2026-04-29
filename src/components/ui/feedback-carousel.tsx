"use client"
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const feedbacks = [
  { src: "/feedback1.png.jpeg", alt: "Feedback 1" },
  { src: "/feedback2.png.jpeg", alt: "Feedback 2" },
  { src: "/feedback3.png.jpeg", alt: "Feedback 3" },
  { src: "/feedback4.png.jpeg", alt: "Feedback 4" },
  { src: "/feedback5.png.jpeg", alt: "Feedback 5" },
]

export function FeedbackCarousel() {
  const [index, setIndex] = useState(0)

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % feedbacks.length)
  }

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length)
  }

  useEffect(() => {
    const timer = setInterval(handleNext, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[450px] md:h-[550px] flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center [perspective:1000px]">
        {feedbacks.map((item, i) => {
          const total = feedbacks.length
          let offset = i - index
          let pos = (offset + total) % total
          
          if (pos > Math.floor(total / 2)) pos -= total

          const isCenter = pos === 0
          const isSide = Math.abs(pos) === 1

          return (
            <div
              key={i}
              className="absolute w-[280px] h-[360px] md:w-[320px] md:h-[500px] transition-all duration-500 ease-in-out flex items-center justify-center"
              style={{
                transform: `
                  translateX(${pos * 60}%)
                  scale(${isCenter ? 1 : isSide ? 0.85 : 0.7})
                  rotateY(${pos * -15}deg)
                `,
                opacity: isCenter ? 1 : isSide ? 0.4 : 0,
                filter: isCenter ? "blur(0px)" : "blur(4px)",
                zIndex: isCenter ? 10 : 1,
                visibility: Math.abs(pos) > 2 ? 'hidden' : 'visible',
              }}
            >
              <div className="
                w-full h-full rounded-3xl overflow-hidden
                bg-[#11111a] backdrop-blur-md border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                flex items-center justify-center group
              ">
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* NAVEGAÇÃO INTERATIVA */}
      <div className="flex gap-6 mt-8 z-30">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary/30 transition-all group"
          aria-label="Previous feedback"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary/30 transition-all group"
          aria-label="Next feedback"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* INDICADORES (DOTS) */}
      <div className="flex gap-2.5 mt-8">
        {feedbacks.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === i 
                ? "w-8 bg-primary shadow-[0_0_10px_rgba(6,182,212,0.5)]" 
                : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
