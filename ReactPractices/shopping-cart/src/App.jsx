import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ProductList } from "./pages/ProductList";
import { ProductDetail } from "./pages/ProductDetail";
import { Cart } from "./pages/Cart";

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path="/product-cart" element={<Cart />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-detail/:productId" element={<ProductDetail />} />
      </Routes>
    </Fragment>
  );
}

export default App
