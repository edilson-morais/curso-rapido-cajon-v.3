const timeline = [
  { day: "DIA 3", text: "Você termina a Fase 1 e já toca o primeiro groove" },
  { day: "DIA 7", text: "Você domina xote completo (Aulas 5-7) e toca sua primeira música REAL" },
  { day: "DIA 15", text: "Você já tem 6+ ritmos no arsenal (xote, ijexá, chá chá chá, maracatu)" },
  { day: "DIA 21", text: "Você toca baião em 5 variações (a partir daqui, eventos começam a chamar)" },
  { day: "DIA 30", text: "Você fecha com samba reggae e ijexá avançado — repertório COMPLETO" },
];

const TimelineSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          O Que Acontece
        </h2>
        <p className="font-body text-lg text-muted-foreground text-center mb-12">
          (Timeline Real de 30 Dias)
        </p>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={item.day} className="relative flex gap-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 z-10">
                  <span className="font-body text-xs font-bold text-primary-foreground">
                    {item.day.split(" ")[1]}
                  </span>
                </div>
                <div className="pt-2">
                  <span className="font-body text-xs font-bold uppercase tracking-wider text-primary">
                    {item.day}
                  </span>
                  <p className="font-body text-foreground mt-1 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="font-body text-muted-foreground mt-12 text-center leading-relaxed">
          Não to inventando. <strong className="text-foreground">97% completam</strong> porque a sequência é VICIANTE (cada aula desbloqueia a próxima).
        </p>
      </div>
    </section>
  );
};

export default TimelineSection;
