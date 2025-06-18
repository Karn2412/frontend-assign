import Sidebar from "../components/Sidebar";
import Header from "../components/Header";



import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import ConnectionRatioChart from "../components/cards/ConnectionRatioChart";
import StageAnalyticsChart from "../components/cards/StageAnalyticsChart";
import { showError, showSuccess } from "../utils/toast";
import AddUserModal from "../components/AddUserModal";
import { server } from "../main";

const DashboardPage = () => {
    const { userInfo } = useAuth();
    const isAdmin = userInfo?.role === "admin";
    
    
    
    const [users, setUsers] = useState<any[]>([]);
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const [showModal, setShowModal] = useState(false);
    
    const isSelf = selectedUser?._id === userInfo?.id;
    const [showAddModal, setShowAddModal] = useState(false);

const loadUsers = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${server}/api/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  setUsers(res.data);
};

    const handleDelete = async (id: string) => {
  const confirm = window.confirm("Are you sure you want to delete this user?");
  if (!confirm) return;
  if (id === userInfo?.id) {
  return showError("You cannot delete your own account");
}


  try {
    const token = localStorage.getItem("token");
    await axios.delete(`${server}/api/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    showSuccess("User deleted successfully");
    setUsers(users.filter((u) => u._id !== id));
  } catch (err) {
    showError("Delete failed");
  }
};


 useEffect(() => {
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${server}/api/users`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  };
  fetchUsers();
}, []);


  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-fill">
        <Header />
        <div className="p-4">
  
         {isAdmin && (
  <div className="mb-3 text-end">
    <button className="btn btn-success" onClick={() => setShowAddModal(true)}>
      + Add User
      <AddUserModal
  show={showAddModal}
  onClose={() => setShowAddModal(false)}
  onUserAdded={loadUsers}
/>
    </button>
  </div>
)}
             <h5 className="mt-5 mb-3">Registered Users</h5>


<table className="table table-bordered">
  <thead>
    <tr>
      <th>Email</th>
      {isAdmin && <th>Role</th>}
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {users
      .filter((user) => isAdmin || user._id === userInfo?.id) // Only show self if not admin
      .map((user) => (
        <tr key={user._id}>
          <td>{user.email}</td>
          {isAdmin && <td>{user.role}</td>}
          <td>
  <button
    className="btn btn-sm btn-warning me-2"
    onClick={() => {
      setSelectedUser(user);
      setShowModal(true);
    }}
  >
    Edit
  </button>

  {isAdmin && (
    <button
      className="btn btn-sm btn-danger"
      onClick={() => handleDelete(user._id)}
    >
      Delete
    </button>
  )}
</td>

        </tr>
      ))}
  </tbody>
</table>

<div className="row mt-4">
  <div className="col-md-6">
    <ConnectionRatioChart />
  </div>
  <div className="col-md-6">
    <StageAnalyticsChart />
  </div>
</div>



{selectedUser && (
  <div className={`modal fade show`} style={{ display: showModal ? "block" : "none" }}>
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
                { headers: { Authorization: `Bearer ${token}` } }
              );
              showSuccess("User updated successfully");
              setUsers((prev) =>
                prev.map((u) => (u._id === res.data._id ? res.data : u))
              );
              setShowModal(false);
            } catch (err) {
              showError("Update failed");
            }
          }}
        >
          <div className="modal-header">
            <h5 className="modal-title">Edit User</h5>
            <button type="button" className="btn-close" onClick={() => setShowModal(false)} />
          </div>
          <div className="modal-body">
           {isAdmin && (
  <div className="mb-3">
    <label>Email</label>
    <input
      className="form-control"
      value={selectedUser.email}
      onChange={(e) =>
        setSelectedUser({ ...selectedUser, email: e.target.value })
      }
    />
  </div>
)}
  {(isSelf || isAdmin) && (
  <div className="mb-3">
    <label>New Password</label>
    <input
      type="password"
      className="form-control"
      placeholder="Enter new password"
      value={selectedUser.password || ""}
      onChange={(e) =>
        setSelectedUser({ ...selectedUser, password: e.target.value })
      }
    />
  </div>
)}
{isAdmin && (
  <div className="mb-3">
    <label>Role</label>
    <select
      className="form-select"
      value={selectedUser.role || "user"}
      onChange={(e) =>
        setSelectedUser({ ...selectedUser, role: e.target.value })
      }
    >
      <option value="user">User</option>
      <option value="admin">Admin</option>
    </select>
  </div>
)}
            {/* Optional: Add more fields here */}
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
            <button type="submit" className="btn btn-success">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}

        </div>
      </div>
    



    
    
    </div>
  );
};

export default DashboardPage;

