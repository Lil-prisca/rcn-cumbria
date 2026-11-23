import Logo from "../../assets/RCN Cumbria2.png";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

import { Link } from "react-router-dom";
const Navigations = [
  { label: "Our Activities", to: "/our-activities" },
  { label: "About", to: "/about-us" },
  { label: "Contact Us ", to: "/contact-us" },
  { label: "Give", to: "/give" },
  { label: "I am new", to: "/iamnew" },
];
const Navigations2 = [
  { label: "Term Of Use", to: "/terms-of-use" },
  { label: "Safe-Guarding", to: "/safeguarding" },
  { label: "Privacy Policy", to: "/privacy-policy" },
];

const socials = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/rcncarlisle",
    color: "#1877F2",
    label: "Facebook",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/rcncarlisle",
    color: "#1DA1F2",
    label: "Twitter",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/rcncarlisle/",
    color: "#df6427",
    label: "Instagram",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@RCNCarlisle",
    color: "#FF0000",
    label: "YouTube",
  },
  {
    icon: FaWhatsapp,
    href: "https://whatsapp.com/channel/0029VbC2WZW5vKAHVkYWha1m",
    color: "#00B328",
    label: "WhatsApp",
  },
];
const Footer = () => {
  return (
    <div className="bg-[#19143E] pt-5 font-sans">
      <div className=" w-[90%] md:w-fit max-w-400 mx-auto  text-white  flex flex-col  md:flex-row   py-3 ">
        {/* curc Infoo */}
        <div className="  w-{90%} md:w-100  px-5">
          <Link to="/">
            <div className="flex gap-2 items-center  ">
              <div className=" w-25 h-13">
                <img src={Logo} alt="" />
              </div>
            </div>
          </Link>
          <p className="text-on-primary font-body-md max-w-md mb-5 lg:mb-2 ">
            RCN cumbria is a community of believers committed to the rebirth of aposttolic cristianity. Rooted in prayer, God,s word and fellowship, we stand as watchmen and gatekepers  seeking God's purpose for charlisle and the wider Cumbria region.
           
          </p>
          <div className=" flex md:hidden mt-3  items-center gap-3 mb-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 transition-all duration-300 hover:border-transparent hover:scale-110"
                  style={{
                    "--hover-color": social.color,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = social.color;
                    e.currentTarget.style.color =
                      social.color === "#ffffff" ? "#000" : "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "";
                    e.currentTarget.style.color = "";
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
        {/* <div className="flex-col    px-5  py-3  lg:mr-40"> */}
        {/*Naviations  */}
        <div className=" flex ml-5 mt-8 flex-col">
          <p className="text-[#BF5A16]">Navigations</p>
          {Navigations.map((link) => (
            <Link key={link.label} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className=" flex lg:ml-35 ml-5 mt-8 flex-col">
          <p className="text-[#BF5A16]"> Privacy and Policies</p>
          {Navigations2.map((link) => (
            <Link key={link.label} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>
        {/* </div> */}
        <div className=" hidden md:flex   mt-17 ml-3  pl-7 gap-3 mb-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 transition-all duration-300 hover:border-transparent hover:scale-110"
                style={{
                  "--hover-color": social.color,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = social.color;
                  e.currentTarget.style.color =
                    social.color === "#ffffff" ? "#000" : "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.color = "";
                }}
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      </div>
      <div className="px-5 md:px-20 py-5 border-t border-white/5 max-w-323 m-auto  text-center  text-on-primary ">
        <div>© 2026 RCN Cumbria. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
