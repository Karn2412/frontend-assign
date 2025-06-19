import React from 'react';
import {
  ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar
} from 'recharts';

interface StageAnalyticsData {
  month: string;
  leads: number;
}

interface StageAnalyticsProps {
  data: StageAnalyticsData[];
}

const StageAnalytics: React.FC<StageAnalyticsProps> = ({ data }) => {
  return (
    <div className="col-12 col-lg-4">
      <div className="card shadow-sm rounded-4 h-100 p-3 border-primary" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center">
            <div className="bg-info rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
              <i className="bi bi-bar-chart text-white"></i>
            </div>
            <h5 className="mb-0 fw-semibold">Stage Analytics</h5>
          </div>
        </div>

        <div className="d-flex gap-2 mb-3">
          <button className="btn btn-outline-primary btn-sm">Select Stage</button>
          <button className="btn btn-outline-secondary btn-sm">All Staff</button>
        </div>

        <div className="text-end mb-2">
          <small className="text-muted">MTD | YTD</small>
          <div className="fw-bold">Total Leads: {data.reduce((acc, item) => acc + item.leads, 0)}</div>
        </div>

        <div style={{ height: '250px' }}>
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

        <div className="text-center mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div className="bg-warning rounded-circle me-2" style={{ width: '12px', height: '12px' }}></div>
            <small>Total Leads</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StageAnalytics;
