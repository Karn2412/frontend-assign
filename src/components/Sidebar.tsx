import { NavLink } from "react-router-dom";

const Sidebar = ({ closeSidebar }: { closeSidebar?: () => void }) => {
  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: "bi-speedometer2" },
    { path: "/follow-ups", label: "Follow Ups", icon: "bi-arrow-repeat", badge: "1431" },
    { path: "/team-management", label: "Team Management", icon: "bi-people" },
    { path: "/student-management", label: "Student Management", icon: "bi-mortarboard" },
    { path: "/billing", label: "Billing", icon: "bi-receipt" },
    { path: "/service", label: "Service", icon: "bi-gear" },
    { path: "/settings", label: "Settings", icon: "bi-gear-fill" },
    { path: "/reports", label: "Reports", icon: "bi-bar-chart" },
    { path: "/migration", label: "Migration", icon: "bi-arrow-left-right" },
    { path: "/whatsapp", label: "Whatsapp", icon: "bi-whatsapp" },
    { path: "/integrations", label: "Integrations", icon: "bi-puzzle" },
    { path: "/tools", label: "Tools", icon: "bi-tools" },
    { path: "/audit-logs", label: "Audit Logs", icon: "bi-journal-text" },
  ];

  return (
    <div
      className="d-flex flex-column vh-100 bg-white"
      style={{ width: "280px" }}
    >
      {/* Nav Links */}
      <div className="flex-grow-1 py-4">
        <nav className="d-flex flex-column px-3 gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeSidebar}
              className={({ isActive }) =>
                `d-flex align-items-center justify-content-between px-3 py-2 rounded-pill text-decoration-none ${
                  isActive ? "bg-primary text-white shadow-sm" : "text-dark hover-bg"
                }`
              }
              style={{ fontSize: "14px", transition: "all 0.2s ease" }}
            >
              <div className="d-flex align-items-center">
                <i className={`bi ${item.icon} me-3`} style={{ fontSize: "16px", width: "20px" }}></i>
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="badge bg-success rounded-pill" style={{ fontSize: "11px" }}>
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="p-3 border-top">
        <NavLink
          to="/dashboard"
          onClick={closeSidebar}
          className="d-flex align-items-center text-decoration-none text-muted px-3 py-2 rounded-pill"
          style={{ fontSize: "14px" }}
        >
          <i className="bi bi-house me-3" style={{ fontSize: "16px", width: "20px" }}></i>
          <span>Home / Dashboard</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
