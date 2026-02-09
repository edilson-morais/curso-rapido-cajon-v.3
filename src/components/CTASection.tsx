import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-foreground p-12 md:p-20 text-center">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-background">
              ¿Listo para Tocar?
            </h2>
            <p className="font-body text-lg text-background/70">
              Unite a cientos de alumnos que ya están aprendiendo cajón peruano.
              Empezá hoy y tocá tu primer ritmo en minutos.
            </p>
            <Button
              size="lg"
              className="gap-2 text-base font-body font-semibold px-10 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Inscribirme al Curso
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
