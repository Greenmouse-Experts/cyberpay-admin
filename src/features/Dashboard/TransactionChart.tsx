import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
// import {
//   Bar,
//   BarChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";
import styled from "styled-components";
import { device } from "../../styles/Globalstyles";
import ReactEcharts from "echarts-for-react";

const StyledTransactionChart = styled.div`
  background-color: var(--color-grey-50);
  padding: 24px;
  border-radius: var(--border-radius-xl);
  grid-column: 1 / span 3;

  @media ${device.laptop} {
    grid-column: 1 / span 2;
  }
`;

const options = {
  grid: { top: 20, right: 40, bottom: 20, left: 40 },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thur", "Fri"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: [
        { value: 400, itemStyle: { color: '#7F61F9', borderRadius: 10 } },
        { value: 300, itemStyle: { color: '#2F8ED6', borderRadius: 10 } },
        { value: 350, itemStyle: { color: '#DD0A35', borderRadius: 10 } },
        { value: 200, itemStyle: { color: '#20455A', borderRadius: 10 } },
        { value: 280, itemStyle: { color: '#2F8ED6', borderRadius: 10 } }
      ],
      type: "bar"
    }
  ],
  tooltip: {
    trigger: "axis"
  }
};


function TransactionChart() {
  // const data = [
  //   {
  //     days: "Mon",
  //     mon: 3000,
  //   },
  //   {
  //     days: "Tue",
  //     tue: 2000,
  //   },
  //   {
  //     days: "Wed",
  //     wed: 2780,
  //   },
  //   {
  //     days: "Thur",
  //     thur: 1890,
  //   },
  //   {
  //     days: "Fri",
  //     fri: 2390,
  //   },
  //   {
  //     days: "Sat",
  //     sat: 3490,
  //   },
  // ];
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
        <ReactEcharts
          option={options}
          style={{ width: "100%", height: "300px" }}
        ></ReactEcharts>
      </div>
    </StyledTransactionChart>
  );
}

export default TransactionChart;
