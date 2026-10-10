import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export const socialIcons = {
  youtube: <FaYoutube />,
  facebook: <FaFacebookF />,
  whatsapp: <FaWhatsapp />,
  instagram: <FaInstagram />,
};

export const socialOptions = Object.keys(socialIcons).map((k) => ({
  value: k,
  label: k[0].toUpperCase() + k.slice(1),
}));
