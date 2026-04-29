import { useReveal } from "@/hooks/use-reveal";
import { FeedbackCarousel } from "@/components/ui/feedback-carousel";

export const Depoimentos = () => {
  const { ref, visible } = useReveal();
  return (
    <section id="feedbacks" ref={ref} className="relative py-24 md:py-32 bg-surface/30 border-y border-border overflow-hidden">
      <div className="container">
        <div className={`max-w-2xl mx-auto text-center mb-16 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Feedbacks</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Quem confiou, <span className="text-gradient">cresceu.</span>
          </h2>
        </div>

        <div className={`${visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
          <FeedbackCarousel />
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};
