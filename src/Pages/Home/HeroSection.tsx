import { useState } from "react";
import "./Home.css";
import { heroText } from "../../utils/HelpfulText";
import { HeroButton } from "../../Types/interfaces";
import mainCS from "../../assets/Main/cs1-main.png";
import { socialButtons } from "../../utils/SocialMediaLink";

// TODO replace the other two pictures and include one of the logo ones
const heroButtons: HeroButton[] = [
  {
    color: "tosca",
    imageSrc:
      "https://www.vespa.com/dam/jcr:46e4119f-1ed8-48e9-82d2-0ed97adfe6e2/green-relax-02.png",
  },
  {
    color: "red",
    imageSrc:
      "https://www.vespa.com/dam/jcr:46e4119f-1ed8-48e9-82d2-0ed97adfe6e2/green-relax-02.png",
  },
  {
    color: "grey",
    imageSrc: mainCS,
  },
];

export const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(heroButtons[0].imageSrc);
  const [showImage, setShowImage] = useState(true);

  const imageDisplayHandler = (image: string) => {
    setShowImage(false);
    setTimeout(() => {
      setCurrentImage(image);
      setShowImage(true);
    }, 1000);
  };

  const colorButtons = heroButtons.map(({ color, imageSrc }) => {
    return (
      <div className="button__color__items" key={color}>
        <button
          type="button"
          className={`btn btn_change__color active ${color}`}
          id={`color-${color}`}
          onClick={() => imageDisplayHandler(imageSrc)}
        ></button>
      </div>
    );
  });

  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-2 hero__lead">
            <h2>You dream it</h2>
            <h1>We 3D Print It! </h1>
            <p>{heroText}</p>
            <button className="btn btn-primary">All Products</button>
          </div>
          <div className="col-md-6 order-md-2 hero__image">
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
