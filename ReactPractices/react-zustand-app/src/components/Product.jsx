import { useEffect } from "react";
import productStore from "../store/productStore";

const Product = () => {
  const fetchProducts = productStore((state) => state.fetchProducts);
  const products = productStore((state) => state.products);

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div>Product: {products.length}</div>;
};

export default Product;
