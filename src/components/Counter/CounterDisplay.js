
import React from 'react';
import { useCounter } from './CounterContext';

const CounterDisplay = () => {
  const { count } = useCounter();

  return <div>Counter: {count}</div>;
};

export default CounterDisplay;
