import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import Grid from "styled-components-grid"
import { fluidRange } from "polished"
import { Box } from "./box"
import { Button } from "./button"
import { THEME } from "../data"

import signature from "../images/signature.png"

const {
  breakpoints: { md, xl },
} = THEME

export const H1 = styled.h1`
  font-weight: bold;
  font-family: MontHeavy, sans-serif;
  margin-bottom: 44px;
  white-space: pre-wrap;
  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "45px",
      toSize: "96px",
    },
    `${md}px`,
    `${xl}px`
  )}
  ${fluidRange(
    {
      prop: "line-height",
      fromSize: "41px",
      toSize: "87px",
    },
    `${md}px`,
    `${xl}px`
  )}
`

export const H2 = styled.h2`
  font-family: MontBold, sans-serif;
  margin-bottom: 30px;
  line-height: 105.8%;
  white-space: pre-wrap;
  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "22px",
      toSize: "48px",
    },
    `${md}px`,
    `${xl}px`
  )}
`

export const H3 = styled.h3`
  font-family: MontHeavy, sans-serif;
  font-size: 24px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 18px;
  line-height: 100%;
  white-space: pre-wrap;
`

export const H4 = styled.h4`
  font-family: MontHeavy, sans-serif;
  font-size: 24px;
  margin-bottom: 30px;
  line-height: 100%;
  white-space: pre-wrap;
`

const PageTitleBox = styled(({ top, bottom, mobileTop, mobileBottom, ...rest }) => <Box {...rest} />)`
  padding-top: ${props => (props.mobileTop ? `${props.mobileTop}px` : "120px")};
  padding-bottom: ${props => (props.mobileBottom ? `${props.mobileBottom}px` : "80px")};
  @media only screen and (min-width: ${md}px) {
    padding-top: ${props => (props.top ? `${props.top}px` : "120px")};
    padding-bottom: ${props => (props.bottom ? `${props.bottom}px` : "120px")};
  }
`

export const PageTitle = styled(
  ({ title, text, top, bottom, mobileTop, mobileBottom, ...rest }) => (
    <PageTitleBox
      top={top || null}
      bottom={bottom || null}
      mobileTop={mobileTop || null}
      mobileBottom={mobileBottom || null}>
      <div {...rest}>
        <Grid>
          <Grid.Unit size={{ xs: 1, md: text ? 1 / 2 : 1 }}>
            <H1>{title}</H1>
          </Grid.Unit>
          {text && (
            <Grid.Unit size={{ xs: 1, md: 1 / 2 }}>
              <p>{text}</p>
            </Grid.Unit>
          )}
        </Grid>
      </div>
    </PageTitleBox>
  )
)`
  border-top: 0;
  @media only screen and (min-width: ${md}px) {
    border-top: 4px solid #000;
    padding-top: 40px;
  }
  h1 {
    margin-top: 0;
    margin-bottom: 20px;
    border-bottom: 4px solid #000;
    padding-bottom: 16px;
    letter-spacing: -0.04em;
    @media only screen and (min-width: ${md}px) {
      border-bottom: 0;
      padding-bottom: 0;
    }
  }
  p {
    color: #000;
    line-height: 140%;
    margin-top: 0;
    margin-bottom: 0;
    white-space: pre-wrap;
    font-family: MontBold, sans-serif;
    ${fluidRange(
      {
        prop: "font-size",
        fromSize: "16px",
        toSize: "24px",
      },
      `${md}px`,
      `${xl}px`
    )}
  }
`

