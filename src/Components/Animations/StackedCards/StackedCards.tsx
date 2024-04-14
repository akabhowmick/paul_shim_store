import { Product } from "../../../Types/interfaces";
import { SingleProduct } from "../../SingleProduct/SingleProduct";
import "./StackedCard.css";

export const StackedCards = ({ productsList }: { productsList: Product[] }) => {
  const stackedProductBanners = productsList.map((card, index) => {
    return (
      <li key={card.id} className="card" id={`card-${index}`}>
        <SingleProduct key={card.id} product={card} displayType="" />
      </li>
    );
  });

  const singleItem = (
    <li className="card" id="card-1">
      <div className="card-content">
        <div>
          <h2>Card One</h2>
          <p>
            This is the content of card one. Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>
        <figure>
          <img src="https://assets.codepen.io/210284/flower-9.jpg" alt="card-one" />
        </figure>
      </div>
    </li>
  );

  return (
    <>
      <ul id="cards">{stackedProductBanners}</ul>
      <ul id="card">
        {singleItem}
        {singleItem}
        {singleItem}
      </ul>
    </>
  );
};
