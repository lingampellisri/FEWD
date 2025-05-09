import React from "react";
import { useState } from "react";

function Counter_Button() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Increment Counter</button>
      <h2>Counter: {counter}</h2>
    </div>
  );
}

export default Counter_Button;
