import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/constants";

const UrgencySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-3xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Última Coisa (Importante)
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-4">
          Eu limito a <strong className="text-foreground">30 alunos por mês</strong>.
        </p>
        <p className="font-body text-muted-foreground mb-8 leading-relaxed">
          Não é golpe de escassez. É realidade operacional: eu respondo PESSOALMENTE no grupo WhatsApp.
          Se entrar 100 pessoas, eu não consigo dar atenção individualizada pra todo mundo.
        </p>

        <p className="font-body text-muted-foreground mb-2">
          Das 30 vagas de fevereiro, restam
        </p>
        <p className="font-display text-7xl font-bold text-primary mb-2">7</p>
        <p className="font-body text-sm text-muted-foreground mb-10">Amanhã pode não ter mais.</p>

        <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="gap-2 text-lg font-body font-bold px-12 h-14 mb-4">
            <Flame className="h-5 w-5" />
            GARANTIR MINHA VAGA AGORA — R$ 147
          </Button>
        </a>
        <p className="font-body text-xs text-muted-foreground mb-16">
          Pagamento único • Sem mensalidade • Sem pegadinha
        </p>

        {/* PS sections */}
        <div className="text-left space-y-6 font-body text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">P.S.:</strong> Daqui a 30 dias você pode estar:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted/50 rounded-xl p-4 border border-border">
              <p className="font-bold text-foreground mb-2">Opção A →</p>
              <p className="text-sm">
                Ainda perdido no YouTube, com 15 vídeos de "baião" salvos mas sem tocar nada completo, achando que "não tem talento"
              </p>
            </div>
            <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
              <p className="font-bold text-primary mb-2">Opção B →</p>
              <p className="text-sm text-foreground">
                Tocando xote, baião, samba reggae, ijexá, sendo chamado pra eventos, recebendo aquele "CARALHO, tu toca MUITO!" que muda tudo
              </p>
            </div>
          </div>
          <p>A diferença? <strong className="text-foreground">R$ 147</strong> e a decisão de clicar no botão acima.</p>

          <p>
            <strong className="text-foreground">P.P.S.:</strong> Se você chegou até aqui e leu sobre as 30 aulas, você já sabe que essa sequência faz sentido. Seu cérebro só tá procurando permissão.
          </p>
          <p className="font-bold text-foreground text-xl">Eu te dou: VAI.</p>

          <p>
            <strong className="text-foreground">P.P.P.S:</strong> Olha as aulas de novo. Olha a PROGRESSÃO:
          </p>
          <p className="text-foreground font-semibold">
            Aula 1 (som básico) → Aula 7 (xote completo) → Aula 18 (baião) → Aula 30 (ijexá avançado)
          </p>
          <p>Não é conteúdo jogado. É arquitetura de aprendizado.</p>
          <p className="font-semibold text-foreground">E você merece aprender com alguém que pensou nisso.</p>

          <div className="text-center pt-6">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 text-lg font-body font-bold px-12 h-14">
                <Flame className="h-5 w-5" />
                GARANTIR MINHA VAGA AGORA — R$ 147
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
