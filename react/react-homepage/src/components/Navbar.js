import React from "react";
import styled from "styled-components";
const Nav = styled.nav`
  height: 40px;
  border-bottom: 2px solid black;
`;

const Navlist = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

function Navbar(props) {
  return (
    <Nav>
      <Navlist>
        <li>Home</li>
        <li>웹툰</li>
        <li>커뮤니티</li>
        <li>마이페이지</li>
      </Navlist>
    </Nav>
  );
}

export default Navbar;
