import styled from "styled-components";
import Stats from "./Stats";
import AreaCharts from "./AreaCharts";
import Mandates from "./Mandates";
import TransactionChart from "./TransactionChart";
import TransferChannelChart from "./TransferChannelChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 20px;
`;


function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <Stats />
      <AreaCharts />
      <Mandates/>
      <TransactionChart/>
      <TransferChannelChart/>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
