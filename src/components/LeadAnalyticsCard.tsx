import React from "react";

interface LeadAnalyticsCardProps {
  label: string;
  count: number;
  percent: number;
}

const LeadAnalyticsCard: React.FC<LeadAnalyticsCardProps> = ({ label, count, percent }) => {
  return (
    <div className="w-full">
      <div
        className={`border rounded-xl p-1 text-center shadow-sm transition-all duration-200
        border-blue-500 ${label === 'No Stage' ? 'bg-gray-100' : 'bg-white'}`}
      >
        <div className="text-sm text-gray-500 mb-1 font-medium">{label}</div>
        <hr className="border-blue-500 mb-2" />
        <div className="flex items-center justify-center gap-1.5">
          <div className="text-xs font-bold text-gray-800 "><p className="text-center">{count}</p></div>
        <div className={`text-xs font-bold  ${percent > 0 ? 'text-green-600' : 'text-gray-400'}`}>
          <p className="text-center">{percent}%</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LeadAnalyticsCard;
