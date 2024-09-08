import { useState } from "react";
import auth from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitUserLogin = (event) => {
    event.preventDefault();
    const { email, password } = loginData;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        navigate("/profile");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
      <div className="px-6 py-5">
        <h3>Welcome back</h3>
        <p>Register Page</p>
        <form onSubmit={submitUserLogin}>
          <input
            type="text"
            placeholder="Enter your email"
            value={loginData["email"]}
            onChange={handleInputChange}
            name="email"
            className="w-full block px-5 py-2 mt-2 text-black border rounded-lg"
          />
          <input
            type="password"
            placeholder="Enter your passowrd"
            value={loginData["password"]}
            onChange={handleInputChange}
            name="password"
            className="w-full block px-5 py-2 mt-2 text-black border rounded-lg"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
