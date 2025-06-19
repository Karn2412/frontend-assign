interface LeadAnalyticsCardProps {
  label: string;
  count: number;
  percent: number;
}

const LeadAnalyticsCard: React.FC<LeadAnalyticsCardProps> = ({ label, count, percent }) => {
  return (
    <div className="col-md-3 ">
      <div className={`border rounded p-3 text-center border-primary${label === 'No Stage' ? 'bg-light' : ''}`}>
        <div className="small text-muted mb-1">{label}</div>
        <hr className="text-primary"/>
        <div className="h5 mb-1">{count}</div>
        <div className={`small ${percent > 0 ? 'text-success' : 'text-muted'}`}>
          {percent}%
        </div>
      </div>
    </div>
  );
};

export default LeadAnalyticsCard;
