import { useState } from "react";
import "./Home.css";
import { KeyValueStringPairs } from "../../Types/interfaces";
import mainCS1 from "../../assets/Main/logo.png";
import mainCS2 from "../../assets/Main/logo.png";
import mainCS3 from "../../assets/Main/logo.png";
import navbarLogo from "../../assets/Main/logo.png";
import { socialButtons } from "../../utils/SocialMediaLink";
import { ItemCarousel } from "./ItemCarousel";

// TODO replace the other two pictures and include one of the logo ones
const heroButtons: KeyValueStringPairs[] = [
  {
    key: "var(--secondary)",
    value: navbarLogo,
  },
  {
    key: "tosca",
    value: mainCS1,
  },
  {
    key: "red",
    value: mainCS2,
  },
  {
    key: "var(--primary)",
    value: mainCS3,
  },
];

export const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(heroButtons[0].value);
  const [showImage, setShowImage] = useState(true);

  const imageDisplayHandler = (image: string) => {
    setShowImage(false);
    setTimeout(() => {
      setCurrentImage(image);
      setShowImage(true);
    }, 1000);
  };

  const colorButtons = heroButtons.map(({ key, value }) => {
    return (
      <div className="button__color__items" key={key}>
        <button
          type="button"
          className={`btn btn_change__color active ${key}`}
          id={`color-${key}`}
          onClick={() => imageDisplayHandler(value)}
        ></button>
      </div>
    );
  });

  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="hero__lead">
            <h1>Company Tagline! </h1>
            <ItemCarousel />
            <button className="btn btn-primary">All Products</button>
          </div>
          <div className="hero__image">
            {showImage && (
              <img id="image-hero" src={currentImage} alt="image displaying custom 3D prints" />
            )}
            <div className="button__color">{colorButtons}</div>
          </div>
        </div>

        <div className="button_right">{socialButtons}</div>
      </div>
    </div>
  );
};
