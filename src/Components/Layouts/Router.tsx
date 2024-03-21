import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Home } from "../../Pages/Home/Home";
import { ThankYouPage } from "../../Pages/ThankYouPage/ThankYouPage";
import Checkout from "../CheckoutProcess/Checkout/Checkout";
import { NotFoundPage } from "../../Pages/NotFoundPage/NotFoundPage";
import { ContactUs } from "../../Pages/ContactUs/ContactUs";
import { ProductPage } from "../../Pages/ProductPages/ProductPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="all" element={<ProductPage pageHeader="All Products" pageContent="all" />} />
      <Route
        path="sports"
        element={<ProductPage pageHeader="Custom Sports 3d Items" pageContent="all" />}
      />
      <Route
        path="desk-toppers"
        element={<ProductPage pageHeader="Custom Desk Toppers" pageContent="desk-toppers" />}
      />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="thanks" element={<ThankYouPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
