import { useCartContext } from "../../providers/CartProvider";
import "./Cart.css";
import { CartBottom } from "./CartBottom";
import { CartItem } from "./CartItem";

export const CartPage = () => {
  const { cartItems } = useCartContext();

  const pageCartViews =
    cartItems?.length === 0 ? (
      <div>
        <h3>Your cart is empty!</h3>
      </div>
    ) : (
      <>
        <div className="cart-items">
          {cartItems?.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })}
        </div>
        <CartBottom />
      </>
    );

  return (
    <section className="cart-page">
      <h2 className="page-header">View Your Cart</h2>
      <div className="cart-page-container">{pageCartViews}</div>
    </section>
  );
};
