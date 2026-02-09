import heroImage from "@/assets/hero-cajon.jpg";
import { Button } from "@/components/ui/button";
import { Play, Music } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cajón peruano en un estudio cálido"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl space-y-6">
          <div className="animate-fade-up flex items-center gap-2 text-primary-foreground/80">
            <Music className="h-5 w-5" />
            <span className="font-body text-sm font-semibold uppercase tracking-widest">
              Curso Online
            </span>
          </div>

          <h1 className="animate-fade-up animate-delay-100 font-display text-5xl md:text-7xl font-bold leading-[1.1] text-primary-foreground">
            Curso Rápido de{" "}
            <span className="italic">Cajón Peruano</span>
          </h1>

          <p className="animate-fade-up animate-delay-200 font-body text-lg md:text-xl text-primary-foreground/85 max-w-lg leading-relaxed">
            Aprendé a tocar el cajón desde cero con ritmos fáciles, paso a paso
            y a tu propio ritmo. ¡Sin experiencia previa!
          </p>

          <div className="animate-fade-up animate-delay-300 flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="gap-2 text-base font-body font-semibold px-8">
              <Play className="h-5 w-5" />
              Empezar Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-base font-body font-semibold px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Ver Programa
            </Button>
          </div>

          <div className="animate-fade-up animate-delay-400 flex gap-8 pt-6">
            {[
              { num: "8", label: "Módulos" },
              { num: "24", label: "Lecciones" },
              { num: "100%", label: "Online" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl font-bold text-primary-foreground">
                  {stat.num}
                </div>
                <div className="font-body text-xs uppercase tracking-wider text-primary-foreground/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
