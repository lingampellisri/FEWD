import React, { useState, useMemo } from 'react';

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  console.log('Rendering App Component');

  // ❌ Expensive computation (without useMemo)
  const expensiveComputation = (num) => {
    console.log('Running expensive computation...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result + num;
  };

  // ✅ Memoized value with useMemo
  const computedValue = useMemo(() => expensiveComputation(count), [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <h2>Other Count: {otherCount}</h2>
      <button onClick={() => setOtherCount(otherCount + 1)}>Increment Other Count</button>

      <h2>Computed Value: {computedValue}</h2>
    </div>
  );
}
