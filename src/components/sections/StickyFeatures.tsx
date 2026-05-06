import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PhoneMockup } from '../ui/phone-mockup';
import OrbitingSkills from '../ui/orbiting-skills';

const features = [
  {
    title: "Performance e Otimização",
    label: "Páginas rápidas",
    labelColor: "emerald",
    description: "Criamos páginas rápidas, leves e bem estruturadas para que seu cliente não desista antes de conhecer sua oferta.",
    imageUrl: "/dashboard-novo.png.png",
    metrics: [
      { label: "TEMPO DE CARREGAMENTO", value: "Reduzido", color: "text-red-500", trend: "down" },
      { label: "EXPERIÊNCIA DO CLIENTE", value: "Melhorada", color: "text-emerald-400", trend: "up" }
    ]
  },
  {
    title: "E-commerces & Landing Pages",
    label: "Texto para vendas",
    labelColor: "amber",
    description: "Criamos páginas claras, bonitas e com estratégias pensadas para vender. Seja para produtos ou serviços, o foco é transformar visitantes em clientes.",
    imageUrl: "/foto-card2.jpg.png",
    metrics: [
      { label: "CLAREZA", value: "Maior", color: "text-emerald-400", trend: "up" },
      { label: "CONVERSÃO", value: "Alta", color: "text-emerald-400", trend: "up" }
    ]
  },
  {
    title: "Tráfego Pago e Performance",
    label: "Gestão de Anúncios",
    labelColor: "purple",
    description: "Planejamos e gerenciamos seus anúncios para atrair pessoas com real interesse no seu serviço. O foco é investir melhor, gerar mais contatos e transformar cliques em oportunidades de venda.",
    imageUrl: "/integracoes.png",
    metrics: [
      { label: "PÚBLICO", value: "Qualificado", color: "text-emerald-400", trend: "plus" },
      { label: "INVESTIMENTO", value: "Otimizado", color: "text-emerald-400", trend: "plus" }
    ]
  },
  {
    title: "Consultoria e Gestão Pro",
    label: "Parceria Estratégica",
    labelColor: "blue",
    description: "Cuidamos da parte digital para você focar no seu negócio. Acompanhamos site, campanhas e resultados de perto, sempre buscando melhorar sua presença e gerar mais oportunidades.",
    imageUrl: "/dashboard-suporte.png",
    metrics: [
      { label: "ACOMPANHAMENTO", value: "Estratégico", color: "text-emerald-400", trend: "up" },
      { label: "RESULTADOS", value: "Monitorados", color: "text-emerald-400", trend: "up" }
    ]
  }
];

const useScrollAnimation = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
};

