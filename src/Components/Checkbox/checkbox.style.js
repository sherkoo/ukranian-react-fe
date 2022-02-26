import styled, { css } from "styled-components";

export const CheckBoxButton = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 2px;
  background-color: white;
  border: 2px solid grey;

  & img {
    width: 16px;
  }

  ${(props) =>
    props.checked &&
    css`
      border: 2px solid blue;
      background-color: blue;
    `};
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 0.5em;
  cursor: pointer;
  transition: all .25s ease-in-out;

  &: hover ${CheckBoxButton} {
    border: 2px solid blue;
  }
`;