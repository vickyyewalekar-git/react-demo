// =================== AUTH & ADMIN ===================
import LoginScreen from "./components/common/Login";
import Dashboard from "./components/Dashboard";

// (Create this later if not exists)
import Users from "./components/user_management/Users";

// =================== PUBLIC / WEBSITE ===================
import HomeScreen from "./test_components/home/HomeScreen";
import Profile from "./test_components/home/Profile";
import Setting from "./test_components/home/Setting";
import Testimonial from "./test_components/home/Testimonial";

import Event from "./test_components/Event";
import Form from "./test_components/Form";
import Portal from "./test_components/Portal";
import SuspensePage from "./test_components/Suspense";
import Transition from "./test_components/Transition";

// =================== HOOKS DEMOS ===================
import Hooks from "./test_components/hooks/Hooks";
import UseEffect from "./test_components/hooks/Useeffect";
import UseContext from "./test_components/hooks/UseContext";
import UseRefDemo from "./test_components/hooks/useRef";
import UseReducerDemo from "./test_components/hooks/useReducer";
import UseCallbackDemo from "./test_components/hooks/useCallback";
import UseMemoDemo from "./test_components/hooks/useMemo";
import UseCustomHooksDemo from "./test_components/hooks/UseCustomHooks";

// =================== JAVASCRIPT ===================
import BasicJavascript from "./test_components/javascript/Basic";
import ArrayPrograms from "./test_components/javascript/ArrayPrograms";

/*
|--------------------------------------------------------------------------
| PUBLIC ROUTES (Header + Website Layout)
|--------------------------------------------------------------------------
*/
export const publicRoutes = [
  { path: "", element: <HomeScreen /> },
  { path: "home", element: <HomeScreen /> },
  { path: "login", element: <LoginScreen /> },

  { path: "profile", element: <Profile /> },
  { path: "setting", element: <Setting /> },

  { path: "react-events", element: <Event /> },
  { path: "test-form", element: <Form /> },
  { path: "test-portal-link", element: <Portal /> },
  { path: "test-suspense", element: <SuspensePage /> },
  { path: "transition", element: <Transition /> },

  { path: "testimonial/:id", element: <Testimonial /> },

  // Hooks
  { path: "hooks", element: <Hooks /> },
  { path: "useeffect-hooks", element: <UseEffect /> },
  { path: "usecontext-hooks", element: <UseContext /> },
  { path: "useref-hooks", element: <UseRefDemo /> },
  { path: "usereducer-hooks", element: <UseReducerDemo /> },
  { path: "usecallback-hooks", element: <UseCallbackDemo /> },
  { path: "usememo-hooks", element: <UseMemoDemo /> },
  { path: "usecustom-hooks", element: <UseCustomHooksDemo /> },

  // JavaScript
  { path: "basic-js", element: <BasicJavascript /> },
  { path: "javascript-array-programs", element: <ArrayPrograms /> },
];

/*
|--------------------------------------------------------------------------
| ADMIN ROUTES (Protected + Sidebar Layout)
|--------------------------------------------------------------------------
*/
export const adminRoutes = [
  { path: "dashboard", element: <Dashboard /> },
  { path: "users", element: <Users /> },
];