import Navbar from "../components/shared/Navbar";
import GiveHero from "../components/Give/GiveHero";
import GiveSection from "../components/Give/GiveSection";
import Footer from "../components/shared/Footer";

const GivePage = () => {
  return (
    <div>
      <Navbar />
      <div className="w-100% max-w-400 m-auto">
        <GiveHero />
        <GiveSection />
      </div>
      <Footer />
    </div>
  );
};

export default GivePage;
