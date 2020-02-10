import React from "react"
import styled from "styled-components"
import Grid from "styled-components-grid"
import { fluidRange } from "polished"
import { Box } from "./box"
import { THEME } from "../data"

import signature from "../images/signature.png"

const {
  breakpoints: { sm, md },
} = THEME

export const H1 = styled.h1`
  font-weight: bold;
  font-family: MontHeavy, sans-serif;
  margin-bottom: 44px;
  white-space: pre-wrap;
  ${fluidRange({
    prop: "font-size",
    fromSize: "45px",
    toSize: "96px",
  })}
  ${fluidRange({
    prop: "line-height",
    fromSize: "41px",
    toSize: "87px",
  })}
`

export const H2 = styled.h2`
  font-weight: bold;
  font-family: Mont, sans-serif;
  font-size: 48px;
  margin-bottom: 30px;
  line-height: 105.8%;
  white-space: pre-wrap;
`

export const H3 = styled.h3`
  font-weight: bold;
  font-family: MontHeavy, sans-serif;
  font-size: 24px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 18px;
  line-height: 100%;
  white-space: pre-wrap;
`

export const H4 = styled.h4`
  font-weight: bold;
  font-family: MontHeavy, sans-serif;
  font-size: 24px;
  margin-bottom: 30px;
  line-height: 100%;
  white-space: pre-wrap;
`

export const PageTitle = styled(({ title, text, ...rest }) => (
  <Box>
    <div {...rest}>
      <Grid>
        <Grid.Unit size={{ xs: 1, sm: 1 / 2 }}>
          <H1>{title}</H1>
        </Grid.Unit>
        {text && (
          <Grid.Unit size={{ xs: 1, sm: 1 / 2 }}>
            <p>{text}</p>
          </Grid.Unit>
        )}
      </Grid>
    </div>
  </Box>
))`
  border-top: 4px solid #000;
  padding-top: 40px;
  h1 {
    margin-top: 0;
  }
  p {
    color: #000;
    font-size: 24px;
    line-height: 140%;
    margin-top: 0;
    margin-bottom: 0;
    white-space: pre-wrap;
  }
`

export const BlockTitleHorz = styled(({ title, description, ...rest }) => (
  <Grid {...rest}>
    <Grid.Unit size={{ xs: 1, sm: 1 / 2 }}>
      <H2 style={{ marginTop: 0 }}>{title}</H2>
    </Grid.Unit>
    <Grid.Unit size={{ xs: 1, sm: 1 / 2 }}>
      <Text>{description}</Text>
    </Grid.Unit>
  </Grid>
))`
  border-top: 4px solid #000;
  padding-top: 30px;
`

export const BlockTitle = styled(
  ({ color, line, fontSize, lineHeight, ...rest }) => <h3 {...rest} />
)`
  font-weight: bold;
  font-family: Mont, sans-serif;
  margin: 0;
  padding: 30px 0;
  ${props =>
    props.lineHeight
      ?  `line-height: ${props.lineHeight}px;`
      : fluidRange({
          prop: "line-height",
          fromSize: "32px",
          toSize: "51px",
        })}
  ${props =>
    props.fontSize
      ? `font-size: ${props.fontSize}px;` 
      : fluidRange({
          prop: "font-size",
          fromSize: "30px",
          toSize: "48px",
        })}
  color: ${props => (props.color ? props.color : "#000")};
  ${props =>
    props.line === "top" && `border-top: 4px solid ${props.color || "#000"};`}
  ${props =>
    props.line === "bottom" &&
    `border-bottom: 4px solid ${props.color || "#000"};`}
`

export const Text = styled.p`
  margin-bottom: ${props => (props.bottom ? `${props.bottom}px` : "40px")};
  color: ${props => props.color || "#000"};
  font-size: 16px;
  line-height: 140%;
`

export const Quote = styled(({ withSignature, children, ...rest }) => (
  <div {...rest}>
    {children}
    {withSignature && (
      <>
        <br />
        <img style={{ marginTop: 25 }} src={signature} />
      </>
    )}
  </div>
))`
  margin: 0 auto;
  color: white;
  font-family: MontHeavy, sans-serif;
  line-height: 105.8%;
  letter-spacing: -0.035rem;
  ${fluidRange({
    prop: "width",
    fromSize: "280px",
    toSize: "900px",
  })}
  ${fluidRange({
    prop: "font-size",
    fromSize: "24px",
    toSize: "64px",
  })}
`
