import { useState } from "react";
import CommonForm from "./shared/common-form";
import { loginFormElement } from "../../config";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  return (
    <div>
      <h2>Login Page</h2>
      <CommonForm
        formControls={loginFormElement}
        formData={loginFormData}
        setFormData={setLoginFormData}
      />
    </div>
  );
};

export default Login;
