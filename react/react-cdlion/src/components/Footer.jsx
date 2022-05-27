import React from "react";
import PropTypes from "prop-types";

import { FooterBig, FooterDiv, FooterSmall } from "../styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <FooterDiv>
      <FontAwesomeIcon icon={faLeaf} size="2x" />
      <FooterBig>REACT study</FooterBig>
      <FooterSmall>2022.5.26 목요일, by yeon</FooterSmall>
    </FooterDiv>
  );
}

export default Footer;
