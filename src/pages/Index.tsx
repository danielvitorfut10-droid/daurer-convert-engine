import { Hero } from "@/components/sections/Hero";
import { ProjectsMarquee } from "@/components/sections/ProjectsMarquee";

import { DaurerMarquee } from "@/components/sections/DaurerMarquee";
import { SkillsMarquee } from "@/components/sections/SkillsMarquee";
import { Diferencial } from "@/components/sections/Diferencial";
import { Alinhamento } from "@/components/sections/Alinhamento";
import { StickyFeatures } from "@/components/sections/StickyFeatures";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { CtaFinal } from "@/components/sections/CtaFinal";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import FeedbackImageCarousel from "@/components/sections/FeedbackCarousel";
import { SectionProblema } from "@/components/sections/SectionProblema";
import { SectionMetodo } from "@/components/sections/SectionMetodo";

import { StarBackground } from "@/components/ui/star-background";

const Index = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main ref={containerRef} className="min-h-screen bg-black text-foreground relative">
      <StarBackground />
      <div className="relative z-10">
        <Hero />
        <DaurerMarquee />
        <SectionProblema />
        <SectionMetodo />
        <Diferencial />

        <ProjectsMarquee />
        <FeedbackImageCarousel />
        <Alinhamento />
        <CtaFinal />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
