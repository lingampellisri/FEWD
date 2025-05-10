import React from "react";
import { useState } from "react";

function Counter_Button() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

   const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <button onClick={increment}>Increment Counter</button>
       <button onClick={decrement}>Increment Counter</button>
      <h2>Counter: {counter}</h2>
    </div>
  );
}

export default Counter_Button;
