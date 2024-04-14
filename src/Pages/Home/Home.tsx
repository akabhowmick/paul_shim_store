import "./Home.css";
import { products } from "../../utils/Products";
import { SingleProduct } from "../../Components/SingleProduct/SingleProduct";
import { HeroSection } from "./HeroSection";
import { ReviewCarousel } from "./ReviewCarousel/ReviewCarousels";
import { CardLoadingAnimation } from "../../Components/Animations/Loading/CardLoadingAnimation";
import { useEffect, useState } from "react";

export const Home = () => {
  const [renderDelayedContent, setRenderDelayedContent] = useState(false);
  const delayRendering = () => {
    setTimeout(() => {
      setRenderDelayedContent(true);
    }, 1500);
  };
  useEffect(() => {
    delayRendering();
  }, []);

  const homeProductsList = (
    <div className="products-display">
      {products.map((product) => {
        const cardToReturn = renderDelayedContent ? (
          <SingleProduct key={product.id} product={product} displayType="card" />
        ) : (
          <CardLoadingAnimation key={product.id} />
        );
        return cardToReturn;
      })}
    </div>
  );

  return (
    <section className="home-page">
      <HeroSection />
      <h2 className="page-header">View our featured products! </h2>
      {homeProductsList}
      <ReviewCarousel />
    </section>
  );
};
