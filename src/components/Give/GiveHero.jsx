import { useSection } from "../../content/useSection";
import { motion } from "framer-motion";

const GiveHero = () => {
  const { heading, description, image, imageAlt } = useSection("give.banner");

  return (
    <section className="relative isolate flex min-h-[300px]  items-center overflow-hidden  mt-20 bg-rcn-night font-sans">
      <div className="absolute inset-0 z-0">
        <img
          className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
          alt={imageAlt || ""}
          src={image}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-rcn-night from-35% via-rcn-night/80 via-55% to-transparent" />
      </div>

      <div className="relative z-10 max-w-2xl md:px-15  my-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[16px] font-bold uppercase tracking-[0.12em] text-rcn-red"
        >
          Give
        </motion.p>
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4  leading-tight text-on-primary text-3xl md:text-5xl font-extrabold tracking-[-0.04em]"
        >
          {heading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-[18px] text-on-primary max-w-2xl whitespace-pre-line"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};

export default GiveHero;
