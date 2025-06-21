import React from 'react';
import { MdPhone } from 'react-icons/md';



const DashboardHeader: React.FC = () => (
  <div className="flex items-center mb-4 flex-wrap gap-3">
    <div className="bg-blue-600 rounded-full flex items-center justify-center w-10 h-10 mr-3">
      <MdPhone className="text-white text-xl" />
    </div>
    <h3 className="mb-0 text-lg font-semibold">Call CRM</h3>
    <div className="ml-auto flex gap-3">
      <select className="border border-gray-300 rounded px-2 py-1 text-sm w-28">
        <option>All Staff</option>
      </select>
      <input
        type="text"
        className="border border-gray-300 rounded px-2 py-1 text-sm w-52"
        placeholder="10/06/2025 - 10/06/2025"
      />
    </div>
  </div>
);

export default DashboardHeader;
