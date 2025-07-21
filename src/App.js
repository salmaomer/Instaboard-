/* Importing The useState Hook From React */
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
/* Importing A Child Component */
import CounterDisplay from './Components/CounterDisplay';

function App() {
  /* This Declares A State :
    count >> Current Value
    setCount(newValue) >> Function To Update It 
    initial value >> 0
  */
  const [count, setCount] = useState(0);
  /*  JSX Return Block */
  return (
    /* Fragment To Wrap Multiple Elements */
    <>
      /* This Passes The Current count As A Prop To The CounterDisplay Component, Which Will Show It On The Screen. */
      <CounterDisplay count = {count} />
      /* A Button That Increases The Count By 1 When Clicked. */
      <button onClick = {() => setCount(count + 1)}>Increment</button>
      /* A Button That Resets The Count To 0 When Clicked. */
      <button onClick = {() => setCount (0)}>Reset</button>
      /* A Button That Decreases The Count By 1 When Clicked. */
      <button onClick = {() => setCount(count - 1)}>Decrement</button>
    </>
  );
}

export default App;
