import React, { useReducer } from 'react';

// Initial state
const initialState = 0;

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function ReducerCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default ReducerCounter;
