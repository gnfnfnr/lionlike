import { createGlobalStyle } from "styled-components";

import reset from "styled-reset";

export const lightTheme = {
  fontColor: "black",
  bgColor: "white",
};

export const darkTheme = {
  fontColor: "white",
  bgColor: "black",
};

export const GlobalStyle = createGlobalStyle`
    ${reset}
`;
