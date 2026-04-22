const items = [
  {
    n: "I",
    title: "Experiență personalizată",
    text: "Fiecare programare este dedicată exclusiv ție.",
  },
  {
    n: "II",
    title: "Selecție curatoriată",
    text: "Doar modele alese pentru rafinament și caracter.",
  },
  {
    n: "III",
    title: "Atmosferă intimă",
    text: "Un spațiu în care te descoperi, nu doar alegi.",
  },
];

const Experience = () => {
  return (
    <section id="experienta" className="bg-noir text-ivory py-32 md:py-48">
      <div className="container">
        <div className="mb-20 max-w-4xl">
          <h2 className="font-display text-5xl md:text-8xl text-ivory leading-[0.95]">
            O <span className="italic text-gold">experiență</span> <br />
            ca o ceremonie.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {items.map((it, i) => (
            <div
              key={it.n}
              className="border-t border-ivory/20 pt-8 group"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <p className="font-display text-gold italic text-2xl mb-8">{it.n}</p>
              <h3 className="font-display text-3xl md:text-4xl text-ivory mb-6 leading-tight">
                {it.title}
              </h3>
              <p className="text-ivory/70 leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
