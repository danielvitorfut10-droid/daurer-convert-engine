import { useEffect } from "react";
import Lenis from "lenis";

export const SmoothScroll = () => {
  useEffect(() => {
    // Desabilita Lenis no mobile para melhor performance
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 1024;
    
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Sync Lenis scroll position to window so Framer Motion useScroll works correctly
    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      // Fire a native scroll event so Framer Motion picks up the position
      window.dispatchEvent(new Event("scroll", { bubbles: false }));
      // Also keep document.documentElement.scrollTop in sync
      // (Lenis handles this internally but we ensure FM sees it)
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};
