import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import about from "@/assets/about.jpg";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={sectionRef}
      id="despre"
      className="relative bg-ivory py-32 md:py-48 overflow-hidden"
    >
      <div className="container grid grid-cols-12 gap-6 md:gap-12">
        {/* Headline */}
        <motion.div
          className="col-span-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-4xl md:text-7xl leading-[1] text-noir tracking-tight">
            Rochia de mireasă <br />
            nu este o alegere. <br />
            <span className="italic text-gold">Este o declarație.</span>
          </h2>
        </motion.div>

        {/* Image — offset with parallax */}
        <motion.div
          className="col-span-12 md:col-span-5 md:col-start-2 mt-16 md:mt-24"
          style={{ y: imageY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hover-zoom overflow-hidden">
            <img
              src={about}
              alt="Atelier LA REINE — interior salon"
              loading="lazy"
              className="w-full h-[60vh] object-cover"
            />
          </div>
        </motion.div>

        {/* Text — overlapping right with parallax */}
        <motion.div
          className="col-span-12 md:col-span-5 md:col-start-8 mt-8 md:mt-48 space-y-6"
          style={{ y: textY }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="gold-line w-24" />
          <p className="font-display text-2xl md:text-3xl italic text-noir/90 leading-snug">
            Selectăm fiecare piesă cu o atenție obsesivă pentru formă, textură și prezență.
          </p>
          <p className="text-noir/70 leading-relaxed text-base md:text-lg">
            Pentru femeia care caută mai mult decât frumusețe — caută identitate.
            Aici, fiecare probă devine un moment personal. Fără grabă. Fără compromisuri.
          </p>
          <p className="font-display italic text-xl text-noir mt-12">
            — Nu este despre rochie. <br />
            <span className="pl-12">Este despre cum te simți în ea.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
