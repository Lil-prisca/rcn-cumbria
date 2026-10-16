import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
// import MissionSection from "../components/About/MissionSection";
// import OurCores from "../components/About/OurCores";
// import Team from "../components/About/Team";
import AboutHero from "../components/About/AboutHero";
import RCNFamily from "../components/About/RCNFamily";
import LocalExpression from "../components/About/LocalExpression";
import PrayerFocus from "../components/About/PrayerFocus";
import OurLeadership from "../components/About/OurLeadership";
import YouareWelcome from "../components/About/YouareWelcome";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-100% max-w-400 m-auto">
        <AboutHero />
        <RCNFamily />
        <LocalExpression />
        <PrayerFocus />
        <OurLeadership />
        <YouareWelcome />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
