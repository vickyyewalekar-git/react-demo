import { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  },[]);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
       <>
            <div className="container mt-4">

                {/* Render Counter */}
                <div className="card shadow-sm mb-4">
                    <div className="card-body text-center">
                    <h1 className="card-title">I've rendered {count} times!</h1>
                    </div>
                </div>

                {/* Counter Example */}
                <div className="card shadow-sm mb-4">
                    <div className="card-body">

                    <h4>Counter Example</h4>

                    <div className="d-flex align-items-center gap-3 mb-3">
                        <h5 className="mb-0">Count: <span className="badge bg-primary">{count}</span></h5>

                        <button
                        className="btn btn-success"
                        onClick={() => setCount((c) => c + 1)}
                        >
                        +
                        </button>
                    </div>

                    <div className="alert alert-info">
                        <strong>Calculation:</strong> {calculation}
                    </div>

                    </div>
                </div>

                {/* useEffect Explanation */}
                <div className="card shadow-sm mb-4">
                    <div className="card-body">

                    <h3>useEffect Hook</h3>

                    <p>
                        The <b>useEffect</b> Hook allows you to perform side effects in your components.
                    </p>

                    <p>
                        Some examples of side effects are: <b>fetching data, directly updating the DOM, and timers.</b>
                    </p>

                    <p>
                        <b>useEffect</b> accepts two arguments. The second argument is optional.
                    </p>

                    <pre className="bg-light p-3 border rounded">
                {`useEffect(<function>, <dependency>)`}
                    </pre>

                    </div>
                </div>

                {/* Dependency Examples */}
                <div className="card shadow-sm">
                    <div className="card-body">

                    <h4>useEffect Dependency Examples</h4>

                    <p>
                        By default, <b>useEffect runs on every render</b>. To control this behavior,
                        we pass a dependency array.
                    </p>

                    <div className="mb-3">
                        <h6>1️⃣ Runs on every render</h6>
                        <pre className="bg-light p-3 border rounded">
                {`useEffect(() => {
                // Runs on every render
                });`}
                        </pre>
                    </div>

                    <div className="mb-3">
                        <h6>2️⃣ Runs only on the first render</h6>
                        <pre className="bg-light p-3 border rounded">
                {`useEffect(() => {
                // Runs only once
                }, []);`}
                        </pre>
                    </div>

                    <div>
                        <h6>3️⃣ Runs when dependency changes</h6>
                        <pre className="bg-light p-3 border rounded">
                {`useEffect(() => {
                // Runs when prop or state changes
                }, [prop, state]);`}
                        </pre>
                    </div>

                    </div>
                </div>

                </div>
       </>
    );
  
}


export default Timer;