import React, { useEffect, useState } from "react";

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
  

  const [leadData, setLeadData] = useState([]);
  const [stageData, setStageData] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  
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
      <div className="flex mt-2 gap-1">
        {/* Sidebar */}
        <div
          className={`bg-white shadow  ${
            isSidebarOpen ? "block" : "hidden"
          } md:block w-[280px] `}
        >
          <Sidebar closeSidebar={closeSidebar} />
        </div>

        {/* Main Content */}
        <div className="flex-grow ">
          <div className="px-6 py-4 ms-1 bg-gray-200  rounded-2xl"style={{height:"800px"}}>
            <DashboardHeader />

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 ">
              <CallCards />
              <CallDurationCard />
              <ConnectionRatioChart />
            </div>

            {/* Analytics Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-4">
  
  <div className="lg:col-span-2">
    <LeadAnalytics data={leadData} />
  </div>

  
      <div className="lg:col-span-1" style={{height:"500px"}}>
    <StageAnalytics data={stageData} />
  </div>
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
