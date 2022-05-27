import {
  HeaderDiv,
  TitleLogoDiv,
  TitleBig,
  TitleSmall,
  SubHeaderDiv,
} from "../styledComponents";

function Headers({ darkMode, setDarkMode }) {
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <HeaderDiv>
      <TitleLogoDiv>
        <TitleBig>멋사</TitleBig>
        <TitleSmall>익명게시판</TitleSmall>
      </TitleLogoDiv>
      <SubHeaderDiv onClick={toggleMode}>
        {darkMode ? "다크모드" : "아님"}
      </SubHeaderDiv>
    </HeaderDiv>
  );
}

export default Headers;
