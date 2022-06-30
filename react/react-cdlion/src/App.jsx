import React, { useState } from "react";

import { MediaDiv, Main } from "./styledComponents";
import { darkTheme, GlobalStyle, lightTheme } from "./style";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Solgun from "./components/Slogun";
import Post from "./components/Post";
import Footer from "./components/Footer";
import ShowPost from "./components/ShowPost";
import WritePost from "./components/WritePost";

const API_URL = "https://reactapitest.pythonanywhere.com/api/";

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
              <Route path="/" element={<Post apiUrl={API_URL} />}></Route>
              <Route
                path="/write"
                element={<WritePost apiUrl={API_URL} />}
              ></Route>
              <Route
                path="/post/:id"
                element={<ShowPost apiUrl={API_URL} />}
              ></Route>
            </Routes>
          </Main>
          <Footer />
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
