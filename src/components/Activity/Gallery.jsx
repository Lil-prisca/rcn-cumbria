import { motion } from "framer-motion";
import { useSection } from "../../content/useSection";

const Gallery = () => {
  const { heading, items = [] } = useSection("activities.gallery");

  return (
    <div className="mt-10 flex flex-col items-center font-sans">
      <h2 className="text-center font-bold text-2xl">{heading}</h2>
      <div className="my-5 lg:w-5xl justify-center items-center px-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
        {items.map((value) => (
          <motion.div
            key={value.id}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-43 h-50 md:w-50 mx-auto rounded-lg overflow-hidden"
          >
            <img
              className="w-43 h-50 md:w-50 object-cover"
              src={value.image}
              alt={value.alt || ""}
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
