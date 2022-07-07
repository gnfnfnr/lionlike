import { createGlobalStyle } from "styled-components";

import reset from "styled-reset";

export const lightTheme = {
  sctionBgColor: "#597346",
  headBgColor: "#9fc088",
  boardBgColor: "#e0e6cc",
  cmBorder: "#9fc08861",
  cmFontColor: "#3f6820",
  shadow: "#35402d",
};

export const darkTheme = {
  sctionBgColor: "#8c698f",
  headBgColor: "#9F94B0",
  boardBgColor: "#d3d3d3",
  cmBorder: "#9f94b070",
  cmFontColor: "#513f6c",
  shadow: "#4D3A4F",
};

export const GlobalStyle = createGlobalStyle`
    ${reset}

    body{
        background-color: #f5fdef;
        font-family: "Noto Sans KR", sans-serif;
    }
`;
