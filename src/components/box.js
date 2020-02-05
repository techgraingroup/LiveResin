import styled from "styled-components"

export const Box = styled.div`
  position: relative;
  padding-left: ${props => (props.left ? `${props.left}px` : "135px")};
  padding-right: ${props => (props.right ? `${props.right}px` : "135px")};
  padding-top: ${props => (props.top ? `${props.top}px` : "120px")};
  padding-bottom: ${props => (props.bottom ? `${props.bottom}px` : "120px")};
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
