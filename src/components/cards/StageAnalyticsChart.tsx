import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", total: 200 },
  { month: "Feb", total: 400 },
  { month: "Mar", total: 3500 },
  { month: "Apr", total: 500 },
  { month: "May", total: 300 },
];

const StageAnalyticsChart = () => {
  return (
    <div>
      <h5>Stage Analytics</h5>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#FD8153" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StageAnalyticsChart;
