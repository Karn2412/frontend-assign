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
      <Header />
      <div className="flex">
        <Sidebar />

        <div className="flex-grow p-6 bg-gray-50 min-h-screen">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">User Management</h2>
            {isAdmin && (
              <button
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                onClick={() => setShowAddModal(true)}
              >
                + Add User
              </button>
            )}
          </div>

          <div className="overflow-x-auto bg-white shadow rounded-lg">
            <table className="min-w-full table-auto border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-3 border-b">Email</th>
                  {isAdmin && <th className="text-left p-3 border-b">Role</th>}
                  <th className="text-left p-3 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users
                  .filter((user) => isAdmin || user._id === userInfo?.id)
                  .map((user) => {
                    const isSelf = user._id === userInfo?.id;
                    return (
                      <tr key={user._id} className="hover:bg-gray-50">
                        <td className="p-3 border-b">{user.email}</td>
                        {isAdmin && <td className="p-3 border-b">{user.role}</td>}
                        <td className="p-3 border-b space-x-2">
                          <button
                            className="bg-yellow-400 text-white px-3 py-1 text-sm rounded hover:bg-yellow-500"
                            onClick={() => {
                              setSelectedUser(user);
                              setShowModal(true);
                            }}
                          >
                            Edit
                          </button>
                          {isAdmin && !isSelf && (
                            <button
                              className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600"
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
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white w-full max-w-md rounded-lg shadow-lg">
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
                  <div className="p-4 border-b flex justify-between items-center">
                    <h5 className="text-lg font-medium">Edit User</h5>
                    <button type="button" onClick={() => setShowModal(false)}>
                      ✕
                    </button>
                  </div>
                  <div className="p-4 space-y-3">
                    {isAdmin && (
                      <>
                        <div>
                          <label className="block text-sm font-medium">Email</label>
                          <input
                            className="w-full border rounded px-3 py-2 mt-1"
                            value={selectedUser.email}
                            onChange={(e) =>
                              setSelectedUser({ ...selectedUser, email: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium">Role</label>
                          <select
                            className="w-full border rounded px-3 py-2 mt-1"
                            value={selectedUser.role}
                            onChange={(e) =>
                              setSelectedUser({ ...selectedUser, role: e.target.value })
                            }
                          >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                          </select>
                        </div>
                      </>
                    )}
                    <div>
                      <label className="block text-sm font-medium">Password</label>
                      <input
                        type="password"
                        className="w-full border rounded px-3 py-2 mt-1"
                        value={selectedUser.password || ""}
                        onChange={(e) =>
                          setSelectedUser({ ...selectedUser, password: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="p-4 border-t flex justify-end gap-2">
                    <button
                      type="button"
                      className="px-4 py-2 rounded border"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Save
                    </button>
                  </div>
                </form>
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
    </>
  );
};

export default TeamManagementPage;
