import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Connected", value: 60 },
  { name: "Not Connected", value: 40 },
];

const COLORS = ["#00C49F", "#FF6361"];

const ConnectionRatioChart = () => {
  return (
    <div className="mb-10 p-4 border border-blue-500 bg-white rounded-lg shadow-sm">
      <h5 className="text-lg font-semibold text-gray-700 mb-4">Connection Ratio</h5>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              label
              outerRadius={80}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ConnectionRatioChart;
