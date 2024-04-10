import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 30px;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 25px;
      font-weight: 500;
    `}
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 14px;
      font-weight: 600;
    `}
    ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 14px;
      font-weight: 400;
    `}
    line-height:1.4;
`;

export default Heading;
