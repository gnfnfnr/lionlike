import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faBookBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainTitleHeader = styled.header`
  background-color: #9fc088;
  padding: 25px;
`;

const MainTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoDiv = styled.div`
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
`;

function Header({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const clickHome = () => {
    navigate(`${process.env.PUBLIC_URL}/`);
  };
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <MainTitleHeader>
      <MainTitleDiv>
        <LogoDiv onClick={clickHome}>
          <FontAwesomeIcon
            icon={faBookBookmark}
            style={{ paddingRight: "10px" }}
          />
          MoToon
        </LogoDiv>
        <FontAwesomeIcon
          icon={faPaintBrush}
          size="2x"
          style={darkMode ? { color: "red" } : { color: "yellow" }}
          onClick={toggleMode}
        />
      </MainTitleDiv>
    </MainTitleHeader>
  );
}

export default React.memo(Header);
