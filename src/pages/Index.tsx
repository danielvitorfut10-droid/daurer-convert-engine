import { Hero } from "@/components/sections/Hero";
import { ProjectsMarquee } from "@/components/sections/ProjectsMarquee";
import { DaurerMarquee } from "@/components/sections/DaurerMarquee";
import { Diferencial } from "@/components/sections/Diferencial";
import { Alinhamento } from "@/components/sections/Alinhamento";
import { useRef } from "react";

import { CtaFinal } from "@/components/sections/CtaFinal";
import { Footer } from "@/components/sections/Footer";
import FeedbackImageCarousel from "@/components/sections/FeedbackCarousel";
import { SectionProblema } from "@/components/sections/SectionProblema";
import { SectionMetodo } from "@/components/sections/SectionMetodo";
import { SkillsMarquee } from "@/components/sections/SkillsMarquee";
import { StarBackground } from "@/components/ui/star-background";

const Index = () => {
  const containerRef = useRef(null);

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
        <SkillsMarquee variant="white" />
        <Alinhamento />
        <CtaFinal />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
