import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import ResourcesHero from "../components/Resources/ResourcesHero";
import ResourcesPastorsDesk from "../components/Resources/ResourcesPastorsDesk";
import TeachingsMessages from "../components/Resources/TeachingsMessages";
import StayConnected from "../components/Resources/StayConnected";

const Resources = () => {
  return (
    <div>
      <Navbar />
      <ResourcesHero />
      <ResourcesPastorsDesk />
      <TeachingsMessages telegramLink="https://t.me/your-channel" />
      <StayConnected />
      <Footer />
    </div>
  );
};

export default Resources;
