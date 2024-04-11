
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styled from "styled-components";

const StyledTransactionChart = styled.div`
  grid-column: 1 / span 2;
  background-color: var(--color-grey-50);
  padding: 24px;
  border-radius: var(--border-radius-xl);
`;

function TransactionChart() {
  const data = [
    {
      days: "Mon",
      mon: 3000,
    },
    {
      days: "Tue",
      tue: 2000,
    },
    {
      days: "Wed",
      wed: 2780,
    },
    {
      days: "Thur",
      thur: 1890,
    },
    {
      days: "Fri",
      fri: 2390,
    },
    {
      days: "Sat",
      sat: 3490,
    },
  ];
  return (
    <StyledTransactionChart>
      <div className="flex items-center">
        <p className="font-semibold">Transactions</p>
        <div className="border border-[#0000001A] rounded-md ml-auto flex items-center gap-2 py-2 px-3">
          <span>Weekly </span>
          <span>
            <HiOutlineAdjustmentsHorizontal size={20} />
          </span>
        </div>
      </div>
      <div>
        <ResponsiveContainer height={330} width="100%">
          <BarChart data={data}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis
              dataKey="days"
              tick={{ fill: "" }}
              tickLine={{ stroke: "" }}
            />
            <YAxis unit="k" tick={{ fill: "" }} tickLine={{ stroke: "" }} />
            <Tooltip />
            <Bar dataKey="mon" fill="#7F61F9" barSize={28} />
            <Bar dataKey="tue" fill="#2F8ED6" barSize={28} />
            <Bar dataKey="wed" fill="#DD0A35" barSize={28} />
            <Bar dataKey="thur" fill="#7F61F9" barSize={28} />
            <Bar dataKey="fri" fill="#2F8ED6" barSize={28} />
            <Bar dataKey="sat" fill="#DD0A35" barSize={28} />
          </BarChart>{" "}
        </ResponsiveContainer>
      </div>
    </StyledTransactionChart>
  );
}

export default TransactionChart;
