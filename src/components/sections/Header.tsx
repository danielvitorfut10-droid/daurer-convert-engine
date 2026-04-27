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
        "fixed z-50 transition-all duration-300 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl rounded-full overflow-visible",
        "top-4 md:top-6 glass border border-border/50 py-2 px-2 md:px-0 shadow-lg shadow-black/20",
        scrolled ? "bg-surface/80 backdrop-blur-md" : "bg-surface/40 backdrop-blur-sm"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#top" className="flex items-center group">
          <img src="/daurer-logo.png" alt="Daurer Tech" className="h-10 w-auto scale-[2.8] origin-left ml-4" />
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
        <div className="absolute top-[calc(100%+12px)] left-0 right-0 glass rounded-3xl border border-border/50 animate-fade-in md:hidden overflow-hidden shadow-xl shadow-black/20 mx-4">
          <div className="p-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/90 hover:text-primary transition-colors font-medium"
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
