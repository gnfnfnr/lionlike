import React, { useState } from "react";
import styled from "styled-components";
const DetailPostLi = styled.li`
  background-color: ${(props) => props.theme.sctionBgColor};
  width: 300px;
  padding: 40px;
  margin: 0 20px 40px;
`;

const PostImg = styled.img`
  width: 300px;
  height: 420px;
  object-fit: contain;
  margin-bottom: 25px;
`;

const PostTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const PostAuthor = styled.div`
  font-size: 18px;
  color: #c1c1c1;
  padding: 10px 0;
`;

const PostReview = styled.div`
  height: 150px;
  max-height: 150px;
  overflow-y: auto;
  line-height: 1.4;
`;

const PostUrlLink = styled.a`
  color: black;
  text-decoration: none;
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  justify-content: space-around;
  height: 220px;
  cursor: pointer;
`;

const PostBtn = styled.div`
  cursor: pointer;
  padding: 20px;
  border-radius: 15px;
  font-weight: bold;
  width: 100px;
  text-align: center;
  border: 1px solid black;
`;

function DetailPost({ web, result, setResult, onClickDelete }) {
  const [flip, setFlip] = useState(false);
  const onClickFlip = () => {
    setFlip(!flip);
  };

  return (
    <DetailPostLi>
      <PostUrlLink href={web.url} target="_blank">
        <PostImg src={web.img} />
      </PostUrlLink>
      {flip ? (
        <PostInfo>
          <PostBtn id={web.id} onClick={onClickDelete}>
            삭제
          </PostBtn>
          <PostBtn onClick={onClickFlip}>취소</PostBtn>
        </PostInfo>
      ) : (
        <PostInfo onClick={onClickFlip}>
          <PostTitle>{web.title}</PostTitle>
          <PostAuthor>{web.author}</PostAuthor>
          <PostReview>{web.review}</PostReview>
        </PostInfo>
      )}
    </DetailPostLi>
  );
}

export default DetailPost;
