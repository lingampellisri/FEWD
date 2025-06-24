import React, { useState, useRef, useEffect } from "react";

function UseRef() {
  const [value, setValue] = useState('');
  const renderCount = useRef(1); // Starts from 1 (initial render)
  const prevValue = useRef('');  // Track previous input value

  // Update render count on every render
  useEffect(() => {
    renderCount.current += 1;
  });

  // Update previous value before current value changes
  const handleChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue === '' || /^\d*\.?\d*$/.test(inputValue)) {
      prevValue.current = value;  // Save previous value before updating
      setValue(inputValue);       // Update current value
    }
  };

  const numericValue = value === '' ? 0 : parseFloat(value);
  const previousNumericValue = prevValue.current === '' ? 0 : parseFloat(prevValue.current);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2> Numeric Input with Render Counter</h2>

      <label>Enter a number:</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter a numeric value"
        style={{ marginLeft: "10px" }}
      />

      <div style={{ marginTop: "20px" }}>
        <p> Current Value: {numericValue}</p>
        <p>Previous Value: {previousNumericValue}</p>
        <p> Render Count: {renderCount.current}</p>
      </div>
    </div>
  );
}

export default UseRef;
