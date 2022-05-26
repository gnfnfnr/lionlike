import React, { Component, useState } from 'react';

import  
  { 
    MediaDiv, Header, TitleLogoDiv, TitleBig, TitleSmall, Main, SlogunSection, SlogunSmall, SlogunBig, SubHeaderDiv, PostTitle,
    PostSection, PostTitleDiv, PostListDiv, EachPostLi, PostRepl, PagingSection, PagenumberDiv, PostLink, FooterBig, Footer, FooterSmall, LoadingDiv
  }   
  from './styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowsRotate, faLocationPin, faPenToSquare, faArrowLeft,faArrowRight, faLeaf, faSpinner} from '@fortawesome/free-solid-svg-icons';
import { darkTheme, GlobalStyle, lightTheme } from './style';
import { ThemeProvider } from 'styled-components';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isPost, setIsPost] = useState(false);

  const toggleMode = () =>{
    setDarkMode(!darkMode);
};
  return(
    <>
      <ThemeProvider theme={darkMode? darkTheme: lightTheme}>
        <GlobalStyle />
        <MediaDiv>
        <Header>
          <TitleLogoDiv>
            <TitleBig>멋사</TitleBig>
            <TitleSmall>익명게시판</TitleSmall>
          </TitleLogoDiv>
          <SubHeaderDiv onClick={toggleMode}>{darkMode? "다크모드": "아님"}</SubHeaderDiv>
        </Header>
        <Main>
          <SlogunSection>
            <SlogunBig>Hack Your Life</SlogunBig>
            <SlogunSmall>내 아이디어를 내 손으로 실현하다.</SlogunSmall>
          </SlogunSection>
          <PostSection>  
            <PostTitleDiv>
              <FontAwesomeIcon icon={faArrowsRotate} size='lg'/>
              <PostTitle>익명게시판</PostTitle>
              <FontAwesomeIcon icon={faPenToSquare} size='lg'/>
            </PostTitleDiv>
            <PostListDiv>
              {loading? (
                <LoadingDiv>
                  <FontAwesomeIcon icon={faSpinner} size="5x"/>
                </LoadingDiv>
              ): isPost? (
                  <LoadingDiv>아직 아무것도 없다고!!!!</LoadingDiv>)
                : (<ul>
                    <EachPostLi>
                      <div>
                        <FontAwesomeIcon icon={faLocationPin}/>
                        <PostLink>리액트 시작</PostLink>
                      </div>
                      <PostRepl>[35]</PostRepl>
                    </EachPostLi>
                  </ul>
              )}
            </PostListDiv>
          </PostSection>
          <PagingSection>
            <PagenumberDiv>
              <FontAwesomeIcon icon={faArrowLeft}/>
            </PagenumberDiv>
            <PagenumberDiv>2</PagenumberDiv>
            <PagenumberDiv>
            <FontAwesomeIcon icon={faArrowRight}/>
            </PagenumberDiv>
          </PagingSection>
        </Main>
        <Footer>
          <FontAwesomeIcon icon = {faLeaf} size='2x'/>
          <FooterBig>REACT study</FooterBig>
          <FooterSmall>2022.5.26 목요일, by yeon</FooterSmall>
        </Footer>
        </MediaDiv>
    </ThemeProvider>
    </>
  )
}

export default App; 