import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

import ActivityHero from "../components/Activity/ActivityHero";

import FindYourPlace from "../components/Activity/FindYourPlace";
import GoogleMeet from "../components/Activity/GoogleMeet";
import UpcomingEvents from "../components/Activity/UpcomingEvents";
// import Gallery from "../components/Activity/Gallery";

const OurActivitiesPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="w-100% max-w-400 m-auto font-sans">
        <ActivityHero />
        <FindYourPlace />
        <GoogleMeet />
        {/* <UpcomingEvents /> */}
        {/* <Gallery /> */}
      </div>
      <Footer />
    </div>
  );
};

export default OurActivitiesPage;
