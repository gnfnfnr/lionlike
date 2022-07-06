import { React, useEffect } from "react";
import styled from "styled-components";
import recommendData from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AddPost from "./AddPost";
const DetailBox = styled.div`
  background-color: white;
  width: 80vw;
  margin: 0 auto;
  min-height: 400px;
`;

const DetailPostList = styled.ul`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const DetailPostLi = styled.li`
  background-color: #597346;
  width: 300px;
  padding: 40px;
  margin: 0 20px 40px;
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  justify-content: space-around;
`;

const PostImg = styled.img`
  width: 300px;
  height: 420px;
  object-fit: cover;
  margin-bottom: 25px;
}
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
  line-height: 1.2;
`;
const PostUrl = styled.div``;
const PostPlus = styled.div`
  height: 675px;
  background-color: #f0f8ff2b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function More() {
  const [moveAddPost, setMoveAddPost] = useState(false);
  const [result, setResult] = useState([]);

  const onClick = () => {
    setMoveAddPost(!moveAddPost);
  };
  console.log(result);
  return (
    <>
      <DetailBox>
        <DetailPostList>
          {/* 포스트 보여주기 */}
          {recommendData.map((web) => (
            <DetailPostLi>
              <PostImg
                src={
                  web.img
                    ? require(`../img/${web.img}.jpg`)
                    : require("../img/error.jpg")
                }
              />
              <PostInfo>
                <PostTitle>{web.title}</PostTitle>
                <PostAuthor>{web.author}</PostAuthor>
                <PostReview>{web.review}</PostReview>
              </PostInfo>
            </DetailPostLi>
          ))}
          {result.map((web) => (
            <DetailPostLi>
              <PostImg src={web.img} />
              <PostInfo>
                <PostTitle>{web.title}</PostTitle>
                <PostAuthor>{web.author}</PostAuthor>
                <PostReview>{web.review}</PostReview>
              </PostInfo>
            </DetailPostLi>
          ))}
          {/* 포스트 추가 영역 */}
          <DetailPostLi>
            {moveAddPost ? (
              <AddPost
                onClick={onClick}
                result={result}
                setMoveAddPost={setMoveAddPost}
              />
            ) : (
              <PostPlus onClick={onClick}>
                <FontAwesomeIcon icon={faPlus} style={{ fontSize: "105px" }} />
              </PostPlus>
            )}
          </DetailPostLi>
        </DetailPostList>
      </DetailBox>
      <Outlet />
    </>
  );
}

export default More;