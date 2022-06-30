import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PostSection,
  PostWriteDiv,
  PostSubmitDiv,
  PostSubmit,
  PostListDiv,
} from "../styledComponents";
import InputPost from "./InputPost";
import WhiteTitle from "./WhiteTitle";

const SubmitComponent = React.memo(({ onSubmit }) => (
  <PostSubmitDiv>
    <PostSubmit onClick={onSubmit}>작성완료</PostSubmit>
  </PostSubmitDiv>
));

const WritePost = ({ apiUrl }) => {
  const [inputs, setInputs] = useState({
    title: " ",
    contents: " ",
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
        navigate("../");
      });
  };

  return (
    <PostSection>
      <WhiteTitle />
      <PostListDiv>
        <PostWriteDiv>
          <InputPost title={title} contents={contents} onChange={onChange} />
        </PostWriteDiv>
        <SubmitComponent onSubmit={onSubmit} />
      </PostListDiv>
    </PostSection>
  );
};

export default WritePost;
