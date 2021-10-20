import React, { useState } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";

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
`;

export default function MobileNavBar() {
  const [showMenu, setShowMenu] = useState(true);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  function handleNavigate(page) {
    return function () {
      console.log("Trying to handle");
      navigate(page);
    };
  }

  return (
    <>
      {showMenu ? (
        <HamburgerIcon onClick={handleClick} white />
      ) : (
        <MobileMenuBackground>
          <HamburgerIcon onClick={handleClick} />
          <MenuItem onClick={handleNavigate("/about")}>About</MenuItem>
          <MenuItem onClick={handleNavigate("/volunteer")}>Volunteer</MenuItem>
          <MenuItem onClick={handleNavigate("/contact")}>Contact</MenuItem>
          <MenuItem onClick={handleNavigate("/blog")}>Blog</MenuItem>
          <MenuItem onClick={handleNavigate("/donate")}>Donate</MenuItem>
        </MobileMenuBackground>
      )}
    </>
  );
}
