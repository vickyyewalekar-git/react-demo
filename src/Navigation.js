import {  NavLink } from "react-router-dom";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import { MdEvent } from "react-icons/md";

import "./css/Navigation.css";

function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
        <div className="container">

          {/* Toggle Button */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"          >            <span className="navbar-toggler-icon" />          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-2">

              {/* Home */}
              <li className="nav-item">
                <NavLink to="/home" className="nav-link custom-link">
                  <FaHome /> Home
                </NavLink>
              </li>

              {/* Profile */}
              <li className="nav-item">
                <NavLink to="/profile" className="nav-link custom-link">
                  <FaUser /> Profile
                </NavLink>
              </li>

              {/* Setting */}
              <li className="nav-item">
                <NavLink to="/setting" className="nav-link custom-link">
                  <FaCog /> Setting
                </NavLink>
              </li>

              {/* Testimonial */}
              <li className="nav-item">
                <NavLink to="/testimonial/5" className="nav-link custom-link">
                  ⭐ Testimonial
                </NavLink>
              </li>

              {/* React Dropdown */}
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle fw-semibold" role="button" data-bs-toggle="dropdown"                >
                  ⚛ React
                </span>

                <ul className="dropdown-menu dropdown-menu-end shadow border-0">

                  <li>
                    <NavLink className="dropdown-item" to="/react-events">
                      <MdEvent /> React Event
                    </NavLink>
                  </li>

                  <li><NavLink className="dropdown-item" to="/test-form">📝 React Form</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/test-portal-link">🌐 Portal</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/test-suspense">⏳ Suspense</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/transition">🔄 Transition</NavLink></li>

                  <li><hr className="dropdown-divider" /></li>
                  <li className="dropdown-header">⚛ React Hooks</li>

                  <li><NavLink className="dropdown-item" to="/hooks">useState</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/useeffect-hooks">useEffect</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/usecontext-hooks">useContext</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/useref-hooks">useRef</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/usereducer-hooks">useReducer</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/usecallback-hooks">useCallback</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/usememo-hooks">useMemo</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/usecustom-hooks">useCustomHooks</NavLink></li>
                </ul>
              </li>

              {/* JavaScript Dropdown */}
              <li className="nav-item dropdown">
                <span                  className="nav-link dropdown-toggle fw-semibold"                  role="button"                  data-bs-toggle="dropdown"                >
                  🟨 JavaScript
                </span>

                <ul className="dropdown-menu dropdown-menu-end shadow border-0">
                  <li><NavLink className="dropdown-item" to="/basic-js">Basics</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/javascript-array-programs">Array Programs</NavLink></li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {/* <div className="container mt-4">
        <Outlet />
      </div> */}
    </>
  );
}

export default Navigation;