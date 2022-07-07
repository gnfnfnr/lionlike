import styled from "styled-components";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PostAndRepl from "../components/PostAndRepl";

const EachCommunity = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

const ReplInputDiv = styled.div`
  padding: 20px;
  background-color: #ecf2d8;
  display: flex;
  justify-content: space-between;
`;

const ReplInput = styled.input`
  width: 820px;
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
  box-shadow: 2px 2px 2px -1px #858c6f;
  cursor: pointer;
`;

function EachPost({ apiUrl }) {
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

export default EachPost;
