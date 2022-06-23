import React, { useState } from "react";

import { MediaDiv, Main } from "./styledComponents";
import { darkTheme, GlobalStyle, lightTheme } from "./style";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Solgun from "./components/Slogun";
import Post from "./components/Post";
import PageNumber from "./components/PageNumber";
import Footer from "./components/Footer";
import ShowPost from "./components/ShowPost";
import WritePost from "./components/WritePost";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <MediaDiv>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Solgun />
            <Routes>
              <Route path="/" element={<Post />}></Route>
              <Route path="/write" element={<WritePost />}></Route>
              <Route path="/post/:id" element={<ShowPost />}></Route>
            </Routes>

            <PageNumber />
          </Main>
          <Footer />
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
