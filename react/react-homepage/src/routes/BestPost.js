import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getToon } from "../data";
import styled from "styled-components";

const BestBox = styled.ul`
  background-color: #b3b18d;
  padding: 20px;
  margin: 15px;
`;

const BestContents = styled.li``;
const BestContentsTitle = styled.div`
  font-weight: bold;
  padding-bottom: 10px;
`;
const BestContentsReview = styled.div`
  padding-bottom: 10px;
  font-size: 14px;
`;
const BestBtn = styled.div`
  padding: 10px;
  background-color: #73725b;
  float: right;
  cursor: pointer;
`;

function BestPost() {
  const movie = getToon(parseInt(useParams().id));
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/home");
  };
  return (
    <BestBox>
      <BestContents>
        <BestContentsTitle>{movie.title}</BestContentsTitle>
      </BestContents>
      <BestContents>
        <BestContentsReview>{movie.review}</BestContentsReview>
      </BestContents>
      <BestContents>
        <a href={movie.url} target="_blank">
          사이트 이동
        </a>
      </BestContents>
      <BestContents>
        <BestBtn onClick={onClick}>취소</BestBtn>
      </BestContents>
    </BestBox>
  );
}

export default BestPost;
