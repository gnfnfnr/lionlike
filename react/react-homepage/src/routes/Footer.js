import React from "react";
import { FooterInfo, FooterAbout, FooterMade } from "./styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

function Footer({ darkMode }) {
  return (
    <FooterInfo>
      <FontAwesomeIcon
        icon={faBookBookmark}
        size="3x"
        style={darkMode ? { color: "#9F94B0" } : { color: "9fc088" }}
      />
      <FooterAbout>웹툰 모아 보기</FooterAbout>
      <FooterMade>copyright: yeon</FooterMade>
    </FooterInfo>
  );
}

export default React.memo(Footer);
