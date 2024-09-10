import { useState } from "react";

const FormComponent = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formInput);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          value={formInput.name}
          placeholder="Enter name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          id="email"
          value={formInput.email}
          placeholder="Enter email"
          onChange={handleInputChange}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
