import { Suspense, lazy } from "react";

// Lazy-loaded components
const MyForm = lazy(() => import("./Form"));
const MyEvents = lazy(() => import("./Event"));

function App() {
  return (
    <div className="container mt-4">

       <Suspense fallback={<div>Loading Events...</div>}>
        <MyEvents />
      </Suspense>

      <Suspense fallback={<div>Loading Form...</div>}>
        <MyForm />
      </Suspense>
     
    </div>
  );
}

export default App;