import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import styled from "styled-components";

const StyledTransferChanelChart = styled.div`
  grid-column: 3 / -1;
  background-color: var(--color-grey-50);
  padding: 24px;
  border-radius: var(--border-radius-xl);
`;


const data = [
  {
    duration: "Card",
    value: 10,
    color: "#DD0A35",
  },
  {
    duration: "USSD",
    value: 20,
    color: "#7F61F9",
  },
  {
    duration: "Bank Transfer",
    value: 30,
    color: "#2F8ED6",
  },
  {
    duration: "QR Code",
    value: 40,
    color: "#20455A",
  },
];

  


function TransferChannelChart() {
  const totalValue = data.reduce((acc, cur) => acc + cur.value, 0);
  return (
    <StyledTransferChanelChart>
          <div className="flex items-center">
        <p className="font-semibold">Transfer chanel</p>
        <div className="ml-auto">
          <span className=" text-blue-500">See all statistics </span>
        </div>
      </div>
      <div>
      <ResponsiveContainer height={330} width="100%">
      <PieChart>
          <Pie
            data={data}
            nameKey="duration"
            dataKey="value"
            innerRadius={40}
            outerRadius={80}
            cx="40%"
            cy="50%"
            fill="#8884d8"
            paddingAngle={4}
            cornerRadius={10} 
          >
            {data?.map((stay) => (
              <Cell key={stay.duration} fill={stay.color} stroke={stay.color}  />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            layout="vertical"
            iconSize={7}
            iconType="circle"
          />
           <Legend
              verticalAlign="bottom"
              align="center"
              content={() => (
                <ul>
                  {data.map((entry, index) => (
                    <li key={`percentage-${index}`} style={{ color: entry.color }}>
                      <span>{`${((entry.value / totalValue) * 100).toFixed(2)}% - ${entry.duration}`}</span>
                    </li>
                  ))}
                </ul>
              )}
            />
          
        </PieChart>
      </ResponsiveContainer>
      </div>
    </StyledTransferChanelChart>
  )
}

export default TransferChannelChart