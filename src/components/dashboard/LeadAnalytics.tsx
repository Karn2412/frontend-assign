import React from 'react';
import LeadAnalyticsCard from '../LeadAnalyticsCard';


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
    <div className="col-12 col-lg-8">
      <div className="card shadow-sm rounded-4 p-3 border-primary" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center">
            <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
              <i className="bi bi-graph-up text-white"></i>
            </div>
            <h5 className="mb-0 fw-semibold">Lead Analytics</h5>
          </div>
          <div className="d-flex gap-2">
            <select className="form-select form-select-sm rounded-3 border-primary">
              <option>All Staff</option>
            </select>
            <input
              type="text"
              className="form-control form-control-sm rounded-3 border-primary"
              placeholder="10/06/2025 - 10/06/2025"
            />
          </div>
        </div>

        <div className="mb-3">
          <span className="text-muted">Total Leads: </span>
          <span className="fw-bold">{data.reduce((sum, item) => sum + item.count, 0)}</span>
        </div>

        <div className="row g-3">
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



