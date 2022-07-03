import React from "react";
import {
  Main,
  Img,
  Section,
  SectionTitle,
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

function Home() {
  return (
    <>
      <Section>
        <SectionContainer>
          <SectionTitle>소설</SectionTitle>
          <ContentsList>
            {recommendData.map((novel) => (
              <EachPostLi>
                <Img src={require(`../img/${novel.novel}.jpg`)} />
                <EachPostTitle>{novel.name}</EachPostTitle>
                <EachPostAuthor>작가</EachPostAuthor>
              </EachPostLi>
            ))}
          </ContentsList>
        </SectionContainer>
      </Section>
      <Section>
        <SectionContainer>
          <SectionTitle>웹툰</SectionTitle>
          <ContentsList>
            {recommendData.map((web) => (
              <EachPostLi>
                <Img src={require(`../img/${web.webtoon}.jpg`)} />
                <EachPostTitle>{web.name}</EachPostTitle>
                <EachPostAuthor>작가</EachPostAuthor>
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
