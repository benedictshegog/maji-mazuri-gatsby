import React from "react";
import styled from "styled-components";

const Background = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
`;

export default function NarrowPage({ children }) {
  return <Background>{children}</Background>;
}
