"use client"
import React, { useRef, useState, ReactNode } from "react"

interface GlowCardProps {
  children?: ReactNode
  className?: string
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = ""
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const { left, top } = cardRef.current.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top

    setMousePosition({ x, y })
  }

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      className={`group relative rounded-[20px] transition-all duration-300 overflow-hidden ${className}`}
    >
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(
            300px at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(34, 211, 238, 0.25),
            transparent 60%
          )`
        }}
      />
      
      <div className="relative z-10 rounded-[20px] h-full w-full bg-[#0B1220]/80 backdrop-blur-[12px] border border-cyan-400/10 p-[20px] flex flex-col justify-end gap-2">
        {children}
      </div>

      {/* Barra de Luz Superior */}
      <div 
        className="absolute top-0 left-[20%] w-[60%] h-[4px] rounded-[10px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#22d3ee] z-20 pointer-events-none"
      />
    </div>
  )
}
