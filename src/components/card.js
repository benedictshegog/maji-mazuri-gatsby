import React from "react";
import styled from "styled-components";

import { colors } from "../styles/styles";

const StyledLink = styled.a`
  color: ${colors.red400};
`;

const CardBackground = styled.div`
  /* max-width: 300px; */
  background-color: ${colors.grey100};
  padding: 32px;
  text-align: left;
  border-radius: 10px;
  /* margin: 32px; */
  @media (min-width: 700px) {
    /* margin: 64px; */
    flex-direction: row;
    align-items: flex-start;
    margin-top: 0px;
  }
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
