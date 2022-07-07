import React, { useRef } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const InputPost = styled.div``;

const TitleInput = styled.input`
  margin: 20px 15px 0;
  height: 30px;
`;

const ContentsInput = styled.textarea`
  margin: 20px 15px 0;
  padding: 10px;
  border-radius: 5px;
`;

export const PostSubmitDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const PostSubmit = styled.button`
  height: 40px;
  width: 100px;
  background: orange;
  border: none;
  border-radius: 20px;
  box-shadow: 2px 2px 3px 1px #ab9982;
  cursor: pointer;
`;

const SubmitComponent = React.memo(({ onSubmit }) => (
  <PostSubmitDiv>
    <PostSubmit onClick={onSubmit}>작성완료</PostSubmit>
  </PostSubmitDiv>
));

function AddCommunityPost({ title, onChange, contents }) {
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
    <InputPost>
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
      <SubmitComponent></SubmitComponent>
    </InputPost>
  );
}

export default AddCommunityPost;
