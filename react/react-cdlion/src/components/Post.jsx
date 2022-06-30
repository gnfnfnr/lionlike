import { useNavigate } from "react-router-dom";

import { useState, useEffect, useCallback } from "react";
import {
  PostTitle,
  PostSection,
  PostTitleDiv,
  PostListDiv,
  LoadingDiv,
  CursorDiv,
  PagingSection,
  PagenumberDiv,
} from "../styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faPenToSquare,
  faSpinner,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import EachPostList from "./EachPostList";
import axios from "axios";

function Post({ apiUrl }) {
  const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);

  const navigation = useNavigate();
  const clickWrite = () => {
    navigation("/write");
  };

  const getPostList = () => {
    setLoading(true);
    axios.get(`${apiUrl}list/?page=${page}&page_size=10`).then((response) => {
      const lastPages = Math.ceil(response.data.count / 10);
      const tempages = [];
      for (let index = 1; index <= lastPages; index++) {
        tempages.push(index);
      }
      setPages(tempages);
      setPostList(response.data.results);
      setLoading(false);
    });
  };

  useEffect(getPostList, [page]);
  return (
    <>
      <PostSection>
        <PostTitleDiv>
          <CursorDiv>
            <FontAwesomeIcon
              icon={faArrowsRotate}
              size="lg"
              onClick={getPostList}
            />
          </CursorDiv>
          <PostTitle>익명게시판</PostTitle>
          <CursorDiv>
            <FontAwesomeIcon
              onClick={clickWrite}
              icon={faPenToSquare}
              size="lg"
            />
          </CursorDiv>
        </PostTitleDiv>
        <PostListDiv>
          {loading ? (
            <LoadingDiv>
              <FontAwesomeIcon icon={faSpinner} size="5x" />
            </LoadingDiv>
          ) : postList.length === 0 ? (
            <LoadingDiv>아직 아무것도 없다고!!!!</LoadingDiv>
          ) : (
            <ul>
              {postList.map((li, index) => (
                <EachPostList key={index} title={li.title} id={li.id} />
              ))}
            </ul>
          )}
        </PostListDiv>
      </PostSection>
      <PagingSection>
        <PagenumberDiv>
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }}
          />
        </PagenumberDiv>
        {pages.map((pageNum) => (
          <PagenumberDiv
            key={pageNum}
            onClick={() => {
              setPage(pageNum);
            }}
          >
            {pageNum}
          </PagenumberDiv>
        ))}
        <PagenumberDiv>
          <FontAwesomeIcon
            icon={faArrowRight}
            onClick={() => {
              if (pages.length > page) {
                setPage(page + 1);
              }
            }}
          />
        </PagenumberDiv>
      </PagingSection>
    </>
  );
}

export default Post;
