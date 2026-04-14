import {useReducer} from 'react';

const objPlayersList = [
  { id: 1, score: 0, name: "John" },
  { id: 2, score: 0, name: "Sally" },
  { id: 3, score: 0, name: "Shama" },
  { id: 4, score: 0, name: "Nilesh" },
  { id: 5, score: 0, name: "Priya" },
  { id: 6, score: 0, name: "Abhijit" },
  { id: 7, score: 0, name: "Kavya" },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state.map((player) => {
        if (player.id === action.id) {
          return { ...player, score: player.score + 1 };
        } else {
          return player;
        }
      });
    case "DECREASE":
      return state.map((player) => {
        if (player.id === action.id) {
          return { ...player, score: player.score - 1 };
        } else {
          return player;
        }
      });
    default:
      return state;
  }
};

function Score() {
  const [score, dispatch] = useReducer(reducer, objPlayersList);

  const IncreaseScore = (player) => {
    dispatch({ type: "INCREASE", id: player.id });
  };

  const DecreaseScore = (player) => {
    dispatch({ type: "DECREASE", id: player.id });
  };
  return (
    <>
        <p>The <code>useReducer</code> Hook is similar to the useState Hook.</p>

        <p>It allows for custom state logic.</p>

        <p>If you find yourself keeping track of multiple pieces of state that rely on complex logic, <code>useReducer</code> may be useful.</p>

        <p><b>Syntax</b></p>
        <p>The <code>useReducer</code> Hook accepts three arguments.</p>

        <p><b>useReducer(reducer, initialState, init)</b></p>
        <p>The reducer function contains your custom state logic and the initialState can be a simple value, but generally will contain an object. The init argument is optional and is used to initialize the state.</p>

        <p>The <code>useReducer</code> Hook returns the current stateand a dispatchmethod.</p>

        <p>Here is an example where we use <code>useReducer</code> to keep track of the score of  players:</p>

        <p><b>Note :  the main purpose of useReducer is To handle complex state logic with multiple pieces of state</b></p>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
            <tr>
                <th>Player</th>
                <th>Increase</th>
                <th>Decrease</th>
                <th>Score</th>
            </tr>
        </thead>

        <tbody>
            {score.map((player) => (
            <tr key={player.id}>
                <td>{player.name}</td>

                <td>
                    <button className="btn btn-success btn-sm" onClick={() => IncreaseScore(player)} > +1 </button>
                </td>

                <td>
                    <button className="btn btn-danger btn-sm" onClick={() => DecreaseScore(player)} > -1 </button>
                </td>

                <td>
                <strong>{player.score}</strong>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </>
  );
}


export default Score;