import ProductCarousel from "../../Components/SingleProduct/ProductCarousel";
import { Product, NavbarLinkType } from "../../Types/interfaces";
import { useCartContext } from "../../providers/CartProvider";
import "./Cart.css";

export const CartBottom = ({ cartSuggestions }: { cartSuggestions: Product[] }) => {
  const { total, finalTotal } = useCartContext();

  const cartTotalDetails: NavbarLinkType[] = [
    { key: "Cart Subtotal: $", value: total.toFixed(2) },
    { key: "Shipping Cost: $", value: (5).toFixed(2) },
    { key: "Tax: $", value: (total * 0.0875).toFixed(2) },
    { key: "Total Cost: $", value: finalTotal.toFixed(2) },
  ];

  return (
    <div className="cart-bottom">
      <h4>Your Purchase Estimates:</h4>
      {cartTotalDetails.map(({ key, value }) => {
        return (
          <h4 key={key} className="total-details-text">
            {key + value}
          </h4>
        );
      })}

      <a href="/checkout">
        <button id="proceed-to-checkout-btn">Proceed to Checkout</button>
      </a>
      <div className="suggest-items">
        <h4>More Items Like This:</h4>
        <div className="cart-display-empty-products">
          {cartSuggestions.length > 0 && <ProductCarousel cartSuggestedItems={cartSuggestions} />}
        </div>
      </div>
    </div>
  );
};
