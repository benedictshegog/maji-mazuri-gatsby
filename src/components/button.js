import React from "react";
import styled from "styled-components";
import { colors } from "../styles/styles";

const StyledButton = styled.button`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  padding: 8px;
  min-width: 126px;
  border: none;
  color: white;
  font-family: Nunito Sans;
  font-size: 16px;
  font-weight: 600;
  background-color: ${colors.red400};
  border-radius: 5px;
`;

export default function Button(props) {
  return <StyledButton color={props.color}>{props.text}</StyledButton>;
}
