import { Product } from "../../../Types/interfaces";
import { SingleProduct } from "../../SingleProduct/SingleProduct";
import "./StackedCard.css";

export const StackedCards = ({ productsList }: { productsList: Product[] }) => {

  const stackedProductBanners = productsList.map((card, index) => {
    return (
      <li key={card.id} className="card" id={`card-${index + 1}`}>
        <SingleProduct key={card.id} product={card} displayType="" />
      </li>
    );
  });

  return (
    <div>
      <ul id="stacked-banners">{stackedProductBanners}</ul>
    </div>
  );
};
