import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { colors } from "../styles/styles";
import logo from "../images/logo.png";

const Background = styled.div`
  width: 100%;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
`;

const MenuGroup = styled.div`
  margin: 0px;
  padding-top: 34px;
  padding-right: 35px;
  display: flex;
  justify-content: flex-end;
`;

const MenuItem = styled.p`
  margin-right: 32px;
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: 700;
  color: ${(props) => (props.lightMenu ? "white" : colors.grey500)};
`;

const Logo = styled.img`
  height: 76px;
  margin-left: 64px;
  visibility: ${(props) => (props.landingPage ? "hidden" : "visible")};
`;

export default function navBar(props) {
  return (
    <Background>
      <Link to="/">
        <Logo src={logo} landingPage={props.landingPage} />
      </Link>
      <MenuGroup>
        <Link to="/about">
          <MenuItem lightMenu={props.lightMenu} landingPage={props.landingPage}>
            About
          </MenuItem>
        </Link>
        <Link to="/volunteer">
          <MenuItem lightMenu={props.lightMenu} landingPage={props.landingPage}>
            Volunteer
          </MenuItem>
        </Link>
        <Link to="/contact">
          <MenuItem lightMenu={props.lightMenu} landingPage={props.landingPage}>
            Contact
          </MenuItem>
        </Link>
        <Link to="/posts">
          <MenuItem lightMenu={props.lightMenu} landingPage={props.landingPage}>
            Blog
          </MenuItem>
        </Link>
        <Link to="/donate">
          <MenuItem lightMenu={props.lightMenu} landingPage={props.landingPage}>
            Donate
          </MenuItem>
        </Link>
      </MenuGroup>
    </Background>
  );
}
