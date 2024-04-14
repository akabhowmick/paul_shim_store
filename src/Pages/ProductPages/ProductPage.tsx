import { StackedCards } from "../../Components/Animations/StackedCards/StackedCards";
import { Product } from "../../Types/interfaces";
import { products } from "../../utils/Products";

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
      <StackedCards productsList={productList}/>
    </div>
  );
};
