import React from "react";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/700.css";
import "@fontsource/nunito-sans/900.css";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import { colors } from "../styles/styles.js";

import Header from "../components/header";

const GlobalStyle = createGlobalStyle`

h3 {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${colors.grey400}
}
h2 {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 900;
  font-size: 26px;
  line-height: 35px;
  color: ${colors.grey400}
}
h1 {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 900;
  font-size: 50px;
  line-height: 68px;
  color: ${colors.grey400}
}

p {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: ${colors.grey400}
}

li {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: ${colors.grey400}
}

a {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: ${colors.grey400};
  text-decoration: none;
}

body {
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: 0;
}
`;

const PageWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;

export default function Layout({ children }, props) {
  return (
    <>
      <Header url={props.url} />
      <GlobalStyle theme="purple" />
      <PageWrapper>{children}</PageWrapper>
    </>
  );
}
