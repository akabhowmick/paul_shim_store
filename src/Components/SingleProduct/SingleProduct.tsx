/* eslint-disable react/prop-types */

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
  const { images, details, shortDetails, name, id, desc, price, learnMoreLink } = product;
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

  const detailsToDisplay = detailHandler.map((detail) => {
    return (
      <Typography
        variant="body2"
        color={"black"}
        key={detail}
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
        {seeFullDetails ? "See Less" : "See Full Details!"}
      </button>
    );

  const fullDetails =
    comingFrom !== "home-page" &&
    seeFullDetails &&
    fullDetailedDetails.map((detailType) =>
      detailType.map((detail) => (
        <Typography
          variant="body2"
          color={"black"}
          key={detail}
          style={{ padding: "0.5rem 0", lineHeight: "1.5" }}
        >
          {detail}
        </Typography>
      ))
    );

  return (
    <div className="mt-5 mb-5 home-product-banner">
      <div className="row d-flex justify-content-center" id="product-row">
        <div className="col-md-10">
          <div className="card" style={{ background: "whitesmoke" }}>
            <div className="row">
              <div className="col-md-6">
                <div className="images p-3">
                  <div className="text-center p-4">
                    <ImageCarousel images={images} />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="product p-4">
                  <div className="mt-4 mb-3">
                    <h5 className="text-uppercase">{name}</h5>
                    <div className="price flex-row align-items-center">
                      {" "}
                      <span className="act-price">${price}</span>
                      <div className="ml-2">
                        {" "}
                        <small className="dis-price">${(price * 1.3).toFixed(2)}</small>{" "}
                        <span>30% OFF</span>{" "}
                      </div>
                    </div>
                  </div>
                  <p className="about">{desc}</p>
                  {detailsToDisplay}
                  {fullDetails}
                  {learnLink}
                  <div className="cart mt-4 align-items-center product-buttons">
                    <button
                      className="btn text-uppercase mr-2 px-4 btn btn-2 btn-sep icon-cart"
                      onClick={() => toggleInCart()}
                    >
                      {cartBtnText}
                    </button>
                    {comingFrom === "home-page" && (
                      <Link className="learn-more-btn" to={learnMoreLink}>
                        <button className="btn text-uppercase">Learn More!</button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
