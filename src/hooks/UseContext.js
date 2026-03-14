import { useState,createContext, useContext } from 'react';

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Linus");

  return (
    <UserContext.Provider value={user}>
      <h1>Component 1 , {`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 3, {`Hello ${user} again!`}</h1>
    </>
  );
}

function test_Callback(){
    return(
        <>
            <h1>React Context</h1>
            <p>React Context is a way to manage state globally.</p>
            <p>It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.</p>
            
            <p>To create context, you must Import createContext and initialize it:</p>


            <Component1/>
        </>
    );
}
export default test_Callback