import React from "react";
import { useState, useEffect, useMemo } from "react";

import {
  PostTitle,
  PostSection,
  PostTitleDiv,
  PostReplDiv,
  RepelTitleDiv,
  LoadingDiv,
  RepelWriter,
  Repel,
  WriterDiv,
  RepelInput,
  RepelSubmitDiv,
  PostListDiv,
} from "../styledComponents";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const repelData = [
  { id: 2, content: "스포금지" },
  { id: 3, content: "매화가 피웠네" },
];

const postData = {
  title: "청진아",
  contents:
    "13대 화산의 장문인 청진, 십만대군에 잠들다. 소림xx들이 청진 언급하는 거 기분 별로임",
};

const ShowPost = () => {
  const [post, setPost] = useState(null);
  const [repls, setRepls] = useState([]);
  const [postLoading, setPostLoading] = useState(true);
  const [repelLoding, setRepelLoading] = useState(true);
  const [repl, setRepl] = useState("");
  const countRepls = () => {
    console.log("리뷰를 세는중");
    return repls.length;
  };
  const replCount = useMemo(() => countRepls(repl), [repls]);

  const onChange = (event) => {
    setRepl(event.target.value);
    console.log();
  };

  useEffect(() => {
    setTimeout(() => {
      setPost(postData);
      setPostLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setRepls(repelData);
      setRepelLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <PostSection>
        <PostTitleDiv>
          <PostTitle>{post && post.title}</PostTitle>
        </PostTitleDiv>
        <PostListDiv>
          {postLoading ? (
            <LoadingDiv>
              <FontAwesomeIcon icon={faSpinner} size="3x" />
            </LoadingDiv>
          ) : (
            <PostReplDiv>{post && post.contents}</PostReplDiv>
          )}

          <RepelTitleDiv>댓글 {replCount} </RepelTitleDiv>
          {repelLoding ? (
            <LoadingDiv>
              <FontAwesomeIcon icon={faSpinner} size="3x" />
            </LoadingDiv>
          ) : (
            repls &&
            repls.map((elements) => (
              <PostReplDiv key={elements.id}>
                <RepelWriter>익명</RepelWriter>
                <Repel>{elements.content}</Repel>
              </PostReplDiv>
            ))
          )}
          <WriterDiv>
            <RepelInput onChange={onChange} value={repl}></RepelInput>
            <RepelSubmitDiv>
              <span>입력</span>
            </RepelSubmitDiv>
          </WriterDiv>
        </PostListDiv>
      </PostSection>
    </div>
  );
};

export default ShowPost;
