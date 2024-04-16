import "./Home.css";
import { socialButtons } from "../../utils/SocialMediaLink";
import { companyTagline } from "../../utils/HelpfulText";
import { ItemCarousel } from "./ItemCarousel/ItemCarousel";
import { TrailTextAnimations } from "../../Components/Animations/Text/TrailTextAnimations";
import { ImageCarousel } from "../../Components/ImageCarousels/ImageCarousel";
import { heroImages } from "../../utils/Products";

export const HeroSection = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="hero__lead">
            <TrailTextAnimations text={companyTagline} />
            <ItemCarousel />

            <a href="#all-products">
              <button className="btn btn-primary">All Products</button>
            </a>
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
