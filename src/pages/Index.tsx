import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Problema } from "@/components/sections/Problema";
import { Solucao } from "@/components/sections/Solucao";
import { Servicos } from "@/components/sections/Servicos";
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
      <Problema />
      <Solucao />
      <Servicos />
      <Diferencial />
      <Projetos />
      <Depoimentos />
      <CtaFinal />
      <Faq />
      <Footer />
    </main>
  );
};

export default Index;
