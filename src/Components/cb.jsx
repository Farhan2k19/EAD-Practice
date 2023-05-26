import React, { useState } from "react";
import { useState } from "react";



function cb() {
  const [count, setCount] = useState(() => 0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </>
  );
}

export default cb;