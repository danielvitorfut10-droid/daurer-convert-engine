import React, { useEffect, useRef } from 'react';

export default function TubesCursor({ children }: { children?: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appRef = useRef<any>(null);

  useEffect(() => {
    const initTimer = setTimeout(() => {
      // @ts-ignore
      import('https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js')
        .then(module => {
          const TubesCursor = module.default;
          if (canvasRef.current) {
            const app = TubesCursor(canvasRef.current, {
              tubes: {
                colors: ["#06b6d4", "#3b82f6", "#0070ff"],
                lights: {
                  intensity: 200,
                  colors: ["#06b6d4", "#3b82f6", "#bbf7ff", "#11cdef"]
                }
              }
            });
            appRef.current = app;
          }
        })
        .catch(err => console.error("Failed to load TubesCursor module:", err));
    }, 100);

    return () => {
      clearTimeout(initTimer);
      if (appRef.current && typeof appRef.current.dispose === 'function') {
        appRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className="relative h-screen w-full bg-black font-['Montserrat',_sans-serif] overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      <div className="relative h-full flex flex-col items-center justify-center z-10 w-full">
        {children}
      </div>
      {/* Bottom black mask to ensure transition to pure black and hide the effect at the very bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/90 to-transparent z-0 pointer-events-none" />
    </div>
  );
}

