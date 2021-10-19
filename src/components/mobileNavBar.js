import React, { useState } from "react";
import styled from "styled-components";

import HamburgerIcon from "./hamburgerIcon";
import MobileMenu from "./mobileMenu";

const MobileNavArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export default function MobileNavBar() {
  const [showMenu, setShowMenu] = useState(true);
  const handleClick = () => {
    setShowMenu(!showMenu);
    console.log("click");
  };

  return (
    <>
      {showMenu ? (
        <MobileNavArea>
          <HamburgerIcon onClick={handleClick} />
        </MobileNavArea>
      ) : (
        <MobileMenu />
      )}
    </>
  );
}
