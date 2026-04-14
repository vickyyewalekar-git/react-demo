import { useState, createContext, useContext } from 'react';
import SampleContext, { DemoContext } from '../../contexts/TestContexts/SampleContext';

const UserContext = createContext();

/* ================= Context Option 2 ================= */

const ContextOption2 = () => {
  const { samplePath, updateFolderSample } = useContext(DemoContext);

  return (
    <div>
      <button onClick={updateFolderSample}>Update</button>

      <p>File : {samplePath?.file_name}</p>
      <p>File Path : {samplePath?.file_path}</p>
      <p>Description : {samplePath?.file_description}</p>
    </div>
  );
};

/* ================= User Context Flow ================= */

function Component1() {
  const [user] = useState("Linus");

  return (
    <UserContext.Provider value={user}>
      <h6>Component 1 , Hello {user}!</h6>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h6>Component 2</h6>
      <Component3 />
    </>
  );
}

function Component3() {
  const user = useContext(UserContext);

  return <h6>Component 3, Hello {user} again!</h6>;
}

/* ================= Main Component ================= */

function TestCallback() {
  return (
    <>
      <div>
        <h6>React Context</h6>

      <p>React Context is a way to manage state globally.</p>
      <p>
        It can be used together with the useState Hook to share state between deeply
        nested components more easily than with useState alone.
      </p>

      <p>
        To create context, you must import createContext and initialize it:
      </p>
      </div>

      <SampleContext>
        <h4>Context Example 1 </h4>
        <Component1 />
        
        <hr/>

        <h4>Context Example 2 </h4>
        <ContextOption2 />
      </SampleContext>
    </>
  );
}

export default TestCallback;