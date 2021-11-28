import React from "react";
import style from "./Counter.module.scss";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <h2 style={{ textAlign: "center" }}>counter of my component</h2>
      <div className={style.component}>
        <h1>{count}</h1>
        <div className={style.blockButton}>
          <button onClick={() => setCount(count - 1)}>decrement</button>
          <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
