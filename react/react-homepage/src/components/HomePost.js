import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Img,
  EachPostLi,
  EachPostTitle,
  EachPostAuthor,
} from "../routes/styledComponents";

function HomePost({ web, showInfo, setShowInfo }) {
  const navigate = useNavigate();
  const onClick = () => {
    setShowInfo(!showInfo);
    navigate(`/home/${web.id}`);
  };
  return (
    <EachPostLi onClick={onClick}>
      <Img src={web.img} />
      <EachPostTitle>{web.title}</EachPostTitle>
      <EachPostAuthor>{web.author}</EachPostAuthor>
    </EachPostLi>
  );
}

export default HomePost;
