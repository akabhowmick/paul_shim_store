import "./SingleProduct.css";
import Typography from "@mui/material/Typography";
import { useCartContext } from "../../providers/CartProvider";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Product } from "../../Types/interfaces";
import { fullDetailedDetails } from "../../utils/HelpfulText";
import { ImageCarousel } from "../ImageCarousels/ImageCarousel";

export const SingleProduct = ({
  product,
  comingFrom,
}: {
  product: Product;
  comingFrom: string;
}) => {
  const { images, details, shortDetails, name, id, price, learnMoreLink } = product;

  const { addToCart, cartItems, removeFromCart } = useCartContext();

  const [seeFullDetails, setSeeFullDetails] = useState(false);

  const toggleInCart = () => {
    if (cartItems.find((item) => item.id === id)) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  };

  const clickSeeFullDetailsHandler = () => {
    setSeeFullDetails(!seeFullDetails);
  };

  const cartBtnText = cartItems.find((item) => item.id === id)
    ? "Remove from Cart"
    : "Add To Cart!";

  const detailHandler = comingFrom === "home-page" ? shortDetails : details;

  const detailsToDisplay = detailHandler.map((detail, index) => {
    return (
      <Typography
        variant="body2"
        color={"black"}
        key={index}
        style={{ padding: "0.5rem 0", lineHeight: "1.5" }}
      >
        {detail}
      </Typography>
    );
  });

  const learnLink =
    comingFrom === "home-page" ? (
      <Link className="learn-more-btn" to={learnMoreLink}>
        <button id="learn-more-btn" className="btn text-uppercase">
          Click Here For Full Details!
        </button>
      </Link>
    ) : (
      <button
        id="learn-more-btn"
        className="btn text-uppercase"
        onClick={() => clickSeeFullDetailsHandler()}
      >
        {seeFullDetails ? "See Less" : "See How To Order!"}
      </button>
    );

  const fullDetails =
    comingFrom !== "home-page" &&
    seeFullDetails &&
    fullDetailedDetails.map((detailType) =>
      detailType.map((detail, index) => (
        <Typography variant="body2" color={"black"} key={index} style={{ lineHeight: "1.5" }}>
          {detail}
        </Typography>
      ))
    );

  const redirectButton = comingFrom === "home-page" && (
    <Link className="learn-more-btn" to={learnMoreLink}>
      <button>Learn More!</button>
    </Link>
  );

  return (
    <div className="product-banner">
      <div className="card">
        <div className="image-container">
          <ImageCarousel images={images} />
        </div>
        <div className="product-info-container">
          <div className="product-info-header">
            <h3>{name}</h3>
            <div className="product-info-price">
              <h4>Limited Time Price: ${price}</h4>
              <div className="discount-container">
                <h5 className="discount-price">Original Price:${(price * 1.3).toFixed(2)}</h5>
                <h4>30% OFF</h4>
              </div>
            </div>
          </div>

          <div className="product-info-details">
            <h4>Item Details:</h4>
            {detailsToDisplay}
            {fullDetails}
            {learnLink}
          </div>

          <div className="product-info-buttons">
            <button onClick={() => toggleInCart()}>{cartBtnText}</button>
            {redirectButton}
          </div>
        </div>
      </div>
    </div>
  );
};
