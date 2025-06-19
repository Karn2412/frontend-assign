import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Connected', value: 1, color: '#1791d2' },
  { name: 'Not Connected', value: 1, color: '#e23c3c' }
];

const ConnectionRatioChart: React.FC = () => (
  <div style={{ flex: "1 1 30%" }}>
    <div className="card h-100 border-primary">
      <div className="card-body">
        <h6 className="card-title text-muted mb-3">Connection Ratio</h6>
        <div style={{ height: '150px' }}>
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
        <div className="d-flex justify-content-between mt-2">
          <div className="d-flex align-items-center">
            <div className="bg-success rounded-circle me-2" style={{ width: '12px', height: '12px' }}></div>
            <small>Connected</small>
          </div>
          <div className="d-flex align-items-center">
            <div className="bg-danger rounded-circle me-2" style={{ width: '12px', height: '12px' }}></div>
            <small>Not Connected</small>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ConnectionRatioChart;
