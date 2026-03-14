import { Outlet, NavLink } from "react-router-dom";

// NavLink active styles
const navLinkStyles = ({ isActive }) => ({
  color: isActive ? "#fff423" : "#ffffff",
  textDecoration: isActive ? "none" : "underline",
  fontWeight: isActive ? "bold" : "normal",
  padding: "5px 10px",
});

function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Brand */}
          {/* <NavLink className="navbar-brand" style={navLinkStyles} to="/home">
            CMS
          </NavLink> */}

          {/* Mobile toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" style={navLinkStyles} to="/home">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" style={navLinkStyles} to="/profile">
                  Profile
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" style={navLinkStyles} to="/setting">
                  Setting
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={navLinkStyles}
                  to="/testimonial/5"
                >
                  Testimonial
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={navLinkStyles}
                  to="/react-events"
                >
                  React Event
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={navLinkStyles}
                  to="/test-form"
                >
                  React Form
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={navLinkStyles}
                  to="/test-portal-link"
                >
                  Portal
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={navLinkStyles}
                  to="/test-suspense"
                >
                  Suspense
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={navLinkStyles}
                  to="/transition"
                >
                  Transition
                </NavLink>
              </li>

              {/* 🔽 Dropdown */}
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "#ffffff", cursor: "pointer" }}
                >
                  React Hooks
                </span>

                <ul className="dropdown-menu dropdown-menu-end">

                  <li><NavLink className="dropdown-item" to="/hooks">useState</NavLink></li>

                   <li><hr className="dropdown-divider" /></li>

                  <li><NavLink className="dropdown-item" to="/useeffect-hooks">Use Effect</NavLink></li>

                  <li><NavLink className="dropdown-item" to="/callback">useCallback</NavLink></li>

                  <li><NavLink className="dropdown-item" to="/usecontext-hooks">useContext</NavLink></li>
                  
                     {/* <li><NavLink className="dropdown-item" to="/memo">useMemo</NavLink></li> */}
                  

                </ul>
              </li>
              {/* 🔼 Dropdown end */}

            </ul>
          </div>
        </div>
      </nav>

      {/* Page content */}
      <div className="section mt-4">
        <Outlet />
      </div>
    </>
  );
}

export default Navigation;