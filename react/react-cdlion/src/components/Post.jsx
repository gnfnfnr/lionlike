import {
  PostTitle,
  PostSection,
  PostTitleDiv,
  PostListDiv,
  LoadingDiv,
} from "../styledComponents";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faPenToSquare,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import EachPostList from "./EachPostList";

function Post({ loading, isPost, addPost, postList }) {
  return (
    <PostSection>
      <PostTitleDiv>
        <FontAwesomeIcon icon={faArrowsRotate} size="lg" onClick={addPost} />
        <PostTitle>익명게시판</PostTitle>
        <FontAwesomeIcon icon={faPenToSquare} size="lg" />
      </PostTitleDiv>
      <PostListDiv>
        {loading ? (
          <LoadingDiv>
            <FontAwesomeIcon icon={faSpinner} size="5x" />
          </LoadingDiv>
        ) : isPost ? (
          <LoadingDiv>아직 아무것도 없다고!!!!</LoadingDiv>
        ) : (
          <ul>
            {postList.map((li, index) => (
              <EachPostList
                key={index}
                title={li.title}
                repelCount={li.repelCount}
              />
            ))}
          </ul>
        )}
      </PostListDiv>
    </PostSection>
  );
}

export default Post;
