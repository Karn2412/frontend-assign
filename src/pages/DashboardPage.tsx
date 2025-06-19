import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import CallCards from "../components/dashboard/CallCards";
import CallDurationCard from "../components/dashboard/CallDurationCard";
import ConnectionRatioChart from "../components/dashboard/ConnectionRatioChart";
import LeadAnalytics from "../components/dashboard/LeadAnalytics";
import StageAnalytics from "../components/dashboard/StageAnalytics";
import axios from "axios";
import { server } from "../main";

const DashboardPage: React.FC = () => {
  const { userInfo } = useAuth();

const [leadData, setLeadData] = useState([]);
  const [stageData, setStageData] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    axios.get(`${server}/api/analytics/lead-analytics`)
      .then(res => setLeadData(res.data));
      
    axios.get(`${server}/api/analytics/stage-analytics`)
      .then(res => setStageData(res.data));
  }, []);

  return (
    <>
      <Header />
      <div className="d-flex">
         <div
        className={` bg-white shadow-sm border-end  ${
          isSidebarOpen ? "d-block" : "d-none"
        } d-md-block`}
        style={{ width: "280px", zIndex: 1040 }}
      >
        <Sidebar closeSidebar={closeSidebar} />
      </div>
        <div className="flex-grow-1">
          <div className="container-fluid py-4" style={{ backgroundColor: '#f8f9fa' }}>
            <DashboardHeader />
            <div className="d-flex flex-wrap gap-3">
              <CallCards />
              <CallDurationCard />
              <ConnectionRatioChart />
            </div>
            <div className="row g-3 mt-2">
              <LeadAnalytics data={leadData} />
              <StageAnalytics data={stageData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
