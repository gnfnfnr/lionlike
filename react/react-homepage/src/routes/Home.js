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
  CommunityNew,
  CommunityPostTitle,
} from "./styledComponents";
import recommendData from "../data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faN } from "@fortawesome/free-solid-svg-icons";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import HomePost from "../components/HomePost";

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
  const [showInfo, setShowInfo] = useState(false);

  useEffect(getPostApi, []);
  return (
    <>
      <Section>
        <SectionContainer style={{ paddingTop: "0" }}>
          <SectionTop>
            <SectionTitle>웹툰</SectionTitle>
            <SectionMore onClick={onClickToon}>
              더보기
              <FontAwesomeIcon icon={faArrowRight} />
            </SectionMore>
          </SectionTop>
          <ContentsList>
            {recommendData.map((web) => (
              <HomePost
                web={web}
                key={web.id}
                showInfo={showInfo}
                setShowInfo={setShowInfo}
              />
            ))}
          </ContentsList>
          <Outlet />
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
                <CommunityNew>
                  <FontAwesomeIcon icon={faN} />
                </CommunityNew>
              </CommunityPost>
            ))}
          </CommunityDiv>
        </SectionContainer>
      </Section>
    </>
  );
}

export default Home;
