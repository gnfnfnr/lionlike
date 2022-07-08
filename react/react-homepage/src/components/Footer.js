import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

const FooterInfo = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterAbout = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin 10px 0;
`;

const FooterMade = styled.div`
  font-size: 14px;
`;

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
