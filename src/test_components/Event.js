import { useState } from "react";

function Test_events() {

  const [showList, setShowList] = useState(false);

  const alert_me = (msg) => {
    alert(msg);
  };

  const alert_event = (msg, event) => {
    console.log(event.type);
    alert("Event triggered is :: " + event.type);
  };

  function MyList() {
    const cars = ['Ford', 'BMW', 'Audi'];

    return (
      <>
        <h4 style={{ color: "red", backgroundColor: "lightgray", padding: "5px" }}>
          My Cars:
        </h4>
        <ul>
          {cars.map(car => (
            <li key={car}>I am a {car}</li>
          ))}
        </ul>
      </>
    );
  }

   function MyOwners() {
    const users = ['Vicky', 'Radhika', 'Siya'];

    return (
      <>
        <h4 style={{ color: "red", backgroundColor: "lightgray", padding: "5px" }}>
          Cars Owners:
        </h4>
        <ul>
          {
            users.map(name =>(
                <li key={name}>I am {name}</li>
              )
            )
          }
        </ul>
      </>
    );
  }

  return (
    <>
    <h4>React Event - </h4>
    <p>Like Click, Hover, MouseOver, KeyUp</p>
      <button onClick={() => alert_me("Goal!")}>
        Take the shot!
      </button>

      <br /><br />

      <button onClick={(event) => alert_event("Goal!", event)}>
        Click event with event as parameter
      </button>

      <br /><br />

      {/* Toggle list */}
      <button onClick={() => setShowList(!showList)}>
        {showList ? "Hide Cars" : "Show Cars"}
      </button>

      <br /><br />

      {/* Conditional Rendering */}
      {showList && <MyList />}
      {showList && <MyOwners />}
    </>
  );
}

export default Test_events;