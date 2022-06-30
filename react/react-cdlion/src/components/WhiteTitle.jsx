import React from "react";
import { PostTitle, PostTitleDiv } from "../styledComponents";

function WhiteTitle(props) {
  return (
    <PostTitleDiv>
      <PostTitle>글쓰기</PostTitle>
    </PostTitleDiv>
  );
}

export default React.memo(WhiteTitle);
