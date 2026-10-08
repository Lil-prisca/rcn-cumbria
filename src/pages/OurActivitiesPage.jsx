import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Activity from "../components/Activity/Activity";
import Gallery from "../components/Activity/Gallery";
import ActivityHero from "../components/Activity/ActivityHero";
import ActivityExplained from "../components/Activity/ActivityExplained";

const OurActivitiesPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="w-100% max-w-400 m-auto font-sans">
        <ActivityHero />
        <Activity />
        <ActivityExplained />
        <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default OurActivitiesPage;
