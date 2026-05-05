import { useState, useEffect } from "react";
import { CheckCircle2, ChevronRight, Send, Rocket, Target, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { whatsappUrl } from "@/lib/site";
import { useReveal } from "@/hooks/use-reveal";

const solutions = [
  {
    id: "lp",
    tab: "Landing Page",
    tag: "Presença digital",
    title: "Landing Page",
    price: "497",
    description: "Sua landing page não é apenas uma página bonita. Ela precisa guiar o visitante até a ação certa. Criamos páginas focadas em conversão, com estrutura clara, copy direcionada e visual profissional para transformar cliques em contatos e vendas.",
    benefits: [
      "Estrutura de conversão validada",
      "Design Premium (Conversão)",
      "Copy estratégica com funil",
      "Botões de WhatsApp e CTA estratégicos",
      "Carregamento ultra-rápido",
      "Ideal para tráfego pago"
    ],
    image: "/Celular-lading.png",
    color: "#06b6d4"
  },
  {
    id: "pv",
    tab: "Página de Vendas",
    tag: "Presença digital",
    title: "Página de Vendas",
    price: "497",
    description: "Sua página de vendas não pode ser só uma vitrine bonita. Ela precisa apresentar sua oferta com clareza, quebrar objeções e conduzir o visitante até a decisão de compra. Criamos infraestruturas dark premium projetadas para lucrar.",
    benefits: [
      "Estrutura de conversão validada",
      "Apresentação clara da oferta",
      "Seções para benefícios e provas",
      "Copy persuasiva focada em ROI",
      "Design premium e responsivo",
      "Ideal para lançamentos e produtos"
    ],
    image: "/lp6.jpg.jpeg",
    color: "#3b82f6"
  },
  {
    id: "eco",
    tab: "Ecommerce",
    tag: "Presença digital",
    title: "Loja Virtual / Ecommerce",
    price: "497",
    description: "Um ecommerce precisa passar confiança desde o primeiro clique. Criamos lojas virtuais com visual profissional, organização clara dos produtos e experiência pensada para facilitar a compra e aumentar seu faturamento online.",
    benefits: [
      "Loja virtual com visual profissional",
      "Organização estratégica de produtos",
      "Experiência pensada para conversão",
      "Layout responsivo premium",
      "Integração com WhatsApp e Checkouts",
      "Gestão simplificada de pedidos"
    ],
    image: "/celular-ecom.jpeg",
    color: "#6366f1"
  }
];

export const CtaFinal = () => {
  const { ref, visible } = useReveal();
  const [activeTab, setActiveTab] = useState(solutions[0]);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    nameCompany: "",
    siteType: "",
    objective: ""
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSend = () => {
    if (!formData.nameCompany) return;
    const message = `Olá! Acabei de preencher o briefing no site:
    
👤 *Nome/Empresa:* ${formData.nameCompany}
🌐 *Tipo de projeto:* ${formData.siteType || activeTab.tab}
🎯 *Objetivo:* ${formData.objective || "Vender/Crescer"}

Tenho interesse na solução de *${activeTab.title}* de R$ ${activeTab.price}.`;

    window.open(whatsappUrl(message), "_blank");
    setOpen(false);
  };

  return (
    <section id="contato" ref={ref} className="relative py-20 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className={`text-center max-w-4xl mx-auto mb-8 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tighter leading-[0.9]">
            Qual é o seu objetivo?
          </h2>
          <p className="text-white text-xs md:text-base leading-tight max-w-2xl mx-auto px-4 tracking-tight font-medium opacity-80">
            Escolha abaixo o tipo de site que mais combina com o momento do seu negócio. Cada opção foi pensada para transformar visitantes em oportunidades reais.
          </p>
        </div>

        <div className="flex flex-row justify-center items-center gap-2 md:gap-3 mb-12 overflow-x-auto pb-2 no-scrollbar">
          {solutions.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s)}
              className={`whitespace-nowrap px-6 py-3 rounded-xl text-sm md:text-base font-bold transition-all duration-300 border h-12 md:h-14 min-w-[120px] flex items-center justify-center text-center ${
                activeTab.id === s.id 
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
                  : "bg-black text-white border-white/5 hover:border-white/20"
              }`}
            >
              {s.tab}
            </button>
          ))}
        </div>

        <div className={`max-w-6xl mx-auto ${visible ? "animate-reveal-fall" : "opacity-0"}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              <div className="relative order-1 flex justify-center scale-95 lg:scale-100">
                <div 
                  className="absolute -inset-20 blur-[150px] opacity-10 transition-colors duration-700 pointer-events-none" 
                  style={{ backgroundColor: activeTab.color }}
                />
                <div className="relative group/mockup">
                  <div className={`relative rounded-[24px] overflow-hidden aspect-[3/4] md:aspect-[4/5] w-[240px] md:w-[340px] flex items-center justify-center transition-all ${activeTab.id === 'lp' || activeTab.id === 'eco' ? 'bg-transparent border-none' : 'bg-black border border-white/5 shadow-2xl'}`}>
                    <img 
                      src={activeTab.image} 
                      alt={activeTab.title} 
                      className={`w-full h-full transition-all duration-700 ${activeTab.id === 'lp' || activeTab.id === 'eco' ? 'object-contain' : 'object-cover opacity-90'}`} 
                    />
                    {activeTab.id !== 'lp' && activeTab.id !== 'eco' && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    )}
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left order-2 mt-8 lg:mt-0 px-2 lg:px-0">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/10 bg-blue-500/5 backdrop-blur-md mb-6 group/tag">
                  <div className="relative w-1.5 h-1.5"><div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75" /><div className="relative w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]" /></div>
                  <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Presença digital</span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tighter leading-none opacity-95">
                  {activeTab.tab}
                </h3>

                <div className="flex flex-col gap-0 mb-8">
                  <span className="text-white text-[10px] uppercase font-bold tracking-[0.2em] mb-1 opacity-60">à partir de:</span>
                  <span className="text-4xl md:text-7xl font-medium text-white tracking-tighter leading-none">R$ {activeTab.price}</span>
                </div>

                <p className="text-white text-sm md:text-base leading-tight mb-8 font-medium max-w-lg opacity-80 tracking-tight">
                  {activeTab.description}
                </p>

                <div className="flex flex-col gap-3 mb-10 w-full max-w-sm">
                  {activeTab.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2.5 transition-transform hover:translate-x-1 duration-300">
                      <div className="bg-emerald-500/20 rounded-full p-1 flex-shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.2)]"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /></div>
                      <span className="text-white text-xs md:text-sm font-medium leading-tight tracking-tight text-left opacity-90">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="hero" 
                      size="xl" 
                      className="w-full lg:w-fit px-10 h-14 md:h-16 text-base font-bold rounded-xl shadow-[0_15px_40px_rgba(6,182,212,0.1)] hover:scale-[1.02] active:scale-95 transition-all flex gap-4 pr-12 relative group/cta overflow-hidden"
                      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #020617 100%)', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      <span className="text-white tracking-tight">SOLICITAR ANÁLISE</span>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/cta:bg-blue-500/20 group-hover/cta:border-blue-500/40 transition-all font-mono">
                        <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></div>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[450px] bg-slate-950 border-white/10 backdrop-blur-2xl text-white rounded-[32px] p-8">
                    <DialogHeader className="space-y-2 mb-6">
                      <DialogTitle className="text-3xl font-bold tracking-tighter text-white">Briefing rápido</DialogTitle>
                      <DialogDescription className="text-slate-400 text-sm leading-snug">
                        Preencha para iniciarmos seu projeto de <strong>{activeTab.tab}</strong>.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold text-slate-300">1. Nome e empresa</Label>
                        <Input 
                          placeholder="Ex: João - Loja Alpha" 
                          className="h-12 bg-white/5 border-white/10 rounded-xl focus:border-blue-500/50 transition-all font-medium text-sm"
                          value={formData.nameCompany}
                          onChange={(e) => setFormData({...formData, nameCompany: e.target.value})}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold text-slate-300">2. Tipo de site</Label>
                        <Select value={formData.siteType || activeTab.tab} onValueChange={(v) => setFormData({...formData, siteType: v})}>
                          <SelectTrigger className="h-12 bg-white/5 border-white/10 rounded-xl focus:ring-blue-500/50 text-sm">
                            <SelectValue placeholder="Selecione o tipo" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-900 border-white/10 text-white rounded-xl">
                            <SelectItem value="Landing Page">Landing Page</SelectItem>
                            <SelectItem value="Página de Vendas">Página de Vendas</SelectItem>
                            <SelectItem value="Ecommerce">Ecommerce</SelectItem>
                            <SelectItem value="Site institucional">Site institucional</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold text-slate-300">3. Objetivo principal</Label>
                        <Select onValueChange={(v) => setFormData({...formData, objective: v})}>
                          <SelectTrigger className="h-12 bg-white/5 border-white/10 rounded-xl focus:ring-blue-500/50 text-sm">
                            <SelectValue placeholder="Qual o seu foco?" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-900 border-white/10 text-white rounded-xl">
                            <SelectItem value="Vender mais">Vender mais</SelectItem>
                            <SelectItem value="Captar leads">Captar leads</SelectItem>
                            <SelectItem value="Agendar atendimentos">Agendar atendimentos</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button 
                        onClick={handleSend}
                        disabled={!formData.nameCompany}
                        className="w-full h-12 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg mt-2 flex gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Enviar no WhatsApp
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
