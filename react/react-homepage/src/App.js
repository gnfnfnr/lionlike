import { GlobalStyle } from "./style";
import axios from "axios";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Main } from "./components/styledComponents";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import AddPost from "./components/AddPost";
import More from "./components/More";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Navbar />
      <Main>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/more"} element={<More />}>
            {/* <Route path={"/more/add"} element={<AddPost />}></Route> */}
          </Route>
        </Routes>
        {/* <AddPost /> */}
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
