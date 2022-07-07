import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useEffect, useCallback } from "react";

const InputLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
  padding-right: 10px;
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

const AddImg = styled.img`
  width: 200px;
  height: 320px;
  object-fit: contain;
`;

const SelectImg = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding: 50px;
`;

const LabelAndInput = styled.div`
  padding: 10px 0;
}
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Btn = styled.button`
  width: 110px;
  height: 42px;
  border: none;
  margin: 10px;
  border-radius: 20px;
  cursor: pointer;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Input = styled.input`
  outline: none;
  padding: 5px 2px;
  border: 1px solid #597346;
`;

function AddPost({ onClick, result, setMoveAddPost, dataCount }) {
  const titleInput = useRef();
  useEffect(() => {
    titleInput.current.focus();
  }, []);

  const [fileImage, setFileImage] = useState();
  const [inputs, setInputs] = useState({
    id: dataCount,
    img: "",
    title: "",
    author: "",
    review: "",
    url: "",
  });
  const { img, title, author, review, url } = inputs;
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
      <FormDiv>
        <LabelAndInput>
          <InputLabel htmlFor="title">제목</InputLabel>
          <Input
            onChange={onChange}
            id="title"
            type="text"
            name="title"
            ref={titleInput}
          />
        </LabelAndInput>
        <LabelAndInput>
          <InputLabel htmlFor="author">작가</InputLabel>
          <Input onChange={onChange} id="author" type="text" name="author" />
        </LabelAndInput>
        <LabelAndInput>
          <InputLabel htmlFor="review">후기</InputLabel>
          <Input onChange={onChange} id="review" type="text" name="reivew" />
        </LabelAndInput>
        <LabelAndInput>
          <InputLabel htmlFor="url">사이트 주소</InputLabel>
          <Input type="url" onChange={onChange} id="url" name="url" />
        </LabelAndInput>
        <LabelAndInput>
          <InputLabel htmlFor="imageFile">이미지 파일 선택</InputLabel>
          <Input
            id="imageFile"
            type="file"
            name="img"
            accept="image/*"
            onChange={(event) => {
              SaveFile(event);
            }}
          />
        </LabelAndInput>
      </FormDiv>
      {fileImage ? (
        <AddImg src={fileImage} alt="잘못된 이미지 입니다" />
      ) : (
        <SelectImg>사진을 선택해주세요</SelectImg>
      )}
      <BtnBox>
        <Btn onClick={onClickInfo}>확인</Btn>
        <Btn onClick={onClick}>취소</Btn>
      </BtnBox>
    </AddPostDiv>
  );
}
export default AddPost;
