import React, { useRef } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 0 auto;
`;

const TitleInput = styled.input`
  margin: 20px 15px 0;
  height: 30px;
  outline: none;
  border-radius: 10px;
  border: 1px solid #e7e9e2;
  padding: 10px;
`;

const ContentsInput = styled.textarea`
  margin: 20px 15px 0;
  padding: 10px;
  outline: none;
  border-radius: 10px;
  border: 1px solid #e7e9e2;
  min-height: 300px;
  font-size: 18px;
`;

function InputPost({ title, onChange, contents }) {
  const titleInput = useRef();
  const contentsInput = useRef();
  useEffect(() => {
    titleInput.current.focus();
  }, []);
  const onkeyup = (event) => {
    if (event.key === "Enter") {
      contentsInput.current.focus();
    }
  };

  return (
    <InputBox>
      <TitleInput
        name="title"
        value={title}
        onChange={onChange}
        placeholder="제목을 입력해주세요. (15자 이내)"
        ref={titleInput}
        onKeyUp={onkeyup}
      ></TitleInput>
      <ContentsInput
        name="contents"
        value={contents}
        onChange={onChange}
        cols="30"
        rows="10"
        placeholder="내용을 입력해주세요"
        ref={contentsInput}
      ></ContentsInput>
    </InputBox>
  );
}

export default InputPost;
