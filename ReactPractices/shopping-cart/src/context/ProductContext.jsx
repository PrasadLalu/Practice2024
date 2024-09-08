import PropsTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProductContext = createContext(null);

function ProductProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [productDetail, setProductDetail] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  async function fetchProducts() {
    try {
      const apiResponse = await fetch("https://dummyjson.com/products", {
        method: "GET",
      });
      if (apiResponse.status === 200) {
        const { products } = await apiResponse.json();
        setProductList(products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleAddToCart = (productDetails) => {
    console.log(productDetails);

    let cpyExistingCartItems = [...cartItems];
    const findIndexOfCurrentItem = cpyExistingCartItems.findIndex(
      (cartItem) => cartItem.id === productDetails.id
    );

    console.log(findIndexOfCurrentItem);
    if (findIndexOfCurrentItem === -1) {
      cpyExistingCartItems.push({
        ...productDetails,
        quantity: 1,
        totalPrice: productDetails?.price,
      });
    } else {
      console.log("its coming here");
      cpyExistingCartItems[findIndexOfCurrentItem] = {
        ...cpyExistingCartItems[findIndexOfCurrentItem],
        quantity: cpyExistingCartItems[findIndexOfCurrentItem].quantity + 1,
        totalPrice:
          (cpyExistingCartItems[findIndexOfCurrentItem].quantity + 1) *
          cpyExistingCartItems[findIndexOfCurrentItem].price,
      };
    }

    console.log(cpyExistingCartItems, "cpyExistingCartItems");
      setCartItems(cpyExistingCartItems);
      localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));
    navigate("/product-cart");
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider
      value={{
        productList,
        loading,
        setLoading,
        productDetail,
        setProductDetail,
        cartItems,
        handleAddToCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
ProductProvider.propTypes = {
  children: PropsTypes.node,
};

export default ProductProvider;
