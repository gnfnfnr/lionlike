import React from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Menubar = () => {
  const navigate = useNavigate();
  const clickHome = () => {
    navigate("/");
  };
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/movies">movies</Link>
        </li>
      </ul>
      <button onClick={clickHome} type="button">
        홈으로 가기
      </button>
      <Outlet />
    </div>
  );
};

export default Menubar;
