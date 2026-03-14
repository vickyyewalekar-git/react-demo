

function Test_events() {

  const alert_me = (a) => {
    alert(a);
  }

  const alert_event = (prop1,event) =>{
    
    event.type && console.log(event.type)   // similar to if(event.type){console.log(event.type)}

    alert("Event triggered is :: "+event.type);
  } 


  function MyList() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h4 style={{color:"red",backgroundColor: "lightgray",padding:"5px"}}>My Cars:</h4>
      <ul>
        {cars.map((car,index) => <li  key={index}> i am a { car }</li>)}
      </ul>
    </>
  );
}

  return (
    <>
        <button onClick={() => alert_me("Goal!")}>Take the shot!</button>
        <br/>
        
        <button onClick={(event) => alert_event("Goal!",event)}>Button with event pass!</button>
        <br/>

        <button onClick={() => MyList()}>React Lists</button>
        <br />
        {MyList && <MyList />}
    </>
  );
}

export default Test_events;