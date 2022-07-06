import { GlobalStyle } from "./style";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Main } from "./components/styledComponents";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Community from "./components/Community";
import More from "./components/More";
import EachCommunityPost from "./components/EachCommunityPost";
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
          <Route path={"/community"} element={<Community apiUrl={API_URL} />}>
            <Route
              path={"/community/post:id"}
              element={<EachCommunityPost apiUrl={API_URL} />}
            ></Route>
          </Route>
          <Route path={"/profile"} element={<Profile />}></Route>
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
