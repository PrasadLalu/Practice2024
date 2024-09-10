import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <h2>Header</h2>
      <ul>
        <li>
          <Link to={"/home/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/home/about"}>About</Link>
        </li>
      </ul>
    </div>
  );
};
