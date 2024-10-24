import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [Count, setCount] = useState(0);
  const [Step, setStep] = useState(1);
  // console.log(Count);
  // console.log(setCount);
  // console.log(setStep);
  // console.log(Step);
  const date = new Date();
  date.setDate(date.getDate() + Count);
  function handelreset() {
    setCount(0);
    setStep(1);
  }
  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="30"
          value={Step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span> {Step} </span>
        {/* 
        <button onClick={() => setStep(Step - 1)}>-</button>
        <span> Step : {Step} </span>
        <button onClick={() => setStep((d) => d + 1)}>+</button> */}
      </div>
      <div>
        <button onClick={() => setCount((s) => s - Step)}>-</button>
        <input
          type="text"
          value={Count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((s) => s + Step)}>+</button>
      </div>
      <p>
        <span>
          {Count === 0
            ? "today is "
            : Count > 0
            ? `${Count} day from today is `
            : `${Math.abs(Count)} Step ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {Count !== 0 || Step !== 1 ? (
        <div>
          <button onClick={handelreset}>Reset</button>
        </div>
      ) : null}
    </>
  );
}
