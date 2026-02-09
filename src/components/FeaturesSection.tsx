import { MonitorPlay, Clock, Award, MessageCircle } from "lucide-react";

const features = [
  {
    icon: MonitorPlay,
    title: "Clases en Video HD",
    desc: "Lecciones grabadas en alta calidad con múltiples ángulos de cámara para que no te pierdas ningún detalle.",
  },
  {
    icon: Clock,
    title: "A Tu Ritmo",
    desc: "Acceso ilimitado a todo el contenido. Aprendé cuando quieras, desde donde quieras, sin presiones.",
  },
  {
    icon: Award,
    title: "Certificado",
    desc: "Recibí un certificado de finalización al completar todos los módulos y el proyecto final.",
  },
  {
    icon: MessageCircle,
    title: "Soporte Directo",
    desc: "Consultá tus dudas directamente con el instructor y recibí feedback personalizado.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-card" id="beneficios">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-sm font-semibold uppercase tracking-widest text-primary">
            ¿Por qué este curso?
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Todo lo que Necesitás
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feat) => (
            <div key={feat.title} className="flex gap-5">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <feat.icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {feat.title}
                </h3>
                <p className="font-body text-muted-foreground mt-1 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
