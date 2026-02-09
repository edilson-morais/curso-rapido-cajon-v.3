const StorySection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
          "Eu também não sabia ensinar assim"
        </h2>

        <div className="font-body text-lg text-muted-foreground space-y-6 leading-relaxed">
          <p>Sabe quantos alunos eu perdi nos primeiros anos dando aula?</p>
          <p className="font-bold text-foreground text-2xl">Muitos.</p>
          <p>
            Porque eu fazia o que todo professor faz: ensinava do jeito que EU aprendi
            (teoria, técnica, "agora faz baião swingado" sem explicar o baião básico antes).
          </p>
          <p>E as pessoas desistiam.</p>
          <p>
            Até que eu parei e pensei:{" "}
            <em className="text-foreground">"Pera. O que essas pessoas REALMENTE precisam?"</em>
          </p>
          <p>
            Elas não querem ser percussionistas profissionais.<br />
            Elas querem tocar na igreja. No churrasco. Na rodinha de amigos.
          </p>
          <p className="font-semibold text-foreground">E aí eu refiz tudo.</p>
          <p>Peguei 30 aulas. Organizei na ordem exata do aprendizado natural:</p>

          <div className="bg-background rounded-xl p-6 border border-border space-y-2 text-foreground font-semibold">
            <p>✅ Som antes de ritmo</p>
            <p>✅ Groove antes de música</p>
            <p>✅ Base antes de variação</p>
            <p>✅ Simples antes de complexo</p>
          </div>

          <p>Testei com 217 alunos.</p>
          <p className="font-bold text-foreground text-xl">Funcionou.</p>
          <p className="font-bold text-foreground">E você também pode.</p>
        </div>

        {/* Consumer vs Creator */}
        <div className="mt-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Porque No Fundo... Isso Não É Sobre Cajón
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8">
            É sobre você parando de ser consumidor e virando criador.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-muted/50 rounded-xl p-6 border border-border">
              <span className="font-body text-sm font-bold uppercase tracking-wider text-muted-foreground">Consumidor</span>
              <p className="font-body text-foreground mt-3">
                Assiste. Vê alguém tocando baião e pensa "que legal".
              </p>
            </div>
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              <span className="font-body text-sm font-bold uppercase tracking-wider text-primary">Criador</span>
              <p className="font-body text-foreground mt-3 font-semibold">
                FAZ. Pega o cajón e toca baião JUNTO.
              </p>
            </div>
          </div>

          <div className="mt-8 font-body text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>E olha... <em>(pausa)</em></p>
            <p>
              A vida é curta demais pra você ficar assistindo outras pessoas fazerem música
              enquanto você fica na plateia pensando "um dia eu aprendo".
            </p>
            <p className="font-bold text-foreground text-xl">Esse dia é hoje.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
