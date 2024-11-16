import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Home } from "../../Pages/Home/Home";
import { ThankYouPage } from "../../Pages/ThankYouPage/ThankYouPage";
import Checkout from "../CheckoutProcess/Checkout/Checkout";
import { NotFoundPage } from "../../Pages/NotFoundPage/NotFoundPage";
import { ContactUs } from "../../Pages/ContactUs/ContactUs";
import { ProductPage } from "../../Pages/ProductPages/ProductPage";
import { ProductDescriptionPage } from "../../Pages/ProductPages/ProductDescriptionPage";
import { CartPage } from "../../Pages/Cart/CartPage";
import { About } from "../../Pages/About/About";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="all" element={<ProductPage pageHeader="All Products" pageContent="All" />} />
      <Route path="gums" element={<ProductPage pageHeader="Korean Gums" pageContent="Gums" />} />
      <Route path="about" element={<About />} />
      <Route
        path="lollipops"
        element={<ProductPage pageHeader="Korean Lollipops" pageContent="Lollipops" />}
      />
      <Route path="/products/:productId" element={<ProductDescriptionPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="thanks" element={<ThankYouPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
