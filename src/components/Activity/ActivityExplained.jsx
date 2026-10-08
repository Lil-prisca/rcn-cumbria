import { motion } from "framer-motion";
import { useSection } from "../../content/useSection";

const ActivityExplained = () => {
  const { title, description, verse, image, imageAlt } =
    useSection("activities.prayer");

  return (
    <section className="h-104.75 overflow-hidden w-full relative flex items-center justify-center text-center">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          alt={imageAlt}
          src={image}
        />
        <div className="absolute inset-0 bg-[#131318]/60 backdrop-blur-[2px]"></div>
      </div>
      <div className="relative z-10 px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="italic text-5xl md:text-7xl text-white mb-8"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl text-on-primary font-light italic leading-relaxed"
        >
          {description}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-1xl md:text-2xl text-on-primary font-light italic leading-relaxed"
        >
          {verse}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 h-0.5 w-32 bg-secondary mx-auto"
        />
      </div>
    </section>
  );
};

export default ActivityExplained;
