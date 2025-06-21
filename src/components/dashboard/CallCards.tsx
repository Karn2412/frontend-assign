import React from 'react';

const CallCards: React.FC = () => (
  <div className="flex flex-col gap-2 flex-[1_1_30%]">
    {['Outbound', 'Inbound'].map((type) => (
      <div
        key={type}
        className="bg-white border border-blue-500 rounded-xl shadow-sm"
      >
        <div className="p-1 h-[130px] flex flex-col justify-between">
          {/* Card Title */}
          <h6 className="text-sm font-semibold text-gray-700">
            {type} Calls
          </h6>
          
          <div className="flex flex-col items-center justify-center space-y-4 flex-1">
            {/* Attempted / Received Count */}
            <div className="w-full flex items-center">
              <div className="w-3 h-8 bg-blue-400 rounded-tr-lg rounded-bl-lg mr-3">
                
              </div>
              <div>
                <div className="text-xs text-gray-500">
                  {type === 'Outbound' ? 'Attempted:' : 'Received:'}
                </div>
                <div className="text-xl font-bold text-gray-800">
                  {type === 'Outbound' ? '2' : '1'}
                </div>
              </div>
            </div>

            {/* Connected / Missed Count */}
            <div className="w-full flex items-center">
              <div className="w-3 h-8 bg-teal-500 rounded-tr-lg rounded-bl-lg mr-3"></div>
              <div>
                <div className="text-xs text-gray-500">
                  {type === 'Outbound' ? 'Connected:' : 'Missed:'}
                </div>
                <div
                  className={`text-xl font-bold ${
                    type === 'Outbound' ? 'text-teal-600' : 'text-red-600'
                  }`}
                >
                  {type === 'Outbound' ? '1' : '0'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default CallCards;