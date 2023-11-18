import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "Sun",
    weight: 4000,
    piece: 2400,
    volumn: 2400,
  },
  {
    name: "Mon",
    weight: 3000,
    piece: 1398,
    volumn: 2210,
  },
  {
    name: "Tue",
    weight: 2000,
    piece: 9800,
    volumn: 2290,
  },
  {
    name: "Wed",
    weight: 2780,
    piece: 3908,
    volumn: 2000,
  },
  {
    name: "Thu",
    weight: 1890,
    piece: 4800,
    volumn: 2181,
  },
  {
    name: "Fri",
    weight: 2390,
    piece: 3800,
    volumn: 2500,
  },
  {
    name: "Sat",
    weight: 3490,
    piece: 4300,
    volumn: 2100,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      {/* <h1>Volumn, Weight, Shipment Types</h1> */}
      <h1>Volumn, Weight, Total Piece</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="volumn"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="piece"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="weight"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
