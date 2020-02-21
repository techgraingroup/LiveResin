import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { fluidRange, cover } from "polished"
import { THEME } from "../data"

const {
  breakpoints: { xs, sm, md, xl },
} = THEME

export const SquareBox = styled(
  ({ bgSize, mobileHeight, bgColor, bgImage, children, ...rest }) => {
    let imageStyle = {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: bgSize === "contain" ? "auto" : "100%",
    }
    return (
      <div {...rest}>
        {bgImage &&
          bgImage.childImageSharp &&
          bgImage.childImageSharp.fluid && (
            <Img
              durationFadeIn={1000}
              fluid={bgImage.childImageSharp.fluid}
              style={imageStyle}
            />
          )}
        <div className="content-wrap">
          <div className="content">{children}</div>
        </div>
      </div>
    )
  }
)`
  position: relative;
  padding-top: 0;
  height: ${props => props.mobileHeight || '100vh'};
  @media only screen and (min-width: ${md}px) {
    padding-top: 100%;
    height: auto;
  }
  ${props => props.bgColor && `background-color: ${props.bgColor};`}
  .content-wrap {
    ${cover()}
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      ${fluidRange(
        {
          prop: "padding-right",
          fromSize: "20px",
          toSize: "135px",
        },
        `${md}px`,
        `${xl}px`
      )}
      ${fluidRange(
        {
          prop: "padding-left",
          fromSize: "20px",
          toSize: "135px",
        },
        `${md}px`,
        `${xl}px`
      )}
    }
  }
`

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
    verticalCentered,
    square,
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
            <Img
              durationFadeIn={1000}
              fluid={bgImage.childImageSharp.fluid}
              style={imageStyle}
            />
          )}
        <div style={{ position: "relative", zIndex: 100 }}>{children}</div>
      </div>
    )
  }
)`
  overflow: hidden;
  position: relative;
  padding-top: ${props => (props.top ? `${props.top}px` : "120px")};
  padding-bottom: ${props => (props.bottom ? `${props.bottom}px` : "120px")};
  @media only screen and (max-width: ${md}px) {
    height: ${props => (props.fullHeight ? "100vh" : "auto")};
    ${props =>
      props.fullHeight
        ? `
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 0;
            padding-bottom: 0;`
        : ``}
  }
  ${props =>
    props.left
      ? `padding-left: ${props.left}px;`
      : fluidRange(
          {
            prop: "padding-left",
            fromSize: "20px",
            toSize: "135px",
          },
          `${md}px`,
          `${xl}px`
        )}
  ${props =>
    props.right
      ? `padding-right: ${props.right}px;`
      : fluidRange(
          {
            prop: "padding-right",
            fromSize: "20px",
            toSize: "135px",
          },
          `${md}px`,
          `${xl}px`
        )}
  ${props =>
    props.bgColor &&
    `
    background-color: ${props.bgColor};
  `}
  background-position: ${props => props.bgPosition || "center center"};
  background-size: ${props => props.bgSize || "cover"};
  background-repeat: no-repeat;
`
