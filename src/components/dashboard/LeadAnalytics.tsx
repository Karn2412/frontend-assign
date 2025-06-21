import React from 'react';
import LeadAnalyticsCard from '../LeadAnalyticsCard';
import { MdAnalytics } from 'react-icons/md';

interface LeadAnalyticsData {
  label: string;
  count: number;
  percent: number;
}

interface LeadAnalyticsProps {
  data: LeadAnalyticsData[];
}

const LeadAnalytics: React.FC<LeadAnalyticsProps> = ({ data }) => {
  return (
    <div className="w-full ">
      <div className="bg-white shadow-sm rounded-2xl p-4 border border-blue-500" style={{height:"385px"}}>
        {/* Header */}
        <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
          <div className="flex items-center">
            <div className="bg-yellow-400 rounded-full flex items-center justify-center w-10 h-10 mr-3">
              <MdAnalytics className="text-white text-lg" />
            </div>
            <h5 className="mb-0 font-semibold text-gray-700">Lead Analytics</h5>
          </div>

          <div className="flex gap-2">
            <select className="text-sm rounded-md border border-blue-500 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>All Staff</option>
            </select>
            <input
              type="text"
              className="text-sm rounded-md border border-blue-500 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="10/06/2025 - 10/06/2025"
            />
          </div>
        </div>

        {/* Total Leads */}
        <div className="mb-4 text-sm text-gray-600">
          <span>Total Leads: </span>
          <span className="font-bold text-gray-800">
            {data.reduce((sum, item) => sum + item.count, 0)}
          </span>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <LeadAnalyticsCard
              key={index}
              label={item.label}
              count={item.count}
              percent={item.percent}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadAnalytics;
