import { Hero } from "@/components/sections/Hero";
import { ProjectsMarquee } from "@/components/sections/ProjectsMarquee";
import { TrustBanner } from "@/components/sections/TrustBanner";
import { DaurerMarquee } from "@/components/sections/DaurerMarquee";
import { SkillsMarquee } from "@/components/sections/SkillsMarquee";
import { Diferencial } from "@/components/sections/Diferencial";
import { StickyFeatures } from "@/components/sections/StickyFeatures";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { CtaFinal } from "@/components/sections/CtaFinal";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import FeedbackImageCarousel from "@/components/sections/FeedbackCarousel";

import { StarBackground } from "@/components/ui/star-background";

const Index = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Fade IN: blue appears during StickyFeatures (25% → 45%)
  // The exit is handled by a black overlay that slides UP from the bottom
  const bgBlueOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.45],
    [0,    1]
  );

  return (
    <main ref={containerRef} className="min-h-screen bg-black text-foreground relative">
      <StarBackground />
      
      {/* Blue layer that fades into a mask reveal from bottom */}
      <motion.div 
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        style={{ 
          opacity: bgBlueOpacity,
          background: "linear-gradient(to bottom, #010414 0%, #00133a 40%, #0047ff 100%)",
        }}
      >
        {/* Black overlay with gradient — slides UP from bottom, no hard line */}
        <motion.div 
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "200%",
            background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 25%, #000000 55%)",
            y: useTransform(scrollYProgress, [0.48, 0.58], ["100%", "0%"]),
          }}
        />
      </motion.div>

      <div className="relative z-10">
        <Hero />
        <DaurerMarquee />
        <TrustBanner />
        <ProjectsMarquee />
        <StickyFeatures />

        <Diferencial />
        <SkillsMarquee variant="white" />

        <FeedbackImageCarousel />
        <CtaFinal />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
