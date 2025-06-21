import { NavLink } from "react-router-dom";
import { 
  MdDashboard, 
  MdRefresh, 
  MdPeople, 
  MdSchool, 
  MdCreditCard, 
  MdHeadset, 
  MdSettings, 
  MdBarChart, 
  MdSwapHoriz, 
  MdMessage, 
  MdExtension, 
  MdBuild, 
  MdAssignment,
  MdHome 
} from "react-icons/md";

const Sidebar = ({ closeSidebar }: { closeSidebar?: () => void }) => {
  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: MdDashboard },
    { path: "/follow-ups", label: "Follow Ups", icon: MdRefresh, badge: "1431" },
    { path: "/team-management", label: "Team Management", icon: MdPeople },
    { path: "/student-management", label: "Student Management", icon: MdSchool },
    { path: "/billing", label: "Billing", icon: MdCreditCard },
    { path: "/service", label: "Service", icon: MdHeadset },
    { path: "/settings", label: "Settings", icon: MdSettings },
    { path: "/reports", label: "Reports", icon: MdBarChart },
    { path: "/migration", label: "Migration", icon: MdSwapHoriz },
    { path: "/whatsapp", label: "Whatsapp", icon: MdMessage },
    { path: "/integrations", label: "Integrations", icon: MdExtension },
    { path: "/tools", label: "Tools", icon: MdBuild },
    { path: "/audit-logs", label: "Audit Logs", icon: MdAssignment },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-200 w-[280px] shadow-sm border-gray-500 rounded-2xl" style={{height:"800px"}}>
      {/* Nav Links */}
      <div className="flex-grow overflow-y-auto mt-2">
        <nav className="flex flex-col gap-1 px-3 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeSidebar}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-2 rounded-full no-underline text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-500 text-white shadow"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <div className="flex items-center">
                <item.icon className="text-base mr-3 w-5 h-5" />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="bg-green-600 text-white text-[11px] px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <NavLink
          to="/dashboard"
          onClick={closeSidebar}
          className="flex items-center text-sm text-gray-500 no-underline px-3 py-2 rounded-full hover:bg-gray-100"
        >
          <MdHome className="text-base mr-3 w-5 h-5" />
          <span>Back to Dashboard</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;