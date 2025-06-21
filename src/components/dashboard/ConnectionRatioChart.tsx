import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Connected', value: 1, color: '#1791d2' },
  { name: 'Not Connected', value: 1, color: '#e23c3c' }
];

const ConnectionRatioChart: React.FC = () => (
  <div className="flex-[1_1_30%]">
    <div className="h-full border border-blue-500 rounded-xl shadow-sm bg-white">
      <div className="p-4">
        <h6 className="text-sm text-gray-600 font-medium mb-3">Connection Ratio</h6>

        <div className="h-[150px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" outerRadius={70} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legends */}
        <div className="flex justify-between mt-3 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#1791d2] rounded-full"></div>
            <span className="text-gray-700">Connected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#e23c3c] rounded-full"></div>
            <span className="text-gray-700">Not Connected</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ConnectionRatioChart;
