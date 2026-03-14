import { Link, useParams } from "react-router-dom";


// A HOC that adds a border to any component
function withBorder(WrappedComponent) {
  return function NewComponent(props) {
    return (
      <div style={{ border: '2px solid blue', padding: '10px' }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}


function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
// Create a new component with border
const GreetingWithBorder = withBorder(Greeting);


function Testimonial() {
  const { id } = useParams();

  return (
    <div>
      <p>Testimonial ID: {id}</p>
      <p>Path pattern: <code>/testimonial/:id</code></p>

      <ul>
        <li>
          <Link to="../testimonial/2">Testimonial 2</Link>
        </li>
        <li>
          <Link to="../testimonial/3">Testimonial 3</Link>
        </li>
      </ul>
      <hr/>
      {/* React Higher Order Components */}
      <div>
        <div>React Higher Order Components Example</div>
        <Greeting name="without HOC " />
        <GreetingWithBorder name="With HOC" />
      </div>
    </div>
  );
}

export default Testimonial;