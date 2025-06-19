import React from 'react';

const CallDurationCard: React.FC = () => (
  <div style={{ flex: "1 1 30%" }}>
    <div className="card h-100 border-primary" style={{ height: "293px" }}>
      <div className="card-body">
        <h6 className="card-title text-muted mb-3">Total Call Duration</h6>
        {[
          { label: 'Inbound + Outbound', time: '0 hrs : 19 min : 44 sec', bg: 'bg-dark' },
          { label: 'Inbound', time: '0 hrs : 08 min : 59 sec', bg: 'bg-secondary' },
          { label: 'Outbound', time: '0 hrs : 10 min : 45 sec', bg: 'bg-info' }
        ].map((item, idx) => (
          <div className="d-flex align-items-center mb-2" key={idx} style={{ backgroundColor: '#E0E0E0' }}>
            <div className={`${item.bg} rounded me-3`} style={{ width: '8px', height: '75px' }}></div>
            <div>
              <div className="small text-muted">{item.label}</div>
              <div className="fw-bold">{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CallDurationCard;
