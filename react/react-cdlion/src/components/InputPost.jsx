import React, { useRef } from "react";
import { useEffect } from "react";
import { TitleInput, ContentsInput } from "../styledComponents";

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
    <>
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
    </>
  );
}

export default InputPost;
