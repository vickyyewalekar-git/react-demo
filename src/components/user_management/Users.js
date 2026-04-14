import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
  clearMessages,
} from "../../store/slices/usersSlice";

// ─── Yup Schemas ────────────────────────────────────────────────────────────

const baseSchema = {
  name: yup.string().trim().required("Name is required"),

  email: yup.string().trim().required("Email is required").matches(/\S+@\S+\.\S+/, "Invalid email format"),

  address: yup.string().nullable(),

  mobile: yup.string().nullable().matches(/^[0-9]*$/, "Only digits allowed").max(15, "Max 15 digits allowed"),

  phone: yup.string().nullable().matches(/^[0-9]*$/, "Only digits allowed").max(15, "Max 15 digits allowed"),

  role: yup.string().required("Role is required"),
};

const createSchema = yup.object({
  ...baseSchema, password: yup.string().required("Password is required").min(8, "Minimum 8 characters required"),
});

const editSchema = yup.object({
  ...baseSchema, password: yup.string().min(8, "Minimum 8 characters required"),
});

// ────────────────────────────────────────────────────────────────────────────

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

  const [roles, setRoles] = useState([]);

  const [showToast, setShowToast] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");

  // ─── React Hook Form setup ─────────────────────────────────────────────
  const { register, handleSubmit, reset, formState: { errors }, } = useForm({
    resolver: yupResolver(editId ? editSchema : createSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "Temp@123",
      address: "",
      mobile: "",
      phone: "",
      role: "",
    },
  });

  // ─── Effects ───────────────────────────────────────────────────────────

  useEffect(() => {
    setPageTitle("User Management");
  }, [setPageTitle]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${process.env.REACT_APP_API_URL}/roles`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRoles(data.data);
      })
      .catch((err) => console.error("Roles fetch error:", err));
  }, []);

  // Fetch on mount + whenever page or search changes
  useEffect(() => {
    dispatch(fetchUsers({ page, search, per_page: 10 }));
  }, [dispatch, page, search]);

  // Re-fetch only when a create/update/delete succeeds (successMessage goes truthy)
  useEffect(() => {
    if (successMessage) {
      dispatch(fetchUsers({ page, search, per_page: 10 }));
    }
  }, [successMessage]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (successMessage || error) {
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
        dispatch(clearMessages());
      }, 3000);
    }
  }, [successMessage, error, dispatch]);

  // ─── Handlers ──────────────────────────────────────────────────────────

  const handleExport = () => {
    const token = localStorage.getItem("token");
    const url = `${process.env.REACT_APP_API_URL}/users-export?search=${search}`;

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
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

  const handleAdd = () => {
    setEditId(null);
    reset({
      name: "",
      email: "",
      password: "Temp@123",
      address: "",
      mobile: "",
      phone: "",
      role: "",
    });
    setShowModal(true);
  };

  const handleEdit = (user) => {
    setEditId(user.id);
    reset({
      name: user.name,
      email: user.email,
      password: "Temp@123",
      address: user.address || "",
      mobile: user.mobile || "",
      phone: user.phone || "",
      role: user.roles && user.roles.length > 0 ? user.roles[0].id : "",
    });
    setShowModal(true);
  };

  // RHF's handleSubmit already calls e.preventDefault() internally
  const onSubmit = (data) => {
    if (editId) {
      dispatch(updateUser({ id: editId, data }));
    } else {
      dispatch(createUser(data));
    }
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    dispatch(deleteUser(deleteId));
    setShowConfirm(false);
    setDeleteId(null);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopyMessage("User Email copied!");
    setShowToast(true);
  };

  // ─── Render ────────────────────────────────────────────────────────────

  return (
    <div className="container-fluid mt-1">

      {/* 🔔 TOAST NOTIFICATION */}
      <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 9999 }}>
        {showToast && (
          <div
            className={`toast show align-items-center text-white ${error ? "bg-danger" : "bg-success"
              } border-0`}
          >
            <div className="d-flex">
              <div className="toast-body">
                {copyMessage
                  ? copyMessage
                  : error
                    ? typeof error === "object"
                      ? Object.values(error).join(", ")
                      : error
                    : successMessage}
              </div>
              <button
                type="button"
                className="bt0n-close btn-close-white me-2 m-auto"
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

            {/* Total */}
            <div className="mx-auto d-flex align-items-center gap-2">
              <strong>Total:</strong>{" "}
              <span className="badge bg-dark mx-2">
                {pagination?.total || 0}
              </span>
            </div>

            {/* Search */}
            <div className="mx-auto d-flex align-items-center gap-2">
              <input
                type="text"
                className="for0m-control mx-2"
                style={{ width: "250px" }}
                placeholder="Search user..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Buttons */}
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
                <th>Role</th>
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
                    <td>
                      <div className="d-flex align-items-center justify-content-between">
                        <span>{u.email}</span>
                        <button
                          className="btn btn-sm btn-light border ms-2"
                          title="Copy Email"
                          onClick={() => handleCopy(u.email)}
                        >
                          📋
                        </button>
                      </div>
                    </td>
                    <td>{u.mobile}</td>
                    <td>{u.phone}</td>
                    <td>
                      {u.roles && u.roles.length > 0
                        ? u.roles.map((r) => r.name).join(", ")
                        : "-"}
                    </td>
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
            Page {pagination?.current_page || 1} of {pagination?.last_page || 1}
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
                  <button className="page-link" onClick={() => setPage(i + 1)}>
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

                {/* RHF handleSubmit wraps onSubmit */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="modal-body">
                    <div className="row">

                      <div className="col-md-6 mb-3">
                        <label>Name</label>
                        <input
                          className={`form-control ${errors.name ? "is-invalid" : ""}`}
                          {...register("name")}
                        />
                        <div className="invalid-feedback">
                          {errors.name?.message}
                        </div>
                      </div>

                      <div className="col-md-6 mb-3">
                        <label>Email</label>
                        <input
                          className={`form-control ${errors.email ? "is-invalid" : ""}`}
                          {...register("email")}
                        />
                        <div className="invalid-feedback">
                          {errors.email?.message}
                        </div>
                      </div>

                      <div className="col-md-6 mb-3">
                        <label>Mobile</label>
                        <input
                          className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
                          {...register("mobile")}
                        />
                        <div className="invalid-feedback">
                          {errors.mobile?.message}
                        </div>
                      </div>

                      <div className="col-md-6 mb-3">
                        <label>Phone</label>
                        <input
                          className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                          {...register("phone")}
                        />
                        <div className="invalid-feedback">
                          {errors.phone?.message}
                        </div>
                      </div>

                      <div className="col-md-6 mb-3">
                        <label>Address</label>
                        <input
                          className="form-control"
                          {...register("address")}
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label>Role</label>
                        <select
                          className={`form-control ${errors.role ? "is-invalid" : ""}`}
                          {...register("role")}
                        >
                          <option value="">Select Role</option>
                          {roles.map((role) => (
                            <option key={role.id} value={role.id}>
                              {role.name}
                            </option>
                          ))}
                        </select>
                        <div className="invalid-feedback">
                          {errors.role?.message}
                        </div>
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

      {/* CONFIRM DELETE MODAL */}
      {showConfirm && (
        <>
          <div className="modal-backdrop fade show"></div>
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
                  <button className="btn btn-danger" onClick={confirmDelete}>
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