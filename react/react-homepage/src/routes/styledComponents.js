import styled from "styled-components";

export const Main = styled.main`
  padding: 50px 0;
`;

export const Section = styled.section``;

export const SectionContainer = styled.div`
  padding-top: 40px;
  width: 1000px;
  margin: 0 auto;
`;

export const SectionTop = styled.div`
  border-bottom: 1px black solid;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const SectionTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const SectionMore = styled.div`
  font-size: 14px;
  color: #5e5e5e;
  cursor: pointer;
  &:hover {
    color: #666c61;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const ContentsList = styled.ul`
  background-color: #597346;
  margin-top: 25px;
  box-shadow: 6px 8px 5px 0px #35402d;
  display: flex;
  justify-content: center;
`;

export const EachPostLi = styled.li`
  margin: 20px;
`;

export const EachPostTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
`;

export const EachPostAuthor = styled.div`
  color: #clclcl;
`;

export const Img = styled.img`
  width: 200px;
  height: 280px;
  object-fit: cover;
`;

export const CommunityDiv = styled.div`
  padding: 25px;
  background-color: #597346;
  margin-top: 25px;
`;

export const CommunityPost = styled.div`
  cursor: pointer;
  border: 1px solid black;
  margin-bottom: 20px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  &:hover {
    color: yellow;
    box-shadow: 1px 3px 5px 0px #cccbd3;
  }
`;

export const CommunityPostTitle = styled.div`
  font-weight: bold;
`;

export const CommunityPostRepl = styled.div`
  font-weight: bold;
  font-size: 12px;
`;

export const FooterInfo = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterAbout = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin 10px 0;
`;

export const FooterMade = styled.div`
  font-size: 14px;
`;
