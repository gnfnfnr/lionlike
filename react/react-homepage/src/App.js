import React, { useState } from "react";
import { darkTheme, GlobalStyle, lightTheme } from "./style";
import Header from "./components/Header";
import Login from "./routes/Login";
import Home from "./routes/Home";
import More from "./routes/More";
import Navbar from "./components/Navbar";
import Profile from "./routes/Profile";
import Community from "./routes/Community";
import AddPost from "./routes/AddCommunity";
import Footer from "./components/Footer";
import EachPost from "./routes/EachPost";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

function App() {
  const API_URL = "https://reactapitest.pythonanywhere.com/api/";
  const [darkMode, setDarkMode] = useState(false);
  const [login, setLogin] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          login={login}
          setLogin={setLogin}
        />
        <Navbar darkMode={darkMode} />
        <main style={{ padding: "50px 0" }}>
          <Routes>
            <Route
              path={"/"}
              element={<Login login={login} setLogin={setLogin} />}
            ></Route>
            <Route path={"/Home"} element={<Home apiUrl={API_URL} />}></Route>
            <Route path={"/more"} element={<More />}></Route>
            <Route
              path={"/community"}
              element={<Community apiUrl={API_URL} />}
            ></Route>
            <Route
              path={"/community/post:id"}
              element={<EachPost apiUrl={API_URL} />}
            ></Route>
            <Route
              path={"/community/addpost"}
              element={<AddPost apiUrl={API_URL} />}
            ></Route>
            <Route path={"/profile"} element={<Profile />}></Route>
            <Route path="/*" element={<h1>존재하지 않는 페이지입니다.</h1>} />
          </Routes>
        </main>
        <Footer darkMode={darkMode} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
