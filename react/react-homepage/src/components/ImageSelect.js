import React, { useState } from "react";
import styled from "styled-components";

const InputLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

const AddPostDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 800px;
  background-color: white;
  margin: 0 auto;
`;

function ImageSelect() {
  const [fileImage, setFileImage] = useState("");
  const SaveFile = (event) => {
    setFileImage(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <AddPostDiv>
      <div>
        <InputLabel htmlFor="imageFile">이미지 파일 넣기:</InputLabel>
        <input
          id="imageFile"
          type="file"
          accept="image/*"
          onChange={SaveFile}
        />
      </div>
      <div>
        <InputLabel htmlFor="title">제목</InputLabel>
        <input id="title" type="text" name="title" />
      </div>
      <div>
        <InputLabel htmlFor="review">후기</InputLabel>
        <input id="review" type="text" name="reivew" />
      </div>
      <div>
        <InputLabel htmlFor="url">사이트 주소</InputLabel>
        <input id="url" type="text" name="inputUrl" />
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
      <button>확인</button>
    </AddPostDiv>
  );
}
export default ImageSelect;
