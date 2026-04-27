import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useReveal } from "@/hooks/use-reveal";

const faqs = [
  {
    q: "Quanto tempo leva para entregar o meu site?",
    a: "O prazo médio é de 7 a 21 dias, dependendo da complexidade do projeto. Landing pages saem mais rápido; sites institucionais com mais páginas levam um pouco mais.",
  },
  {
    q: "Quanto custa um site da Daurer Tech?",
    a: "O investimento varia conforme o objetivo, número de páginas e funcionalidades. Após uma conversa rápida no WhatsApp, enviamos uma proposta personalizada e transparente.",
  },
  {
    q: "Vocês cuidam do domínio e da hospedagem?",
    a: "Sim. Te orientamos na escolha do domínio e configuramos toda a hospedagem, e-mails e certificados de segurança. Você não precisa se preocupar com a parte técnica.",
  },
  {
    q: "O site é responsivo e otimizado?",
    a: "Sempre. Todos os projetos são desenvolvidos mobile-first, com carregamento rápido, responsividade total e SEO básico estruturado para o Google.",
  },
  {
    q: "Tem manutenção depois da entrega?",
    a: "Oferecemos planos de manutenção mensais para atualizações, alterações e suporte contínuo. Você escolhe se prefere contratar ou apenas chamar quando precisar.",
  },
  {
    q: "Posso integrar com WhatsApp e outras ferramentas?",
    a: "Sim. Integramos com WhatsApp, formulários, Google Analytics, Pixel do Facebook e outras ferramentas que façam sentido para o seu negócio.",
  },
];

export const Faq = () => {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="relative py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          <div className={visible ? "animate-fade-in-up" : "opacity-0"}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Dúvidas <span className="text-gradient">frequentes</span>.
            </h2>
            <p className="text-muted-foreground mt-4">
              Não encontrou a resposta? Chama a gente no WhatsApp.
            </p>
          </div>

          <div className={visible ? "animate-fade-in-up" : "opacity-0"} style={{ animationDelay: "120ms" }}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-xl border border-border bg-surface/40 px-5 hover:border-primary/40 transition-colors data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left font-medium py-5 hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
