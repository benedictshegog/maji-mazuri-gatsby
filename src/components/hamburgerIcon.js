import React, { useState } from "react";
import styled from "styled-components";

const HamburgerIcon = styled.div`
  cursor: pointer;
  padding: 32px;
`;

const TopDiv = styled.div`
  transition: all 0.3s;
  width: 32px;
  height: 3px;
  background-color: white;
  border-radius: 10px;
  position: relative;
  top: ${(props) => (props.clicked ? "0" : "4px")};
  transform: ${(props) => (props.clicked ? "rotate(0)" : "rotate(-135deg)")};
  margin: 6px 0;
`;
const BottomDiv = styled.div`
  transition: all 0.3s;
  width: 32px;
  height: 3px;
  border-radius: 10px;
  position: relative;
  background-color: white;
  top: ${(props) => (props.clicked ? "0" : "-4px")};
  transform: ${(props) => (props.clicked ? "rotate(0)" : "rotate(135deg)")};
  margin: 6px 0;
`;

export default function HamburgerButton(props) {
  const [click, setClick] = useState(true);
  const handleClick = () => {
    setClick(!click);
    props.onClick();
  };

  return (
    <div>
      <HamburgerIcon onClick={handleClick}>
        <TopDiv clicked={click} />
        <BottomDiv clicked={click} />
      </HamburgerIcon>
    </div>
  );
}
