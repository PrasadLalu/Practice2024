import { useState, useEffect } from "react";
const FuntionalComponent = () => {
  const [title, setTitle] = useState("Functional Component");
  const [status, setStatus] = useState(false);
  const [count, setCount] = useState(0);

  const changeStatus = () => {
    setStatus(!status);
    console.log(status);
  };

  useEffect(() => {
    setStatus(!status);
    console.log("Run only once");
  }, []);

  useEffect(() => {
    console.log("Count: ", count);
    if (count % 10 === 0) console.log("Hurry");
  }, [count]);

  return (
    <>
      <h2>{title}</h2>
      <button onClick={() => setTitle("Functional Component 2024")}>
        Change Title
      </button>
      {/* <button onClick={() => setStatus(!status)}>Change Status</button> */}
      <button onClick={changeStatus}>Change Status</button>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </>
  );
};

export default FuntionalComponent;
