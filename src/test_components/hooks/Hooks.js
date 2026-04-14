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
        <div className="container mt-4">

          {/* Hook Introduction */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h1 className="card-title">What is a Hook?</h1>

              <p>
                Hooks are functions that let you <b>"hook into"</b> React state and lifecycle
                features from functional components.
              </p>

              <p>
                You must import Hooks from react. Here we are using the <b>useState</b> Hook
                to keep track of the application state.
              </p>

              <p>
                State generally refers to application data or properties that need to be tracked.
              </p>
            </div>
          </div>


          {/* Hook Rules */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h2>Hook Rules</h2>
              <h5>There are 3 rules for hooks:</h5>

              <ul className="list-group mb-3">
                <li className="list-group-item">Hooks can only be called inside React function components.</li>
                <li className="list-group-item">Hooks can only be called at the top level of a component.</li>
                <li className="list-group-item">Hooks cannot be conditional.</li>
              </ul>

              <div className="alert alert-warning">
                <b>Note:</b> Hooks will not work in React class components.
              </div>
            </div>
          </div>


          {/* Color Example */}
          <div className="card shadow-sm mb-4">
            <div className="card-body text-center">

              <h3>
                My favorite color is{" "}
                <span style={{ color: color }}>{color}</span>!
              </h3>

              <div className="mt-3">
                <button className="btn btn-primary mx-1" onClick={() => setColor("blue")}>
                  Blue
                </button>

                <button className="btn btn-danger mx-1" onClick={() => setColor("red")}>
                  Red
                </button>

                <button className="btn btn-warning mx-1" onClick={() => setColor("yellow")}>
                  Yellow
                </button>

                <button className="btn btn-success mx-1" onClick={() => setColor("green")}>
                  Green
                </button>
              </div>

            </div>
          </div>


          {/* Object State Example */}
          <div className="card shadow-sm">
            <div className="card-body">

              <h4>Updating Objects and Arrays in State</h4>

              <p>
                When state is updated, the entire state gets overwritten.
              </p>

              <p>
                If we only called <code>setCar({`{color: "blue"}`})</code>, this would remove
                the brand, model, and year from our state.
              </p>

              <p>
                We can use the JavaScript <b>spread operator</b> to keep the existing values.
              </p>

              <hr />

              <h5>My {car.brand}</h5>
              <p>
                It is a <b>{car.color}</b> {car.model} from {car.year}.
              </p>

              <div className="mb-3">
                <button className="btn btn-info me-2" onClick={updateColor}>
                  Change Car Color to Blue
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => setCar({ color: "green" })}
                >
                  Direct Change Car Color to Green
                </button>
              </div>

              <h6>State Object</h6>

              <pre className="bg-light p-3 border rounded">
                {JSON.stringify(car, null, 2)}
              </pre>

            </div>
          </div>

        </div>

    </>
  );
}

export default FavoriteColor