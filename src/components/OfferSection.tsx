import { Button } from "@/components/ui/button";
import { Flame, Video, MessageCircle, Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/constants";

const OfferSection = () => {
  return (
    <section className="py-20 bg-background" id="oferta">
      <div className="container max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          O Que Você Recebe <span className="text-primary">(Pacote Completo)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card rounded-2xl p-6 border border-border text-center">
            <Video className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-display text-lg font-bold text-foreground">30 AULAS EM VÍDEO HD</h3>
            <p className="font-body text-sm text-muted-foreground mt-2">10-15 min cada</p>
            <div className="mt-4 font-body text-xs text-muted-foreground space-y-1 text-left">
              <p>FASE 1: Fundação (Aulas 1-4)</p>
              <p>FASE 2: Ritmos Brasileiros (Aulas 5-10)</p>
              <p>FASE 3: Variações Latinas (Aulas 11-14)</p>
              <p>FASE 4: Elevando Nível (Aulas 15-17)</p>
              <p>FASE 5: Baião Completo (Aulas 18-24)</p>
              <p>FASE 6: Samba Reggae e Ijexá Avançado (Aulas 25-30)</p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border text-center">
            <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-display text-lg font-bold text-foreground">COMUNIDADE WHATSAPP VIP</h3>
            <p className="font-body text-sm text-muted-foreground mt-2">
              Suporte em até 24h + outros alunos aprendendo junto
            </p>
            <p className="font-body text-xs text-muted-foreground mt-4 italic">
              (porque aprender sozinho é uma merda)
            </p>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border text-center">
            <Award className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-display text-lg font-bold text-foreground">CERTIFICADO DIGITAL</h3>
            <p className="font-body text-sm text-muted-foreground mt-2">
              Quando você terminar
            </p>
            <p className="font-body text-xs text-muted-foreground mt-4 italic">
              (e você VAI terminar — 97% terminam)
            </p>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-foreground rounded-2xl p-8 md:p-12 text-center">
          <p className="font-body text-background/50 line-through text-lg">Valor real: R$ 400</p>
          <p className="font-display text-4xl md:text-5xl font-bold text-background mt-2">
            Seu investimento: <span className="text-primary">R$ 147</span>
          </p>
          <p className="font-body text-background/60 mt-2 italic">
            (Menos que 2 pizzas. E uma pizza você esquece. Cajón fica pra vida.)
          </p>

          <div className="mt-6 space-y-2 font-body text-sm text-background/70 max-w-md mx-auto text-left">
            {[
              "30 aulas progressivas (do zero ao avançado)",
              "Acesso vitalício (assiste quantas vezes quiser)",
              "Garantia 15 dias (risco zero)",
              "Suporte pessoal no WhatsApp",
              "Comunidade de alunos",
              "Certificado digital",
            ].map((item) => (
              <p key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                {item}
              </p>
            ))}
          </div>

          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-8">
            <Button size="lg" className="gap-2 text-lg font-body font-bold px-12 h-14 bg-primary text-primary-foreground hover:bg-primary/90">
              <Flame className="h-5 w-5" />
              GARANTIR MINHA VAGA AGORA — R$ 147
            </Button>
          </a>
          <p className="font-body text-xs text-background/40 mt-3">
            Pagamento único • Sem mensalidade • Sem pegadinha
          </p>
        </div>

        {/* Guarantee */}
        <div className="mt-12 bg-card rounded-2xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <h3 className="font-display text-2xl font-bold text-foreground">
              ✅ GARANTIA 15 DIAS — Risco Zero. Literalmente.
            </h3>
          </div>
          <div className="font-body text-muted-foreground leading-relaxed space-y-4">
            <p>
              Entra no curso. Faz as primeiras 10 aulas. Pratica. Participa da comunidade.
            </p>
            <p>Se em 15 dias você não:</p>
            <ul className="space-y-1 ml-4">
              <li>• Dominar xote completo (Aulas 5-7)</li>
              <li>• Tocar pelo menos 3 ritmos diferentes</li>
              <li>• Sentir confiança pra tocar na frente de alguém</li>
            </ul>
            <p>
              ...manda um email. Eu devolvo cada centavo.
            </p>
            <p className="font-semibold text-foreground">
              Sem pergunta. Sem "mas por quê?". Sem burocracia.
            </p>
            <p className="text-foreground">
              Por que tanta confiança? Porque dos 217 alunos, só 3 pediram reembolso (1,4%).
            </p>
            <p>A sequência funciona. Eu sei. Você ainda não. Por isso a garantia existe.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
