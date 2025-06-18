import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-light border-end vh-100 p-3" style={{ width: "250px" }}>
      <h5 className="mb-4">ScholarCred</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
        </li>
        
        <li className="nav-item">
          <Link to="/" className="nav-link">login</Link>
        </li>
        <li className="nav-item">
          <Link to="/settings" className="nav-link">Settings</Link>
        </li>
        {/* Add more menu items here */}
      </ul>
    </div>
  );
};

export default Sidebar;
