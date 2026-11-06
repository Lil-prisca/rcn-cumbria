import { motion } from "framer-motion";
import { useSection } from "../../content/useSection";

const ContactHero = () => {
  const { line1, accent, description, image, imageAlt } =
    useSection("contact.banner");

  return (
    <section className="relative  isolate flex  min-h-[300px]  items-center overflow-hidden  mt-20 pb-20 bg-rcn-night font-sans">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover object-top opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
          alt={imageAlt || ""}
          src={image}
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      <div className="flex pt-10">
        <div className="h-fit justify-content relative z-10 text-left px-5  md:px-20  max-w-4xl">
           <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[16px] font-bold uppercase tracking-[0.12em] text-rcn-red"
        >
          Contact Us
        </motion.p>
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4  leading-tight text-on-primary text-3xl md:text-5xl font-extrabold tracking-[-0.04em]"
          >
            {line1} <br />
            <span className="text-secondary">{accent}</span>
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
      </div>
    </section>
  );
};

export default ContactHero;
