import React from "react";
import styled from "styled-components";
import { devices } from "../styles/styles";

import image from "../images/planes.jpeg";

const StyledImageBlock = styled.div`
  z-index: -1;
  background-size: 100%;
  height: 100vh;
  width: 100%;
  display: flex;
  min-height: 700px;
  height: 100%;
  background-color: #2a323b;
  background: url(${image}) no-repeat center center fixed;
  box-shadow: inset 0 0 0 1000px rgba(23, 27, 62, 0.9);

  @media (min-width: ${devices.tablet}) {
    box-shadow: inset 0 0 0 1000px rgba(23, 27, 62, 0.6);
    background-size: cover;
  }
`;

export default function HeaderImage(props) {
  return <StyledImageBlock>{props.children}</StyledImageBlock>;
}
