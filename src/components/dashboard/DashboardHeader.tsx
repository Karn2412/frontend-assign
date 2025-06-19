import React from 'react';

const DashboardHeader: React.FC = () => (
  <div className="d-flex align-items-center mb-4">
    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
      <i className="bi bi-telephone-fill text-white"></i>
    </div>
    <h3 className="mb-0">Call CRM</h3>
    <div className="ms-auto d-flex gap-3">
      <select className="form-select" style={{ width: '120px' }}>
        <option>All Staff</option>
      </select>
      <input type="text" className="form-control" placeholder="10/06/2025 - 10/06/2025" style={{ width: '200px' }} />
    </div>
  </div>
);

export default DashboardHeader;
