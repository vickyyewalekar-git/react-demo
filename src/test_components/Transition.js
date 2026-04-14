import { useState, useTransition } from 'react';
import { forwardRef, useRef } from 'react';

function SearchResults({ number }) {
  const items = [];

  if (!Number.isNaN(number)) {
    for (let i = 0; i < 1000; i++) {
      if (i === number) {
        items.push(
          <li style={{ color: 'green' }} key={i}>
            Result for {number} - {i} - Match Found
          </li>
        );
      } else {
        items.push(<li key={i}>Result for {number} - {i}
        </li>
        );
      }
    }
  }

  return <ul>{items}</ul>;
}


const MyInput = forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));



function Transition() {

  const [input, setInput] = useState('');
  const [query, setQuery] = useState(0);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = Number(e.target.value);

    // 🔥 Urgent update
    setInput(e.target.value);

    // 🐢 Non-urgent update
    startTransition(() => {
      setQuery(value);
    });
  };


  // ......................................................................... 
  // .............................React forwardRef Example............................................ 



  const inputRef = useRef();
  const inputRef2 = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const focusInput2 = () => {
    inputRef2.current.focus();
  };

  return (
    <div>
      <div style={{ width: '50%', float: 'left' }}>
        <label>Enter Number:&nbsp;</label>

        <input
          type="number"
          value={input}
          onChange={handleChange}
          placeholder="Type number upto 1000 to search..."
        />

        {isPending && <p>Loading results...</p>}

        {/* ✅ correct prop */}
        <SearchResults number={query} />
      </div>

      <div style={{ width: '50%', float: 'left' }}>
        <h4>React forwardRef</h4>
        <div>
          <MyInput ref={inputRef} placeholder="Type here..." />
          <button onClick={focusInput}>Focus Input</button>
        </div>
        <br />
        <div>
          <MyInput ref={inputRef2} placeholder="Type here..." />
          <button onClick={focusInput2}>Focus Input</button>
        </div>

      </div>


    </div>
  );
}

export default Transition;