import { Instagram, Mail, MessageCircle } from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/site";

export const Footer = () => {
  return (
    <footer className="relative bg-black py-8 overflow-hidden border-t border-white/[0.05]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          {/* Rights Text */}
          <p className="text-[10px] md:text-xs text-white/40 font-bold tracking-widest uppercase text-center md:text-left order-2 md:order-1">
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
          </p>

          {/* Real App Icons - Image 1 Style but colored */}
          <div className="flex items-center gap-3 order-1 md:order-2">
            {/* WhatsApp */}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center hover:bg-white/[0.08] hover:border-[#25D366]/30 transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366] transition-transform group-hover:scale-110" />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/daurertech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center hover:bg-white/[0.08] hover:border-[#E1306C]/30 transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 text-[#E1306C] transition-transform group-hover:scale-110" />
            </a>

            {/* Email */}
            <a
              href="mailto:daurer.sistemas@gmail.com"
              className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center hover:bg-white/[0.08] hover:border-[#4285F4]/30 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-[#4285F4] transition-transform group-hover:scale-110" />
            </a>
          </div>

          {/* Credits Text */}
          <p className="text-[10px] md:text-xs text-white/40 font-bold tracking-widest uppercase text-center md:text-right order-3">
            Feito com estratégia, design e código.
          </p>
        </div>
      </div>
    </footer>
  );
};
