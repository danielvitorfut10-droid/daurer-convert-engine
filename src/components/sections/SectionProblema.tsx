import React from 'react';
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
    window.open(whatsappUrl(), "_blank");
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
    <section className="bg-black relative pt-16 md:pt-24 pb-32">
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
              <h2 className="text-[32px] md:text-5xl lg:text-[4rem] font-bold text-center tracking-tight leading-[1.15] text-white/95 pt-4">
                O Problema não é <br />
                o <span className="text-white">produto</span>... é o <br />
                <span className="text-glow-animated font-['Lora'] italic font-medium block mt-3 md:mt-4 text-[1.2em] md:text-[1.3em] drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">Método de vendas!</span>
              </h2>
            </div>
          </div>

          {/* Camada 2: Cards Físicos. mt- reduzido para começarem mais cedo no scroll. */}
          <div className="col-start-1 row-start-1 w-full mt-12 md:mt-16 relative z-10">
            {problemCardsData.map((card, i) => (
              <ScrollCardItem key={i} stickyTop="top-40 md:top-48" className="z-10">
                <article
                  className={`relative h-[280px] md:h-[340px] w-full max-w-2xl mx-auto rounded-3xl ${card.rotation} p-8 md:p-12 flex flex-col justify-center gap-6 bg-[#0B0D17]/95 backdrop-blur-3xl border ${neonBorders[i]} ${neonShadows[i]} transition-all duration-700 overflow-hidden`}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 ${neonGlows[i]} blur-[50px] rounded-full transition-colors duration-1000`} />
                  <p className="text-xl md:text-2xl lg:text-[28px] text-white/90 leading-snug font-medium text-center md:text-left relative z-10">
                    {renderText(card.text)}
                  </p>
                </article>
              </ScrollCardItem>
            ))}
          </div>

        </div>

        {/* CTA Button Estático -> Fixo no final da aba em relação ao fluxo natural da página. 
            Ele não é "sticky", então o uso de margem negativa o puxa para perto do último card preenchendo o vazio da figura 80vh. */}
        <div className="relative z-20 flex flex-col items-center justify-center -mt-12 md:-mt-24 pb-12">
          <div className="max-w-md w-full sm:w-auto">
            <ShinyButton 
              onClick={handleCtaClick}
              className="w-full px-12 md:px-20 py-5 text-lg md:text-[20px] shadow-[0_0_60px_rgba(59,130,246,0.3)] transition-all"
            >
              Método Validado
            </ShinyButton>
          </div>
        </div>
        
      </div>
    </section>
  );
};
