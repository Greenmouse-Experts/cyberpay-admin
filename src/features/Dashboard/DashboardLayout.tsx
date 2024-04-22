import styled from "styled-components";
import Stats from "./Stats";
import AreaCharts from "./AreaCharts";
import Mandates from "./Mandates";
import TransactionChart from "./TransactionChart";
import TransferChannelChart from "./TransferChannelChart";
import { device } from "../../styles/Globalstyles";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 20px;

 
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  grid-template-columns: 1fr;
`;

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <Stats />
      <AreaCharts />
      <Mandates />
      <TransactionChart />
      <TransferChannelChart />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
