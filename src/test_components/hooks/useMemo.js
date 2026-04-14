import { useState, useMemo } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);
    
  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
        <div className="container mt-4">

        <div className="card shadow-sm mb-4">
            <div className="card-body">
            <h3 className="card-title mb-3">React useMemo Hook</h3>

            <p>The React useMemo Hook <b>returns a memoized value.</b></p>
            <p>Think of memoization as caching a value so that it does not need to be recalculated.</p>
            <p>The useMemo Hook only runs when one of its dependencies update.</p>
            <p>This can improve performance.</p>
            <p>The useMemo and useCallback Hooks are similar:</p>
            <p>useMemo returns a <b>memoized value.</b></p>
            <p>useCallback returns a <b>memoized function.</b></p>
            </div>
        </div>


        <div className="row">

            {/* Todo Section */}
            <div className="col-md-6">
            <div className="card shadow-sm mb-4">
                <div className="card-body">
                <h4 className="card-title">My Todos</h4>

                <ul className="list-group mb-3">
                    {todos.map((todo, index) => (
                    <li key={index} className="list-group-item">
                        {todo}
                    </li>
                    ))}
                </ul>

                <button className="btn btn-primary" onClick={addTodo}>
                    Add Todo
                </button>
                </div>
            </div>
            </div>


            {/* Counter Section */}
            <div className="col-md-6">
            <div className="card shadow-sm">
                <div className="card-body">
                <h4 className="card-title">Counter</h4>

                <h5 className="mb-3">
                    Count: <span className="badge bg-secondary">{count}</span>
                </h5>

                <button className="btn btn-success mb-3" onClick={increment}>
                    +
                </button>

                <hr />

                <h5>Expensive Calculation</h5>
                <div className="alert alert-info mt-2">
                    {calculation}
                </div>

                </div>
            </div>
            </div>

        </div>
        </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default App;