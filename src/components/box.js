import React from "react"
import styled from "styled-components"
import { Image, Animate } from "./animations"
import { fluidRange, cover } from "polished"
import { THEME } from "../data"

const {
  breakpoints: { md, xl },
  sideGutter,
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
            <Image
              durationFadeIn={1000}
              fluid={bgImage.childImageSharp.fluid}
              style={imageStyle}
            />
          )}
        <div className="content-wrap">
          <Animate>
            <div className="content">{children}</div>
          </Animate>
        </div>
      </div>
    )
  }
)`
  position: relative;
  padding-top: 0;
  height: ${props => props.mobileHeight || "100vh"};
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
          toSize: sideGutter,
        },
        `${md}px`,
        `${xl}px`
      )}
      ${fluidRange(
        {
          prop: "padding-left",
          fromSize: "20px",
          toSize: sideGutter,
        },
        `${md}px`,
        `${xl}px`
      )}
    }
  }
`

const MobileImg = styled(props => <Image {...props} />)`
  display: block !important;
  @media only screen and (min-width: ${md}px) {
    display: none !important;
  }
`

const DesktopImg = styled(props => <Image {...props} />)`
  display: none !important;
  @media only screen and (min-width: ${md}px) {
    display: block !important;
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
    bgImageMobile,
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
            <DesktopImg
              durationFadeIn={1000}
              fluid={bgImage.childImageSharp.fluid}
              style={imageStyle}
            />
          )}
        {bgImageMobile &&
          bgImageMobile.childImageSharp &&
          bgImageMobile.childImageSharp.fluid && (
            <MobileImg
              durationFadeIn={1000}
              fluid={bgImageMobile.childImageSharp.fluid}
              style={imageStyle}
            />
          )}
        <Animate>
          <div style={{ position: "relative", zIndex: 100 }}>{children}</div>
        </Animate>
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
            toSize: sideGutter,
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
            toSize: sideGutter,
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
  button {
    display: block;
    margin-bottom: 20px;
    @media only screen and (min-width: ${md}px) {
      display: inline-block;
      margin-bottom: 0;
    }
  }
`
