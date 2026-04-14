import useMyFetch from "./useFetch";

const Home = () => {
     const [data] = useMyFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
        <p>When you have components that can be used by multiple components, we can extract that component into a custom Hook.

            Custom Hooks start with "use". Example: useMyFetch.
        </p>
        <p>The file name must start <b>with use</b>, and end <b>with .js</b>, and be placed in the same directory as the component.</p>
      
        <h4>Example Explained</h4>
        <p>We have created a new file called useFetch.js containing a function called useMyFetch which contains all of the logic needed to fetch our data.</p>

        <p>We removed the hard-coded URL and replaced it with a url variable that can be passed to the custom Hook.</p>

        <p>Lastly, we are returning our data from our Hook.</p>

        <p> we are importing our useFetch Hook and utilizing it like any other Hook. This is where we pass in the URL to fetch data from.</p>

        <p>Now we can reuse this custom Hook in any component to fetch data from any URL.</p>


      <div className="container mt-4">
            <div className="card shadow-sm">
                <div className="card-body">

                <h3 className="card-title mb-3">Posts</h3>

                <ul className="list-group">
                    {data && data.map((item) => (
                        <li key={item.id} className="list-group-item"> {item.title} </li>
                    ))}
                </ul>

                </div>
            </div>
        </div>
    </>
  );
};

export default Home;