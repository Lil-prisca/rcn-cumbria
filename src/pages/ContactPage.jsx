import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactHero from "../components/Contact/ContactHero";

const ContactPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="w-100% max-w-400 m-auto">
        <ContactHero />
        <ContactInfo />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
