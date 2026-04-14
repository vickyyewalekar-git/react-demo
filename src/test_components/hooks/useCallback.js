//With useCallback:
import React, { useState, useCallback } from 'react';

// Child component that receives a function prop
const Button = React.memo(({ onClick, text }) => {
  console.log(`${text} button rendered`);
  return <button onClick={onClick}>{text}</button>;
});

// Parent component with useCallback
function WithCallbackExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // These functions are memoized and only recreated when dependencies change
  const handleClick1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const handleClick2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

   const handleClick3 = () => {
    // without callback function
    setCount3(count3 + 1);
  };


  console.log("Parent rendered");
  return (
   <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">

          <h2 className="card-title mb-3">With useCallback</h2>

          <div className="row mb-3">
            <div className="col-md-6">
              <div className="alert alert-primary">
                <strong>Count 1:</strong> {count1}
              </div>
            </div>

            <div className="col-md-6">
              <div className="alert alert-success">
                <strong>Count 2:</strong> {count2}
              </div>
            </div>
          </div>

          <div className="d-flex gap-2 flex-wrap">
            <Button onClick={handleClick1} text="Button 1" />
            <Button onClick={handleClick2} text="Button 2" />
            <Button onClick={handleClick3} text="Button 3" Title="without callback function" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default  WithCallbackExample;