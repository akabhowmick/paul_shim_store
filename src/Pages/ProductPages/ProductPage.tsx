import { StackedCards } from "../../Components/Animations/StackedCards/StackedCards";
import { Product } from "../../Types/interfaces";
import { products } from "../../utils/Products";
import { ContactForm } from "../ContactUs/ContactForm";
import "./ProductPage.css";

export const ProductPage = ({
  pageHeader,
  pageContent,
}: {
  pageHeader: string;
  pageContent: string;
}) => {
  const productList: Product[] = products.filter((product) => product.type === pageContent);

  return (
    <div className="product-page">
      <h2 className="page-header">{pageHeader}</h2>
      <StackedCards productsList={productList} />
      <div className="reach-us">
        <h2>Interested in something or have any questions?</h2>
        <h3>Contact us using the form below</h3>
        <ContactForm />
      </div>
    </div>
  );
};
