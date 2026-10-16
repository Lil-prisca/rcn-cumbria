import { motion } from "framer-motion";
import { useSection } from "../../content/useSection";

const ActivityHero = () => {
  const {
    eyebrow = "Our Activities",
    line1 = "Join Us in Prayer,",
    line2 = "the Word and Fellowship",
    description = "We gather together — online and in person — to seek God, grow in His Word and support one another in faith.",
    image = "/images/activities-hero.jpg",
    imageAlt = "Woman praying with hands raised",
  } = useSection("activities.banner") || {};

  return (
    <section className=" mt-15 relative isolate flex min-h-[300px] items-center overflow-hidden bg-rcn-night font-sans">
      {/* Background photo (woman praying, sits on the right) */}
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
      />
      {/* Navy fade from the left so the text stays readable */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-rcn-night from-30% via-rcn-night/75 via-55% to-transparent" />

      <div className="relative z-10 w-full px-6 py-12 md:px-[58px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[16px] font-bold uppercase tracking-[0.12em] text-rcn-red"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-[-0.02em] text-rcn-white md:text-[42px]"
        >
          {line1} <br className="hidden sm:block" />
          {line2}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-5 max-w-[370px] text-[17px] leading-[1.5] text-rcn-white"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};

export default ActivityHero;
