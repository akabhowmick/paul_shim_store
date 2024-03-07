import "./Footer.css";

import {
  MDBFooter,
} from "mdb-react-ui-kit";

export const Footer = () => {
  return (
    <>
      <MDBFooter
        className="text-center"
        color="white"
        style={{
          backgroundColor: "var(--red-background)",
        }}
      >
        <div className="text-center footer-main">
          <div className="follow-us">
            <h6
              className="text-uppercase text-white font-weight-bold"
              style={{ marginBottom: "0" }}
            >
              Follow us:
            </h6>
            <div id="social-links">
              <a
                className="btn-primary round-pill social"
                style={{ backgroundColor: "#eb6d20" }}
                href="https://www.etsy.com/shop/Print3DverseShop?ref=l2-about-shopname"
                role="button"
              >
                E
              </a>
              <a
                className="btn-primary round-pill social"
                style={{ backgroundColor: "#ac2bac" }}
                href="https://www.instagram.com/print3dverse/"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div>© 2024 Copyright: AKA CODES</div>
        </div>
      </MDBFooter>
    </>
  );
};

