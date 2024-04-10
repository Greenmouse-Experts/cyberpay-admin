import styled from "styled-components";

interface statProps{
  color: string;
}

const StatWrapper = styled.div`
  background-color: var(--color-${(props) => props.color}-200);
  border-radius: var(--border-radius-xl);
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 24px;
`;

// const Icon = styled.div`
//   grid-row: 1 / -1;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   /* Make these dynamic, based on the received prop */
//   background-color: var(--color-${(props) => props.color}-100);

//   & svg {
//     width: 3.2rem;
//     height: 3.2rem;
//     color: var(--color-${(props) => props.color}-700);
//   }
// `;

const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h5`
  font-size: 12px;
  text-transform: capitalize;
`;

const Value = styled.p`
  font-size: 24px;
  line-height: 1;
  font-weight: 600;
`;

function Stat({color}:statProps) {
  return (
    <StatWrapper color={color}>
      <Title>Available Balance</Title>
      <StatRow>
        <Value>7,265</Value>
        <Title>+11.02%</Title>
      </StatRow>
    </StatWrapper>
  );
}

export default Stat;
