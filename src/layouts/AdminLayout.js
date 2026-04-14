import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/Admin.css";

const AdminLayout = () => {
  const navigate = useNavigate();
  const [pageTitle, setPageTitle] = useState("Dashboard");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="d-flex admin-layout">

      {/* Sidebar */}
      <aside className="bg-dark text-white p-3 sidebar">
        <h5 className="mb-4">SCIP - CMS</h5>

        <NavLink to="/admin/dashboard" className="d-block text-white mb-2">
          Dashboard
        </NavLink>

        <NavLink to="/admin/users" className="d-block text-white mb-2">
          Users
        </NavLink>

        <button className="btn btn-danger mt-4 w-100" onClick={logout}>
          Logout
        </button>
      </aside>

      {/* Content */}
      <main className="flex-grow-1 content-area">

        {/* 🔝 TOPBAR */}
        <div className="topbar d-flex justify-content-between align-items-center px-4">
          <h5 className="mb-0 fw-bold">{pageTitle}</h5>

          <button className="btn btn-outline-danger btn-sm" onClick={logout}>
            Logout
          </button>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-4">
          <Outlet context={{ setPageTitle }} />
        </div>

      </main>
    </div>
  );
};

export default AdminLayout;