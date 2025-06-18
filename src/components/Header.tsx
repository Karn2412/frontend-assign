import React from "react";
import { Dropdown } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const { logout, userInfo } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-between align-items-center p-3 border-bottom bg-white shadow-sm">
      <div>
         <h5 className="mb-0">
          Welcome, <strong>{userInfo?.email || "User"}</strong>!
          <small className="text-muted">Role: {userInfo?.role || "user"}</small>
        </h5>
      </div>
      <Dropdown align="end">
        <Dropdown.Toggle variant="light" className="d-flex align-items-center border rounded-pill px-3 py-2">
          <span className="fw-semibold"> {userInfo?.role || "user"}</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Profile</Dropdown.Item>
          <Dropdown.Item href="#">Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Header;
