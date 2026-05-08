import React, { useRef, lazy, Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { DaurerMarquee } from "@/components/sections/DaurerMarquee";
import { StarBackground } from "@/components/ui/star-background";

// Lazy loading lower sections for better initial performance
const SectionProblema = lazy(() => import("@/components/sections/SectionProblema").then(m => ({ default: m.SectionProblema })));
const SectionMetodo = lazy(() => import("@/components/sections/SectionMetodo").then(m => ({ default: m.SectionMetodo })));
const Diferencial = lazy(() => import("@/components/sections/Diferencial").then(m => ({ default: m.Diferencial })));
const ProjectsMarquee = lazy(() => import("@/components/sections/ProjectsMarquee").then(m => ({ default: m.ProjectsMarquee })));
const FeedbackImageCarousel = lazy(() => import("@/components/sections/FeedbackCarousel"));
const SkillsMarquee = lazy(() => import("@/components/sections/SkillsMarquee").then(m => ({ default: m.SkillsMarquee })));
const Alinhamento = lazy(() => import("@/components/sections/Alinhamento").then(m => ({ default: m.Alinhamento })));
const CtaFinal = lazy(() => import("@/components/sections/CtaFinal").then(m => ({ default: m.CtaFinal })));
const Footer = lazy(() => import("@/components/sections/Footer").then(m => ({ default: m.Footer })));

const Index = () => {
  const containerRef = useRef(null);

  // Fallback loading state - kept minimal to avoid shifts
  const renderFallback = () => <div className="h-96 w-full bg-black" />;

  return (
    <main ref={containerRef} className="min-h-screen bg-black text-foreground relative selection:bg-blue-500/30">
      <StarBackground />
      <div className="relative z-10">
        <Hero />
        <DaurerMarquee />
        
        <Suspense fallback={renderFallback()}>
          <SectionProblema />
          <SectionMetodo />
          <Diferencial />

          <ProjectsMarquee />
          <FeedbackImageCarousel />
          <SkillsMarquee variant="white" />
          <Alinhamento />
          <CtaFinal />
          <Footer />
        </Suspense>
      </div>
    </main>
  );
};

export default Index;
