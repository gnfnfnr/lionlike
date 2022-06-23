import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getMovie } from "./data";

const Movie = () => {
  const movie = getMovie(parseInt(useParams().id));
  // console.log(useParams(), movie);

  const locateion = useLocation();
  // console.log(locateion);

  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");

  const handClick = () => {
    setSearchParams({ detail: detail === "true" ? false : true });
    console.log(detail, searchParams);
  };
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>연도: {movie.year}</p>
      <p>줄거리: {movie.detail}</p>
      <button type="button" onClick={handClick}>
        자세히
      </button>
      {detail === "true" ? <div>{movie.title}</div> : ""}
    </div>
  );
};

export default Movie;
