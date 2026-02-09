import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Tentei 2 anos sozinho. Em 7 dias aqui eu toquei mais que em 2 anos no YouTube. Eu tinha 47 vídeos salvos de 'como tocar xote'. Nenhum explicava a BASE antes. Terminei a Aula 7 e toquei xote completo pela primeira vez. Chorei.",
    name: "Carlos, 42 anos",
    city: "São Paulo",
  },
  {
    text: "Fui chamado pra tocar num casamento antes de terminar o curso. Cheguei na Aula 18 (baião) e um amigo me chamou. Eu falei 'cara, ainda não terminei o curso'. Ele falou 'mas você já toca melhor que muito percussionista que eu conheço'. Ganhei R$ 300.",
    name: "Roberto, 35 anos",
    city: "Belo Horizonte",
  },
  {
    text: "Eu sou professora. Quando vi a ordem das aulas, pensei: 'esse cara entende de pedagogia'. Cada aula desbloqueia a próxima. É viciante. Terminei em 22 dias.",
    name: "Ana, 28 anos",
    city: "Rio de Janeiro",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          O Que Alunos Reais Falam
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-background rounded-2xl p-6 border border-border">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="font-body text-sm font-bold text-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
