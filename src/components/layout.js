import React from "react";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/700.css";
import "@fontsource/nunito-sans/900.css";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Helmet from "react-helmet";

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

b {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
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
  padding-top: 32px;
  @media (min-width: 700px) {
    padding-top: 64px;
    width: 80%;
  }
`;

export default function Layout(props) {
  const { width } = useWindowSize();
  return (
    <>
      <Helmet htmlAttributes>
        <html lang="en" />
        <title>Maji Mazuri | Kenyan NGO</title>
        <meta name="icon" href="/src/images/favicon.ico" />
        <meta
          name="description"
          content="A grassroots charity operating a school and a children's center in Nairobi"
        />
      </Helmet>
      <NavBar
        darkTextMenu={props.darkTextMenu}
        landingPage={props.landingPage}
      />
      <MobileNavBar darkTextMenu={props.darkTextMenu} />
      <GlobalStyle theme="purple" />
      <PageWrapper>{props.children}</PageWrapper>
      <Footer width={width} />
    </>
  );
}
