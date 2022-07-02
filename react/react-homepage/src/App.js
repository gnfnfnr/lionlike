import {
  LogoDiv,
  MainTitleDiv,
  MainTitleHeader,
  Main,
  Img,
  Section,
  SectionTitle,
  ContentsList,
  CommunityPost,
  SectionContainer,
  Footer,
  FooterAbout,
  FooterMade,
  CommunityDiv,
  EachPostLi,
  EachPostTitle,
  EachPostAuthor,
  CommunityPostRepl,
  CommunityPostTitle,
} from "./styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import recommendData from "./data.js";
import { GlobalStyle } from "./style";

function App() {
  return (
    <>
      <GlobalStyle />
      <MainTitleHeader>
        <MainTitleDiv>
          <LogoDiv>WebN</LogoDiv>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </MainTitleDiv>
      </MainTitleHeader>
      <Main>
        <Section>
          <SectionContainer>
            <SectionTitle>소설</SectionTitle>
            <ContentsList>
              {recommendData.map((novel) => (
                <EachPostLi>
                  <Img src={require(`./img/${novel.novel}.jpg`)} />
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
                  <Img src={require(`./img/${web.webtoon}.jpg`)} />
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
      </Main>
      <Footer>
        <FontAwesomeIcon
          icon={faBookBookmark}
          size="3x"
          style={{ color: "#9fc088" }}
        />
        <FooterAbout>웹툰, 웹소설에 대한 모든 것</FooterAbout>
        <FooterMade>copyright: yeon</FooterMade>
      </Footer>
    </>
  );
}

export default App;
