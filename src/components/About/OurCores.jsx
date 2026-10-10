import { motion } from "framer-motion";
import { useSection } from "../../content/useSection";
import { valueIcons } from "../../content/valueIcons";

const OurCores = () => {
  const { heading, items = [] } = useSection("about.values");

  return (
    <section className="bg-primary max-w-8xl">
      <div className="py-5 lg:py-10 px-10 md:px[80px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-headline-xl font-sans text-3xl text-on-primary mb-4">
            {heading}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((value, i) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-8 border bg-surface-container border-on-primary rounded-xl glass hover:bg-[#0a0625] text-on-surface-variant hover:text-on-primary transition-colors group"
            >
              <span className="text-secondary text-3xl mb-4 block group-hover:scale-110 transition-transform">
                {valueIcons[value.icon] ?? valueIcons.church}
              </span>
              <h4 className="font-label-md text-secondary uppercase tracking-widest mb-2">
                {value.title}
              </h4>
              <p className="text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCores;
