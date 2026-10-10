import { motion } from "framer-motion";
import { useSection } from "../../content/useSection";
import { valueIcons } from "../../content/valueIcons";

const Mission = () => {
  const mandate = useSection("home.mandate");
  const vision = useSection("home.vision");
  const mission = useSection("home.mission");
  const groups = [vision, mission];

  return (
    <section className="py-10 relative font-sans">
      <div className="px-5 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-secondary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              className="w-full h-100 object-top object-cover rounded-3xl relative z-10 grayscale-0 transition-all duration-700"
              alt={mandate.imageAlt || ""}
              src={mandate.image}
            />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-sans font-bold text-[30px] text-black mb-5 text-3xl">
              {mandate.heading}
            </h2>
            <p className="font-body-lg text-black mb-5 leading-relaxed whitespace-pre-line">
              {mandate.description}
            </p>

            <div className="space-y-12">
              {groups.map((group, g) => (
                <div key={g} className="space-y-3">
                  <h3 className="text-body-xl font-bold">{group.heading}</h3>
                  {(group.items || []).map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.6 }}
                      className="flex gap-3"
                    >
                      <div className="shrink-0 w-12 h-12 flex items-center justify-center text-secondary border-secondary/20">
                        {valueIcons[item.icon] ?? valueIcons.flag}
                      </div>
                      <div>
                        <h4 className="text-body-lg font-bold mb-2">
                          {item.title}
                        </h4>
                        <p className="text-on-surface-variant font-sans">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
