import styled from "styled-components";
import Stat from "./Stat";
import { device } from "../../styles/Globalstyles";

const StyledStats = styled.div`
  grid-column: 1 / span 4;
  display: grid;
  gap:20px ;
  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
  grid-template-columns: 1fr;
 
  
`;



function Stats() {
  return (
    <StyledStats>
      <Stat color="blue" />
      <Stat color="red" />
      <Stat color="grey" />
      <Stat color="blue" />
    </StyledStats>
  );
}

export default Stats;
