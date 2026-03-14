import { useState } from 'react';

function FavoriteColor() {

  const [color, setColor] = useState("red");

  const [car, setCar] = useState( {brand: "Ford",model: "Mustang",year: "1964",color: "red"} );


  const updateColor = () => {
    setCar(anyname => ({ ...anyname, color: "blue" }));
    // anyname is taken as spread operator 
  }

  return (
    <>
        <h1>What is a Hook?</h1>
        <p>Hooks are functions that let you "hook into" React state and lifecycle features from functional components.</p>
        <p>You must import Hooks from react.

            Here we are using the <b>useState</b> Hook to keep track of the application state.

            State generally refers to application data or properties that need to be tracked.
        </p>


        <h2>Hook Rules</h2>
        <h5>There are 3 rules for hooks:</h5>
        <ul>
            <li>Hooks can only be called inside React function components.</li>
            <li>Hooks can only be called at the top level of a component.</li>
            <li>Hooks cannot be conditional</li>
        </ul>
        <p><b>Note:</b> Hooks will not work in React class components.</p>
      
      <h1>My favorite color is <span style={{color:color}}>{color}!</span></h1>

      <button className='btn btn-primary mx-1' type="button" onClick={() => setColor("blue")} >Blue</button>

      <button type="button" className='btn btn-danger mx-1' onClick={() => setColor("red")} >Red</button>

      <button type="button" className='btn btn-warning mx-1' onClick={() => setColor("yellow")} >Yellow</button>

      <button type="button" className='btn btn-success mx-1' onClick={() => setColor("green")} >Green</button>

      <div>Updating Objects and Arrays in State<br/>
      When state is updated, the entire state gets overwritten.<br/>

      What if we only want to update the color of our car? <br/>

      If we only called setCar(color: "blue"), this would remove the brand, model, and year from our state.<br/>

      We can use the JavaScript spread operator to help us.</div>

      <h2>My {car.brand}</h2>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>

      <button type="button" onClick={updateColor}>Change Car Color to Blue</button>
      <button type="button" onClick={() => setCar({color: "green"})}>Direct Change Car Color to Green</button>   {/* this will remove other properties */}
      

     <p>{JSON.stringify(car)}</p>

     <p>{JSON.stringify(car, null, 2)}</p>

     <pre>{JSON.stringify(car, null, 2)}</pre>

    </>
  );
}

export default FavoriteColor