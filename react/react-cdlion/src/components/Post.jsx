import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import {
  PostTitle,
  PostSection,
  PostTitleDiv,
  PostListDiv,
  LoadingDiv,
  CursorDiv,
} from "../styledComponents";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faPenToSquare,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import EachPostList from "./EachPostList";

function Post() {
  const initialPostList = [
    { id: 1, title: "리액트 시작" },
    { id: 1, title: "화산귀한 최고" },
    { id: 1, title: "매화검존" },
  ];

  const addPost = () => {
    setPostList((postLi) => [
      ...postLi,
      { id: 4, title: "청명아", repelCount: 44 },
    ]);
  };

  const [loading, setLoading] = useState(true);
  const [isPost, setIsPost] = useState(false);
  const [postList, setPostList] = useState([]);

  const navigation = useNavigate();
  const clickWrite = () => {
    navigation("/write");
  };

  useEffect(() => {
    setTimeout(() => {
      setPostList(initialPostList);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <PostSection>
      <PostTitleDiv>
        <CursorDiv>
          <FontAwesomeIcon icon={faArrowsRotate} size="lg" onClick={addPost} />
        </CursorDiv>
        <PostTitle>익명게시판</PostTitle>
        <CursorDiv>
          <FontAwesomeIcon
            onClick={clickWrite}
            icon={faPenToSquare}
            size="lg"
          />
        </CursorDiv>
      </PostTitleDiv>
      <PostListDiv>
        {loading ? (
          <LoadingDiv>
            <FontAwesomeIcon icon={faSpinner} size="5x" />
          </LoadingDiv>
        ) : isPost ? (
          <LoadingDiv>아직 아무것도 없다고!!!!</LoadingDiv>
        ) : (
          <ul>
            {postList.map((li, index) => (
              <EachPostList key={index} title={li.title} id={li.id} />
            ))}
          </ul>
        )}
      </PostListDiv>
    </PostSection>
  );
}

export default Post;
