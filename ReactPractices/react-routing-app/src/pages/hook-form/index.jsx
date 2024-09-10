import { useForm } from "react-hook-form";

const HookForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <h2>React Hook Form</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          <label>Email</label>
          <input
            {...register("email", { required: true })}
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          {errors.email && errors.email.type === "required" ? (
            <p
              style={{
                color: "red",
                fontStyle: "bold",
              }}
            >
              Email is required
            </p>
          ) : null}
        </div>
        <div>
          <label>Password</label>
          <input
            {...register("password", { required: true, minLength: 8 })}
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          {errors.password ? (
            errors.password.type === "required" ? (
              <p
                style={{
                  color: "red",
                  fontStyle: "bold",
                }}
              >
                Password is required
              </p>
            ) : errors.password.type === "minLength" ? (
              <p
                style={{
                  color: "red",
                  fontStyle: "bold",
                }}
              >
                Password is too short
              </p>
            ) : null
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HookForm;
