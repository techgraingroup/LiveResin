import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"
import { THEME } from "../data"

import montBold from "../fonts/mont/Mont-Bold.otf"
import montBook from "../fonts/mont/Mont-Book.otf"
import montHeavy from "../fonts/mont/Mont-Heavy.otf"
import montRegular from "../fonts/mont/Mont-Regular.otf"
import montSemibold from "../fonts/mont/Mont-Semibold.otf"

const {
  headerHeight,
  breakpoints: { md },
} = THEME

export const GlobalStyle = createGlobalStyle`
  ${normalize};
  @font-face {
    font-family: MontBold;
    src: url(${montBold}) format('opentype');
  }
  @font-face {
    font-family: MontBook;
    src: url(${montBook}) format('opentype');
  }
  @font-face {
    font-family: MontHeavy;
    src: url(${montHeavy}) format('opentype');
  }
  @font-face {
    font-family: Mont;
    src: url(${montRegular}) format('opentype');
  }
  @font-face {
    font-family: MontSemibold;
    src: url(${montSemibold}) format('opentype');
  }
  body {
    font-family: Mont, sans-serif;
    font-size: 16px;
    font-weight: normal;
    line-height: 140%;
    padding-top: ${headerHeight.mobile};
    @media only screen and (min-width: ${md}px) {
      padding-top: ${headerHeight.desktop};
    }
    p {
      color: white;
    }
  }
`
