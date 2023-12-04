
import React from 'react';
import { useCounter } from './CounterContext';

const IncrementButton = () => {
  const { increment } = useCounter();

  return <button onClick={increment}>Increment</button>;
};

export default IncrementButton;
