import React from 'react';

const CallCards: React.FC = () => (
  <div className="d-flex flex-column gap-1" style={{ flex: "1 1 30%" }}>
    {['Outbound', 'Inbound'].map((type) => (
      <div className="card border-primary" key={type}>
        <div className="card-body" style={{ height: "145px" }}>
          <h6 className="card-title text-muted">{type} Calls</h6>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="text-muted small">{type === 'Outbound' ? 'Attempted:' : 'Received:'}</div>
              <div className="h4 mb-0">{type === 'Outbound' ? '2' : '1'}</div>
            </div>
          </div>
          <div className="text-muted small mb-1">{type === 'Outbound' ? 'Connected:' : 'Missed:'}</div>
          <div className={`h5 ${type === 'Outbound' ? 'text-success' : 'text-danger'}`}>
            {type === 'Outbound' ? '1' : '0'}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default CallCards;
