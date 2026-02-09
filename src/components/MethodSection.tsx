import { CheckCircle2, Star } from "lucide-react";

const phases = [
  {
    num: "01",
    title: "FUNDAÇÃO",
    subtitle: "Aulas 1-4 • \"Antes de tocar música, você precisa entender o instrumento\"",
    lessons: [
      { title: "AULA 1 – Sons do Cajón", desc: "Você descobre que cajón não é \"bater forte ou fraco\". São 3 sons DISTINTOS. Você aprende a tirar cada um." },
      { title: "AULA 2 – Cajón + Bateria", desc: "Sacada: cajón imita bateria. Bumbo = grave. Caixa = agudo. Quando você VÊ essa conexão, tudo muda." },
      { title: "AULA 3 – O Primeiro Groove", desc: "Aqui você toca sua primeira \"música\" (ainda não é xote nem samba — é o PADRÃO BASE que está dentro de TODOS os ritmos)." },
      { title: "AULA 4 – Mais Uma Camada", desc: "Você adiciona a mão esquerda. Coordenação motora começa a fazer sentido." },
    ],
    result: "Você já toca algo que soa \"musical\" (não é exercício fake — é groove real).",
  },
  {
    num: "02",
    title: "RITMOS BRASILEIROS BASE",
    subtitle: "Aulas 5-10 • \"Agora você pega o groove e transforma em MÚSICA que as pessoas reconhecem\"",
    lessons: [
      { title: "AULAS 5, 6, 7 – Xote (3 Aulas Progressivas)", desc: "Não é \"uma aula de xote\". São 3 camadas: Xote 1 (padrão básico) → Xote 2 (adiciona mão esquerda) → Xote 3 (variação + dinâmica). No fim da Aula 7, você toca xote completo." },
      { title: "AULA 8 – Ijexá", desc: "Ritmo afro-brasileiro (rodas de samba e candomblé). Seu cérebro aprende flexibilidade rítmica." },
      { title: "AULA 9 – Macete", desc: "O \"atalho\" que percussionistas profissionais usam (e que ninguém te conta)." },
      { title: "AULA 10 – Shake + Cajón", desc: "Você adiciona TEXTURA ao cajón. Aqui que você começa a soar profissional." },
    ],
    result: "Você toca xote, ijexá e já usa shake. 87% dos alunos são chamados pra tocar na igreja/evento aqui.",
  },
  {
    num: "03",
    title: "VARIAÇÕES LATINO-AMERICANAS",
    subtitle: "Aulas 11-14 • \"Você expande seu repertório — não é só Brasil, é América Latina inteira\"",
    lessons: [
      { title: "AULAS 11, 12 – Chá Chá Chá (Básico + Hi-Hat com Pé)", desc: "Ritmo cubano. Você aprende coordenação tripla (mãos + pé). Isso treina seu cérebro pra coordenação complexa." },
      { title: "AULA 13 – Macete com Hi-Hat", desc: "Você volta no \"macete\" da Aula 9 e ELEVA com hi-hat. Mesma base, som mais rico." },
      { title: "AULA 14 – Maracatu", desc: "Ritmo nordestino pesado (bloco de carnaval). Você aprende PESO e GROOVE denso." },
    ],
    result: "Seu repertório agora tem 6+ ritmos diferentes. Você não é \"o cara que toca cajón\". É o percussionista.",
  },
  {
    num: "04",
    title: "ELEVANDO O NÍVEL",
    subtitle: "Aulas 15-17 • \"Aqui você sai de 'toca bem' pra 'toca MUITO'\"",
    lessons: [
      { title: "AULA 15 – Hi-Hat Dobrado", desc: "Técnica avançada que faz o ritmo ficar mais DENSO. O diferencial entre amador e profissional." },
      { title: "AULA 16 – Xote com Hi-Hat Dobrado", desc: "Você volta no xote (que já domina) e ELEVA com hi-hat dobrado. Resultado: xote profissional." },
      { title: "AULA 17 – Xote Swingado", desc: "Aqui você aprende SWING (aquela \"moleza\" que faz o ritmo respirar). Não é técnica — é SENTIMENTO." },
    ],
    result: "Você toca com dinâmica e textura. O som não é mais mecânico — é orgânico, vivo.",
  },
  {
    num: "05",
    title: "BAIÃO E LEVADAS AVANÇADAS",
    subtitle: "Aulas 18-24 • \"Você domina baião (o ritmo mais pedido em eventos) e cria seu arsenal pessoal\"",
    lessons: [
      { title: "AULAS 18-22 – Baião (5 Variações Progressivas)", desc: "Não é \"uma aula de baião\". São 5 camadas: Baião base → Baião + Hi-Hat dobrado → Baião swingado → Baião zabumba → Baião zabumba + Hi-Hat. No fim da Aula 22, você domina baião em todas as variações." },
      { title: "AULAS 23, 24 – Levada Coringa (Com e Sem Hi-Hat)", desc: "A \"levada universal\" que funciona em 80% das músicas. Aquela que você usa quando o músico manda \"toca aí um groove\" e você não sabe a música." },
    ],
    result: "Você tem versatilidade total. Baião, xote, ijexá, levada coringa — você toca TUDO.",
  },
  {
    num: "06",
    title: "SAMBA REGGAE E IJEXÁ AVANÇADO",
    subtitle: "Aulas 25-30 • \"Você fecha o curso tocando os ritmos mais complexos e desafiadores\"",
    lessons: [
      { title: "AULAS 25-27 – Samba Reggae (3 Camadas)", desc: "O ritmo do Olodum, Timbalada, carnaval da Bahia. Pesado, denso, poderoso: Samba reggae base → Variação 2 → + Hi-Hat" },
      { title: "AULAS 28-30 – Ijexá 2 (Avançado)", desc: "Você volta no ijexá da Aula 8, mas MUITO mais avançado: Nova variação → + Hi-Hat no tempo → + Hi-Hat no contratempo" },
    ],
    result: "Você fecha o curso tocando samba reggae e ijexá avançado. Se você chegou aqui, você não é iniciante. Você é percussionista.",
  },
];

const MethodSection = () => {
  return (
    <section className="py-20 bg-card" id="metodo">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <span className="font-body text-sm font-semibold uppercase tracking-widest text-primary">
            A Sequência Que Ninguém Te Mostrou
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">
            (E Que Funciona)
          </h2>
          <p className="font-body text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Depois de 40 anos tocando percussão e testar com 217 alunos, eu descobri a ordem EXATA que faz qualquer pessoa sair de zero e tocar música real em 30 dias.
          </p>
        </div>

        <div className="space-y-12">
          {phases.map((phase) => (
            <div key={phase.num} className="bg-background rounded-2xl border border-border overflow-hidden">
              <div className="p-6 md:p-8 border-b border-border bg-primary/5">
                <div className="flex items-center gap-4">
                  <span className="font-display text-3xl font-bold text-primary">{phase.num}</span>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">{phase.title}</h3>
                    <p className="font-body text-sm text-muted-foreground mt-1">{phase.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-5">
                {phase.lessons.map((lesson) => (
                  <div key={lesson.title} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-body font-bold text-foreground">{lesson.title}</h4>
                      <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">{lesson.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <div className="flex gap-3 bg-primary/5 rounded-xl p-4">
                  <Star className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="font-body text-sm font-semibold text-foreground">
                    Resultado da Fase {phase.num}: {phase.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
