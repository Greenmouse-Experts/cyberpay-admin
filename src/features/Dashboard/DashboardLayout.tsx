
import styled from 'styled-components';
import Stats from './Stats';
import AreaCharts from './AreaCharts';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 20px;
`;

const StyledRow2 = styled.div`
 grid-column: 1 / span 3;
  
`

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <Stats/>
      <StyledRow2>
      <AreaCharts/>
      </StyledRow2>
    </StyledDashboardLayout>
  )
}

export default DashboardLayout