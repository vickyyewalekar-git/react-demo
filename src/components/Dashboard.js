import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/slices/usersSlice";
import { useOutletContext } from "react-router-dom";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  const dispatch = useDispatch();
  const { setPageTitle } = useOutletContext();

  const { users = [], loading } = useSelector((state) => state.users);

  useEffect(() => {
    setPageTitle("Dashboard");
  }, [setPageTitle]);

  // ✅ FETCH ALL USERS (IMPORTANT CHANGE)
  useEffect(() => {
  dispatch(fetchUsers({ page: 1, search: "", per_page: 0 }));
}, [dispatch]);

  // ✅ Active / Inactive
  const chartData = useMemo(() => {
    const active = users.filter((u) => u.status === "ACTIVE").length;
    const inactive = users.length - active;

    return [
      { name: "Active", value: active },
      { name: "Inactive", value: inactive },
    ];
  }, [users]);

  const safeChartData = useMemo(() => {
    const hasData = chartData.some((d) => d.value > 0);

    return hasData
      ? chartData
      : [
          { name: "Active", value: 1 },
          { name: "Inactive", value: 0 },
        ];
  }, [chartData]);

  const COLORS = ["#28a745", "#dc3545"];

  return (
    <div className="container-fluid py-3">
      <div className="row g-3">

        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">

              <h6 className="text-muted">Total Users</h6>

              {loading ? (
                <div className="spinner-border text-primary" />
              ) : (
                <h2 className="fw-bold mb-2">{users.length}</h2>
              )}

              <small className="text-muted d-block mb-3">
                Active vs Inactive Users
              </small>

              <div style={{ width: "100%", height: 220 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={safeChartData}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={80}
                      label
                    >
                      {safeChartData.map((_, index) => (
                        <Cell key={index} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="d-flex justify-content-center gap-3 mt-2">
                <span className="text-success fw-semibold">● Active</span>
                <span className="text-danger fw-semibold">● Inactive</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;