import React from "react";
import {
  Main,
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
import recommendData from "./data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
      <Section>
        <SectionContainer>
          <SectionTop>
            <SectionTitle>웹툰</SectionTitle>
            <SectionMore>
              더보기
              <FontAwesomeIcon icon={faArrowRight} />
            </SectionMore>
          </SectionTop>
          <ContentsList>
            {recommendData.map((web) => (
              <EachPostLi>
                <Img src={require(`../img/${web.img}.jpg`)} />
                <EachPostTitle>{web.title}</EachPostTitle>
                <EachPostAuthor>{web.author}</EachPostAuthor>
              </EachPostLi>
            ))}
          </ContentsList>
        </SectionContainer>
      </Section>
      <Section>
        <SectionContainer>
          <SectionTitle>커뮤니티</SectionTitle>
          <CommunityDiv>
            <CommunityPost>
              <CommunityPostTitle>1화 대박</CommunityPostTitle>
              <CommunityPostRepl>댓글 2개</CommunityPostRepl>
            </CommunityPost>
            <CommunityPost>
              <CommunityPostTitle>왜 연재중이냐</CommunityPostTitle>
              <CommunityPostRepl>댓글 1개</CommunityPostRepl>
            </CommunityPost>
          </CommunityDiv>
        </SectionContainer>
      </Section>
    </>
  );
}

export default Home;
