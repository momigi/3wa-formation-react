
import React from 'react';
import { useCounter } from './CounterContext';

const ResetButton = () => {
  const { reset } = useCounter();

  return <button onClick={reset}>Reset</button>;
};




export default ResetButton;
