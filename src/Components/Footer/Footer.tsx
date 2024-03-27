import "./Footer.css";

import navbarLogo from "../../assets/Main/logo.png";

import { SiteLink } from "../../Types/interfaces";
import { socialButtons } from "../../utils/SocialMediaLink";
import { links } from "../Navbar/Navbar";
import { heroText } from "../../utils/HelpfulText";

const footerSiteLinks: SiteLink[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  ...links,
];

export const Footer = () => {
  const logoFooterLink = (
    <a href="/" id="logo-with-title">
      <img className="navbar-logo" src={navbarLogo} alt="tkd-main-logo" />
      <h3>Queens Finest Prints</h3>
    </a>
  );
  return (
    <>
      <footer className="footer">
        <div className="footer-left col-md-4 col-sm-6">
          <h4 className="about">{heroText}</h4>
          <div id="social-links">{socialButtons}</div>
          <p className="about">
            For more tailor-made sites, please visit:
            <br /> <a href="http://akashbhowmick.com/">AKA CODE</a>
          </p>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
          {logoFooterLink}

          <ul className="menu">
            {footerSiteLinks.map((link) => {
              return (
                <li key={link.name} aria-label={`Link to ${link.name}`}>
                  <a aria-label={`Link to ${link.name}`} href={link.path}>
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
    </>
  );
};
