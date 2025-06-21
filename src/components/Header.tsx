import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="bg-white  px-4 py-2 sticky top-0 shadow-sm z-50">
      <div className="flex justify-between items-center flex-wrap">
        {/* Left Section - Logo and Breadcrumb */}
        <div className="flex items-center mb-2 md:mb-0">
          <img
            src="http://freedesignfile.com/upload/2017/08/rocket-icon-vector.png"
            alt="Logo"
            className="w-7 h-7 mr-2"
          />
          <div>
            <h6 className="text-sm font-bold text-blue-600">ScholarCred</h6>
            <p className="text-xs text-gray-500">Home / Dashboard</p>
          </div>
        </div>

        {/* Center Welcome Message */}
        <div className="hidden md:block text-gray-800 text-sm font-semibold">
          Welcome, <span className="text-blue-600">Eldho!</span>
        </div>

        {/* Right Section - Notifications, View Role, Profile */}
        <div className="flex items-center gap-3 relative">
          {/* Notification */}
          <div className="relative bg-white px-3 py-1 rounded-full shadow-sm">
            <FontAwesomeIcon icon={faBell} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 text-[10px] bg-red-600 text-white px-1.5 rounded-full">
              3+
            </span>
          </div>

          {/* View Role */}
          <div className="bg-white px-3 py-1 rounded-full shadow-sm flex items-center gap-2">
            <FontAwesomeIcon icon={faAngleDown} className="text-blue-600" />
            <div className="text-[12px] leading-tight">
              <div className="font-semibold">View : Admin</div>
              <div className="text-gray-500 text-[10px]">Dashboard</div>
            </div>
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center bg-white px-2 py-1 rounded-full shadow-sm"
            >
              <img
                src="https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI-400x400.jpg"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <div className="ml-2 hidden md:flex flex-col text-left">
                <small className="text-sm font-medium">ELDHO</small>
                <small className="text-[10px] text-gray-500">Admin</small>
              </div>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
                <button className="block w-full px-4 py-2 text-sm text-gray-700 text-left hover:bg-gray-100">
                  Profile
                </button>
                <button className="block w-full px-4 py-2 text-sm text-gray-700 text-left hover:bg-gray-100">
                  Settings
                </button>
                <hr />
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-sm text-red-600 text-left hover:bg-red-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
