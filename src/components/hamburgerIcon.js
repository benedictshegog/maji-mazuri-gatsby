import React, { useState } from "react";
import styled from "styled-components";

const HamburgerIcon = styled.div`
  cursor: pointer;
  margin: 32px;
`;

const TopDiv = styled.div`
  transition: all 0.3s;
  width: 32px;
  height: 3px;
  background-color: ${(props) => (props.white ? "white" : "black")};
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
  background-color: ${(props) => (props.white ? "white" : "black")};
  top: ${(props) => (props.clicked ? "0" : "-4px")};
  transform: ${(props) => (props.clicked ? "rotate(0)" : "rotate(135deg)")};
  margin: 6px 0;
`;

export default function HamburgerButton(props) {
  const [click, setClick] = useState(true);
  const handleClick = () => {
    setClick(({ click }) => ({ click: !click }));
    props.onClick();
    console.log("handleClick", click);
  };

  return (
    <div>
      <HamburgerIcon onClick={handleClick}>
        <TopDiv white={props.white} clicked={click} />
        <BottomDiv white={props.white} clicked={click} />
      </HamburgerIcon>
    </div>
  );
}
