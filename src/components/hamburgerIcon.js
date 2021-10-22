import React, { useState } from "react";
import styled from "styled-components";

const HamburgerIcon = styled.div`
  cursor: pointer;
  margin: 5%;
  position: absolute;
  top: 0;
  @media (min-width: 700px) {
    margin: 32px;
  }
`;

const TopDiv = styled.div`
  transition: all 0.3s;
  width: 32px;
  height: 3px;
  background-color: ${(props) => (props.darkTextMenu ? "black" : "white")};
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
  background-color: ${(props) => (props.darkTextMenu ? "black" : "white")};
  top: ${(props) => (props.clicked ? "0" : "-4px")};
  transform: ${(props) => (props.clicked ? "rotate(0)" : "rotate(135deg)")};
  margin: 6px 0;
`;

export default function HamburgerButton(props) {
  const [click, setClick] = useState(true);
  const handleClick = () => {
    setClick(({ click }) => ({ click: !click }));
    props.onClick();
  };

  return (
    <div>
      <HamburgerIcon onClick={handleClick}>
        <TopDiv darkTextMenu={props.darkTextMenu} clicked={click} />
        <BottomDiv darkTextMenu={props.darkTextMenu} clicked={click} />
      </HamburgerIcon>
    </div>
  );
}
