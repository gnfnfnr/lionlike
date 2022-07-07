import styled from "styled-components";
import React, { useRef } from "react";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EachCommunity = styled.div``;

const EachCommunitycontainer = styled.div`
  border: 1px solid #c1c1c1;
  padding: 20px 30px;
  width: 1000px;
  margin: 0 auto;
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
  width: 1000px;
  margin: 0 auto;
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

const ReplInputDiv = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ecf2d8;
  display: flex;
  justify-content: space-between;
`;

const ReplInput = styled.input`
  width: 850px;
  font-size: 15px;
  padding: 10px;
  border: 1px solid #e7e9e2;
  border-radius: 8px;
  outline: none;
`;

const ReplBtn = styled.button`
  width: 100px;
  border: none;
  background-color: #9ea683;
  border-radius: 10px;
  font-weight: bold;
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

function EachCoummityPost({ apiUrl }) {
  const Params = useParams();
  const [post, setPost] = useState(null);
  const [repls, setRepls] = useState([]);
  const replCount = repls.length;
  const [repl, setRepl] = useState("");
  useEffect(() => {
    axios.get(`${apiUrl}posts/${Params.id}`).then((response) => {
      setPost(response.data);
      setRepls(response.data.repls);
    });
  }, []);
  // 리플 댓글 등록
  const onChange = (event) => {
    setRepl(event.target.value);
  };

  const onClick = () => {
    axios
      .post(`${apiUrl}/repl/`, {
        contents: repl,
        post: Params.id,
      })
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <EachCommunity>
      <PostAndRepl post={post} replCount={replCount} repls={repls} />
      <ReplInputDiv>
        <ReplInput
          onChange={onChange}
          value={repl}
          placeholder="댓글을 입력해주세요"
        />
        <ReplBtn onClick={onClick}>등록</ReplBtn>
      </ReplInputDiv>
    </EachCommunity>
  );
}

export default EachCoummityPost;
