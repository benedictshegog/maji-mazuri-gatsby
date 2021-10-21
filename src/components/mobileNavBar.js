import React, { useState } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import { Link } from "gatsby";
import { colors } from "../styles/styles";

import HamburgerIcon from "./hamburgerIcon";

const MobileMenuBackground = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 3; /* Sit on top */
  left: 0;
  top: 0;
  background-color: white;
  overflow-x: hidden; /* Disable horizontal scroll */
`;

const MenuItem = styled.h2`
  text-align: center;
  color: ${(props) => (props.lightMenu ? colors.grey500 : "white")};
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
          <HamburgerIcon onClick={handleClick} />
          <MenuItem
            lightMenu={props.lightMenu}
            onClick={handleNavigate("/about")}
          >
            About
          </MenuItem>
          <MenuItem
            lightMenu={props.lightMenu}
            onClick={handleNavigate("/volunteer")}
          >
            Volunteer
          </MenuItem>
          <MenuItem
            lightMenu={props.lightMenu}
            onClick={handleNavigate("/contact")}
          >
            Contact
          </MenuItem>
          <MenuItem
            lightMenu={props.lightMenu}
            onClick={handleNavigate("/blog")}
          >
            Blog
          </MenuItem>
          <MenuItem
            lightMenu={props.lightMenu}
            onClick={handleNavigate("/donate")}
          >
            Donate
          </MenuItem>
        </MobileMenuBackground>
      )}
    </>
  );
}
