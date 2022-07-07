import { React } from "react";
import styled from "styled-components";
import recommendData from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AddPost from "../components/AddPost";
import DetailPost from "../components/DetailPost";
const DetailBox = styled.div`
  background-color: ${(props) => props.theme.boardBgColor};
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
  background-color: ${(props) => props.theme.sctionBgColor};
  width: 300px;
  padding: 40px;
  margin: 0 20px 40px;
`;

const PostPlus = styled.div`
  height: 675px;
  background-color: #f0f8ff2b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function More() {
  const [moveAddPost, setMoveAddPost] = useState(false);
  const [result, setResult] = useState([...recommendData]);
  const dataCount = result.length;

  const onClick = () => {
    setMoveAddPost(!moveAddPost);
  };

  const onClickDelete = (event) => {
    setResult(result.filter((post) => post.id !== parseInt(event.target.id)));
  };
  return (
    <>
      <DetailBox>
        <DetailPostList>
          {/* 포스트 보여주기 */}
          {result.map((web) => (
            <DetailPost
              web={web}
              key={web.id}
              onClickDelete={onClickDelete}
            ></DetailPost>
          ))}
          {/* 포스트 추가 영역 */}
          <DetailPostLi>
            {moveAddPost ? (
              <AddPost
                onClick={onClick}
                result={result}
                setMoveAddPost={setMoveAddPost}
                dataCount={dataCount}
              />
            ) : (
              <PostPlus onClick={onClick} result={result} setResult={setResult}>
                <FontAwesomeIcon icon={faPlus} style={{ fontSize: "105px" }} />
              </PostPlus>
            )}
          </DetailPostLi>
        </DetailPostList>
      </DetailBox>
    </>
  );
}

export default More;
