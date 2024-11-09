import { products } from "../../../utils/Products";
import "./ItemCarousel.css";


const shuffleArray = (productArray: string[]) => {
  for (let i = productArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [productArray[i], productArray[j]] = [productArray[j], productArray[i]];
  }
  return productArray;
};

// Only show random 5 items
const itemNames = shuffleArray(products.map((product) => product.name)).slice(0, 5);

export const ItemCarousel = () => {
  return (
    <div className="scrolling-words-container">
      <span>You can buy: </span>
      <div className="scrolling-words-box">
        <ul>
          {itemNames.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
