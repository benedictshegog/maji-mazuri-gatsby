import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { devices } from "../styles/styles";

import Button from "./button";
import { colors } from "../styles/styles";

const Container = styled.div`
  margin: 175px 0px 0 0px;
  width: 95%;
  @media (min-width: ${devices.tablet}) {
    width: 100%;
    margin: 175px 50px 0 50px;
    display: flex;
    flex-direction: row;
  }
`;

const StyledHeaderTextArea = styled.div`
  text-align: center;
  align-content: center;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledHeaderText = styled.h1`
  text-align: center;
  color: white;
  margin-block-start: 0em;
  margin-block-end: 0em;
  @media (min-width: ${devices.phone}) {
  }
`;

const StyledHeader = styled.span`
  display: flex;
  justify-content: center;
`;

const StyledH2 = styled.h2`
  color: white;
`;

const ItalicH3 = styled.h3`
  color: white;
`;

const RedFont = styled.span`
  color: ${colors.red500};
`;

export default function HeaderContents() {
  return (
    <Container>
      <StyledHeaderTextArea>
        <StyledHeader>
          <StyledHeaderText>
            Maji
            <RedFont> Mazuri</RedFont>
          </StyledHeaderText>
        </StyledHeader>
        <ItalicH3>Translation: "Good Water" (Swahili)</ItalicH3>
        <StyledH2>
          A grassroots Kenyan NGO that aims to address the root causes of
          poverty through educational and skills-based programmes.
        </StyledH2>
        <div style={{ height: "32px" }} />
        <Link to="/donate">
          <Button text={"Donate"} />
        </Link>
      </StyledHeaderTextArea>
    </Container>
  );
}
