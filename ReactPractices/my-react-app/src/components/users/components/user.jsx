import PropTypes from "prop-types";
import styles from "./user.module.css";

const User = ({ data }) => {
  return (
    <div className={styles.user}>
      <p>
        Name: {data.firstName} {data.lastName}({data.role})
      </p>
      <p>Email: {data.email}</p>
      <p>Mac Address: {data.macAddress}</p>
    </div>
  );
};

User.propTypes = {
  data: PropTypes.object,
};

export default User;
