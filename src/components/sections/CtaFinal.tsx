import { useState } from "react";
import { z } from "zod";
import { MessageCircle, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { whatsappUrl, SITE } from "@/lib/site";
import { useReveal } from "@/hooks/use-reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Informe o seu nome").max(80, "Nome muito longo"),
  contact: z.string().trim().min(8, "Informe um WhatsApp ou e-mail válido").max(120, "Contato muito longo"),
});

export const CtaFinal = () => {
  const { ref, visible } = useReveal();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", contact: "" });
  const [errors, setErrors] = useState<{ name?: string; contact?: string }>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: { name?: string; contact?: string } = {};
      result.error.issues.forEach((i) => {
        const k = i.path[0] as "name" | "contact";
        fieldErrors[k] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const message = `Olá! Sou ${result.data.name} e quero falar com um especialista da Daurer Tech. Meu contato: ${result.data.contact}`;
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    toast({
      title: "Tudo certo!",
      description: "Estamos te redirecionando para o WhatsApp para continuar a conversa.",
    });
    setForm({ name: "", contact: "" });
  };

  return (
    <section id="contato" ref={ref} className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />

      <div className="container relative">
        <div className={`max-w-5xl mx-auto rounded-3xl border border-primary/30 bg-surface/60 backdrop-blur-xl p-8 md:p-14 lg:p-20 overflow-hidden relative ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-[100px]" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary-glow/20 blur-[100px]" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Vamos conversar</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-6">
                Pronto para ter um site que <span className="text-gradient">vende por você</span>?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Conte rapidinho sobre o seu projeto. Em poucos minutos retornamos no WhatsApp com a melhor forma de te ajudar.
              </p>
              <Button asChild variant="hero" size="xl">
                <a href={whatsappUrl(SITE.whatsappMessage)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle />
                  Chamar no WhatsApp agora
                  <ArrowRight />
                </a>
              </Button>
            </div>

            <form onSubmit={onSubmit} className="rounded-2xl bg-background/60 border border-border p-6 md:p-8 space-y-5" noValidate>
              <div>
                <Label htmlFor="name" className="text-sm">Seu nome</Label>
                <Input
                  id="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Como podemos te chamar?"
                  className="mt-2 h-12 bg-surface/60 border-border focus-visible:ring-primary"
                  maxLength={80}
                />
                {errors.name && <p className="text-xs text-destructive mt-1.5">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="contact" className="text-sm">WhatsApp ou e-mail</Label>
                <Input
                  id="contact"
                  type="text"
                  autoComplete="tel"
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  placeholder="(11) 99999-9999 ou seu@email.com"
                  className="mt-2 h-12 bg-surface/60 border-border focus-visible:ring-primary"
                  maxLength={120}
                />
                {errors.contact && <p className="text-xs text-destructive mt-1.5">{errors.contact}</p>}
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send />
                Quero meu site estratégico
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Resposta em até 24h. Sem spam, prometido.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
