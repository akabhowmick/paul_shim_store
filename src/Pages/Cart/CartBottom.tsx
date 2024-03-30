import { cartTotalDetail } from "../../Types/interfaces";
import { useCartContext } from "../../providers/CartProvider";

export const CartBottom = () => {
  const { total, finalTotal } = useCartContext();

  const cartTotalDetails: cartTotalDetail[] = [
    { name: "Cart Subtotal: $", value: total.toFixed(2) },
    { name: "Shipping Cost: $", value: (5).toFixed(2) },
    { name: "Tax: $", value: (total * 0.0875).toFixed(2) },
    { name: "Total Cost: $", value: finalTotal.toFixed(2) },
  ];

  return (
    <div className="cart-bottom">
      <h4>Your Purchase Estimates:</h4>
      {cartTotalDetails.map(({ name, value }) => {
        return (
          <h4 key={name} className="total-details-text">
            {name + value}
          </h4>
        );
      })}
      <button className="proceed-to-checkout-btn">
        <a href="/checkout">Proceed to Checkout</a>
      </button>
      <div className="suggest-items">
        <h4>More Items Like This:</h4>
      </div>
    </div>
  );
};
