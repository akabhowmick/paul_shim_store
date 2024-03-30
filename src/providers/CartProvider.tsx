/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { Product } from "../Types/interfaces";
import { products } from "../utils/Products";

interface CartContextType {
  cartItems: Product[];
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  changeItemQuantity: (id: number, changeType: string) => void;
  finalTotal: number;
}

const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const shippingPrice = 5;
  const taxRate = 0.0875;

  useEffect(() => {
    let cartTotal = 0;
    cartItems.forEach((item) => {
      cartTotal += item.price * item.quantity;
    });
    setTotal(cartTotal);
    const finalTotalWithTaxAndShipping =
      Math.round((cartTotal * (1 + taxRate) + shippingPrice) * 100) / 100;
    setFinalTotal(finalTotalWithTaxAndShipping);
  }, [cartItems]);

  useEffect(() => {
    const maybeCart = localStorage.getItem("cart");
    if (maybeCart) {
      setCartItems(JSON.parse(maybeCart));
    }
  }, []);

  const updateCartInLocalStorage = (cartArrayItems: Product[]) => {
    localStorage.setItem("cart", JSON.stringify(cartArrayItems));
    if (cartArrayItems.length === 0) {
      localStorage.removeItem("cart");
    }
  };

  const addToCart = (id: number) => {
    const product = products.find((product) => product.id === id);
    if (!cartItems.find((product) => product.id === id) && product) {
      const newCart = [...cartItems, product];
      updateCartInLocalStorage(newCart);
      setCartItems(newCart);
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    updateCartInLocalStorage(cartItems.filter((item) => item.id !== id));
  };

  const changeItemQuantity = (id: number, changeType: string) => {
    const changeAmount = changeType === "addOne" ? 1 : -1;
    const newCartItems: Product[] = [];
    for (let productId = 0; productId < cartItems.length; productId++) {
      if (cartItems[productId].id === id) {
        if (cartItems[productId].quantity + changeAmount > 0) {
          newCartItems.push({
            ...cartItems[productId],
            quantity: cartItems[productId].quantity + changeAmount,
          });
        }
      } else {
        newCartItems.push(cartItems[productId]);
      }
    }
    if (newCartItems) {
      setCartItems(newCartItems);
      updateCartInLocalStorage(newCartItems);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        total,
        setTotal,
        addToCart,
        removeFromCart,
        changeItemQuantity,
        finalTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
