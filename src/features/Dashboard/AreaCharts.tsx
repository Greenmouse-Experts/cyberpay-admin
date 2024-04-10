
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


const fakeData = [
    { label: "Jan 09", totalSales: 480, extrasSales: 20 },
    { label: "Jan 10", totalSales: 580, extrasSales: 100 },
    { label: "Jan 11", totalSales: 550, extrasSales: 150 },
    { label: "Jan 12", totalSales: 600, extrasSales: 50 },
    { label: "Jan 13", totalSales: 700, extrasSales: 150 },
    { label: "Jan 14", totalSales: 800, extrasSales: 150 },
    { label: "Jan 15", totalSales: 700, extrasSales: 200 },
    { label: "Jan 16", totalSales: 650, extrasSales: 200 },
    { label: "Jan 17", totalSales: 600, extrasSales: 300 },
    { label: "Jan 18", totalSales: 550, extrasSales: 100 },
    { label: "Jan 19", totalSales: 700, extrasSales: 100 },
    { label: "Jan 20", totalSales: 800, extrasSales: 200 },
    { label: "Jan 21", totalSales: 700, extrasSales: 100 },
    { label: "Jan 22", totalSales: 810, extrasSales: 50 },
    { label: "Jan 23", totalSales: 950, extrasSales: 250 },
    { label: "Jan 24", totalSales: 970, extrasSales: 100 },
    { label: "Jan 25", totalSales: 900, extrasSales: 200 },
    { label: "Jan 26", totalSales: 950, extrasSales: 300 },
    { label: "Jan 27", totalSales: 850, extrasSales: 200 },
    { label: "Jan 28", totalSales: 900, extrasSales: 100 },
    { label: "Jan 29", totalSales: 800, extrasSales: 300 },
    { label: "Jan 30", totalSales: 950, extrasSales: 200 },
    { label: "Jan 31", totalSales: 1100, extrasSales: 300 },
    { label: "Feb 01", totalSales: 1200, extrasSales: 400 },
    { label: "Feb 02", totalSales: 1250, extrasSales: 300 },
    { label: "Feb 03", totalSales: 1400, extrasSales: 450 },
    { label: "Feb 04", totalSales: 1500, extrasSales: 500 },
    { label: "Feb 05", totalSales: 1400, extrasSales: 600 },
    { label: "Feb 06", totalSales: 1450, extrasSales: 400 },
  ];
  

function AreaCharts() {

    const colors = {
        totalSales: { stroke: "#00000057", fill: "#00000015" },
        extrasSales: { stroke: "#f4f4f4", fill: "#fff" },
        text: "#374151de",
        background: "#fff",
      };

  return (
    <div className=" bg-grey-50 p-6 rounded-2xl">
      <div className="flex gap-4 mb-5">
        <p className="font-semibold">Date</p>
        <p>Opening Balance</p>
        <p>Closing Balance</p>
        <p>|</p>
        <p>This year</p>
        <p>Last year</p>
      </div>
      <div>
      <ResponsiveContainer height={330} width="100%">
        <AreaChart data={fakeData}>
          <XAxis
            dataKey="label"
            tick={{ fill: '' }}
            tickLine={{ stroke: '' }}
          />
          <YAxis
            unit="k"
            tick={{ fill: ''}}
            tickLine={{ stroke: '' }}
          />
          {/* <CartesianGrid strokeDasharray="4" /> */}
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={1}
            name="Total Sales"
            unit="$"
          />
          <Area
            dataKey="extrasSales"
            type="monotone"
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            strokeWidth={1}
            name="Extra Sales"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AreaCharts;

