import "./Home.css";

// import { homePageImages } from "../../products/imagesForCarousel";
// import { ImageCarousel } from "../../Components/ImageCarousel";
import { products } from "../../utils/Products";
import { SingleProduct } from "../SingleProduct/SingleProduct";
// import { Slide, Fade } from "react-awesome-reveal";

export const Home = () => {
  return (
    <>
      {/* <div className="hero">
        <ImageCarousel images={homePageImages} comingFrom="home-page" />
      </div> */}
      <section>
        <div className="below-hero">
          <div className="block-reveal">
            <h2 className="section-header"> FEATURED PRODUCTS</h2>
          </div>
          <hr className="line-below" />
        </div>

        <div className="products-display">
          {products.map((product) => {
            if (product) {
              return (
                <div className="products-display-product" key={product.id}>
                  <h4 className="product-subheader">{product.type.toLocaleUpperCase()}</h4>
                  <hr className="line-below-products" />

                  <SingleProduct
                    product={product}
                    comingFrom={"home-page"}
                  />
                </div>
              );
            }
          })}
        </div>

        {/* <div className="about-section">
          <div className="about-flex">
            <iframe
              id="main-video"
              src="https://www.youtube.com/embed/gUpL471-EQg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="about-us-text">
              <h2>ABOUT US</h2>
              {aboutUs.map((paragraph, index) => {
                return (
                  <div className="about-section-paragraph" key={index}>
                    <p>{paragraph}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};
