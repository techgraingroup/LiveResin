import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { fluidRange } from "polished"
import { THEME } from "../data"

const {
  breakpoints: { sm },
} = THEME

export const Box = styled(
  ({
    top,
    right,
    bottom,
    left,
    bgColor,
    bgImage,
    bgPosition,
    bgSize,
    fullHeight,
    children,
    ...rest
  }) => {
    let imageStyle = {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: bgSize === "contain" ? "auto" : "100%",
    }
    if (bgPosition && bgPosition.indexOf("bottom") >= 0) {
      const { top, ...pos } = imageStyle
      imageStyle = Object.assign(
        { ...pos },
        {
          bottom: 0,
        }
      )
    }
    return (
      <div {...rest}>
        {bgImage &&
          bgImage.childImageSharp &&
          bgImage.childImageSharp.fluid && (
            <Img fluid={bgImage.childImageSharp.fluid} style={imageStyle} />
          )}
        <div style={{ position: "relative", zIndex: 100 }}>{children}</div>
      </div>
    )
  }
)`
  position: relative;
  padding-top: ${props => (props.top ? `${props.top}px` : "120px")};
  padding-bottom: ${props => (props.bottom ? `${props.bottom}px` : "120px")};
  height: ${props => (props.fullHeight ? "100vh" : "auto")};
  ${props =>
    props.left
      ? `padding-left: ${props.left}px;`
      : fluidRange({
          prop: "padding-left",
          fromSize: "20px",
          toSize: "135px",
        })}
  ${props =>
    props.right
      ? `padding-right: ${props.right}px;`
      : fluidRange({
          prop: "padding-right",
          fromSize: "20px",
          toSize: "135px",
        })}
  @media only screen and (min-width: ${sm}px) {
      height: ${props => (props.fullHeight ? "100%" : "auto")};
  }
  ${props =>
    props.bgColor &&
    `
    background-color: ${props.bgColor};
  `}
  background-position: ${props => props.bgPosition || "center center"};
  background-size: ${props => props.bgSize || "cover"};
  background-repeat: no-repeat;
`
