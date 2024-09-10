import PropTypes from "prop-types";
import styles from './product-item.module.css';

const Button = () => {
  return <button className={styles.buttonStyle}>Click</button>;
}
const ProductItem = ({ name }) => {
  return (
    <div style={{ padding: "20px", border: "2px solid red", marginBottom: "10px"}}>
      <p>{name}</p>
      <Button  />
    </div>
  );
};

ProductItem.propTypes = {
  name: PropTypes.string,
};

export default ProductItem;
