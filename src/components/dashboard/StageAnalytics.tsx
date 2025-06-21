import React from "react";
import { MdAnalytics } from "react-icons/md";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar
} from "recharts";

interface StageAnalyticsData {
  month: string;
  leads: number;
}

interface StageAnalyticsProps {
  data: StageAnalyticsData[];
}

const StageAnalytics: React.FC<StageAnalyticsProps> = ({ data }) => {
  return (
    <div className="w-full " >
      <div className="bg-white rounded-2xl shadow-sm p-4 border border-blue-500" style={{height:"385px"}}>
        
        <div className="flex justify-between items-center mb-2 flex-wrap">
          <div className="flex items-center">
            <div className="bg-orange-400 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
            <MdAnalytics className="text-white text-lg" />
            </div>
            <h5 className="font-semibold text-lg">Stage Analytics</h5>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-1">
          <button className="border border-blue-500 text-blue-500 px-3 py-1 text-sm rounded-full hover:bg-blue-50">Select Stage</button>
          <button className="border border-gray-400 text-gray-700 px-3 py-1 text-sm rounded-full hover:bg-gray-50">All Staff</button>
        </div>

        {/* Total Leads */}
        <div className="text-right mb-2">
          <small className="text-gray-500 font-medium">MTD | YTD</small>
          <div className="font-bold text-lg text-gray-800">Total Leads: {data.reduce((acc, item) => acc + item.leads, 0)}</div>
        </div>

        {/* Bar Chart */}
        <div className="h-50">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 10 }} angle={-45} textAnchor="end" />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip />
              <Bar dataKey="leads" fill="#ff7f50" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center mt-1">
          <div className="bg-yellow-400 rounded-full w-3 h-3 mr-2"></div>
          <small className="text-gray-600">Total Leads</small>
        </div>
      </div>
    </div>
  );
};

export default StageAnalytics;
