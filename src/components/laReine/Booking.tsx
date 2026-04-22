import { useState, useEffect } from "react";
import { dresses } from "@/data/dresses";
import { toast } from "sonner";

const Booking = ({ preselectedId }: { preselectedId: string | null }) => {
  const [step, setStep] = useState(0);
  const [dressId, setDressId] = useState<string | null>(null);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (preselectedId) {
      setDressId(preselectedId);
      setStep(1);
      setTimeout(() => {
        document.getElementById("programare")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [preselectedId]);

  const selectedDress = dresses.find((d) => d.id === dressId);
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.error("Te rugăm să completezi numele și telefonul.");
      return;
    }
    toast.success("Solicitarea ta a fost trimisă", {
      description: "Te vom contacta în scurt timp pentru confirmare.",
    });
    setStep(0);
    setDressId(null);
    setDate("");
    setName("");
    setPhone("");
    setMessage("");
  };

  const steps = ["Rochie", "Dată", "Detalii"];

  return (
    <section id="programare" className="bg-ivory-deep py-32 md:py-48">
      <div className="container grid grid-cols-12 gap-6 md:gap-12">
        <div className="col-span-12 md:col-span-4">
          <h2 className="font-display text-5xl md:text-7xl text-noir leading-[0.95]">
            Programează <br />
            <span className="italic text-gold">o probă.</span>
          </h2>
          <p className="font-display italic text-xl text-noir/70 mt-8 max-w-xs">
            Alege rochia care te definește și rezervă un moment doar pentru tine.
          </p>

          {/* Steps indicator */}
          <div className="mt-16 space-y-4">
            {steps.map((s, i) => (
              <button
                key={s}
                onClick={() => setStep(i)}
                className="flex items-baseline gap-6 group w-full text-left"
              >
                <span
                  className={`font-display italic text-3xl transition-colors ${
                    step === i ? "text-gold" : "text-noir/30"
                  }`}
                >
                  0{i + 1}
                </span>
                <span
                  className={`font-display italic text-lg transition-colors ${
                    step === i ? "text-noir" : "text-noir/40"
                  }`}
                >
                  {s}
                </span>
                <span
                  className={`flex-1 h-px transition-colors ${
                    step >= i ? "bg-noir" : "bg-noir/20"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="col-span-12 md:col-span-7 md:col-start-6 bg-ivory p-8 md:p-12 min-h-[60vh]">
          <form onSubmit={handleSubmit} className="h-full flex flex-col">
            {/* STEP 1 — Dress */}
            {step === 0 && (
              <div className="animate-fade-in">
                <p className="font-display italic text-noir/60 mb-8 text-lg">Selectează rochia</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {dresses.map((d) => (
                    <button
                      type="button"
                      key={d.id}
                      onClick={() => setDressId(d.id)}
                      className={`text-left border transition-all duration-500 ${
                        dressId === d.id
                          ? "border-noir"
                          : "border-transparent hover:border-noir/30"
                      }`}
                    >
                      <div className="aspect-[3/4] overflow-hidden bg-ivory-deep">
                        <img src={d.image} alt={d.name} loading="lazy" className="w-full h-full object-cover" />
                      </div>
                      <div className="p-2">
                        <p className="font-display italic text-lg text-noir">{d.name}</p>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="mt-auto pt-8 flex justify-end">
                  <button
                    type="button"
                    disabled={!dressId}
                    onClick={() => setStep(1)}
                    className="btn-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-noir disabled:hover:text-ivory"
                  >
                    Continuă →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 — Date */}
            {step === 1 && (
              <div className="animate-fade-in flex flex-col h-full">
                <p className="font-display italic text-noir/60 mb-8 text-lg">Alege data</p>
                {selectedDress && (
                  <div className="mb-8 p-4 bg-ivory-deep flex items-center gap-4">
                    <img src={selectedDress.image} alt="" className="w-16 h-20 object-cover" />
                    <div>
                      <p className="font-display italic text-noir/50 text-sm">Rochie selectată</p>
                      <p className="font-display italic text-xl text-noir">{selectedDress.name}</p>
                    </div>
                  </div>
                )}
                <label className="block">
                  <span className="font-display italic text-noir/60">Data dorită</span>
                  <input
                    type="date"
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-3 w-full bg-transparent border-b border-noir/30 py-3 font-display text-2xl text-noir focus:outline-none focus:border-noir"
                  />
                </label>
                <p className="text-noir/50 text-sm mt-3 italic font-display">
                  Te vom contacta pentru confirmarea intervalului orar.
                </p>
                <div className="mt-auto pt-8 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setStep(0)}
                    className="font-display italic text-noir/60 hover:text-noir text-lg"
                  >
                    ← Înapoi
                  </button>
                  <button
                    type="button"
                    disabled={!date}
                    onClick={() => setStep(2)}
                    className="btn-primary disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Continuă →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 — Contact */}
            {step === 2 && (
              <div className="animate-fade-in flex flex-col h-full">
                <p className="font-display italic text-noir/60 mb-8 text-lg">Detaliile tale</p>
                <div className="space-y-6">
                  <label className="block">
                    <span className="font-display italic text-noir/60">Nume</span>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="mt-2 w-full bg-transparent border-b border-noir/30 py-3 font-display text-2xl text-noir focus:outline-none focus:border-noir"
                    />
                  </label>
                  <label className="block">
                    <span className="font-display italic text-noir/60">Telefon</span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="mt-2 w-full bg-transparent border-b border-noir/30 py-3 font-display text-2xl text-noir focus:outline-none focus:border-noir"
                    />
                  </label>
                  <label className="block">
                    <span className="font-display italic text-noir/60">Mesaj (opțional)</span>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      className="mt-2 w-full bg-transparent border-b border-noir/30 py-3 font-body text-base text-noir focus:outline-none focus:border-noir resize-none"
                    />
                  </label>
                </div>
                <div className="mt-auto pt-8 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="font-display italic text-noir/60 hover:text-noir text-lg"
                  >
                    ← Înapoi
                  </button>
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    Trimite solicitarea
                  </button>
                </div>
                <p className="font-display text-noir/50 text-sm italic mt-6 text-center">
                  Te vom contacta pentru confirmarea programării și detalii suplimentare.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
