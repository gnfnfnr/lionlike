import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBookBookmark } from "@fortawesome/free-solid-svg-icons";
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

function Header() {
  const navigate = useNavigate();
  const clickHome = () => {
    navigate(`${process.env.PUBLIC_URL}/`);
  };
  return (
    <MainTitleHeader>
      <MainTitleDiv>
        <LogoDiv onClick={clickHome}>
          <FontAwesomeIcon
            icon={faBookBookmark}
            style={{ paddingRight: "10px" }}
          />
          WebN
        </LogoDiv>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </MainTitleDiv>
    </MainTitleHeader>
  );
}

export default Header;
