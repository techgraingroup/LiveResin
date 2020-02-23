import styled from "styled-components"
import { THEME } from "../data"

const {
  breakpoints: { md },
} = THEME

export const DesktopBr = styled.br`
  display: none;
  @media only screen and (min-width: ${md}px) {
    display: block;
  }
`

export const MobileBr = styled.br`
  display: block;
  @media only screen and (min-width: ${md}px) {
    display: none;
  }
`

export const OnlyDesktop = styled.div`
  display: none;
  @media only screen and (min-width: ${md}px) {
    display: block !important;
  }
`

export const OnlyMobile = styled.div`
  display: block;
  @media only screen and (min-width: ${md}px) {
    display: none;
  }
`
