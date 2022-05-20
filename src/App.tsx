import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <button onClick={() => setCount(count() + 1)}>{count()}</button>
    </>
  );
};

export default App;
