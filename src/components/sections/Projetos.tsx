import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { ShinyButton } from "@/components/ui/shiny-button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projetos = [
  {
    title: "Plataforma SaaS",
    category: "Dashboard / Web App",
    description: "Um sistema completo para gestão de frotas com análise de dados em tempo real e relatórios automatizados, entregando informações cruciais de forma limpa e intuitiva.",
    image: project1
  },
  {
    title: "E-commerce Premium",
    category: "Loja virtual",
    description: "Foco total na experiência de compra do usuário com checkout otimizado, design minimalista e moderno, projetado para aumentar as vendas e retenção de clientes.",
    image: project2
  },
  {
    title: "Clínica Médica",
    category: "Site institucional",
    description: "Presença digital profissional que transmite confiança e autoridade. Inclui área para os pacientes e sistema de agendamento ágil totalmente integrado.",
    image: project3
  },
  {
    title: "Restaurante Conceitual",
    category: "Landing page",
    description: "Uma imersão visual no menu e ambiente do restaurante, focado em alta gastronomia, com seções dedicadas à captação de reservas VIP.",
    image: project4
  },
];

export const Projetos = () => {
  const { ref, visible } = useReveal();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % projetos.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="projetos" ref={ref} className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* LADO ESQUERDO: Textos, info rotativa e botão */}
          <div className={`max-w-xl mx-auto lg:mx-0 w-full ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 text-center lg:text-left">Projetos</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-6 text-center lg:text-left">
              Resultado real,{" "}
              <br className="hidden md:block" />
              <span className="text-gradient">na tela.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center lg:text-left">
              Alguns dos sites que desenvolvemos para clientes em diferentes segmentos. Cada linha de código e pixel é pensado para converter visitantes.
            </p>

            {/* Info do site mudando com as imagens */}
            <div className="relative bg-surface/40 border border-border/50 rounded-2xl p-6 md:p-8 min-h-[190px] md:min-h-[180px] flex items-center overflow-hidden shadow-soft mb-10 w-full">
              {projetos.map((p, i) => (
                <div
                  key={i}
                  className={`absolute left-6 right-6 md:left-8 md:right-8 transition-all duration-700 ease-in-out ${
                    i === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"
                  }`}
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-primary mb-2 font-bold">
                    {p.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">{p.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start">
              <a href="#contato" className="w-full sm:w-auto">
                <ShinyButton className="w-full sm:w-auto px-10 py-3">Solicitar Orçamento</ShinyButton>
              </a>
            </div>
          </div>

          {/* LADO DIREITO: Notebook Realista (Macbook Style) */}
          <div className={`flex justify-center items-center py-10 w-full ${visible ? "animate-fade-in delay-200" : "opacity-0"}`}>
            <div className="w-full max-w-[600px] mx-auto lg:mr-0 lg:ml-auto px-6 sm:px-12">
              <div className="relative">
                {/* TELA EXTERNA (LID do Macbook) com arco metálico */}
                <div className="relative bg-[#d1d5db] rounded-[18px] p-[2px] shadow-[0_30px_80px_rgba(0,0,0,0.6)] z-20">
                  <div className="bg-[#111] rounded-[16px] p-[10px] md:p-[14px] relative">
                    
                    {/* CAMERA */}
                    <div className="w-[8px] h-[8px] bg-[#222] rounded-full absolute top-[6px] left-[50%] -translate-x-1/2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]" />

                    {/* TELA INTERNA */}
                    <div className="bg-[#fff] rounded-[8px] overflow-hidden aspect-[16/10] mt-[4px] shadow-inner">
                      {/* CARROSSEL */}
                      <div className="w-full h-full relative bg-surface">
                        {projetos.map((p, i) => (
                          <div
                            key={i}
                            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                          >
                            <img 
                              src={p.image} 
                              alt={`Projeto: ${p.title}`} 
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* BASE REALISTA */}
                <div 
                  className="relative h-[12px] md:h-[18px] bg-gradient-to-b from-[#e5e7eb] to-[#9ca3af] border border-t-0 border-[#cbd5e1] rounded-b-[20px] w-[114%] left-1/2 -translate-x-1/2 shadow-[0_15px_30px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.7)] z-10" 
                >
                  {/* DETALHE TRACKPAD (Somente em telas grandes) */}
                  <div className="hidden md:block absolute w-[18%] h-[40%] bg-[#d1d5db] left-1/2 -translate-x-1/2 rounded-b-[6px] shadow-[inset_0_2px_2px_rgba(0,0,0,0.1)]" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

