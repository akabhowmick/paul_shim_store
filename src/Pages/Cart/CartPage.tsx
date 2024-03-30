import { useCartContext } from "../../providers/CartProvider";
import "./Cart.css";
import { CartBottom } from "./CartBottom";
import { CartItem } from "./CartItem";

export const CartPage = () => {
  const { cartItems } = useCartContext();

  const pageCartItems =
    cartItems?.length === 0 ? (
      <h3>Your cart is empty!</h3>
    ) : (
      <div className="cart-items">
        {cartItems?.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
    );

  return (
    <section className="cart-page">
      <h2 className="page-header">View Your Cart</h2>
      <div className="cart-page-container">
        {pageCartItems}
        <CartBottom />
      </div>
    </section>
  );
};
