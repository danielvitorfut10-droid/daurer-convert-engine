import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LimelightNav, type NavItem } from "@/components/ui/limelight-nav";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

const navItems: NavItem[] = [
  { id: "solucoes", label: "Soluções", href: "#solucoes" },
  { id: "projetos", label: "Projetos", href: "#projetos" },
  { id: "diferencial", label: "Por que a Daurer?", href: "#diferencial" },
  { id: "feedbacks", label: "Feedbacks", href: "#feedbacks" },
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
        <a href="#top" className="flex items-center group shrink-0">
          <img src="/daurer-logo.png" alt="Daurer Tech" className="h-[46px] w-auto scale-[2.8] origin-left ml-2 md:ml-6" />
        </a>

        <div className="hidden md:flex justify-center flex-1 mx-4">
          <LimelightNav items={navItems} />
        </div>

        <div className="hidden md:block">
          <Button asChild variant="hero" size="sm">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              Contato
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
            {navItems.map((l) => (
              <a
                key={l.id}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-lg text-white hover:text-primary transition-colors font-medium"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="hero" className="w-full shadow-[0_0_15px_rgba(6,182,212,0.4)]">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                Contato
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
