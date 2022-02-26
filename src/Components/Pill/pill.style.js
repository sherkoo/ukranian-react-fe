import styled, { css } from "styled-components";

export const PillContainer = styled.div`
  box-sizing: border-box;
  border-radius: 20px;
  height: 32px;
  min-width: 50px;
  padding: 0 0.125em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 2px solid blue;
  color: blue;

  cursor: pointer;
  ${(props) =>
    props.status &&
    css`
      background-color: blue;
      color: white;
    `};
`;
