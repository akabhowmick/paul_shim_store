import { useParams } from "react-router-dom";
import { SingleProduct } from "../../Components/SingleProduct/SingleProduct";
import { products } from "../../utils/Products";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";

// ! need to call this
export const ProductDescriptionPage = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId!, 10));
  return <>{product ? <SingleProduct product={product} displayType="" /> : <NotFoundPage />}</>;
};


