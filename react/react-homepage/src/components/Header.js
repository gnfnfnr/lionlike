import React from "react";
import { LogoDiv, MainTitleDiv, MainTitleHeader } from "./styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
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
