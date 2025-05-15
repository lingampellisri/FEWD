import React, { useState, useCallback } from 'react';

// 🔵 Child Button component with React.memo
const Button = React.memo(({ handleClick, children }) => {
  console.log(`Rendering Button: ${children}`);
  return <button onClick={handleClick}>{children}</button>;
});

export default function Appppp() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  console.log('Rendering App Component');

  // ❌ Function recreated on every render (without useCallback)
  const increment = () => {
    setCount(prev => prev + 1);
  };

  // ✅ Function memoized with useCallback
  const incrementOther = useCallback(() => {
    setOtherCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button handleClick={increment}>Increment Count (No useCallback)</Button>

      <h2>Other Count: {otherCount}</h2>
      <Button handleClick={incrementOther}>Increment Other Count (With useCallback)</Button>
    </div>
  );
}
