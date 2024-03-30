import { Product } from "../../Types/interfaces";
import { products } from "../../utils/Products";
import { ProductGrid } from "./ProductGrid";

export const ProductPage = ({
  pageHeader,
  pageContent,
}: {
  pageHeader: string;
  pageContent: string;
}) => {
  const productList: Product[] =
    pageContent === "sports"
      ? products.filter((product) => product.type === "Sports")
      : pageContent === "desk-toppers"
      ? products.filter((product) => product.type === "Desk-Topper")
      : products;

  return (
    <div className="product-page">
      <h2 className="page-header">{pageHeader}</h2>
      <ProductGrid productList={productList} />
    </div>
  );
};
