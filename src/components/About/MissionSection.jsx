import { motion } from "framer-motion";
import { useSection } from "../../content/useSection";
import Inline from "../../content/Inline";
import { safeHref } from "../../content/safeHref";

const MissionSection = () => {
  const {
    image,
    imageAlt,
    intro = [],
    blocks = [],
  } = useSection("about.story");

  return (
    <section className="py-10 md:py-10 bg-surface">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            // top-24 assumes roughly a 6rem fixed header — adjust to match yours
            className="lg:col-span-5 order-1 lg:order-1 lg:sticky lg:top-24"
          >
            <div className="relative group">
              <img
                className="relative z-10 w-full asymmetric-border object-cover rounded-2xl h-100 shadow-2xl"
                alt={imageAlt || ""}
                src={image}
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 order-2 lg:order-2 pl-0 lg:pl-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-6 text-on-surface-variant text-lg leading-relaxed max-w-2xl"
            >
              {intro.map((p, i) => (
                <p key={i}>
                  <Inline text={p} />
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 space-y-8 max-w-2xl"
            >
              {blocks.map((b) => {
                const href = safeHref(b.linkUrl);
                return (
                  <div key={b.id}>
                    <h3 className="text-primary text-xl md:text-2xl font-bold mb-2">
                      {b.heading}
                    </h3>
                    <div className="space-y-2">
                      {(b.paragraphs || []).map((p, i) => (
                        <p
                          key={i}
                          className="text-on-surface-variant text-lg leading-relaxed"
                        >
                          <Inline text={p} />
                        </p>
                      ))}
                    </div>
                    {b.highlight && (
                      <p className="text-primary font-semibold text-lg leading-relaxed mt-2">
                        {b.highlight}
                      </p>
                    )}
                    {b.linkLabel && href && (
                      <a
                        href={href}
                        className="inline-block mt-2 text-secondary font-bold underline underline-offset-2"
                      >
                        {b.linkLabel}
                      </a>
                    )}
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
