import React, { useRef } from "react";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
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
} from "../styledComponents";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const repelData = [
  { id: 2, content: "스포금지" },
  { id: 3, content: "매화가 피웠네" },
];

const PostAndRepel = React.memo(
  ({ post, postLoading, replCount, repls, repelLoding }) => {
    return (
      <>
        <PostTitleDiv>
          <PostTitle>{post && post.title}</PostTitle>
        </PostTitleDiv>
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
          repls.map((elements, index) => (
            <PostReplDiv key={index}>
              <RepelWriter>익명</RepelWriter>
              <Repel>{elements}</Repel>
            </PostReplDiv>
          ))
        )}
      </>
    );
  }
);

const ShowPost = ({ apiUrl }) => {
  const Params = useParams();
  const [post, setPost] = useState(null);
  const [repls, setRepls] = useState([]);
  const [postLoading, setPostLoading] = useState(true);
  const [repelLoding, setRepelLoading] = useState(true);
  const [repl, setRepl] = useState("");
  const countRepls = () => {
    return repls.length;
  };
  const replCount = useMemo(() => countRepls(repl), [repls]);

  const onChange = (event) => {
    setRepl(event.target.value);
    console.log(repl);
  };

  const repelInput = useRef();
  useEffect(() => {
    repelInput.current.focus();
  }, []);

  useEffect(() => {
    setPostLoading(false);
    axios.get(`${apiUrl}posts/${Params.id}`).then((response) => {
      console.log(response.data);
      setPost(response.data);
      setRepls(response.data.repls);
    });
  }, []);

  useEffect(() => {
    setRepelLoading(false);
  }, []);

  const onSubmit = () => {
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
    <div>
      <PostSection>
        <PostAndRepel
          post={post}
          postLoading={postLoading}
          replCount={replCount}
          repls={repls}
          repelLoding={repelLoding}
        />
        <WriterDiv>
          <RepelInput
            onChange={onChange}
            value={repl}
            ref={repelInput}
          ></RepelInput>
          <RepelSubmitDiv>
            <span onClick={onSubmit}>입력</span>
          </RepelSubmitDiv>
        </WriterDiv>
      </PostSection>
    </div>
  );
};

export default ShowPost;
