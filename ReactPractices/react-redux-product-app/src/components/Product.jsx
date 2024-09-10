import { useState } from "react";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/store";

const Product = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
    
    console.log(products);
    const cards = products.map((product) => (
      <div className="col-md-3" key={product.id}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.images[0]} />
          <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              INR: {product.price}
            </Card.Text>
            <Button variant="primary" onClick={() => dispatch(addProduct(product))}>Add to Cart</Button>
          </Card.Body>
        </Card>
      </div>
    ));

  return (
    <div>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Product;
