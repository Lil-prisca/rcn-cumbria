import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Hero from "../components/Home/Hero";
import Mission from "../components/Home/Mission";
import LiveSection from "../components/Home/LiveSection";
import Team from "../components/Home/Team";
import SpotlightEvent from "../components/Home/SpotlightEvent";
import AboutRcn from "../components/test/AboutRCN.jsx";
import GatherWithUs from "../components/test/GatherWithUs.jsx";
import PastorsDesk from "../components/test/PastorsDesk.jsx";
const HomePage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="w-100% max-w-400 m-auto">
        <Hero />
        {/* <Mission /> */}
        <AboutRcn />
        <GatherWithUs />
        {/* <LiveSection /> */}
        <Team />
        <PastorsDesk />
        {/* <SpotlightEvent /> */}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
