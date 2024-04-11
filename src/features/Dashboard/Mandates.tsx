import React from "react";
import styled from "styled-components";

const StyledMandate = styled.div`
  grid-column: 4/ -1;
  background-color: var(--color-grey-50);
  padding: 24px;
  border-radius: var(--border-radius-xl);
`;

function Mandates() {
  return (
    <StyledMandate>
      <p className="font-semibold">Mandates</p>
      <div className="mt-5">
        <div className="flex gap-4">
          <span>Player Name</span>
          <span>GT Bank</span>
        </div>
        <div className="flex gap-4  mt-4">
          <span>Player Name</span>
          <span>GT Bank</span>
        </div>
        <div className="flex gap-4 mt-4">
          <span>Player Name</span>
          <span>GT Bank</span>
        </div>
        <div className="flex gap-4 mt-4">
          <span>Player Name</span>
          <span>GT Bank</span>
        </div>
      </div>
    </StyledMandate>
  );
}

export default Mandates;
