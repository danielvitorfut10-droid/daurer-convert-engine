import React, { useState, useEffect, CSSProperties } from 'react'

export interface BackgroundSceneProps {
  /** Number of animated light beams */
  beamCount?: number
}

const BACKGROUND_BEAM_COUNT = 60

export const AuroraBackgroundHero: React.FC<BackgroundSceneProps> = ({
  beamCount = BACKGROUND_BEAM_COUNT,
}) => {
  const [beams, setBeams] = useState<
    Array<{ id: number; style: CSSProperties }>
  >([])

  useEffect(() => {
    const generated = Array.from({ length: beamCount }).map((_, i) => {
      const riseDur = Math.random() * 2 + 4    // 4–6s rise
      const fadeDur = riseDur                  // sync fade
      const dropDur = Math.random() * 3 + 3    // 3–6s drop (ignored if not matching an animation)

      return {
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          width: `${Math.floor(Math.random() * 3) + 1}px`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${riseDur}s, ${fadeDur}s, ${dropDur}s`,
        },
      }
    })
    setBeams(generated)
  }, [beamCount])

  return (
    <div className="scene absolute inset-0 z-0 overflow-hidden bg-[#000005]" role="img" aria-label="Animated digital data background">
      <div className="floor absolute bottom-[-100px] left-1/2 w-[100vw] h-[300px] -translate-x-1/2 rounded-full pointer-events-none" />
      <div className="main-column absolute inset-0 mx-auto w-[50vw] max-w-[500px] h-full pointer-events-none" />
      <div className="light-stream-container absolute inset-0 pointer-events-none">
        {beams.map((beam) => (
          <div key={beam.id} className="light-beam" style={beam.style} />
        ))}
      </div>
    </div>
  )
}

export default AuroraBackgroundHero
