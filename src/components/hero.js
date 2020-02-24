import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { cover, fluidRange } from "polished"
import { Button } from "./button"
import { THEME } from "../data"
import { OnlyDesktop, OnlyMobile } from "./responsive"

const {
  breakpoints: { md, xl },
  sideGutter,
} = THEME

const BannerTitle = styled.h2`
  color: #fff;
  font-family: MontHeavy, sans-serif;
  font-weight: 800;
  letter-spacing: -0.04em;
  ${props =>
    props.withDescription
      ? `
        padding-bottom: 30px;
        margin-bottom: 30px;
        @media only screen and (min-width: ${md}px) {
            padding-bottom: 20px;
        }
      `
      : `margin-bottom: 0;`}
  border-bottom: ${props => (props.withDescription ? "4px solid #FFF" : 0)};
  ${fluidRange(
    {
      prop: "line-height",
      fromSize: "41px",
      toSize: "87px",
    },
    `${md}px`,
    `${xl}px`
  )}
  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "45px",
      toSize: "96px",
    },
    `${md}px`,
    `${xl}px`
  )}
`

const Tagline = styled.p`
  margin-bottom: 30px;
  line-height: 140%;
  font-family: MontBold, sans-serif;
  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "17px",
      toSize: "24px",
    },
    `${md}px`,
    `${xl}px`
  )}
`

const Hero = styled(
  ({
    aspectRatio,
    aspectRatioMobile,
    vAlign,
    vAlignMobile,
    bgSize,
    bgImage,
    bgImageMobile,
    title,
    description,
    btnText,
    btnLink,
    withOverlay,
    ...rest
  }) => {
    let imageStyle = {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: bgSize === "contain" ? "auto" : "100%",
    }
    const Title = title
    const Description = description
    return (
      <div {...rest}>
        <OnlyDesktop>
          {bgImage &&
            bgImage.childImageSharp &&
            bgImage.childImageSharp.fluid && (
              <Img
                durationFadeIn={1000}
                fluid={bgImage.childImageSharp.fluid}
                style={imageStyle}
              />
            )}
        </OnlyDesktop>
        <OnlyMobile>
          {bgImageMobile &&
            bgImageMobile.childImageSharp &&
            bgImageMobile.childImageSharp.fluid && (
              <Img
                durationFadeIn={1000}
                fluid={bgImageMobile.childImageSharp.fluid}
                style={imageStyle}
              />
            )}
        </OnlyMobile>
        {withOverlay && (
          <div
            style={{
              ...cover(),
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            }}
          />
        )}
        <div className="content-wrap">
          <div className="content">
            <BannerTitle withDescription={!!description}>
              <Title />
            </BannerTitle>
            {description && (
              <Tagline>
                <Description />
              </Tagline>
            )}
            {btnText && btnLink && (
              <Button
                bgColor="#FFF"
                color="#000"
                onClick={() => navigate(btnLink)}>
                {btnText}
              </Button>
            )}
          </div>
        </div>
      </div>
    )
  }
)`
  position: relative;
  padding-top: ${props =>
    props.aspectRatioMobile ? props.aspectRatioMobile * 100 : 100}%;
  @media only screen and (min-width: ${md}px) {
    padding-top: ${props =>
      props.aspectRatio ? props.aspectRatio * 100 : 100}%;
  }
  .content-wrap {
    ${cover()}
    display: flex;
    justify-content: center;
    align-items: ${props => props.vAlignMobile || "center"};
    @media only screen and (min-width: ${md}px) {
      align-items: ${props => props.vAlign || "center"};
    }
    .content {
      width: 100%;
      box-sizing: border-box;
      ${fluidRange(
        {
          prop: "padding-top",
          fromSize: "60px",
          toSize: "120px",
        },
        `${md}px`,
        `${xl}px`
      )}
      ${fluidRange(
        {
          prop: "padding-bottom",
          fromSize: "60px",
          toSize: "120px",
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
      ${fluidRange(
        {
          prop: "padding-right",
          fromSize: "20px",
          toSize: sideGutter,
        },
        `${md}px`,
        `${xl}px`
      )}
    }
  }
`

export default Hero
