import styled from "styled-components";
import React from "react";
const EachCommunitycontainer = styled.div`
  border: 1px solid #c1c1c1;
  padding: 20px 30px;
  min-height: 400px;
`;

const EachTitleBox = styled.div`
  border-bottom: 1px solid #c1c1c1;
  padding: 10px 0;
`;

const EachTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const EachWriter = styled.div`
  color: #666c61;
  font-weight: bold;
`;
const EachContents = styled.div`
  margin-top: 30px;
`;
const EachRepl = styled.div`
  padding: 20px 30px;
`;

const ReplCountDiv = styled.div`
  margin: 15px 0;
  border-bottom: 2px solid #e0e2e5;
  padding-bottom: 18px;
  font-weight: bold;
`;

const ReplContents = styled.div`
  border-bottom: 1px solid #e0e2e5;
  padding: 10px 0;
`;

const ReplWriter = styled.div`
  color: #666c61;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ReplText = styled.div`
  font-size: 18px;
`;

const PostAndRepl = React.memo(({ post, replCount, repls }) => {
  return (
    <>
      <EachCommunitycontainer>
        <EachTitleBox>
          <EachTitle>{post && post.title}</EachTitle>
          <EachWriter>익명 글쓴이</EachWriter>
        </EachTitleBox>
        <EachContents>{post && post.contents}</EachContents>
      </EachCommunitycontainer>
      <EachRepl>
        <ReplCountDiv>
          <span>댓글 </span>
          <span>{replCount}</span>
          <span> 개</span>
        </ReplCountDiv>
        {repls.map((element, index) => (
          <ReplContents key={index}>
            <ReplWriter>익명</ReplWriter>

            <ReplText>{element}</ReplText>
          </ReplContents>
        ))}
      </EachRepl>
    </>
  );
});

export default PostAndRepl;
