import countStore from "../store/countStore";

const ManageCounter = () => {
  const handleIncreamentCount = countStore((state) => state.increamentCount);
  const handleDecreamentCount = countStore((state) => state.decreamentCount);

  return (
    <div>
      <button
        style={{
          background: "black",
          color: "white",
          fontWeight: "bold",
          marginBottom: "20px",
          fontSize: "18px",
        }}
        onClick={handleIncreamentCount}
      >
        Increase Counter
      </button>
      <button
        style={{
          background: "black",
          color: "white",
          fontWeight: "bold",
          marginBottom: "20px",
          fontSize: "18px",
        }}
        onClick={handleDecreamentCount}
      >
        Decrease Counter
      </button>
    </div>
  );
};

export default ManageCounter;
