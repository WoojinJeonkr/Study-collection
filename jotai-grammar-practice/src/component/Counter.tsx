import { atom } from 'jotai';
import { useAtom } from 'jotai/react';
import React from 'react';

const countAtom = atom(0);

const Counter = () => {
  const [count, setCount] = useAtom(countAtom);
  
  const resetButton = () => {
    setCount(0);
  }

  const increaseButton = () => {
    setCount((c) => c + 1)
  };

  const decreaseButton = () => {
    setCount((c) => c - 1)
  }

  return (
    <div>
      {count}
      <button style={{ marginLeft: "1%" }} onClick={increaseButton}>
        +1
      </button>
      <button style={{ marginLeft: "1%" }} onClick={decreaseButton}>
        -1
      </button>
      <button style={{ marginLeft: "1%" }} onClick={resetButton}>
        Reset
      </button>
    </div>
  );
};

export default Counter;