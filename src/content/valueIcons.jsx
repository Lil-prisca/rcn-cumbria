import {
  FaChurch,
  FaHeart,
  FaBookOpen,
  FaLayerGroup,
  FaPrayingHands,
  FaUsers,
  FaFlag,
  FaBullseye,
  FaBook,
  FaCross,
  FaTshirt,
  FaClock,
} from "react-icons/fa";

export const valueIcons = {
  church: <FaChurch />,
  heart: <FaHeart />,
  book: <FaBookOpen />,
  layers: <FaLayerGroup />,
  praying: <FaPrayingHands />,
  users: <FaUsers />,
  flag: <FaFlag />,
  bullseye: <FaBullseye />,
  scripture: <FaBook />,
  cross: <FaCross />,
  shirt: <FaTshirt />,
  clock: <FaClock />,
};

export const iconOptions = Object.keys(valueIcons).map((k) => ({
  value: k,
  label: k[0].toUpperCase() + k.slice(1),
}));
