import { useState, useRef, useEffect } from "react";

function UseRefDemo3() {
//   Example:
// Use useRef to keep track of previous state values:
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

function UseRefDemo2() {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <h2>Accessing DOM Elements</h2>

      <p>The <code>useRef</code> Hook is often used to access DOM elements directly.</p>

      <p>
        First, we create a ref using the <code>useRef</code> Hook:
        <code> const inputElement = useRef();</code>
      </p>

      <p>
        Then we attach the ref:
        <code> {"<input type='text' ref={inputElement} />"} </code>
      </p>

      <p>
        Finally we access it using <code>inputElement.current</code>
      </p>

      <input type="text" ref={inputElement} />

      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

function UseRefDemo() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  }, [inputValue]);

  return (
    <>
      <p>The useRef Hook allows you to persist values between renders.</p>

      <p>It can store mutable values without causing re-render.</p>

      <p>It can access DOM elements directly.</p>

      <p>
        <b>useRef()</b> returns an object with a property called <b>current</b>.
      </p>

      <p>
        Example: const count = <code>{`{ current: 0 }`}</code>
      </p>

      <p>Type in the input field:</p>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <h1>Render Count: {count.current}</h1>

      <UseRefDemo2 />
      <br/>
      <br/>
      <UseRefDemo3 />
    </>
  );
}

export default UseRefDemo;