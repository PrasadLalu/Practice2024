import ProductItem from "./components/product-item";

function ProductLists() {
  const products = ["Laptop", "Mobile", "Bike", "Car"];
    const flag = true;
    const renderProductItem = (flagValue) => {
        return flagValue ? (
          <ul>
            {products.map((item, index) => (
              <ProductItem key={index} name={item} />
            ))}
          </ul>
        ) : (
          <p>Hello World</p>
        ); 
        
    }
  return (
    <>
      <h3>Product List</h3>
      {renderProductItem(flag)}
    </>
  );
}

export default ProductLists;
