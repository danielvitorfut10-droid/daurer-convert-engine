import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/marquee';
import { useReveal } from "@/hooks/use-reveal";
import PrintsCarousel from '@/components/ui/prints-carousel';

const testimonials = [
  {
    name: 'Ava Green',
    username: '@ava',
    body: 'Cascade AI made my workflow 10x faster!',
    img: 'https://randomuser.me/api/portraits/women/32.jpg',
    country: '🇦🇺 Australia',
  },
  {
    name: 'Ana Miller',
    username: '@ana',
    body: 'Vertical marquee is a game changer!',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    country: '🇩🇪 Germany',
  },
  {
    name: 'Mateo Rossi',
    username: '@mat',
    body: 'Animations are buttery smooth!',
    img: 'https://randomuser.me/api/portraits/men/51.jpg',
    country: '🇮🇹 Italy',
  },
  {
    name: 'Maya Patel',
    username: '@maya',
    body: 'Setup was a breeze!',
    img: 'https://randomuser.me/api/portraits/women/53.jpg',
    country: '🇮🇳 India',
  },
  {
    name: 'Noah Smith',
    username: '@noah',
    body: 'Best marquee component!',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
    country: '🇺🇸 USA',
  },
  {
    name: 'Lucas Stone',
    username: '@luc',
    body: 'Very customizable and smooth.',
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
    country: '🇫🇷 France',
  },
  {
    name: 'Haruto Sato',
    username: '@haru',
    body: 'Impressive performance on mobile!',
    img: 'https://randomuser.me/api/portraits/men/85.jpg',
    country: '🇯🇵 Japan',
  },
  {
    name: 'Emma Lee',
    username: '@emma',
    body: 'Love the pause on hover feature!',
    img: 'https://randomuser.me/api/portraits/women/45.jpg',
    country: '🇨🇦 Canada',
  },
  {
    name: 'Carlos Ray',
    username: '@carl',
    body: 'Great for testimonials and logos.',
    img: 'https://randomuser.me/api/portraits/men/61.jpg',
    country: '🇪🇸 Spain',
  },
];

function TestimonialCard({ img, name, username, body, country }: (typeof testimonials)[number]) {
  return (
    <Card className="w-80 bg-white/[0.02] border-primary/30 backdrop-blur-md hover:bg-white/[0.05] transition-all duration-500 shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
      <CardContent className="p-6">
        <div className="flex items-center gap-3">
          <Avatar className="size-10 border border-primary/20">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-semibold text-white flex items-center gap-2">
              {name} <span className="text-[10px] opacity-60">{country}</span>
            </figcaption>
            <p className="text-xs text-primary/70 font-medium">{username}</p>
          </div>
        </div>
        <blockquote className="mt-4 text-sm text-gray-300 leading-relaxed italic">
          "{body}"
        </blockquote>
      </CardContent>
    </Card>
  );
}

export const Depoimentos = () => {
  const { ref, visible } = useReveal();
  
  return (
    <section id="feedbacks" ref={ref} className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Deep Immersive Backdrop with Light Bleed from Top */}
      <div className="absolute inset-0 h-full w-full bg-black">
        <div className="absolute inset-0 h-full w-full bg-[radial-gradient(100%_100%_at_50%_-20%,#3b82f640_0%,#1e1b4b20_35%,#000000_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 mb-8">
        <div className={`max-w-3xl mx-auto text-center ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
             <div className="size-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#3b82f6]" />
             <span className="text-[10px] font-bold text-blue-400 lg:text-xs uppercase tracking-[0.2em]">Cases de sucesso</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white/90">
            O que nossos clientes dizem...
          </h2>
        </div>
      </div>

      <div className={`relative w-full ${visible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: '300ms' }}>
        <PrintsCarousel />
      </div>
    </section>
  );
};
