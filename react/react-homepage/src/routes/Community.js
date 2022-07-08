import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCaretRight,
  faSquareCaretLeft,
} from "@fortawesome/free-solid-svg-icons";

const CommunityBox = styled.div`
  width: 80vw;
  margin: 0 auto;
  background-color: ${(props) => props.theme.boardBgColor};
  padding: 40px;
  height: 760px;
`;

const CommunityTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  padding-bottom: 10px;
  border-bottom: 2px solid ${(props) => props.theme.headBgColor};
  margin-bottom: 20px;
`;

const CommunitySort = styled.div`
  font-weight: bold;
  font-size: 18px;
  padding: 0 20px 10px;
  border-bottom: 2px solid ${(props) => props.theme.cmBorder};
  margin-bottom: 20px;
  color: ${(props) => props.theme.cmFontColor};
`;

const CommunityPost = styled.li`
  cursor: pointer;
  border: 1px solid #c1c1c1;
  margin-bottom: 20px;
  padding: 12px 30px;
  display: flex;
  justify-content: space-between;
  &:hover {
    box-shadow: 1px 3px 5px 0px #63665b;
  }
`;

const CommunityPostTitle = styled.div`
  font-weight: bold;
`;

const CommunityPostRepl = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const PageNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CurrentPage = styled.div`
  font-size: 14px;
  padding: 0 10px;
  color: #6a6a6a;
`;

const PageNumberDiv = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

const PostBtn = styled.div`
  float: right;
  padding: 12px;
  background-color: #964b00;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

const NextPageBtn = styled.button`
  all: unset;
  cursor: pointer;
`;

const PrevPageBtn = styled.button`
  all: unset;
  cursor: pointer;
`;

const Community = function Community({ apiUrl }) {
  const navigator = useNavigate();
  const onClick = (event) => {
    navigator(`/community/post${event.target.id}`);
  };
  const onClickWrite = () => {
    navigator("/community/addpost");
  };

  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(1);
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hiddenRight, setHiddenRight] = useState(false);
  const [hiddenLeft, setHiddenLeft] = useState(false);
  const getPostApi = () => {
    axios.get(`${apiUrl}list/?page=${page}&page_size=10`).then((response) => {
      const lastPages = Math.ceil(response.data.count / 10);
      const tempages = [];
      for (let index = 1; index <= lastPages; index++) {
        tempages.push(index);
      }
      setPages(tempages);
      setPostList(response.data.results);
      setLoading(false);
      if (response.data.next === null) {
        setHiddenRight(true);
        setHiddenLeft(false);
      } else if (response.data.previous === null) {
        setHiddenLeft(true);
        setHiddenRight(false);
      } else {
        setHiddenRight(false);
        setHiddenLeft(false);
      }
    });
  };
  useEffect(getPostApi, [page]);
  return (
    <CommunityBox>
      <CommunityTitle>커뮤니티</CommunityTitle>
      <CommunitySort>최신순</CommunitySort>
      {loading ? (
        <div>로딩중</div>
      ) : (
        <ul>
          {postList.map((li) => {
            return (
              <CommunityPost key={li.id} id={li.id} onClick={onClick}>
                <CommunityPostTitle>{li.title}</CommunityPostTitle>
                <CommunityPostRepl>댓글 1개</CommunityPostRepl>
              </CommunityPost>
            );
          })}
        </ul>
      )}
      <PageNumber>
        <PrevPageBtn
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
          style={hiddenLeft ? { display: "none" } : { display: "block" }}
        >
          <FontAwesomeIcon icon={faSquareCaretLeft} size="2x" />
        </PrevPageBtn>
        {pages.map((num) => {
          return (
            <PageNumberDiv
              key={num}
              onClick={() => {
                setPage(num);
              }}
            >
              {num}
            </PageNumberDiv>
          );
        })}
        <CurrentPage>{`${page} / ${pages[pages.length - 1]}`}</CurrentPage>
        <NextPageBtn
          onClick={() => {
            if (pages.length > page) {
              setPage(page + 1);
            }
          }}
          style={hiddenRight ? { display: "none" } : { display: "block" }}
        >
          <FontAwesomeIcon icon={faSquareCaretRight} size="2x" />
        </NextPageBtn>
      </PageNumber>
      <PostBtn onClick={onClickWrite}>글쓰기</PostBtn>
    </CommunityBox>
  );
};

export default Community;
