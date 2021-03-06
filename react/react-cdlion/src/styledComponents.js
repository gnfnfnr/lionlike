import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const MediaDiv = styled.div`
  margin: 0px auto;
  min-height: 100vh;
  width: 768px;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.bgColor};
  @media screen and (max-width: 768px) {
    width: 100%;
  } ;
`;

export const HeaderDiv = styled.div`
  width: 768px;
  height: auto;
  display: flex;
  justify-content: space-between;
  font-family: "Black Han Sans", sans-serif;
  position: absolute;
  @media screen and (max-width: 768px) {
    width: 100%;
  } ;
`;

export const TitleLogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  margin: 15px;
  lien-height: 1;
`;

export const TitleBig = styled.span`
  font-size: 40px;
`;

export const TitleSmall = styled.span`
  font-size: 20px;
`;

export const SubHeaderDiv = styled.div`
  margin: 15px;
  font-size: 25px;
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 10px;

  &:hover {
    color: #777487;
    box-shadow: 1px 3px 5px 0px #cccbd3;
    border-radius: 20px;
  }
`;

export const Main = styled.div`
  padding-top: 90px;
`;

export const SlogunSection = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SlogunBig = styled.span`
  font-size: 40px;
  font-family: "League Spartan", sans-serif;
  font-weight: bold;
`;

export const SlogunSmall = styled.span`
  margin: 3px;
  font-weight: bold;
  color: #f39926;
`;

export const PostSection = styled.div`
  margin: 0px auto;
  margin-top: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const PostTitleDiv = styled.div`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  color: white;
  background-color: #f39926;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const PostTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
  font-family: "Black Han Sans", sans-serif;
  font-size: 25px;
`;

export const PostListDiv = styled.div`
  font-size: 16px;
  font-family: "Moto Sans KR", sans-serif;
  min-height: 400px;
  background-color: #fffaf4;
`;

export const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
  padding: 30px;
`;

export const EachPostLi = styled.li`
  margin: 14px;
  display: flex;
  justify-content: space-between;
`;

export const PostLink = styled.span`
  margin-left: 5px;
`;

export const PostRepl = styled.div`
  font-family: "Courier New", Courier, monospace;
`;

export const PagingSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto:
    width: 150px; 
    margin-top: 20px;
`;

export const PagenumberDiv = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #a6640d;
  border-radius: 5px;
  cursor: pointer;
`;

export const FooterDiv = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterBig = styled.span`
  margin: 5px;
  font-size: 14px;
`;

export const FooterSmall = styled.span`
  margin: 5px;
  font-size: 12px;
`;

export const CursorDiv = styled.div`
  cursor: pointer;
`;

export const PostReplDiv = styled.div`
  border-top: 2px solid orange;
  margin-bottom: 15px;
  width: 100%;
  line-height: 24px;
  padding-top: 20px;
  padding-left: 10px;
  box-sizing: border-box;
`;

export const RepelTitleDiv = styled.div`
  font-size: 12px;
  margin: 20px 0 10px 10px;
`;

export const RepelWriter = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  font-weight: bolder;
`;

export const Repel = styled.div`
  font-size: 12px;
  margin-left: 20px;
`;

export const WriterDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 95%;
`;

export const RepelInput = styled.textarea`
  margin: 0 auto;
  width: 100%;
  padding: 10px;
  height: 30px;
  border-radius: 5px;
  font-family: "Noto Sans KR", sans-serif;
`;

export const RepelSubmitDiv = styled.div`
  width: 100px;
  margin-left: 10px;
  border-radius: 5px;
  background-color: #f39926;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  color: white;
`;

export const PostWriteDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleInput = styled.input`
  margin: 20px 15px 0;
  height: 30px;
`;

export const ContentsInput = styled.textarea`
  margin: 20px 15px 0;
  padding: 10px;
  border-radius: 5px;
  font-family: "Noto Sans KR", sans-serif;
`;

export const PostSubmitDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const PostSubmit = styled.button`
  height: 40px;
  width: 100px;
  background: orange;
  border: none;
  border-radius: 20px;
  box-shadow: 2px 2px 3px 1px #ab9982;
  cursor: pointer;
`;
