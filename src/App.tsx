import "./App.css";
import { RouterProvider } from "react-router-dom";

// Context Providers
import { CartProvider } from "./providers/CartProvider";
import { UserProvider } from "./providers/UserProvider";

// sections or components
import { Footer } from "./Components/Footer/Footer";
// import { Cart } from "./Pages/Cart/Cart";
import { router } from "./Components/Layouts/Router";

function App() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <RouterProvider router={router} />
          {/* <Cart /> */}
          <Footer />
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;
