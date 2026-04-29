"use client"
import React from 'react'
import { ChevronLeft, ChevronRight, BrainCircuit, TrendingUp, Sparkles, Rocket } from 'lucide-react'

const cards = [
  {
    icon: BrainCircuit,
    title: "Estratégias antes do design",
    desc: "Antes de qualquer layout, analisamos seu negócio, público e objetivos para definir a melhor estrutura do site.",
    highlights: ["📊 Decisões baseadas em estratégia", "🎯 Direcionado para resultado"]
  },
  {
    icon: TrendingUp,
    title: "Foco em conversão",
    desc: "Cada elemento do site é pensado para guiar o visitante até a ação, sem distrações ou etapas desnecessárias.",
    highlights: ["🎯 Estrutura orientada à ação", "💰 Mais oportunidades de contato"]
  },
  {
    icon: Sparkles,
    title: "Copy persuasivo",
    desc: "Criamos textos claros e estratégicos que comunicam valor e ajudam o visitante a tomar decisão com mais confiança.",
    highlights: ["🧠 Comunicação direta", "🔥 Redução de objeções"]
  },
  {
    icon: Rocket,
    title: "Alta Performance",
    desc: "Tecnologia otimizada para garantir velocidade, estabilidade e funcionamento consistente em qualquer dispositivo.",
    highlights: ["⚡ Carregamento rápido", "📱 Experiência fluida no mobile"]
  },
]

export function FeatureCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
  }

  React.useEffect(() => {
    const timer = setInterval(handleNext, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[520px] flex flex-col items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center [perspective:1200px]">
        {cards.map((card, index) => {
          const offset = index - currentIndex
          const total = cards.length
          let pos = (offset + total) % total
          if (pos > Math.floor(total / 2)) pos -= total

          const isCenter = pos === 0
          const isAdjacent = Math.abs(pos) === 1

          const Icon = card.icon

          return (
            <div
              key={index}
              className="absolute w-72 md:w-[340px] h-[380px] transition-all duration-700 ease-out flex items-center justify-center"
              style={{
                transform: `
                  translateX(${pos * 75}%)
                  scale(${isCenter ? 1 : isAdjacent ? 0.8 : 0.6})
                  rotateY(${pos * -25}deg)
                  translateZ(${isCenter ? 0 : -100}px)
                `,
                zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                opacity: isCenter ? 1 : isAdjacent ? 0.5 : 0,
                filter: isCenter ? 'blur(0px)' : 'blur(4px)',
                visibility: Math.abs(pos) > 1 ? 'hidden' : 'visible',
              }}
            >
              
              <div className="
                w-full h-full rounded-[2rem] p-8
                bg-white/[0.03] backdrop-mirror border border-white/5 shadow-2xl
                hover:border-cyan-400/20 transition-colors
                flex flex-col gap-6 text-left
              ">
                
                <div className="
                  w-14 h-14 flex items-center justify-center rounded-2xl
                  bg-cyan-400/10 border border-cyan-400/30
                  shadow-[0_0_25px_rgba(34,211,238,0.2)]
                ">
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>

                <div className="space-y-4 flex-1">
                  <h3 className="text-white font-bold text-xl tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {card.desc}
                  </p>
                  
                  <div className="space-y-3 pt-4 border-t border-white/5">
                    {card.highlights.map((item, i) => (
                      <div key={i} className="text-[13px] font-medium text-slate-200 flex items-start gap-2.5">
                        <span className="shrink-0">{item.split(' ')[0]}</span>
                        <span className="opacity-80">{item.split(' ').slice(1).join(' ')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* NAVEGAÇÃO */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-400/20 hover:border-cyan-400/30 transition-all group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-400/20 hover:border-cyan-400/30 transition-all group"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  )
}
