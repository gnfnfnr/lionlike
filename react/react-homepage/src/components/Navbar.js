import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Nav = styled.nav`
  height: 40px;
`;

const Navlist = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`;

function Navbar({ darkMode }) {
  const activeStyle = {
    textDecoration: "none",
    color: darkMode ? "#574c68" : "#3f6820",
    width: "25%",
    textAlign: "center",
    padding: "12px",
    fontWeight: "bold",
    fontSize: "18px",
  };

  const nonActiveStyle = {
    backgroundColor: darkMode ? "#9F94B0" : "#9fc088",
    textDecoration: "none",
    color: "black",
    width: "33.3333%",
    fontWeight: "bold",
    textAlign: "center",
    padding: "12px",
  };

  return (
    <Nav>
      <Navlist>
        <NavLink
          to={"/more"}
          style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
        >
          <li>웹툰</li>
        </NavLink>
        <NavLink
          to={"/community"}
          style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
        >
          <li>커뮤니티</li>
        </NavLink>
        <NavLink
          to={"/profile"}
          style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
        >
          <li>마이페이지</li>
        </NavLink>
      </Navlist>
    </Nav>
  );
}

export default React.memo(Navbar);
