import { GlobalStyle } from "./style";
import axios from "axios";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Main } from "./components/styledComponents";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import ImageSelect from "./components/ImageSelect";
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Navbar />
      <Main>
        <Home />
        {/* <Profile /> */}
        <ImageSelect />
      </Main>

      <Footer />
    </>
  );
}

export default App;
