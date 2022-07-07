import React from "react";
import { FooterInfo, FooterAbout, FooterMade } from "./styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <FooterInfo>
      <FontAwesomeIcon
        icon={faBookBookmark}
        size="3x"
        style={{ color: "#9fc088" }}
      />
      <FooterAbout>웹툰, 웹소설에 대한 모아 보기</FooterAbout>
      <FooterMade>copyright: yeon</FooterMade>
    </FooterInfo>
  );
}

export default Footer;
