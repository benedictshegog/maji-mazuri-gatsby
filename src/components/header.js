import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Background = styled.div`
  width: 100%;
  margin: 0px;
  padding-bottom: 200px;
`;

const MenuGroup = styled.div`
  margin: 0px;
  padding-top: 34px;
  padding-right: 35px;
  display: flexbox;
  justify-content: flex-end;
`;

const MenuItem = styled.a`
  margin-right: 32px;
  margin-top: 0px;
  margin-bottom: 0px;
  color: white;
`;

export default function header(props) {
  console.log(props);
  return (
    <Background>
      <MenuGroup>
        <Link to="/about">
          <MenuItem>About</MenuItem>
        </Link>
        <Link to="/volunteer">
          <MenuItem>Volunteer</MenuItem>
        </Link>
        <Link to="/contact">
          <MenuItem>Contact</MenuItem>
        </Link>
        <Link to="/blog">
          <MenuItem>Blog</MenuItem>
        </Link>
        <Link to="/donate">
          <MenuItem>Donate</MenuItem>
        </Link>
      </MenuGroup>
    </Background>
  );
}
