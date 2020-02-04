import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"

import montBoldEot from "../fonts/mont/Mont-Bold.eot"
import montBoldTtf from "../fonts/mont/Mont-Bold.ttf"
import montBoldWoff from "../fonts/mont/Mont-Bold.woff"
import montBoldWoff2 from "../fonts/mont/Mont-Bold.woff2"

import montHeavyEot from "../fonts/mont/Mont-Heavy.eot"
import montHeavyTtf from "../fonts/mont/Mont-Heavy.ttf"
import montHeavyWoff from "../fonts/mont/Mont-Heavy.woff"
import montHeavyWoff2 from "../fonts/mont/Mont-Heavy.woff2"

export const GlobalStyle = createGlobalStyle`
  ${normalize};
  @font-face {
    font-family: Mont;
    src: url(${montBoldEot});
    src: url(${montBoldEot}?#iefix) format('embedded-opentype'),
        url(${montBoldTtf}) format('truetype'),
        url(${montBoldWoff}) format('woff'),
        url(${montBoldWoff2}) format('woff2');
    font-style: normal;
  }
  @font-face {
    font-family: MontHeavy;
    src: url(${montHeavyEot});
    src: url(${montHeavyEot}?#iefix) format('embedded-opentype'),
        url(${montHeavyTtf}) format('truetype'),
        url(${montHeavyWoff}) format('woff'),
        url(${montHeavyWoff2}) format('woff2');
    font-style: bold;
  }
  body {
    font-family: Mont, sans-serif;
    font-size: 16px;
    font-weight: normal;
    line-height: 140%;
  }
`
