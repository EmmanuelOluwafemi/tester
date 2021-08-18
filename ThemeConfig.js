
import { createGlobalStyle } from 'styled-components';

import pattern from "./assets/images/pattern.jpg";

export const theme = {
  color : {
    primary : "#32E0C4",
    secondary: "#FFE000",
    dark: "#181E2C",
    dark700: "#101932",
    lightDark: "#1A2130",
    white: "#fff",
    gray: "#C4C4C4",
    gray300: "#1D2740",
  },
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        width: 100%;
        max-width: 100vw;
        overflow-x: hidden;
        background: ${(p) => p.theme.color.dark};
        background-image: url(${pattern});
        color: ${(p) => p.theme.color.white};
    }
`