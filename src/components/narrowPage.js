import React from "react";
import styled from "styled-components";

const Background = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

export default function standardPage({ children }) {
  return <Background>{children}</Background>;
}
