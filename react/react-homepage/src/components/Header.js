import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faBookBookmark,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainTitleHeader = styled.header`
  background-color: ${(props) => props.theme.headBgColor};
  padding: 25px;
`;

const MainTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoDiv = styled.div`
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
`;

const HeadIcon = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
  align-items: center;
`;

const Logout = styled.div`
  cursor: pointer;
  padding: 10px;
  background: #d1d1d1;
  border-radius: 18px;
`;

function Header({ darkMode, setDarkMode, login, setLogin }) {
  const navigate = useNavigate();
  const clickHome = () => {
    navigate(`/home`);
  };
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const clickLogout = () => {
    navigate(`/`);
    setLogin(false);
  };

  return (
    <MainTitleHeader>
      <MainTitleDiv>
        <LogoDiv onClick={clickHome}>
          <FontAwesomeIcon
            icon={faBookBookmark}
            style={{ paddingRight: "10px" }}
          />
          MoToon
        </LogoDiv>
        <HeadIcon>
          <FontAwesomeIcon
            icon={faPaintBrush}
            size="2x"
            style={
              darkMode
                ? { color: "9fc088", cursor: "pointer" }
                : { color: "#9F94B0", cursor: "pointer" }
            }
            onClick={toggleMode}
          />
          {login ? (
            <Logout onClick={clickLogout}>
              로그아웃
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                style={{ paddingLeft: "10px" }}
              />
            </Logout>
          ) : (
            <div>로그인중</div>
          )}
        </HeadIcon>
      </MainTitleDiv>
    </MainTitleHeader>
  );
}

export default React.memo(Header);
