import { useNavigate } from "react-router-dom";
import {
  HeaderDiv,
  TitleLogoDiv,
  TitleBig,
  TitleSmall,
  SubHeaderDiv,
  CursorDiv,
} from "../styledComponents";

function Headers({ darkMode, setDarkMode }) {
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
  };

  return (
    <HeaderDiv>
      <TitleLogoDiv>
        <CursorDiv>
          <TitleBig onClick={onClick}>멋사</TitleBig>
        </CursorDiv>
        <TitleSmall>익명게시판</TitleSmall>
      </TitleLogoDiv>
      <SubHeaderDiv onClick={toggleMode}>
        {darkMode ? "다크모드" : "아님"}
      </SubHeaderDiv>
    </HeaderDiv>
  );
}

export default Headers;
