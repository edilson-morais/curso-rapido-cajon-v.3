import { Construction, AlertTriangle } from "lucide-react";

const HouseAnalogySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
          Imagina Construir Uma Casa
        </h2>

        <p className="font-body text-lg text-muted-foreground mb-6">
          No YouTube, você encontra:
        </p>

        <div className="space-y-3 mb-8 font-body text-foreground">
          <p>📌 1 vídeo ensinando a fazer o telhado</p>
          <p>📌 3 vídeos sobre pintura avançada</p>
          <p>📌 12 vídeos sobre tipos de acabamento</p>
          <p className="font-bold text-destructive">📌 Zero vídeos sobre como fazer a fundação primeiro</p>
        </div>

        <p className="font-body text-lg text-muted-foreground mb-10">
          E aí você tenta construir. Óbvio que desaba.
        </p>

        <div className="bg-card rounded-2xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-4">
            <Construction className="h-6 w-6 text-primary" />
            <h3 className="font-display text-xl font-bold text-foreground">
              Cajón é a mesma coisa.
            </h3>
          </div>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            Se você não aprende na ordem certa (som → groove → ritmo → variação → técnica avançada), você vai:
          </p>
          <ul className="space-y-2 font-body text-foreground">
            <li className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive shrink-0" />
              Desenvolver vícios
            </li>
            <li className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive shrink-0" />
              Ficar travado
            </li>
            <li className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive shrink-0" />
              Achar que o problema é você
            </li>
          </ul>
          <p className="font-body text-lg font-bold text-foreground mt-6">
            Não é. O problema é que ninguém te mostrou o passo a passo certo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HouseAnalogySection;
