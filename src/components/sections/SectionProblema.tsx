import React from 'react';
import { motion } from 'framer-motion';
import { whatsappUrl } from '@/lib/site';
import { ScrollCardItem } from '@/components/ui/scroll-card';
import { ShinyButton } from '@/components/ui/shiny-button';

interface ProblemCardData {
  text: string;
  rotation: string;
}

const problemCardsData: ProblemCardData[] = [
  {
    text: 'Sua loja tem **bons produtos**, mas o digital ainda não transmite **confiança** para comprar.',
    rotation: 'rotate-2',
  },
  {
    text: 'O cliente chega interessado, mas se perde em um processo de compra **manual e desorganizado**.',
    rotation: '-rotate-6',
  },
  {
    text: 'Sua loja depende demais do **Instagram** e do **WhatsApp** para conseguir vender.',
    rotation: 'rotate-6',
  },
  {
    text: 'Seu concorrente não vende mais por ter um produto melhor, mas por ter uma **estrutura mais clara**.',
    rotation: '-rotate-3',
  },
  {
    text: 'Sem um **método de venda estruturado**, suas vendas ficam instáveis e difíceis de prever.',
    rotation: 'rotate-2',
  },
];

export const SectionProblema = () => {
  const handleCtaClick = () => {
    const message = "Olá, vim pelo site da Daurer. Vi que minha loja pode estar perdendo vendas por falta de um método mais claro, e quero entender como posso resolver isso.";
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  // Helper to render bold text
  const renderText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-white font-bold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  // Evolução do Efeito Neon por Card (do 1 ao 5)
  const neonGlows = [
    "bg-[#3B82F6]/5",   // Card 1
    "bg-[#3B82F6]/15",  // Card 2
    "bg-[#3B82F6]/25",  // Card 3
    "bg-[#3B82F6]/40",  // Card 4
    "bg-[#3B82F6]/60"   // Card 5
  ];
  const neonShadows = [
    "shadow-[0_0_40px_rgba(30,58,138,0.15)]",
    "shadow-[0_0_50px_rgba(30,58,138,0.25)]",
    "shadow-[0_0_60px_rgba(30,58,138,0.4)]",
    "shadow-[0_0_80px_rgba(59,130,246,0.6)]",
    "shadow-[0_0_100px_rgba(59,130,246,0.85)]"
  ];
  const neonBorders = [
    "border-[#3B82F6]/10",
    "border-[#3B82F6]/20",
    "border-[#3B82F6]/30",
    "border-[#3B82F6]/50",
    "border-[#3B82F6]/80"
  ];

  return (
    <section className="bg-black relative pt-16 md:pt-24 pb-8 md:pb-16">

      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* CSS Grid para sobrepor Título e Cards. Garante alinhamento físico total das ancoragens. */}
        <div className="grid grid-cols-1 items-start w-full relative">
          
          {/* Camada 1: Título Fixo. 
              Nova matemática para encurtar a distância mantendo a sincronia de saída:
              Title top: 16 (64px) / 20 (80px)
              Cards top: 40 (160px) / 48 (192px)
              Alturas Título = (Cards Top + Card Height) - Title Top
              Mobile: 160 + 70vh - 64 = 70vh + 96px
              MD: 192 + 80vh - 80 = 80vh + 112px
          */}
          <div className="col-start-1 row-start-1 w-full pointer-events-none relative z-0 h-full">
            <div className="sticky top-16 md:top-20 z-0 w-full flex flex-col justify-start h-[calc(70vh+96px)] md:h-[calc(80vh+112px)] border border-transparent">

              {/* God-ray STICKY — fica fixo no topo enquanto o usuário rola pelos cards */}
              <div
                className="absolute pointer-events-none left-1/2 -translate-x-1/2"
                style={{
                  top: '-40px',
                  width: '600px',
                  height: '480px',
                  background: 'conic-gradient(from 180deg at 50% 0%, transparent 0deg, rgba(96,165,250,0.16) 20deg, rgba(147,197,253,0.10) 30deg, rgba(96,165,250,0.16) 40deg, transparent 60deg)',
                  filter: 'blur(28px)',
                }}
              />
              {/* Secondary softer ray */}
              <div
                className="absolute pointer-events-none left-1/2 -translate-x-1/2"
                style={{
                  top: '-20px',
                  width: '360px',
                  height: '300px',
                  background: 'conic-gradient(from 180deg at 50% 0%, transparent 0deg, rgba(186,230,253,0.08) 25deg, transparent 50deg)',
                  filter: 'blur(20px)',
                }}
              />

              <motion.h2 
                initial={{ opacity: 0, y: -80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2 
                }}
                className="text-[32px] md:text-5xl lg:text-[4rem] font-bold text-center tracking-tight leading-[1.15] text-white/95 pt-4 relative z-10"
              >
                O Problema não é <br />
                o <span className="text-white">produto</span>... é o <br />
                <span className="text-glow-animated font-['Lora'] italic font-medium block mt-3 md:mt-4 text-[1.2em] md:text-[1.3em] drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">Método de vendas!</span>
              </motion.h2>
            </div>
          </div>

          {/* Camada 2: Cards Físicos. mt- reduzido para começarem mais cedo no scroll. */}
          <div className="col-start-1 row-start-1 w-full mt-12 md:mt-16 relative z-10">
            {problemCardsData.map((card, i) => {
              const zValues = ["z-10", "z-20", "z-30", "z-40", "z-50"];
              // Offsets progressivos para criar o efeito de "maço de cartas"
              const topOffsets = [
                "top-32 md:top-40",
                "top-36 md:top-44",
                "top-40 md:top-48",
                "top-44 md:top-52",
                "top-48 md:top-56"
              ];
              return (
              <ScrollCardItem key={i} stickyTop={topOffsets[i]} className={zValues[i]}>
                <article
                  className={`relative h-[320px] md:h-[400px] w-full max-w-2xl mx-auto rounded-3xl ${card.rotation} p-8 md:p-12 flex flex-col justify-center gap-6 bg-[#0B0D17] border ${neonBorders[i]} ${neonShadows[i]} transition-all duration-700 overflow-hidden group will-change-transform`}
                >
                  {/* Central Radial Light — ponto de luz central forte */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(59,130,246,0.22),transparent_65%)] pointer-events-none" />

                  {/* Ambient glow top-right */}
                  <div className={`absolute -top-10 -right-10 w-56 h-56 ${neonGlows[i]} blur-[70px] rounded-full transition-opacity duration-1000 opacity-70 group-hover:opacity-100`} />
                  {/* Ambient glow bottom-left */}
                  <div className={`absolute -bottom-10 -left-10 w-44 h-44 ${neonGlows[i]} blur-[55px] rounded-full transition-opacity duration-1000 opacity-40`} />

                  {/* Shine Glint — feixe de luz diagonal */}
                  <motion.div 
                    initial={{ x: "-100%", skewX: -25 }}
                    whileInView={{ x: "200%" }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none z-20"
                  />

                  {/* Borda neon no topo — brilho de aresta 3D */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                  {/* Mini ponto de luz central no topo */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] ${neonGlows[i]} blur-md`} />

                  <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 leading-tight font-bold text-center md:text-left relative z-10 drop-shadow-sm">
                    {renderText(card.text)}
                  </p>
                </article>
              </ScrollCardItem>
              );
            })}
          </div>

        </div>

        {/* CTA Button Estático -> Fixo no final da aba em relação ao fluxo natural da página. 
            Ele não é "sticky", então o uso de margem negativa o puxa para perto do último card preenchendo o vazio da figura 80vh. */}
        {/* CTA Button Estático */}
        <div className="relative z-20 flex flex-col items-center justify-center pt-20 pb-12">
          <ShinyButton 
            onClick={handleCtaClick}
            className="px-14 py-5 text-xl md:text-2xl font-semibold shadow-[0_0_80px_rgba(59,130,246,0.55)] transition-all"
            style={{
              '--shiny-cta-bg': '#1a3a8f',
              '--shiny-cta-bg-subtle': '#2563eb',
              '--shiny-cta-highlight': '#3b82f6',
              '--shiny-cta-highlight-subtle': '#60a5fa',
            } as React.CSSProperties}
          >
            RESOLVER AGORA!
          </ShinyButton>
        </div>

        {/* Base light for the divider to illuminate upwards */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#3B82F6]/20 blur-[60px] rounded-full translate-y-1/2 pointer-events-none" />
      </div>
    </section>
  );
};
