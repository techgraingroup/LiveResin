import styled from "styled-components"
import { THEME } from "../data"

const {
  breakpoints: { sm },
} = THEME

export const Box = styled.div`
  position: relative;
  padding-top: ${props => (props.top ? `${props.top}px` : "120px")};
  padding-bottom: ${props => (props.bottom ? `${props.bottom}px` : "120px")};
  padding-left: ${props => (props.left ? `${props.left}px` : "20px")};
  padding-right: ${props => (props.right ? `${props.right}px` : "20px")};
  @media only screen and (min-width: ${sm}px) {
      padding-left: ${props => (props.left ? `${props.left}px` : "135px")};
      padding-right: ${props => (props.right ? `${props.right}px` : "135px")};
  }
  ${props =>
    props.bgColor &&
    `
    background-color: ${props.bgColor};
  `}
  ${props =>
    props.bgImage &&
    `
    background-image: url(${props.bgImage});
  `}
  background-position: ${props => props.bgPosition || "center center"};
  background-size: ${props => props.bgSize || "cover"};
  background-repeat: no-repeat;
  ${props =>
    props.fullHeight &&
    `
    height: 100%;
  `}
`
