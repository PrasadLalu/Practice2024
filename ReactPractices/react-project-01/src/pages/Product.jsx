import { useContext } from "react";
import { ProductItem } from "./ProductItem";
import ProductContext from "../context/ProductContext";

export const Product = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      <h2>Product: {products[0].name}</h2>
      <ProductItem />
    </div>
  );
};
