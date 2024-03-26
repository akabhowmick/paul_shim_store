import "./Footer.css";

import navbarLogo from "../../assets/Main/logo.png";

import { SiteLink } from "../../Types/interfaces";
import { socialButtons } from "../../utils/SocialMediaLink";
import { links } from "../Navbar/Navbar";

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
          <p className="about">Short About Us Section</p>
          <div id="social-links">{socialButtons}</div>
          <p className="about">
            Site Made By: <a href="http://akashbhowmick.com/">AKA CODE</a>
          </p>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
          {logoFooterLink}
          <p className="menu">
            {footerSiteLinks.map((link) => {
              return (
                <a key={link.name} aria-label={`Link to ${link.name}`} href={link.path}>
                  {link.name}
                </a>
              );
            })}
          </p>
          <p className="name"> Queens Finest Prints &copy; 2024</p>
        </div>
      </footer>
    </>
  );
};
