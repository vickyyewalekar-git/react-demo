import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";

import {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
  clearMessages,
} from "../../store/slices/usersSlice";

function Users() {
  const dispatch = useDispatch();

  const { users, pagination, loading, error, successMessage } = useSelector(
    (state) => state.users
  );

  const { setPageTitle } = useOutletContext();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setPageTitle("User Management");
  }, [setPageTitle]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "Temp@123",
    address: "",
    mobile: "",
    phone: "",
  });

  const handleExport = () => {
    const token = localStorage.getItem("token"); // if auth

    const url = `${process.env.REACT_APP_API_URL}/users-export?search=${search}`;

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // remove if not needed
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "users.xlsx";
        link.click();
      })
      .catch((err) => console.error("Export error:", err));
  };

  // Fetch Users
  useEffect(() => {
    dispatch(fetchUsers({ page, search }));
  }, [dispatch, page, search]);

  // Toast handler
  useEffect(() => {
    if (successMessage || error) {
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
        dispatch(clearMessages());
      }, 3000);
    }
  }, [successMessage, error, dispatch]);

  // Handle Input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Open Add
  const handleAdd = () => {
    setEditId(null);
    setForm({
      name: "",
      email: "",
      password: "Temp@123",
      address: "",
      mobile: "",
      phone: "",
    });
    setShowModal(true);
  };

  // Open Edit
  const handleEdit = (user) => {
    setEditId(user.id);
    setForm({
      name: user.name,
      email: user.email,
      password: "Temp@123",
      address: user.address || "",
      mobile: user.mobile || "",
      phone: user.phone || "",
    });
    setShowModal(true);
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      dispatch(updateUser({ id: editId, data: form }));
    } else {
      dispatch(createUser(form));
    }

    setShowModal(false);
  };

  // Delete
  const handleDelete = (id) => {
    setDeleteId(id);
    setShowConfirm(true);
  };
  const confirmDelete = () => {
    dispatch(deleteUser(deleteId));
    setShowConfirm(false);
    setDeleteId(null);
  };

  return (
    <div className="container-fluid mt-1">

      {/* 🔔 TOAST NOTIFICATION */}
      <div
        className="position-fixed top-0 end-0 p-3"
        style={{ zIndex: 9999 }}
      >
        {showToast && (
          <div
            className={`toast show align-items-center text-white ${error ? "bg-danger" : "bg-success"
              } border-0`}
          >
            <div className="d-flex">
              <div className="toast-body">
                {error
                  ? typeof error === "object"
                    ? Object.values(error).join(", ")
                    : error
                  : successMessage}
              </div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                onClick={() => setShowToast(false)}
              ></button>
            </div>
          </div>
        )}
      </div>

      {/* HEADER */}
      <div className="card mb-3 shadow-sm">
        <div className="card-body d-flex justify-content-between align-items-center flex-wrap gap-2">

          <div className="d-flex align-items-center">

            {/* LEFT */}
            <div className="mx-auto d-flex align-items-center gap-2">
              <strong>Total:</strong>{" "}
              <span className="badge bg-dark mx-2">
                {pagination?.total || 0}
              </span>
            </div>

            {/* CENTER (Search + Future Filters) */}
            <div className="mx-auto d-flex align-items-center gap-2">
              <input
                type="text"
                className="form-control mx-2"
                style={{ width: "250px" }}
                placeholder="Search user..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            {/* RIGHT */}
            <div className="d-flex gap-2">
              <button className="btn btn-success" onClick={handleExport}>
                Export Excel
              </button>

              <button className="btn btn-primary" onClick={handleAdd}>
                + Add User
              </button>
            </div>

          </div>


        </div>
      </div>

      {/* TABLE */}
      <div className="card shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Phone</th>
                <th>Address</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    <div className="spinner-border text-primary"></div>
                  </td>
                </tr>
              ) : users.length > 0 ? (
                users.map((u, index) => (
                  <tr key={u.id}>
                    <td>{index + 1}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.mobile}</td>
                    <td>{u.phone}</td>
                    <td>{u.address}</td>

                    <td className="text-end">
                      <button
                        className="btn btn-sm btn-warning me-2"
                        onClick={() => handleEdit(u)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(u.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    No Users Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="card-footer d-flex justify-content-between align-items-center">
          <span>
            Page {pagination?.current_page || 1} of{" "}
            {pagination?.last_page || 1}
          </span>

          <nav>
            <ul className="pagination mb-0">
              <li className={`page-item ${page === 1 && "disabled"}`}>
                <button className="page-link" onClick={() => setPage(page - 1)}>
                  «
                </button>
              </li>

              {[...Array(pagination?.last_page || 1)].map((_, i) => (
                <li
                  key={i}
                  className={`page-item ${page === i + 1 && "active"}`}
                >
                  <button
                    className="page-link"
                    onClick={() => setPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}

              <li
                className={`page-item ${page === pagination?.last_page && "disabled"
                  }`}
              >
                <button className="page-link" onClick={() => setPage(page + 1)}>
                  »
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* MODAL FORM */}
      {showModal && (
        <>
          {/* BACKDROP */}
          <div className="modal-backdrop fade show"></div>
          <div className="modal fade show d-block">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">

                <div className="modal-header">
                  <h5>{editId ? "Edit User" : "Add User"}</h5>
                  <button
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="modal-body">
                    <div className="row">

                      <div className="col-md-6 mb-3">
                        <label>Name</label>
                        <input
                          className="form-control"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label>Email</label>
                        <input
                          className="form-control"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label>Mobile</label>
                        <input
                          className="form-control"
                          name="mobile"
                          value={form.mobile}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label>Phone</label>
                        <input
                          className="form-control"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-12 mb-3">
                        <label>Address</label>
                        <input
                          className="form-control"
                          name="address"
                          value={form.address}
                          onChange={handleChange}
                        />
                      </div>

                    </div>
                  </div>

                  <div className="modal-footer">
                    <button
                      className="btn btn-secondary"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>

                    <button className="btn btn-primary" type="submit">
                      {editId ? "Update" : "Create"}
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </>


      )}

      {showConfirm && (
        <>
          {/* BACKDROP */}
          <div className="modal-backdrop fade show"></div>

          {/* MODAL */}
          <div className="modal fade show d-block">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">

                <div className="modal-header bg-danger text-white">
                  <h5 className="modal-title">Confirm Delete</h5>
                  <button
                    className="btn-close btn-close-white"
                    onClick={() => setShowConfirm(false)}
                  ></button>
                </div>

                <div className="modal-body">
                  <p className="mb-0">
                    Are you sure you want to delete this user?
                  </p>
                </div>

                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setShowConfirm(false)}
                  >
                    Cancel
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={confirmDelete}
                  >
                    Yes, Delete
                  </button>
                </div>

              </div>
            </div>
          </div>
        </>
      )}

    </div>
  );
}

export default Users;