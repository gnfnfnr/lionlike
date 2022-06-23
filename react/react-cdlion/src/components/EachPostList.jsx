import { EachPostLi, PostRepl, PostLink, CursorDiv } from "../styledComponents";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function EachPostList({ title, id }) {
  const navigate = useNavigate();
  const clickPost = () => {
    navigate(`/post/${id}`);
  };
  return (
    <EachPostLi>
      <CursorDiv>
        <FontAwesomeIcon icon={faLocationPin} />
        <PostLink onClick={clickPost}>{title}</PostLink>
      </CursorDiv>
    </EachPostLi>
  );
}

export default EachPostList;
