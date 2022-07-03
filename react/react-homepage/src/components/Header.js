import React from "react";
import { LogoDiv, MainTitleDiv, MainTitleHeader } from "./styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBookBookmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <MainTitleHeader>
      <MainTitleDiv>
        <LogoDiv>
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
