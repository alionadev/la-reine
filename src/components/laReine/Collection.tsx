import { useMemo, useState } from "react";
import { dresses, styles, silhouettes, type Dress } from "@/data/dresses";
import DressModal from "./DressModal";

const Collection = ({ onSelectForFitting }: { onSelectForFitting: (id: string) => void }) => {
  const [activeStyle, setActiveStyle] = useState<string>("Toate");
  const [activeSilhouette, setActiveSilhouette] = useState<string>("Toate");
  const [openDress, setOpenDress] = useState<Dress | null>(null);

  const filtered = useMemo(
    () =>
      dresses.filter(
        (d) =>
          (activeStyle === "Toate" || d.style === activeStyle) &&
          (activeSilhouette === "Toate" || d.silhouette === activeSilhouette),
      ),
    [activeStyle, activeSilhouette],
  );

  return (
    <section id="colectie" className="bg-ivory py-32 md:py-48">
      <div className="container">
        {/* Header */}
        <div className="mb-20 md:mb-32 max-w-4xl">
          <h2 className="font-display text-5xl md:text-8xl leading-[0.95] text-noir">
            Colecția
          </h2>
          <p className="font-display text-xl md:text-2xl italic text-noir/70 mt-6 max-w-xl">
            Forme contemporane. Linii curate. Detalii care definesc prezența.
          </p>
        </div>

        {/* Filters */}
        <div id="filtru" className="grid md:grid-cols-2 gap-10 md:gap-16 mb-20 border-y border-noir/10 py-10">
          <div>
            <p className="font-display italic text-noir/50 mb-4">Stil</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {styles.map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveStyle(s)}
                  className={`font-display text-2xl md:text-3xl transition-all duration-500 ${
                    activeStyle === s
                      ? "text-noir italic"
                      : "text-noir/30 hover:text-noir/70"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-display italic text-noir/50 mb-4">Siluetă</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {silhouettes.map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveSilhouette(s)}
                  className={`font-display text-2xl md:text-3xl transition-all duration-500 ${
                    activeSilhouette === s
                      ? "text-noir italic"
                      : "text-noir/30 hover:text-noir/70"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Editorial asymmetric grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {filtered.map((d, i) => {
            // Asymmetric positioning
            const layouts = [
              "col-span-12 md:col-span-7 md:col-start-1",
              "col-span-12 md:col-span-4 md:col-start-9 md:mt-32",
              "col-span-12 md:col-span-5 md:col-start-2 md:mt-16",
              "col-span-12 md:col-span-6 md:col-start-7",
              "col-span-12 md:col-span-5 md:col-start-1 md:mt-16",
              "col-span-12 md:col-span-6 md:col-start-7 md:mt-24",
            ];
            const heights = [
              "h-[70vh]",
              "h-[50vh]",
              "h-[60vh]",
              "h-[45vh]",
              "h-[65vh]",
              "h-[55vh]",
            ];
            return (
              <button
                key={d.id}
                onClick={() => setOpenDress(d)}
                className={`group ${layouts[i % layouts.length]} text-left mt-16 first:mt-0 md:mt-0`}
              >
                <div className={`hover-zoom overflow-hidden ${heights[i % heights.length]}`}>
                  <img
                    src={d.image}
                    alt={`Rochie ${d.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-baseline mt-4">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl italic text-noir">
                      {d.name}
                    </h3>
                  </div>
                  <p className="font-display italic text-noir/60">{d.silhouette}</p>
                </div>
              </button>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center font-display italic text-2xl text-noir/50 py-32">
            Nicio rochie nu corespunde filtrelor selectate.
          </p>
        )}
      </div>

      <DressModal
        dress={openDress}
        onClose={() => setOpenDress(null)}
        onSelect={(id) => {
          setOpenDress(null);
          onSelectForFitting(id);
        }}
      />
    </section>
  );
};

export default Collection;
