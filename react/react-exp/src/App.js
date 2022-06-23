import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menubar from "./pages/Menubar";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}>
          <Route path=":id" element={<Movie />}></Route>
        </Route>
      </Route>
      <Route path="*" element={<div>아무것도 없음</div>}></Route>
    </Routes>
  );
};

export default App;
