import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSection } from "../../content/useSection";
import FadeImage from "../shared/FadeImage"; // adjust the path to where you put it

// Tailwind needs full class names, so each layout is spelled out
const LAYOUTS = {
  1: { grid: "grid-cols-1 grid-rows-1 ", cells: [""] },
  2: { grid: "grid-cols-2 grid-rows-1", cells: ["", ""] },
  3: { grid: "grid-cols-2 grid-rows-2", cells: ["row-span-2", "", ""] },
  4: { grid: "grid-cols-2 grid-rows-2", cells: ["", "", "", ""] },
  5: {
    grid: "grid-cols-4 grid-rows-2",
    cells: ["col-span-2 row-span-2", "", "", "", ""],
  },
  6: { grid: "grid-cols-3 grid-rows-2", cells: ["", "", "", "", "", ""] },
};

const MAX_PHOTOS = 6;

// Turns the banner's photo data into a plain list of image URLs.
const toPhotoList = (b) => {
  let p = b.photos ?? b.images ?? b.collage ?? [];
  if (typeof p === "string") p = p.split(/[\n,]+/);
  return p
    .map((x) =>
      typeof x === "string" ? x.trim() : x?.url || x?.src || x?.image,
    )
    .filter(Boolean);
};

const HeroCollage = ({ photos = [] }) => {
  const list = photos.filter(Boolean).slice(0, MAX_PHOTOS);
  if (!list.length) return null;

  const layout = LAYOUTS[list.length];

  return (
    <div className={`grid h-full w-full gap-1 ${layout.grid}`}>
      {list.map((src, i) => (
        <FadeImage
          key={src + i}
          src={src}
          priority
          delay={i * 120}
          bgClassName="bg-[#19143E]"
          wrapperClassName={layout.cells[i]}
          className="h-full w-full object-cover object-top"
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const b = useSection("home.banner");
  const photos = toPhotoList(b);

  return (
    <section className="relative min-h-[70vh] mt-20 py-15 flex items-center overflow-hidden bg-[#19143E] font-sans">
      {/* hero background: collage if photos are set, otherwise single image */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full opacity-40">
          {photos.length ? (
            <HeroCollage photos={photos} />
          ) : (
            b.image && (
              <FadeImage
                src={b.image}
                alt={b.imageAlt || ""}
                priority
                bgClassName="bg-[#19143E]"
                wrapperClassName="h-full w-full"
                className="h-full w-full object-cover object-top"
              />
            )
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#19143E] via-[#19143E]/60 to-transparent"></div>
      </div>

      <div className="text-center flex justify-center container mx-auto px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-5xl md:text-7xl font-extrabold tracking-[-0.04em] leading-[0.95] mb-8"
          >
            {b.line1} {b.line2}{" "}
            <span className="text-secondary">{b.accent}</span>
          </motion.h1>

          {b.subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-white/90 text-lg md:text-xl font-semibold mx-auto max-w-xl mb-3"
            >
              {b.subtitle}
            </motion.p>
          )}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-white/80 text-xl md:text-2xl mx-auto font-body max-w-xl leading-relaxed mb-5 whitespace-pre-line"
          >
            {b.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/about-us">
              <motion.button
                whileHover={{
                  scale: 1.06,
                  y: -3,
                  boxShadow: "0px 12px 30px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                className="bg-secondary hover:bg-white hover:text-secondary text-white px-5 py-2 rounded-lg font-bold text-lg transition-colors duration-300"
              >
                {b.primaryLabel}
              </motion.button>
            </Link>

            <Link to="/iamnew">
              <motion.button
                whileHover={{
                  scale: 1.06,
                  y: -3,
                  boxShadow: "0px 12px 30px rgba(255,255,255,0.15)",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-secondary px-5 py-2 rounded-lg font-bold text-lg transition-colors duration-300"
              >
                {b.secondaryLabel}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
