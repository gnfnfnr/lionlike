import { GlobalStyle } from "./style";
import axios from "axios";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Main } from "./components/styledComponents";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        {/* <Home /> */}
        <Profile />
      </Main>

      <Footer />
    </>
  );
}

export default App;
