import React, { useState } from "react";
import styled from "styled-components";
import { useEffect, useCallback } from "react";

const InputLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

const AddPostDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 675px;
  background-color: white;
  margin: 0 auto;
`;

function AddPost({ onClick, result, setMoveAddPost }) {
  const [fileImage, setFileImage] = useState();
  const [inputs, setInputs] = useState({
    img: "",
    title: "",
    author: "",
    review: "",
    inputUrl: "",
  });
  const { img, title, author, review, inputUrl } = inputs;
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );
  const SaveFile = (event) => {
    setFileImage(URL.createObjectURL(event.target.files[0]));
  };

  const onClickInfo = (event) => {
    event.preventDefault();
    inputs.img = fileImage;
    result.push(inputs);
    setMoveAddPost(false);
  };
  return (
    <AddPostDiv>
      <form>
        <div>
          <InputLabel htmlFor="imageFile">이미지 파일 선택</InputLabel>
          <input
            id="imageFile"
            type="file"
            name="img"
            accept="image/*"
            onChange={(event) => {
              SaveFile(event);
            }}
          />
        </div>
        <div>
          <InputLabel htmlFor="title">제목</InputLabel>
          <input onChange={onChange} id="title" type="text" name="title" />
        </div>
        <div>
          <InputLabel htmlFor="author">작가</InputLabel>
          <input onChange={onChange} id="author" type="text" name="author" />
        </div>
        <div>
          <InputLabel htmlFor="review">후기</InputLabel>
          <input onChange={onChange} id="review" type="text" name="reivew" />
        </div>
        <div>
          <InputLabel htmlFor="url">사이트 주소</InputLabel>
          <input onChange={onChange} id="url" type="text" name="inputUrl" />
        </div>
        <div>이미지 미리보기</div>
        {fileImage ? (
          <img
            src={fileImage}
            alt="잘못된 이미지 입니다"
            style={{ width: "200px" }}
          />
        ) : (
          <div>사진을 선택해주세요</div>
        )}
        <button onClick={onClickInfo}>확인</button>
        <button onClick={onClick}>취소</button>
      </form>
    </AddPostDiv>
  );
}
export default AddPost;
