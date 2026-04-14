import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-info bg-gradient shadow sticky-top">
      <div className="container d-flex justify-content-between align-items-center flex-wrap py-2">

        {/* Logo / Brand */}
        <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
          <svg width="32" height="32" viewBox="0 0 24 24" className="text-white"          >
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>

          <span className="fs-4 fw-bold text-white">
            SCIP
          </span>
        </Link>

        {/* User Section */}
        <div className="d-flex gap-3">
          <span className="text-white">
          <NavLink to="/login" className="nav-link custom-link">
            👤 Login
          </NavLink>
          </span>
        </div>

      </div>
    </header>
  );
};

export default Header;