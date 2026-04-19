import React, { useState } from "react";
import "./CounterApp.css";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1> Counter App </h1>

      <div className="counter-display"> {count} </div>

      <div className="container-btn">
          <button onClick={() => {setCount(count + 1)}} className="btn increase">+</button>
          <button onClick={() => {setCount(count - 1)}} className="btn decrease">-</button>
          <button onClick={() => {setCount(0)}} className="btn reset">Reset</button>
      </div>
    </div>
  );
}
