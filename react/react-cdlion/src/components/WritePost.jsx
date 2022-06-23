import React from "react";
import { useState } from "react";
import {
  PostSection,
  PostTitle,
  PostTitleDiv,
  PostWriteDiv,
  TitleInput,
  ContentsInput,
  PostSubmitDiv,
  PostSubmit,
  PostListDiv,
} from "../styledComponents";

const WritePost = () => {
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
  console.log(inputs);

  return (
    <PostSection>
      <PostTitleDiv>
        <PostTitle>글쓰기</PostTitle>
      </PostTitleDiv>
      <PostListDiv>
        <PostWriteDiv>
          <TitleInput
            name="title"
            value={title}
            onChange={onChange}
            placeholder="제목을 입력해주세요. (15자 이내)"
          ></TitleInput>
          <ContentsInput
            name="contents"
            value={contents}
            onChange={onChange}
            cols="30"
            rows="10"
            placeholder="내용을 입력해주세요"
          ></ContentsInput>
        </PostWriteDiv>
        <PostSubmitDiv>
          <PostSubmit>작성완료</PostSubmit>
        </PostSubmitDiv>
      </PostListDiv>
    </PostSection>
  );
};

export default WritePost;
