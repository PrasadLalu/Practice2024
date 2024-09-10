import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
      <div>
            <h3>This page does not exist</h3>
            <Link to={"/recipe-list"}>Go to recipe page</Link>
      </div>
    );
}

export default NotFoundPage;
