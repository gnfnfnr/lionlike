import React, { useState } from "react";

import { MediaDiv, Main } from "./styledComponents";
import { darkTheme, GlobalStyle, lightTheme } from "./style";
import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import Solgun from "./components/Slogun";
import Post from "./components/Post";
import PageNumber from "./components/PageNumber";
import Footer from "./components/Footer";

function App() {
  const initialPostList = [
    { id: 1, title: "리액트 시작", repelCount: 1 },
    { id: 1, title: "화산귀한 최고", repelCount: 45 },
    { id: 1, title: "매화검존", repelCount: 1200 },
  ];
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isPost, setIsPost] = useState(false);
  const [postList, setPostList] = useState(initialPostList);

  const addPost = () => {
    setPostList((postLi) => [
      ...postLi,
      { id: 4, title: "청명아", repelCount: 44 },
    ]);
  };
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <MediaDiv>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Solgun />
            <Post
              loading={loading}
              isPost={isPost}
              postList={postList}
              addPost={addPost}
            />
            <PageNumber />
          </Main>
          <Footer />
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
