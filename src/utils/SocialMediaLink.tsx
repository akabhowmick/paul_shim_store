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
  { link: "https://www.facebook.com/QueensFinestCards", icon: faFacebook },
  { link: "https://www.instagram.com/queensfinestprints/", icon: faInstagram },
  { link: "https://www.etsy.com/shop/QueensFinestPrints", icon: faEtsy },
  { link: "https://www.ebay.com/usr/chris_cards_3", icon: faEbay },
  { link: "https://twitter.com/BreaksQueens", icon: faTwitter },
  { link: "https://www.tiktok.com/@queensfinestcards", icon: faTiktok },
];

export const socialButtons = fontAwesomeIcons.map(({ link, icon }) => {
  return (
    <a href={link} key={link}>
      <FontAwesomeIcon id="btn__social" className="icon" icon={icon} />
    </a>
  );
});
