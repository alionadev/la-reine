import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import insp1 from "@/assets/insp-1.jpg";
import insp2 from "@/assets/insp-2.jpg";
import insp3 from "@/assets/insp-3.jpg";
import dress4 from "@/assets/dress-4.jpg";

const ParallaxImage = ({
  src,
  className,
  range = 80,
  delay = 0,
}: {
  src: string;
  className: string;
  range?: number;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);

  return (
    <motion.div
      ref={ref}
      className={`hover-zoom overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.img
        src={src}
        alt="Inspirație"
        loading="lazy"
        className="w-full h-[120%] object-cover"
        style={{ y }}
      />
    </motion.div>
  );
};

const Inspiration = () => {
  return (
    <section className="bg-ivory py-32 md:py-48 overflow-hidden">
      <div className="container">
        <motion.div
          className="mb-20 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-5xl md:text-8xl text-noir leading-[0.95]">
            <span className="italic">Inspirație.</span>
          </h2>
          <p className="font-display text-xl md:text-2xl italic text-noir/70 mt-6 max-w-xl">
            Fragmente de eleganță. Detalii care spun mai mult decât cuvintele.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <ParallaxImage
            src={insp2}
            className="col-span-12 md:col-span-7 h-[60vh]"
            range={60}
          />
          <ParallaxImage
            src={insp1}
            className="col-span-12 md:col-span-5 md:mt-24 h-[40vh]"
            range={100}
            delay={0.15}
          />
          <ParallaxImage
            src={insp3}
            className="col-span-6 md:col-span-4 md:col-start-2 h-[40vh]"
            range={80}
            delay={0.1}
          />
          <ParallaxImage
            src={dress4}
            className="col-span-6 md:col-span-5 h-[50vh]"
            range={120}
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
