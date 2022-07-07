import { createGlobalStyle } from "styled-components";

import reset from "styled-reset";

export const lightTheme = {
  fontColor: "black",
  bgColor: "white",
};

export const darkTheme = {
  fontColor: "#817e3d",
  bgColor: "#403d36e6",
};

export const GlobalStyle = createGlobalStyle`
    ${reset}

    body{
        background-color: #f5fdef;
        font-family: "Noto Sans KR", sans-serif;
    }
`;
