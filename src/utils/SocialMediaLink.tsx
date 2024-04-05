import {
  faEbay,
  faEtsy,
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcon } from "../Types/interfaces";

const fontAwesomeIcons: faIcon[] = [
  { link: "/", icon: faFacebook },
  { link: "/", icon: faInstagram },
  { link: "/", icon: faEtsy },
  { link: "/", icon: faEbay },
  { link: "/", icon: faTwitter },
  { link: "/", icon: faTiktok },
];

export const socialButtons = fontAwesomeIcons.map(({ link, icon }) => {
  return (
    <a href={link} key={link}>
      <FontAwesomeIcon id="btn__social" className="icon" icon={icon} />
    </a>
  );
});
