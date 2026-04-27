import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-border/50 py-3" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-lg bg-gradient-brand grid place-items-center shadow-[0_0_24px_hsl(var(--primary)/0.5)] transition-transform group-hover:scale-110">
            <span className="text-primary-foreground font-display font-black text-sm">D</span>
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            {SITE.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="hero" size="sm">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1" />
              Falar com especialista
            </a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          aria-label="Abrir menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border/50 animate-fade-in">
          <div className="container py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/90 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="hero" className="w-full">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-1" />
                Falar com especialista
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
