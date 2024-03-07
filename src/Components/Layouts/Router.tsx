import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import { Home } from "../Home/Home";

import { Navbar } from "../Navbar/Navbar";

//Pages
// import { Contact } from "./Pages/ContactPage/Contact";
// import { Home } from "./Pages/HomePage/Home";
// import PageNotFound from "./Pages/404Page/PageNotFound";
// import Checkout from "./Pages/CheckoutPage/Checkout";
// import FrontHome from "./Pages/FrontHomePage/FrontHome";
// import { FullHome } from "./Pages/FullHomePage/FullHome";
// import { Accessories } from "./Pages/Accessories/Accessories";

// import { ImageUploader } from "./Pages/UploadImage/ImageUploader";
// import { ThankYou } from "./Pages/ThankYouPage/ThankYou";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      {/* <Route path="front-facade" element={<FrontHome />} /> */}
      {/* <Route path="full-house" element={<FullHome />} /> */}
      {/* <Route path="accessories" element={<Accessories />} /> */}
      {/* <Route path="contact-us" element={<Contact />} /> */}
      {/* <Route path="checkout" element={<Checkout />} /> */}
      {/* <Route path="thanks" element={<ThankYou />} /> */}
      {/* <Route path="upload-image" element={<ImageUploader />} /> */}
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Route>
  )
);
