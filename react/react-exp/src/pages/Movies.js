import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { getMovies } from "./data";

const Movies = () => {
  const movies = getMovies();

  return (
    <div>
      <h1>내용물임</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <NavLink
            to={`/movies/${movie.id}`}
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline" : "",
                color: isActive ? "orange" : "",
              };
            }}
          >
            {movie.title}
          </NavLink>
        </div>
      ))}
      <hr />
      <Outlet />
    </div>
  );
};

export default Movies;
