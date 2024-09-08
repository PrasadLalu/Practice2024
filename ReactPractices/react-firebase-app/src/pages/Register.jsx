import { useState } from "react";
import auth from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [status, setStatus] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const resetForm = () => {
    setRegisterData({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitUserRegistration = (event) => {
    event.preventDefault();
    console.log(registerData);
    const { email, password } = registerData;
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const { operationType } = result;
        if (operationType === "signIn") {
          setStatus(true);
          resetForm();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
      <div className="px-6 py-5">
        <h3>Welcome back</h3>
        <p>Register Page</p>
        {status ? "Your registration was successful" : null}
        <form onSubmit={submitUserRegistration}>
          <input
            type="text"
            placeholder="Enter your name"
            value={registerData["name"]}
            onChange={handleInputChange}
            name="name"
            className="w-full block px-5 py-2 mt-2 text-black border rounded-lg"
          />
          <input
            type="text"
            placeholder="Enter your email"
            value={registerData["email"]}
            onChange={handleInputChange}
            name="email"
            className="w-full block px-5 py-2 mt-2 text-black border rounded-lg"
          />
          <input
            type="password"
            placeholder="Enter your passowrd"
            value={registerData["password"]}
            onChange={handleInputChange}
            name="password"
            className="w-full block px-5 py-2 mt-2 text-black border rounded-lg"
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
