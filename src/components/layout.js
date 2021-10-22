import React from "react";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/700.css";
import "@fontsource/nunito-sans/900.css";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import { colors } from "../styles/styles.js";
import NavBar from "./navBar";
import MobileNavBar from "./mobileNavBar";
import useWindowSize from "../utils/useWindowSize";
import Footer from "./footer";

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

input {
  height: 36px;
  border-radius: 5px;
  border: 1px solid ${colors.grey200};
  width: 90%;
  max-width: 400px;
  margin: 0 8px 16px 0;
  padding-left: 16px;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
}

button {
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
}
`;

const PageWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  padding-top: 10%;
  @media (min-width: 700px) {
    padding-top: 200px;
    width: 80%;
  }
`;

export default function Layout(props) {
  const { width } = useWindowSize();
  return (
    <>
      {width > "700" ? (
        <NavBar lightMenu={props.lightMenu} landingPage={props.landingPage} />
      ) : (
        <MobileNavBar lightMenu={props.lightMenu} />
      )}
      <GlobalStyle theme="purple" />
      <PageWrapper>{props.children}</PageWrapper>
      <Footer width={width} />
    </>
  );
}
