import { SingleProduct } from "../../Components/SingleProduct/SingleProduct";
import { Product } from "../../Types/interfaces";

export const ProductGrid = ({ productList }: { productList: Product[] }) => {
  const productsDisplayed = productList.map((product) => {
    return <SingleProduct key={product.id} product={product} displayType="" />;
  });
  return <div className="product-grid">{productsDisplayed}</div>;
};
