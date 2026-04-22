import { useEffect } from "react";
import type { Dress } from "@/data/dresses";

const DressModal = ({
  dress,
  onClose,
  onSelect,
}: {
  dress: Dress | null;
  onClose: () => void;
  onSelect: (id: string) => void;
}) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (dress) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [dress, onClose]);

  if (!dress) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-ivory animate-fade-in overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="min-h-screen flex flex-col">
        <div className="container flex justify-between items-center py-6 border-b border-noir/10">
          <p className="editorial-eyebrow text-noir/60">{dress.number} · {dress.style}</p>
          <button
            onClick={onClose}
            className="editorial-eyebrow text-noir underline-grow"
            aria-label="Închide"
          >
            Închide ✕
          </button>
        </div>

        <div className="container grid grid-cols-12 gap-6 md:gap-12 py-12 md:py-20 flex-1">
          <div className="col-span-12 md:col-span-7">
            <div className="overflow-hidden bg-ivory-deep">
              <img
                src={dress.image}
                alt={`Rochie ${dress.name}`}
                className="w-full h-[80vh] object-cover"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 md:pl-8 flex flex-col justify-between">
            <div>
              <p className="editorial-eyebrow text-noir/60">Rochie</p>
              <h3 className="font-display text-6xl md:text-8xl italic text-noir leading-none mt-2">
                {dress.name}
              </h3>
              <div className="gold-line w-24 my-8" />
              <p className="text-noir/80 leading-relaxed text-lg max-w-md">
                {dress.description}
              </p>

              <dl className="mt-12 space-y-3 text-sm">
                <div className="flex justify-between border-b border-noir/10 py-3">
                  <dt className="editorial-eyebrow text-noir/60">Stil</dt>
                  <dd className="font-display italic text-lg text-noir">{dress.style}</dd>
                </div>
                <div className="flex justify-between border-b border-noir/10 py-3">
                  <dt className="editorial-eyebrow text-noir/60">Siluetă</dt>
                  <dd className="font-display italic text-lg text-noir">{dress.silhouette}</dd>
                </div>
                <div className="flex justify-between border-b border-noir/10 py-3">
                  <dt className="editorial-eyebrow text-noir/60">Cod</dt>
                  <dd className="font-display italic text-lg text-noir">{dress.number}</dd>
                </div>
              </dl>
            </div>

            <button
              onClick={() => onSelect(dress.id)}
              className="mt-12 w-full bg-noir text-ivory editorial-eyebrow py-5 hover:bg-gold hover:text-noir transition-colors duration-500"
            >
              Selectează pentru probă
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressModal;
