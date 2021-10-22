import React, { useState } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import { colors } from "../styles/styles";

import HamburgerIcon from "./hamburgerIcon";

const MobileMenuBackground = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 100; /* Sit on top */
  left: 0;
  top: 0;
  background-color: white;
  overflow-x: hidden; /* Disable horizontal scroll */
`;

const MenuItem = styled.h2`
  text-align: center;
  color: ${colors.grey500};
  cursor: pointer;
`;

export default function MobileNavBar(props) {
  const [showMenu, setShowMenu] = useState(true);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  function handleNavigate(page) {
    return function () {
      navigate(page);
    };
  }
  return (
    <>
      {showMenu ? (
        <HamburgerIcon onClick={handleClick} lightMenu={props.lightMenu} />
      ) : (
        <MobileMenuBackground>
          <HamburgerIcon lightMenu={false} onClick={handleClick} />
          <MenuItem onClick={handleNavigate("/")} style={{ paddingTop: "10%" }}>
            Home
          </MenuItem>
          <MenuItem onClick={handleNavigate("/about")}>About</MenuItem>
          <MenuItem onClick={handleNavigate("/volunteer")}>Volunteer</MenuItem>
          <MenuItem onClick={handleNavigate("/contact")}>Contact</MenuItem>
          <MenuItem onClick={handleNavigate("/posts")}>Blog</MenuItem>
          <MenuItem onClick={handleNavigate("/donate")}>Donate</MenuItem>
        </MobileMenuBackground>
      )}
    </>
  );
}
