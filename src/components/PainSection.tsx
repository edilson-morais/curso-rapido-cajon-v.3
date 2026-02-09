import { MonitorPlay, X, Frown } from "lucide-react";

const PainSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container max-w-3xl">
        <div className="space-y-8">
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <MonitorPlay className="h-6 w-6 text-primary" />
            </div>
            <p className="font-body text-lg text-foreground leading-relaxed">
              Você abre o YouTube. Assiste 47 vídeos diferentes. Cada um fala uma coisa.
            </p>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
              <X className="h-6 w-6 text-destructive" />
            </div>
            <p className="font-body text-lg text-foreground leading-relaxed">
              Um diz "começa pelo xote". Outro diz "ignora xote, vai direto pro samba".
            </p>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
              <Frown className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="font-body text-lg text-foreground leading-relaxed">
              E você... para. Porque no fundo, você tá pensando:{" "}
              <em className="text-muted-foreground">"Eu não tenho talento pra isso."</em>
            </p>
          </div>

          <div className="bg-background rounded-2xl p-8 border border-border mt-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mentira.
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Você não precisa de talento. Você precisa de alguém que te mostre a ordem certa — tijolo por tijolo, camada por camada, sem pular etapas.
            </p>
            <p className="font-body text-lg text-foreground mt-4 font-semibold">
              E é exatamente isso que eu fiz para 217 pessoas que achavam que nunca iam conseguir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
