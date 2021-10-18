import React from "react";
import styled from "styled-components";

import { colors } from "../styles/styles";

const StyledLink = styled.a`
  color: ${colors.red400};
`;

const CardBackground = styled.div`
  background-color: ${colors.grey100};
  padding: 64px;
  text-align: left;
  border-radius: 10px;
  margin: 64px;
`;

export default function card(props) {
  return (
    <CardBackground>
      <h2>{props.title}</h2>
      <span>
        <p>{props.body} </p>
        <StyledLink href={props.link}>Read more</StyledLink>
      </span>
    </CardBackground>
  );
}
