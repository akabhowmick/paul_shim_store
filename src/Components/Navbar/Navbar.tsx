import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, Outlet } from "react-router-dom";

import { NavUnlisted } from "./NavbarStyles";
import "./Navbar.css";
import { useState } from "react";

import navbarLogo from "../../assets/Main/logo.png";
import { SiteLink } from "../../Types/interfaces";

export const links: SiteLink[] = [
  { name: "All Products", path: "/all" },
  { name: "Sports", path: "/sports" },
  { name: "Desk Toppers", path: "/desk-toppers" },
  { name: "Contact Us", path: "/contact-us" },
];

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const linksWithNavLink = links.map((link, index) => (
    <NavLink
      onClick={() => setShowNavbar(false)}
      key={index}
      to={link.path}
      className={({ isActive, isPending, isTransitioning }) =>
        [
          isPending ? "pending" : "",
          isActive ? "active" : "",
          isTransitioning ? "transitioning" : "",
        ].join(" ")
      }
    >
      <li>{link.name}</li>
    </NavLink>
  ));

  const logoHeaderLink = (
    <NavLink onClick={() => setShowNavbar(false)} to="/" id="logo-with-title">
      <img className="navbar-logo" src={navbarLogo} alt="tkd-main-logo" />
      <h2>Queens Finest Prints</h2>
    </NavLink>
  );

  return (
    <div className="root-layout">
      <header className="nav-bar">
        <nav>
          <NavUnlisted
            aria-label="Larger viewport navigation menu with links"
            className="main-navbar-ul"
          >
            <ul className="main-regular-links">{linksWithNavLink}</ul>
            <div className="menu-icon" onClick={handleShowNavbar}>
              <MenuIcon />
            </div>
            {showNavbar && (
              <div className="nav-elements">
                <ul>{linksWithNavLink}</ul>
              </div>
            )}
            {logoHeaderLink}
          </NavUnlisted>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
