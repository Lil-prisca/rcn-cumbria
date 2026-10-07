import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import MissionSection from "../components/About/MissionSection";
import OurCores from "../components/About/OurCores";
import Team from "../components/About/Team";
import AboutHero from "../components/About/AboutHero";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-100% max-w-400 m-auto">
        <AboutHero />
        <MissionSection />
        <OurCores />
        <Team />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
