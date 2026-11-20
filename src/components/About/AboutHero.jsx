import { motion } from "framer-motion";
import { useSection } from "../../content/useSection";
const AboutHero = () => {
  const { line1, line2, accent, description, image, imageAlt } =
    useSection("about.banner");

  return (
    <section className="relative isolate flex min-h-[300px] items-center overflow-hidden  mt-20 bg-rcn-night font-sans">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover  opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
          alt={imageAlt || ""}
          src={image}
        />
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>

      <div className="relative z-10 text-left px-5 md:px-20 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[16px] font-bold uppercase tracking-[0.12em] text-rcn-red"
        >
          About
        </motion.p>
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4  leading-tight text-on-primary text-3xl md:text-5xl font-extrabold tracking-[-0.04em]"
        >
          {line1} <br className="hidden md:block" /> {line2}{" "}
          <span className="text-secondary">{accent}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-[18px] text-on-primary max-w-2xl whitespace-pre-line"
        >
          {description}
        </motion.p>
      </div>

      {/* Ambient Glows */}
      <div className="absolute -bottom-1/4 -left-1/4 w-150 h-150 alchemist-glow blur-[100px] rounded-full"></div>
      <div className="absolute top-1/4 -right-1/4 w-100 h-100 alchemist-glow blur-[100px] rounded-full opacity-50"></div>
    </section>
  );
};

export default AboutHero;
