import "./Home.css";

// import { homePageImages } from "../../products/imagesForCarousel";
// import { ImageCarousel } from "../../Components/ImageCarousel";
import { products } from "../../utils/Products";
import { SingleProduct } from "../../Components/SingleProduct/SingleProduct";

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
                    comingFrom="home-page"
                  />
                </div>
              );
            }
          })}
        </div>
      </section>
    </>
  );
};
