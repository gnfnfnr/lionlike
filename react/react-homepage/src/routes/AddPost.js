import React from "react";
import InputPost from "../components/InputPost";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostSubmitDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const PostSubmit = styled.button`
  height: 40px;
  width: 100px;
  background-color: #9ea683;
  border: none;
  border-radius: 20px;
  box-shadow: 2px 2px 3px 1px #858c6f;
  cursor: pointer;
`;

const SubmitComponent = React.memo(({ onSubmit }) => (
  <PostSubmitDiv>
    <PostSubmit onClick={onSubmit}>작성완료</PostSubmit>
  </PostSubmitDiv>
));
function AddPost({ apiUrl }) {
  const [inputs, setInputs] = useState({
    title: "",
    contents: "",
  });

  const { title, contents } = inputs;

  const onChange = (event) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const onSubmit = () => {
    axios
      .post(`${apiUrl}/posts/`, {
        title: inputs.title,
        contents: inputs.contents,
        repls: [],
      })
      .then(() => {
        navigate("/coummity");
      });
  };

  return (
    <>
      <InputPost title={title} contents={contents} onChange={onChange} />
      <SubmitComponent onSubmit={onSubmit} />
    </>
  );
}

export default AddPost;
