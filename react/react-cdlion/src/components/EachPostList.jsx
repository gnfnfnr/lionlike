import React from "react";
import { EachPostLi, PostRepl, PostLink } from "../styledComponents";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

function EachPostList({ title, repelCount }) {
  return (
    <EachPostLi>
      <div>
        <FontAwesomeIcon icon={faLocationPin} />
        <PostLink>{title}</PostLink>
      </div>
      <PostRepl>[{repelCount}]</PostRepl>
    </EachPostLi>
  );
}

export default EachPostList;
