import { useSectionStatus } from "../../content/useSection";
import { motion } from "framer-motion";

// All text and the image come from the admin section "resources.banner".
export default function ResourcesHero() {
  const { data } = useSectionStatus("resources.banner");
  const { eyebrow, title, description, image, imageAlt } = data || {};

  return (
    <section className="relative isolate flex min-h-[300px]  items-center overflow-hidden  mt-20 bg-rcn-night font-sans">
      {/* Bible photo on the right */}
      {image && (
        <img
          src={image}
          alt={imageAlt || ""}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
        />
      )}
      {/* Navy fade from the left */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-rcn-night from-35% via-rcn-night/80 via-55% to-transparent" />

      <div className="w-full px-6 py-12 md:px-[64px]">
        {eyebrow && (
          <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[16px] font-bold uppercase tracking-[0.12em] text-rcn-red"
        >
          {eyebrow}
        </motion.p>
        )}
         <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4  leading-tight text-on-primary text-3xl md:text-5xl font-extrabold tracking-[-0.04em]"
        >
          
          {title}
        </motion.h1>
        
        {description && (
           <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-[18px] text-on-primary max-w-2xl whitespace-pre-line"
        >
          {description}
        </motion.p>
        )}
      </div>
    </section>
  );
}
