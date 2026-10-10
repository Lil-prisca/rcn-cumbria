import worship from "../../assets/Worship.mp4";
import { Link } from "react-router-dom";
import { useSection } from "../../content/useSection";

const SpotlightEvent = () => {
  const s = useSection("home.spotlight");

  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto bg-primary rounded-3xl overflow-hidden relative min-h-[600px] lg:min-h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover opacity-30"
            src={worship}
            width="100%"
            loop
            autoPlay
            muted
            playsInline
          ></video>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 p-12 md:p-24 w-full flex flex-col md:flex-row gap-12 justify-between items-center">
          <div className="max-w-xl">
            <h3 className="text-5xl text-center md:text-7xl font-serif text-white leading-none mb-8">
              {s.line1} <br />
              <span className="italic text-on-primary-container">
                {s.accent}
              </span>
            </h3>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/10 text-white w-full md:w-auto">
            <p className="text-white/70 text-lg font-body max-w-md mb-5 leading-relaxed whitespace-pre-line">
              {s.description}
            </p>
            <Link to="/our-activities">
              <button className="w-full bg-white text-primary py-4 rounded-xl font-label text-sm uppercase tracking-widest hover:bg-tertiary hover:text-white transition-all">
                {s.buttonLabel}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightEvent;
