const Footer = () => {
  return (
    <footer id="contact" className="bg-noir text-ivory">
      <div className="container py-24 md:py-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <h2 className="font-display text-6xl md:text-9xl leading-[0.85]">
              LA <br />
              <span className="italic text-gold">Reine</span>
            </h2>
            <p className="font-display italic text-ivory/60 mt-8 text-lg">Bridal Salon · Bucharest</p>
          </div>

          <div className="col-span-6 md:col-span-3 md:col-start-8 mt-12 md:mt-0">
            <p className="font-display italic text-gold mb-4 text-lg">Contact</p>
            <a
              href="tel:+40749170150"
              className="font-display text-2xl md:text-3xl text-ivory hover:text-gold transition-colors block"
            >
              +40 749 170 150
            </a>
            <a
              href="mailto:salut@lareine.ro"
              className="font-display italic text-lg text-ivory/70 hover:text-gold transition-colors mt-2 block"
            >
              salut@lareine.ro
            </a>
          </div>

          <div className="col-span-6 md:col-span-3 mt-12 md:mt-0">
            <p className="font-display italic text-gold mb-4 text-lg">Atelier</p>
            <p className="font-display text-lg md:text-xl text-ivory leading-snug">
              șos. N. Titulescu <br />
              51–59 <br />
              <span className="text-ivory/70">Sector 1, București</span>
            </p>
          </div>
        </div>

        <div className="gold-line w-full mt-24 mb-8" />

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <p className="font-display italic text-ivory/50 text-sm">
            © {new Date().getFullYear()} LA REINE — Toate drepturile rezervate
          </p>
          <p className="font-display italic text-ivory/60 text-sm">
            Nu este despre rochie. Este despre cum te simți în ea.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
