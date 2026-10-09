import { useSection } from "../../content/useSection";

const GiveHero = () => {
  const { heading, description, image, imageAlt } = useSection("give.banner");

  return (
    <section className="font-sans">
      <div className="bg-primary w-full h-120 mt-20 relative overflow-hidden px-5 py-10 md:px-15 md:py-15 text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            className="w-full h-full object-cover"
            alt={imageAlt || ""}
            src={image}
          />
        </div>
        <div className="relative z-10 max-w-2xl md:px-15 md:pt-20 my-auto">
          <h1 className="text-7xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            {heading}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GiveHero;
