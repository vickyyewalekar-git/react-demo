import { useState, createContext, useCallback } from "react";

export const DemoContext = createContext();    //  createContext()

function SampleContext({ children }) {

  const folderData = {
    file_name: "SampleContext.js",
    file_path: "src/contexts/TestContexts/SampleContext.js",
    file_description: "We can create context file to avoid property deep passing",
  };

  const [samplePath, setSamplePath] = useState(folderData);

  const updateFolderSample = useCallback(() => {
    setSamplePath({
      file_name: "TestContexts -> SampleContext.js",
      file_path: "src/contexts/TestContexts/SampleContext.js",
      file_description:
        "We can create context file to avoid property deep passing, we updated description here",
    });
  },[]);

  return (
    <DemoContext.Provider value={{ samplePath, updateFolderSample }}>
      {children}
    </DemoContext.Provider>
  );
}

export default SampleContext;