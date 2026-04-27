import { Instagram, Linkedin, MessageCircle, Mail } from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/site";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-background pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-brand grid place-items-center">
                <span className="text-primary-foreground font-display font-black text-sm">D</span>
              </div>
              <span className="font-display font-bold text-lg">{SITE.name}</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Agência de sites estratégicos focada em conversão. Transformamos a sua presença digital em uma máquina ativa de geração de clientes.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm">Navegação</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#projetos" className="hover:text-primary transition-colors">Projetos</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm">Contato</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:contato@daurertech.com" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" /> contato@daurertech.com
                </a>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a href="#" aria-label="Instagram" className="h-9 w-9 rounded-full border border-border grid place-items-center hover:border-primary hover:text-primary transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" aria-label="LinkedIn" className="h-9 w-9 rounded-full border border-border grid place-items-center hover:border-primary hover:text-primary transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Feito com estratégia, design e código.
          </p>
        </div>
      </div>
    </footer>
  );
};
