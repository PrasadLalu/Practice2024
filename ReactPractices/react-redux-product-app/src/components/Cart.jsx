import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.products);
  console.log(products);

  const cartProducts = products.map((product) => (
    <div className="col-md-3" key={product.id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.images[0]} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
          <Button
            variant="primary"
          >
            Remove
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return <div>{cartProducts}</div>;
}

export default Cart;