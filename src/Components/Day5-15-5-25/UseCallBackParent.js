import React, { useState, useCallback } from 'react';
import Button from './UseCallBackChild';

function CounterUseCallBack() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const incrementOther = () => {
    setOtherCount(otherCount + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button handleClick={increment}>Increment Count</Button>
      <h2>Other Count: {otherCount}</h2>
      <button onClick={incrementOther}>Increment Other Count</button>
    </div>
  );
}

export default CounterUseCallBack;
