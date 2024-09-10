import { useEffect, useRef } from "react";

const Hooks = () => {
  const countValue = useRef(0);
  const divRef = useRef();
  const inputRef = useRef();

  const handleButtonClick = () => {
    countValue.current++;
    console.log(countValue);
  };

  useEffect(() => {
    const randomDivRef = divRef.current;
    console.log(randomDivRef);
    randomDivRef.style.color = "red";
    randomDivRef.style.fontWeight = "bold";
    randomDivRef.style.fontStyle = "italic";

    setTimeout(() => {
      randomDivRef.style.color = "green";
      setTimeout(() => {
        randomDivRef.style.color = "blue";
      }, 2000);
    }, 3000);

    inputRef.current.focus();
  });

  return (
    <div>
      {/* <h1>useRef, useCallback and useMemo hook </h1> */}
      <button onClick={handleButtonClick}>click me</button>
      <div ref={divRef}>Some Random Text</div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default Hooks;
