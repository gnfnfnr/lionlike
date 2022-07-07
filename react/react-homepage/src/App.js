import { GlobalStyle } from "./style";
import Header from "./routes/Header";
import Home from "./routes/Home";
import Footer from "./routes/Footer";
import { Main } from "./routes/styledComponents";
import Profile from "./routes/Profile";
import Navbar from "./components/Navbar";
import Community from "./routes/Community";
import AddCommunityPost from "./routes/AddCommunityPost";
import More from "./routes/More";
import EachCommunityPost from "./routes/EachCommunityPost";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  const API_URL = "https://reactapitest.pythonanywhere.com/api/";

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Navbar />
      <Main>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/more"} element={<More />}></Route>
          <Route
            path={"/community"}
            element={<Community apiUrl={API_URL} />}
          ></Route>
          <Route
            path={"/community/post:id"}
            element={<EachCommunityPost apiUrl={API_URL} />}
          ></Route>
          <Route
            path={"/community/addpost"}
            element={<AddCommunityPost apiUrl={API_URL} />}
          ></Route>
          <Route path={"/profile"} element={<Profile />}></Route>
          <Route path="/*" element={<h1>존재하지 않는 페이지입니다.</h1>} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
