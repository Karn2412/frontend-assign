import React, { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { showSuccess, showError } from "../utils/toast";

import { server } from "../main";
import AddUserModal from "../components/AddUserModal";
import Header from "../components/Header";

const TeamManagementPage = () => {
  const { userInfo } = useAuth();
  const isAdmin = userInfo?.role === "admin";

  const [users, setUsers] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${server}/api/users`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
    } catch {
      showError("Failed to load users");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id: string) => {
    const confirm = window.confirm("Are you sure to delete this user?");
    if (!confirm) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${server}/api/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      showSuccess("User deleted");
      setUsers((prev) => prev.filter((u) => u._id !== id));
    } catch {
      showError("Delete failed");
    }
  };

  return (
    <>
      {/* Full Width Header */}
      <Header/>

      {/* Sidebar + Page Content */}
      <div className="d-flex">
        {/* Sidebar on Left */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-grow-1">
          <div className="container-fluid py-4">
            <div className="row g-4">
              {/* Left: CRM Cards */}
             

              {/* Right: Connection Pie Chart */}
             
            </div>

 

            {/* User Management Table */}
            <div className="mt-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>User Management</h5>
                {isAdmin && (
                  <button className="btn btn-success" onClick={() => setShowAddModal(true)}>
                    + Add User
                  </button>
                )}
              </div>

              <table className="table table-bordered table-striped bg-white">
                <thead>
                  <tr>
                    <th>Email</th>
                    {isAdmin && <th>Role</th>}
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users
                    .filter((user) => isAdmin || user._id === userInfo?.id)
                    .map((user) => {
                      const isSelf = user._id === userInfo?.id;
                      return (
                        <tr key={user._id}>
                          <td>{user.email}</td>
                          {isAdmin && <td>{user.role}</td>}
                          <td>
                            <button
                              className="btn btn-warning btn-sm me-2"
                              onClick={() => {
                                setSelectedUser(user);
                                setShowModal(true);
                              }}
                            >
                              Edit
                            </button>
                            {isAdmin && !isSelf && (
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(user._id)}
                              >
                                Delete
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>

            {/* Edit Modal */}
            {showModal && selectedUser && (
              <div className="modal fade show" style={{ display: "block" }}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        try {
                          const token = localStorage.getItem("token");
                          const res = await axios.put(
                            `${server}/api/users/${selectedUser._id}`,
                            selectedUser,
                            {
                              headers: { Authorization: `Bearer ${token}` },
                            }
                          );
                          showSuccess("User updated");
                          setUsers((prev) =>
                            prev.map((u) => (u._id === res.data._id ? res.data : u))
                          );
                          setShowModal(false);
                        } catch {
                          showError("Update failed");
                        }
                      }}
                    >
                      <div className="modal-header">
                        <h5>Edit User</h5>
                        <button
                          className="btn-close"
                          onClick={() => setShowModal(false)}
                        />
                      </div>
                      <div className="modal-body">
                        {isAdmin && (
                          <>
                            <label>Email</label>
                            <input
                              className="form-control mb-2"
                              value={selectedUser.email}
                              onChange={(e) =>
                                setSelectedUser({ ...selectedUser, email: e.target.value })
                              }
                            />
                            <label>Role</label>
                            <select
                              className="form-select mb-2"
                              value={selectedUser.role}
                              onChange={(e) =>
                                setSelectedUser({ ...selectedUser, role: e.target.value })
                              }
                            >
                              <option value="user">User</option>
                              <option value="admin">Admin</option>
                            </select>
                          </>
                        )}
                        <label>Password</label>
                        <input
                          className="form-control"
                          type="password"
                          value={selectedUser.password || ""}
                          onChange={(e) =>
                            setSelectedUser({ ...selectedUser, password: e.target.value })
                          }
                        />
                      </div>
                      <div className="modal-footer">
                        <button
                          className="btn btn-secondary"
                          onClick={() => setShowModal(false)}
                        >
                          Cancel
                        </button>
                        <button className="btn btn-primary" type="submit">
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* Add User Modal */}
            <AddUserModal
              show={showAddModal}
              onClose={() => setShowAddModal(false)}
              onUserAdded={fetchUsers}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamManagementPage;
