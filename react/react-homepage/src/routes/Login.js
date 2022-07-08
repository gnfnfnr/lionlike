import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginInputDiv = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginInput = styled.input`
  width: 250px;
  font-size: 18px;
  padding: 8px 5px;
`;

const InputBox = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

const LoginBtn = styled.div`
  background-color: ${(props) => props.theme.cmBorder};
  font-size: 20px;
  font-weight: bold;
  padding: 20px 150px;
  cursor: pointer;
`;

function Login({ login, setLogin }) {
  const inputId = useRef();
  useEffect(() => {
    inputId.current.focus();
  }, []);
  const navigate = useNavigate();
  const onClick = () => {
    console.log(login);
    setLogin(!login);
    navigate("/home");
  };
  return (
    <LoginInputDiv>
      <InputBox>
        <label htmlFor="loginId">아이디</label>
        <LoginInput
          id="loginId"
          placeholder="아이디를 입력해주세요"
          ref={inputId}
        />
      </InputBox>
      <InputBox>
        <label htmlFor="loginPassword">비밀번호</label>
        <LoginInput id="loginPassword" placeholder="비밀번호를 입력해주세요" />
      </InputBox>
      <LoginBtn onClick={onClick}>로그인</LoginBtn>
    </LoginInputDiv>
  );
}

export default Login;
