import "./Home.css";
import { products } from "../../utils/Products";
import { SingleProduct } from "../../Components/SingleProduct/SingleProduct";
import { HeroSection } from "./HeroSection";
import { ReviewCarousel } from "./ReviewCarousels";

export const Home = () => {
  const homeProductsList = (
    <div className="products-display">
      {products.map((product) => {
        return <SingleProduct key={product.id} product={product} comingFrom="home-page" />;
      })}
    </div>
  );

  return (
    <section className="home-page">
      <HeroSection />
      {homeProductsList}
      <ReviewCarousel />
    </section>
  );
};
