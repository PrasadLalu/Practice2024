import { useContext } from "react";
import { ProductDetail } from "./ProductDetail";
import ProductContext from "../context/ProductContext";

export const ProductItem = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      <h3>ProductItem: {products[1].name}</h3>
      <ProductDetail />
    </div>
  );
};
