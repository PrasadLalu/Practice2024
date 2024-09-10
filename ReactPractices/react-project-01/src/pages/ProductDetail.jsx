import { useContext } from "react";
import ProductContext from "../context/ProductContext";

export const ProductDetail = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h4>ProductDetail: {products[2].name}</h4>
    </div>
  );
};
