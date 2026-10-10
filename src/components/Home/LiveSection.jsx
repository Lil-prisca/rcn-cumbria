import { motion } from "framer-motion";
import { FaCirclePlay } from "react-icons/fa6";
import { useSection } from "../../content/useSection";
import { safeHref } from "../../content/safeHref";

const LiveSection = () => {
  const presence = useSection("home.presence");
  const live = useSection("home.live");
  const liveHref = safeHref(live.linkUrl);

  return (
    <>
      <section className="relative flex min-h-[419px] w-full items-center justify-center px-4 text-center font-sans sm:px-8 lg:px-12">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            alt={presence.imageAlt || ""}
            src={presence.image}
          />
          <div className="absolute inset-0 bg-[#131318]/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-4xl px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 text-5xl italic text-white md:text-7xl"
          >
            {presence.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl font-light italic leading-relaxed text-white md:text-3xl"
          >
            &quot;{presence.quote}&quot;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mt-12 h-0.5 w-32 bg-secondary"
          />
        </div>
      </section>

      {/* Live broadcast */}
      <section className="relative py-20 bg-on-primary overflow-hidden font-sans">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <div className="w-full h-full bg-linear-to-lq from-primary/30 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row items-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2 order-2 md:order-1"
          >
            <h2 className="text-5xl md:text-6xl text-primary">
              {live.heading}
            </h2>
            <p className="text-on-surface-variant text-lg whitespace-pre-line">
              {live.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full md:w-1/2 order-1 md:order-2"
          >
            <div className="aspect-video relative rounded-xl overflow-hidden shadow-2xl border border-outline-variant/10">
              <img
                className="w-full h-full object-cover filter brightness-75"
                alt={live.imageAlt || ""}
                src={live.image}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute inset-0 flex flex-col items-center justify-center gap-2"
              >
                <div className="text-center justify-center mt-3">
                  <p className="text-xl uppercase tracking-[0.25em] text-white mb-2">
                    {live.linkLabel}
                  </p>
                </div>
                <a href={liveHref || undefined} aria-label={live.linkLabel}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group cursor-pointer transition-transform"
                  >
                    <span className="text-4xl text-white">
                      <FaCirclePlay />
                    </span>
                  </motion.div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default LiveSection;
