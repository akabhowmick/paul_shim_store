import "./Home.css";
import { ImageCarousel } from "../../Components/ImageCarousels/ImageCarousel";
import { companyTagline } from "../../utils/HelpfulText";
import { socialButtons } from "../../utils/SocialMediaLink";
import { ItemCarousel } from "./ItemCarousel/ItemCarousel";
import { heroImages } from "../../utils/Products";
import { TrailTextAnimations } from "../../Components/Animations/Animations";

export const HeroSection = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="hero__lead">
            <TrailTextAnimations text={companyTagline} />
            <ItemCarousel />
            <button className="btn btn-primary">All Products</button>
          </div>
          <div className="hero__image">
            <ImageCarousel images={heroImages} />
          </div>
        </div>
        <div className="button_right">{socialButtons}</div>
      </div>
    </div>
  );
};
