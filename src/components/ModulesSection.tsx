import { Music2, Hand, Drum, Headphones, Users, Zap, Star, Trophy } from "lucide-react";

const modules = [
  { icon: Hand, title: "Postura y Técnica Básica", desc: "Posición correcta, golpe grave y agudo" },
  { icon: Music2, title: "Primeros Ritmos", desc: "Rock, pop y patrones básicos de acompañamiento" },
  { icon: Drum, title: "Ritmos Latinos", desc: "Cumbia, salsa, rumba flamenca y más" },
  { icon: Zap, title: "Fills y Remates", desc: "Transiciones, acentos y adornos rítmicos" },
  { icon: Headphones, title: "Tocar con Música", desc: "Práctica con canciones reales y backing tracks" },
  { icon: Users, title: "Tocar en Grupo", desc: "Dinámica de ensamble y acompañamiento" },
  { icon: Star, title: "Técnicas Avanzadas", desc: "Slap, ghost notes y matices dinámicos" },
  { icon: Trophy, title: "Proyecto Final", desc: "Grabá tu propia interpretación completa" },
];

const ModulesSection = () => {
  return (
    <section className="py-24 bg-background" id="modulos">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-sm font-semibold uppercase tracking-widest text-primary">
            Programa del Curso
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">
            8 Módulos para Dominar el Cajón
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">
            Un recorrido progresivo desde los fundamentos hasta técnicas avanzadas
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod, i) => (
            <div
              key={mod.title}
              className="card-elevated bg-card rounded-lg p-6 border border-border group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <mod.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Módulo {i + 1}
              </span>
              <h3 className="font-display text-lg font-bold mt-1 text-card-foreground">
                {mod.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground mt-2">
                {mod.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
