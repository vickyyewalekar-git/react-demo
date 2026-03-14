import { Routes, Route} from "react-router-dom";
import HomeScreen from "./home/HomeScreen";
import Navigation from "./Navigation";
import Profile from "./home/Profile";
import Setting from "./home/Setting";
import Event from "./tests/Event";
import Form from "./tests/Form";
import Portal from "./tests/Portal";
import Suspense from "./tests/Suspense";
import Header from "./common/Header";
import Testimonial from "./home/Testimonial";
import Transition from "./tests/Transition";
import Hooks from "./hooks/Hooks";
import UseEffect from "./hooks/Useeffect";
import UseContext from "./hooks/UseContext";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route element={<Navigation />}>
          <Route index element={<HomeScreen />} />
          <Route path="home" element={<HomeScreen />} />
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
          <Route path="react-events" element={<Event />} />
          <Route path="test-form" element={<Form />} />
          <Route path="test-portal-link" element={<Portal />} />
          <Route path="test-suspense" element={<Suspense />} />
          <Route path="transition" element={<Transition />} />
          
          <Route path="hooks" element={<Hooks />} />
          <Route path="useeffect-hooks" element={<UseEffect />} />
          <Route path="usecontext-hooks" element={<UseContext />} />

          <Route path="testimonial/:id" element={<Testimonial />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
