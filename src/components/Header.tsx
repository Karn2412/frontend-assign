import React from "react";
import { Dropdown, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="bg-light border-bottom px-3 py-2 sticky-top shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">
        {/* Left Section */}
        <div className="d-flex align-items-center mb-2 mb-md-0">
          <Image
            src="http://freedesignfile.com/upload/2017/08/rocket-icon-vector.png"
            alt="Logo"
            style={{ width: "28px", height: "28px" }}
            className="me-2"
          />
          <div>
            <h6 className="mb-0 fw-bold text-primary">ScholarCred</h6>
            <small className="text-muted">Home / Dashboard</small>
          </div>
        </div>

        {/* Center Welcome */}
        <div className="text-center mb-2 mb-md-0 flex-grow-1 d-none d-md-block">
          <span className="fw-semibold text-dark">Welcome, <span className="text-primary">Eldho!</span></span>
        </div>

        {/* Right Section */}
        <div className="d-flex align-items-center gap-2">
          {/* Notification */}
          <div className="bg-white px-3 py-1 rounded-pill shadow-sm position-relative">
            <FontAwesomeIcon icon={faBell} />
            <span
              className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill"
              style={{ fontSize: "10px" }}
            >
              3+
            </span>
          </div>

          {/* View: Admin */}
          <div className="bg-white px-3 py-1 rounded-pill shadow-sm d-flex align-items-center">
            <FontAwesomeIcon icon={faAngleDown} className="text-primary me-2" />
            <div>
              <div className="fw-semibold" style={{ fontSize: "12px" }}>View : Admin</div>
              <div className="text-muted" style={{ fontSize: "10px" }}>Dashboard</div>
            </div>
          </div>

          {/* Profile */}
          <Dropdown align="end">
            <Dropdown.Toggle
              variant="light"
              className="d-flex align-items-center bg-white px-2 py-1 rounded-pill shadow-sm border-0"
            >
              <Image
                src="https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI-400x400.jpg"
                roundedCircle
                style={{ width: "30px", height: "30px" }}
              />
              <div className="ms-2 d-none d-md-flex flex-column text-start">
                <small className="fw-medium" style={{ fontSize: "12px" }}>ELDHO</small>
                <small className="text-muted" style={{ fontSize: "10px" }}>Admin</small>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Profile</Dropdown.Item>
              <Dropdown.Item href="#">Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Header;
