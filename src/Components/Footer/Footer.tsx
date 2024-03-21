import "./Footer.css";

import ebay from "../../assets/Social/ebay.png";
import etsy from "../../assets/Social/etsy.png";
import facebook from "../../assets/Social/facebook.png";
import instagram from "../../assets/Social/instagram.png";
import tiktok from "../../assets/Social/tiktok.png";
import twitter from "../../assets/Social/twitter.png";
import navbarLogo from "../../assets/Main/logo.png";

import { SocialLinksWithIcon, FooterLink } from "../../Types/interfaces";

const socialLinksWithIcons: SocialLinksWithIcon[] = [
  { icon: ebay, link: "" },
  { icon: etsy, link: "" },
  { icon: facebook, link: "" },
  { icon: instagram, link: "" },
  { icon: tiktok, link: "" },
  { icon: twitter, link: "" },
];

const footerSiteLinks: FooterLink[] = [
  { footerName: "Home", link: "" },
  { footerName: "Contact Us", link: "" },
  { footerName: "About Us", link: "" },
  { footerName: "Sports", link: "" },
  { footerName: "Desktop", link: "" },
  { footerName: "All", link: "" },
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
          <div id="social-links">
            {socialLinksWithIcons.map((social) => {
              return (
                <a
                  key={social.icon}
                  className="btn-primary round-pill social"
                  href={social.link}
                  role="button"
                >
                  <img
                    className="social-media-icons"
                    src={social.icon}
                    alt={`social media link to ${social.icon}`}
                  />
                </a>
              );
            })}
          </div>
          <p className="about">
            Site Made By: <a href="http://akashbhowmick.com/">AKA CODE</a>
          </p>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
          {logoFooterLink}
          <p className="menu">
            {footerSiteLinks.map((link) => {
              return (
                <a key={link.footerName} aria-label={`Link to ${link.footerName}`} href={link.link}>
                  {link.footerName}
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
