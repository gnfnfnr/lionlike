import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const CommunityBox = styled.div`
  width: 80vw;
  margin: 0 auto;
  background-color: #e0e6cc;
  padding: 40px;
`;

const CommunityTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  padding-bottom: 10px;
  border-bottom: 2px solid #9fc088;
  margin-bottom: 20px;
`;

const CommunitySort = styled.div`
  font-weight: bold;
  font-size: 18px;
  padding: 0 20px 10px;
  border-bottom: 2px solid #9fc08861;
  margin-bottom: 20px;
  color: #3f6820;
`;

const CommunityPost = styled.li`
  cursor: pointer;
  border: 1px solid #c1c1c1;
  margin-bottom: 20px;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  &:hover {
    color: yellow;
    box-shadow: 1px 3px 5px 0px #cccbd3;
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
`;

const PageNumberDiv = styled.div`
  padding: 10px;
  cursor: pointer;
`;

function Community({ apiUrl }) {
  const navigator = useNavigate();
  const onClick = (event) => {
    navigator(`/community/post${event.target.id}`);
  };
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(1);
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(true);
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
    });
  };
  useEffect(getPostApi, [page]);
  return (
    <CommunityBox>
      <CommunityTitle>커뮤니티</CommunityTitle>
      <CommunitySort>최신순</CommunitySort>
      {loading ? (
        <div>로딩중ㅇ이다</div>
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
      </PageNumber>
      {/* <div className={styles.arrow__button}>
        <button
          className={trans ? styles.arrow__left : styles.hidden}
          onClick={onClickL}
        >
          <FontAwesomeIcon icon={faCircleChevronLeft} size="2x" />
        </button>
        <button
          className={trans === -5280 ? styles.hidden : styles.arrow__right}
          onClick={onClickR}
        >
          <FontAwesomeIcon icon={faCircleChevronRight} size="2x" />
        </button>
      </div> */}
    </CommunityBox>
  );
}

export default Community;
