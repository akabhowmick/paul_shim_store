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
  { link: "/home1", icon: faFacebook },
  { link: "/home2", icon: faInstagram },
  { link: "/home3", icon: faEtsy },
  { link: "/home4", icon: faEbay },
  { link: "/home5", icon: faTwitter },
  { link: "/home6", icon: faTiktok },
];

export const socialButtons = fontAwesomeIcons
  .filter((social) => social.link !== "/")
  .map(({ link, icon }) => {
    return (
      <a href={link} key={link}>
        <FontAwesomeIcon id="btn__social" className="icon" icon={icon} />
      </a>
    );
  });
