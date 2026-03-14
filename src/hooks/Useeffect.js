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
            <h1>I've rendered {count} times!</h1>
            <hr/>


             <p>Count: {count}</p>
                <button onClick={() => setCount((c) => c + 1)}>+</button>
                <p>Calculation: {calculation}</p>
            <hr/>

            <p>The <b>useEffect</b> Hook allows you to perform side effects in your components.

            Some examples of side effects are: fetching data, directly updating the DOM, and timers.

            <b>useEffect</b> accepts two arguments. The second argument is optional.

            <code>useEffect(&lt;function&gt;, &lt;dependency&gt;)</code>

            </p>

            <p>
                useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.

                This is not what we want. There are several ways to control when side effects run.

                We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.
            </p>

            <code>
                useEffect(() => {
                    //Runs on every render
                });
                Runs on every render
                <br/>
                
                
                useEffect(() => {
                    //Runs only on the first render
                }, []);      

                Runs only on the first render
                
                
                <br/>
                useEffect(() => {
                    //Runs on the first render
                    //And any time any dependency value changes
                }, [prop, state]);  

                Runs on the first render And any time any dependency value changes 
            </code>
        </>
    );
  
}


export default Timer;