export const BlockTitleHorz = styled(
  ({
    title,
    mobileTop,
    titleStyle,
    description,
    ctaText,
    ctaLink,
    ...rest
  }) => (
    <Grid {...rest}>
      <Grid.Unit size={{ sm: 1, md: 1 / 2 }}>
        <h2 style={{ marginTop: 0, ...titleStyle }}>{title}</h2>
      </Grid.Unit>
      <Grid.Unit size={{ sm: 1, md: 1 / 2 }}>
        <Text style={{ marginTop: 0 }}>{description}</Text>
        {ctaText && (
          <Button color="#FFF" bgColor="#000" onClick={() => navigate(ctaLink)}>
            {ctaText}
          </Button>
        )}
      </Grid.Unit>
    </Grid>
  )
)`
  border-top: 0;
  padding-top: ${props => (props.mobileTop ? "20px" : "0")};
  ${props => props.mobileTop && `border-top: 4px solid #000;`}
  @media only screen and (min-width: ${md}px) {
    border-top: 4px solid #000;
    padding-top: 30px;
  }
  h2 {
    font-family: MontHeavy, sans-serif;
    ${props => (props.mobileTop ? "" : `border-bottom: 4px solid #000;`)}
    padding-bottom: ${props => (props.mobileTop ? "0" : "30px")};
    line-height: 105.8%;
    white-space: pre-wrap;
    ${fluidRange(
      {
        prop: "font-size",
        fromSize: "30px",
        toSize: "48px",
      },
      `${md}px`,
      `${xl}px`
    )}
    @media only screen and (min-width: ${md}px) {
      border-bottom: 0;
      padding-bottom: 0;
    }
  }
`

export const BlockTitle = styled(
  ({ color, line, fontSize, lineHeight, ...rest }) => <h3 {...rest} />
)`
  font-family: MontHeavy, sans-serif;
  margin: 0;
  white-space: pre-wrap;
  letter-spacing: -0.035em;
  padding: ${props =>
    props.line === "mobileTop" ? "30px 0 10px 0" : "20px 0"};
  ${props =>
    props.lineHeight
      ? `line-height: ${props.lineHeight};`
      : fluidRange(
          {
            prop: "line-height",
            fromSize: "32px",
            toSize: "51px",
          },
          `${md}px`,
          `${xl}px`
        )}
  ${props =>
    props.fontSize
      ? `font-size: ${props.fontSize};`
      : fluidRange(
          {
            prop: "font-size",
            fromSize: "30px",
            toSize: "48px",
          },
          `${md}px`,
          `${xl}px`
        )}
  color: ${props => (props.color ? props.color : "#000")};
  ${props =>
    props.line === "mobileTop"
      ? `border-top: 4px solid ${props.color || "#000"};`
      : `border-bottom: 4px solid ${props.color || "#000"};`}
  ${props =>
    props.line === "mobileTop" ? `border-bottom: 0;` : `border-top: 0;`}
  @media only screen and (min-width: ${md}px) {
  ${props =>
    props.line === "top" &&
    `
        border-top: 4px solid ${props.color || "#000"};
        border-bottom: 0;
        padding: 30px 0 10px 0;
    `}
  ${props =>
    props.line === "bottom" &&
    `
        border-bottom: 4px solid ${props.color || "#000"};
        border-top: 0;
    `}
  }
`

export const Text = styled.p`
  margin-bottom: ${props => (props.bottom ? `${props.bottom}px` : "40px")};
  color: ${props => props.color || "#000"};
  font-size: 16px;
  line-height: 140%;
  white-space: pre-wrap;
`

export const Quote = styled(({ withSignature, children, ...rest }) => (
  <div {...rest}>
    <div className="quote-wrap">
      {children}
      {withSignature && (
        <>
          <br />
          <img alt="Signature" style={{ marginTop: 25 }} src={signature} />
        </>
      )}
    </div>
  </div>
))`
  display: flex;
  justify-content: center;
  align-items: center;
  .quote-wrap {
    margin: 0 auto;
    color: white;
    font-family: MontHeavy, sans-serif;
    line-height: 105.8%;
    letter-spacing: -0.035rem;
    width: auto;
    ${fluidRange(
      {
        prop: "font-size",
        fromSize: "27px",
        toSize: "64px",
      },
      `${md}px`,
      `${xl}px`
    )}
    img {
      width: 60%;
      @media only screen and (min-width: ${md}px) {
        width: auto;
      }
    }
  }
`
