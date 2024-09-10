import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../redux/store";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button
        style={{ background: "black", color: "white" }}
        onClick={() => dispatch(increase())}
      >
        Increase
      </button>
      <button
        style={{ background: "black", color: "white" }}
        onClick={() => dispatch(decrease())}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
