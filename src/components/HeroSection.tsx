import heroImage from "@/assets/hero-cajon.jpg";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/constants";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cajón peruano em estúdio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl space-y-6">
          <div className="animate-fade-up">
            <span className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full">
              ✅ 217 alunos transformados
            </span>
          </div>

          <div className="animate-fade-up animate-delay-100 space-y-3">
            <p className="font-body text-lg text-primary-foreground/80">
              Sabe aquele momento que você tá vendo alguém tocar cajón e pensa:
            </p>
            <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground italic">
              "Cara, eu TAMBÉM queria fazer isso..."
            </p>
          </div>

          <h1 className="animate-fade-up animate-delay-200 font-display text-4xl md:text-6xl font-bold leading-[1.1] text-primary-foreground">
            30 aulas. 30 dias.{" "}
            <span className="text-primary">Do zero ao palco.</span>
          </h1>

          <div className="animate-fade-up animate-delay-300 pt-4">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 text-base font-body font-bold px-10 h-14 text-lg">
                <Flame className="h-5 w-5" />
                QUERO DOMINAR CAJÓN — R$ 147
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
