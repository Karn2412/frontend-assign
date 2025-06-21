import React from 'react';

const CallDurationCard: React.FC = () => (
  <div className="flex-[1_1_30%]">
    <div className="h-[270px] bg-white border border-blue-500 rounded-xl shadow-sm">
      <div className="px-1 py-2">
        <h6 className="text-sm text-gray-600 font-medium mt-3 mb-3">Total Call Duration</h6>

        {[
          { label: 'Inbound + Outbound', time: '0 hrs : 19 min : 44 sec', bg: 'bg-black' },
          { label: 'Inbound', time: '0 hrs : 08 min : 59 sec', bg: 'bg-black' },
          { label: 'Outbound', time: '0 hrs : 10 min : 45 sec', bg: 'bg-black' }
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 p-1 mt-2 mb-4 bg-gray-100 rounded"
          >
<div
  className={`${item.bg} w-3 h-8 rounded-tr-lg rounded-bl-lg mr-3`}
></div>
            <div>
              <div className="text-xs text-gray-700">{item.label}</div>
              <div className="text-sm font-bold text-gray-800">{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CallDurationCard;
