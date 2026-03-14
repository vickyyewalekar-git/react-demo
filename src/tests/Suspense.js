import { Suspense, lazy } from 'react';

const MyForm = lazy(() => import('./Form'));
const Myevents = lazy(() => import('./Event'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MyForm />
        <br/>
        <hr/>
        <Myevents />
      </Suspense>
    </div>
  );
}

export default App;