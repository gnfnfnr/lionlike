import React, { useState, useEffect } from "react";
import {
  Img,
  Section,
  SectionTop,
  SectionTitle,
  SectionMore,
  ContentsList,
  CommunityPost,
  SectionContainer,
  CommunityDiv,
  EachPostLi,
  EachPostTitle,
  EachPostAuthor,
  CommunityPostRepl,
  CommunityPostTitle,
} from "./styledComponents";
import recommendData from "../data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home({ apiUrl }) {
  const [firstPage, setFirstPage] = useState([]);
  const navigate = useNavigate();
  const onClickToon = () => {
    navigate("/more");
  };

  const onClickCommunity = () => {
    navigate("/community");
  };

  const getPostApi = () => {
    axios.get(`${apiUrl}list/?page=1&page_size=5`).then((response) => {
      setFirstPage(response.data.results);
    });
  };

  useEffect(getPostApi, []);
  return (
    <>
      <Section>
        <SectionContainer>
          <SectionTop>
            <SectionTitle>웹툰</SectionTitle>
            <SectionMore onClick={onClickToon}>
              더보기
              <FontAwesomeIcon icon={faArrowRight} />
            </SectionMore>
          </SectionTop>
          <ContentsList>
            {recommendData.map((web) => (
              <EachPostLi key={web.id}>
                <Img src={web.img} />
                <EachPostTitle>{web.title}</EachPostTitle>
                <EachPostAuthor>{web.author}</EachPostAuthor>
              </EachPostLi>
            ))}
          </ContentsList>
        </SectionContainer>
      </Section>
      <Section>
        <SectionContainer>
          <SectionTop>
            <SectionTitle>커뮤니티</SectionTitle>
            <SectionMore onClick={onClickCommunity}>
              더보기
              <FontAwesomeIcon icon={faArrowRight} />
            </SectionMore>
          </SectionTop>
          <CommunityDiv>
            {firstPage.map((data) => (
              <CommunityPost key={data.id}>
                <CommunityPostTitle>{data.title}</CommunityPostTitle>
                <CommunityPostRepl>댓글 2개</CommunityPostRepl>
              </CommunityPost>
            ))}
          </CommunityDiv>
        </SectionContainer>
      </Section>
    </>
  );
}

export default Home;
