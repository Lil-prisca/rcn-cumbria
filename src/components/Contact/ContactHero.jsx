import { motion } from "framer-motion";
import { useSection } from "../../content/useSection";

const ContactHero = () => {
  const { line1, accent, description, image, imageAlt } =
    useSection("contact.banner");

  return (
    <section className="relative md:min-h-90 flex items-center overflow-hidden font-sans">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover object-top opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
          alt={imageAlt || ""}
          src={image}
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      <div className="flex pt-10">
        <div className="h-fit justify-content relative z-10 text-left px-5 py-30 md:px-20 md:py-50 max-w-4xl">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-1 leading-tight text-on-primary text-5xl md:text-7xl font-extrabold tracking-[-0.04em]"
          >
            {line1} <br />
            <span className="text-secondary">{accent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-[18px] text-on-primary max-w-2xl leading-relaxed whitespace-pre-line"
          >
            {description}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="hidden md:flex relative z-10 top-30 left-20 w-100 h-100"
        />
      </div>
    </section>
  );
};

export default ContactHero;
