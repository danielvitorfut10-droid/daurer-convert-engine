import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { SkillsMarquee } from "@/components/sections/SkillsMarquee";
import { Problema } from "@/components/sections/Problema";
import { Diferencial } from "@/components/sections/Diferencial";
import { Projetos } from "@/components/sections/Projetos";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <SkillsMarquee />
      <Problema />
      <Projetos />
      <Diferencial />
      <Depoimentos />
      <CtaFinal />
      <Faq />
      <Footer />
    </main>
  );
};

export default Index;
