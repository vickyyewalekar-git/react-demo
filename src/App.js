import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

import { publicRoutes, adminRoutes } from "./routesConfig";

function App() {
  return (
    <Routes>

      {/* PUBLIC WEBSITE */}
      <Route element={<PublicLayout />}>
        {publicRoutes.map((r, i) => (
          <Route key={i} path={r.path} element={r.element} />
        ))}
      </Route>

      {/* ADMIN PANEL */}
      <Route element={<ProtectedRoute />}>
        <Route path="admin" element={<AdminLayout />}>
          {adminRoutes.map((r, i) => (
            <Route key={i} path={r.path} element={r.element} />
          ))}
        </Route>
      </Route>

    </Routes>
  );
}

export default App;