import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projetos = [
  { title: "Plataforma SaaS", category: "Dashboard / Web App", image: project1 },
  { title: "E-commerce Premium", category: "Loja virtual", image: project2 },
  { title: "Clínica Médica", category: "Site institucional", image: project3 },
  { title: "Restaurante Conceitual", category: "Landing page", image: project4 },
];

export const Projetos = () => {
  const { ref, visible } = useReveal();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % projetos.length), 4500);
    return () => clearInterval(id);
  }, []);

  const next = () => setIndex((i) => (i + 1) % projetos.length);
  const prev = () => setIndex((i) => (i - 1 + projetos.length) % projetos.length);

  return (
    <section id="projetos" ref={ref} className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />

      <div className="container relative">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Projetos</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            Resultado real,{" "}
            <span className="text-gradient">na tela.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Alguns dos sites que desenvolvemos para clientes em diferentes segmentos.
          </p>
        </div>

        {/* Notebook mockup */}
        <div className={`max-w-5xl mx-auto ${visible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="relative animate-float">
            {/* Screen */}
            <div className="relative rounded-t-2xl bg-[hsl(222_47%_8%)] border border-border border-b-0 p-3 md:p-4 shadow-[0_40px_80px_-20px_hsl(var(--primary)/0.4)]">
              <div className="flex items-center gap-1.5 mb-3 px-1">
                <span className="h-2.5 w-2.5 rounded-full bg-[hsl(0_70%_55%)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[hsl(45_90%_55%)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[hsl(140_60%_50%)]" />
                <div className="ml-3 flex-1 h-5 rounded bg-surface/60 max-w-xs" />
              </div>

              <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-surface">
                {projetos.map((p, i) => (
                  <div
                    key={p.title}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      i === index ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                    }`}
                  >
                    <img
                      src={p.image}
                      alt={`${p.title} — projeto desenvolvido pela Daurer Tech`}
                      width={1280}
                      height={800}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                      <p className="text-[10px] md:text-xs uppercase tracking-widest text-primary mb-1">{p.category}</p>
                      <h3 className="font-display text-lg md:text-2xl font-semibold">{p.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Base */}
            <div className="relative mx-auto h-3 max-w-[105%] rounded-b-3xl bg-gradient-to-b from-[hsl(222_30%_18%)] to-[hsl(222_30%_10%)] border border-border border-t-0" />
            <div className="mx-auto h-1.5 w-1/3 rounded-b-2xl bg-[hsl(222_30%_8%)]" />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              aria-label="Projeto anterior"
              className="h-10 w-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors grid place-items-center"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {projetos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Ir para projeto ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-primary" : "w-1.5 bg-muted hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Próximo projeto"
              className="h-10 w-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors grid place-items-center"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
