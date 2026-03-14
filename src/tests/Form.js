import { useState } from 'react'

function BasicForm() {
    const [name,setName] = useState("first Name");
    const [mytxt,setMytxt] = useState("");
    const [city,setCity] = useState("pune");
    const [selectedFruit, setSelectedFruit] = useState('banana');

    const [inputs,setInputs] = useState({
      firstname:'john',
      lastname:'Doe',
      tomato: true,
    });

    function handleChange(e){
      setName(e.target.value);
      setSelectedFruit(e.target.value);
    }
    function handleObjectChange(e){
      const target = e.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      setInputs(values => ({...values, [name]: value}))
    }
    function handleMessageChange(e){
      setMytxt(e.target.value);
    }

    function handleCityChange(e){
      setCity(e.target.value);
    }
    function handleSubmit(e){
      e.preventDefault();
      console.log(e);
      console.log('name : '+name);
      console.log('Message : '+mytxt);
      console.log('Url : '+e.target.action);


      let fillings = '';
      if (inputs.tomato) fillings += 'tomato';
      if (inputs.onion) {
        if (inputs.tomato) fillings += ' and ';
        fillings += 'onion';
      }
      if (fillings === '') fillings = 'no fillings';
      
      alert(`Form Submitted, ${inputs.firstname+' '+inputs.lastname} wants a burger with ${fillings} `);
    }
  return (
    <form id='basicForm' onSubmit={handleSubmit}>
      <label>
        Enter your name: 
        {/* <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /> */}
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <br/>

      <label>Message:
        <textarea
          value={mytxt}
          onChange={handleMessageChange}
        />
      </label>
      <br/>

      <label>City</label>
      <select value={city} onChange={handleCityChange}>
        <option value="">Select</option>
        <option value="pune">Pune</option>
        <option value="mumbai">Mumbai</option>
        <option value="delhi">Delhi</option>
      </select>

      <br/>

      <label>First name:
      <input 
        type="text" 
        name="firstname" 
        value={inputs.firstname} 
        onChange={handleObjectChange}
      />
      </label>
        <br/>

      <label>Last name:
        <input 
          type="text" 
          name="lastname" 
          value={inputs.lastname} 
          onChange={handleObjectChange}
        />
      </label>
        <br/>

      <p>I want a burger with:</p>
      <label>Tomato:
      <input 
        type="checkbox" 
        name="tomato" 
        checked={inputs.tomato} 
        onChange={handleObjectChange}
      />
      </label>

      <label>Onion:
        <input 
          type="checkbox" 
          name="onion" 
          checked={inputs.onion} 
          onChange={handleObjectChange}
        />
      </label>

      <br/>
      <label>Select Fruit </label>
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="apple" 
          checked={selectedFruit === 'apple'} 
          onChange={handleChange} 
        /> Apple
      </label>
      &nbsp;&nbsp;
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="banana" 
          checked={selectedFruit === 'banana'} 
          onChange={handleChange} 
        /> Banana
      </label>
     &nbsp;&nbsp;
      <label>
        <input 
          type="radio" 
          name="fruit" 
          value="cherry" 
          checked={selectedFruit === 'cherry'} 
          onChange={handleChange} 
        /> Cherry
      </label>
      <br />

      <button type="submit"> Submit</button>

    </form>
  );
}

function MyForm() {
  return <BasicForm />;
}

export default MyForm;