const AnimatedHeader = () => {
  const [headerRef, headerInView] = useScrollAnimation();
  const [pRef, pInView] = useScrollAnimation();

  return (
    <div className="text-center max-w-5xl mx-auto mb-10 md:mb-16 pb-8">
      <h2 
        ref={headerRef as any}
        className={`text-2xl md:text-5xl font-extrabold text-white leading-[1.1] mb-6 transition-all duration-700 ease-out ${headerInView ? 'animate-reveal-fall' : 'opacity-0'}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        A verdadeira diferença é uma página projetada com fundamentos.{" "}
        <span className="font-['Playfair_Display'] italic font-medium text-white block mt-2">
          E não palpites!
        </span>
      </h2>
    </div>
  );
};

export const StickyFeatures = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const getLabelColors = (color: string) => {
    switch(color) {
      case 'emerald': return 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400';
      case 'amber': return 'bg-amber-500/10 border-amber-500/20 text-amber-500';
      case 'purple': return 'bg-purple-500/10 border-purple-500/20 text-purple-400';
      case 'blue': return 'bg-blue-500/10 border-blue-500/20 text-blue-400';
      default: return 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400';
    }
  };

  return (
    <section ref={containerRef} className="relative pt-12 pb-32 md:pt-20 md:pb-56 font-['Open_Sans'] z-0">
      <div className="container relative z-10 mx-auto px-6">
        
        <AnimatedHeader />

        <div className="relative w-full max-w-6xl mx-auto flex flex-col gap-8 md:gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              ref={index === 2 ? card3Ref : null}
              className="sticky w-full transition-all duration-300 transform-gpu will-change-transform"
              style={{ 
                top: isMobile 
                  ? `${60 + (index * 45)}px` 
                  : `calc(50vh - 300px + ${index * 55}px)`, 
                zIndex: index + 1,
              }}
            >
              <div 
                className="relative rounded-[40px] border border-white/10 bg-[#030303] p-8 md:p-14 lg:p-14 transition-all duration-700 hover:border-white/20 group shadow-2xl min-h-[660px] md:min-h-[600px] flex items-center"
                style={{
                   backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                   backgroundSize: '3px 100%'
                }}
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=1000&auto=format&fit=crop')] opacity-[0.02] grayscale mix-blend-overlay pointer-events-none rounded-[40px]" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-[40px]" />
                
                {/* Tema / Categoria - Absoluto no CARD, evitando o padding interno */}
                <div className={`absolute top-6 left-8 md:top-6 md:left-12 inline-flex items-center px-3 py-1 rounded-full border-none w-fit bg-white/5 backdrop-blur-sm z-20 ${getLabelColors(feature.labelColor || '')}`}>
                  <span className="text-[12px] md:text-[13px] font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {feature.label}
                  </span>
                </div>

                <div className="relative z-10 w-full flex flex-col pt-4 md:pt-4">

                  {/* Title with horizontal line */}
                  <div className="flex items-center gap-6 mb-6 w-full group/title">
                     <h3 className="text-xl md:text-3xl font-['Playfair_Display'] italic font-medium text-white md:whitespace-nowrap leading-tight">
                       {feature.title}
                     </h3>
                     <div className="h-[0.5px] flex-grow bg-white/10 transition-all duration-700 group-hover/title:bg-white/30" />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
                    <div className="flex flex-col">
                      <p className="text-gray-200 text-sm md:text-lg leading-[1.8] md:leading-loose mb-6 md:mb-10 max-w-lg font-medium opacity-100">
                        {feature.description}
                      </p>

                      {feature.metrics && (
                        <div className="flex flex-row gap-4 mt-2 md:mt-4">
                          {feature.metrics.map((metric, idx) => (
                            <div key={idx} className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-3 md:p-4 min-w-[120px] md:min-w-[144px] w-fit transition-all duration-300 hover:border-emerald-500/10 shadow-xl">
                              <p className="text-[8px] md:text-[9px] text-gray-500 mb-1 md:mb-2 uppercase tracking-[0.05em] font-bold">{metric.label}</p>
                              <div className={`flex ${metric.trend === 'plus' ? 'flex-row items-center gap-1.5' : 'flex-col gap-0.5'}`}>
                                <span className={`text-base md:text-xl font-extrabold ${metric.color}`}>
                                  {metric.value}
                                </span>
                                <motion.div 
                                  animate={{ y: [0, metric.trend === 'plus' ? -3 : metric.trend === 'up' ? -3 : 3, 0] }}
                                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                  className={`${metric.color} ${metric.trend === 'plus' ? 'text-xl md:text-2xl font-black' : 'text-xs'}`}
                                >
                                  {metric.trend === 'up' ? (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                  ) : metric.trend === 'down' ? (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-180"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                  ) : metric.trend === 'plus' ? (
                                    "+"
                                  ) : null}
                                </motion.div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="relative group/media flex justify-center items-center">
                      <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full opacity-30" />
                      {index === 2 ? (
                        <div className="relative w-full aspect-square max-w-[280px] md:max-w-[400px] flex justify-center">
                          <OrbitingSkills />
                        </div>
                      ) : (
                        <div className="relative transition-transform duration-700 group-hover/media:scale-[1.05] w-full flex justify-center transform-gpu will-change-transform">
                            <img 
                              src={feature.imageUrl} 
                              alt={feature.title}
                              loading="lazy"
                              decoding="async"
                              className="max-w-full h-auto max-h-[260px] md:max-h-[460px] object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)] rounded-2xl transform-gpu"
                            />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500;1,600&display=swap');
        .italic-shadow {
          text-shadow: 0 4px 12px rgba(0, 157, 255, 0.2);
        }
      `}</style>
    </section>
  );
};
