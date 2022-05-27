import React from "react";
import { PagingSection, PagenumberDiv } from "../styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function PageNumber() {
  return (
    <PagingSection>
      <PagenumberDiv>
        <FontAwesomeIcon icon={faArrowLeft} />
      </PagenumberDiv>
      <PagenumberDiv>2</PagenumberDiv>
      <PagenumberDiv>
        <FontAwesomeIcon icon={faArrowRight} />
      </PagenumberDiv>
    </PagingSection>
  );
}

export default PageNumber;
