import React from "react";
import styled from "styled-components";

const MenuBackground = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
`;

export default function mobileMenu() {
  return (
    <MenuBackground>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
    </MenuBackground>
  );
}
