import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Grid from "styled-components-grid"
import { Box } from "./box"
import { H4, Text, BlockTitle } from "./text"
import { Arrow } from "./icons"
import { MobileBr } from "./responsive"
import { THEME } from "../data"
import usMap from "../images/usmap.png"

const {
  breakpoints: { md },
} = THEME

const BottomGrid = styled(({ children, ...rest }) => (
  <Grid.Unit size={{ xs: 1, sm: 1, md: 1 / 3 }} {...rest}>
    {children}
  </Grid.Unit>
))`
  padding-bottom: 25px;
  @media only screen and (min-width: ${md}px) {
    padding-bottom: 0;
  }
`

const BottomBox = styled.div`
  border: 4px solid #000;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  height: auto;
  @media only screen and (min-width: ${md}px) {
    height: 100%;
    min-height: auto;
    margin-bottom: 0;
    margin-left: 15px;
    margin-right: 15px;
    &.first {
      margin-left: 0;
    }
    &.last {
      margin-right: 0;
    }
  }
  .text {
    border-bottom: 1px solid #000;
    padding: 30px 25px;
    flex: 1;
    @media only screen and (min-width: ${md}px) {
      padding: 30px;
    }
    h4 {
      margin-top: 0;
      margin-bottom: 20px;
      @media only screen and (min-width: ${md}px) {
        margin-bottom: 30px;
      }
    }
    p {
      margin-bottom: 0;
    }
  }
  .store-locator {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-family: MontHeavy, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    background-image: url(${usMap});
    background-position: center center;
    background-repeat: no-repeat;
    background-color: transparent;
    background-size: cover;
  }
  a {
    display: block;
    height: 60px;
    line-height: 60px;
    padding: 0 30px;
    color: #000;
    font-size: 16px;
    font-family: MontHeavy, sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.1em;
    box-sizing: border-box;
    position: relative;
    svg {
      position: absolute !important;
      right: 30px !important;
      top: 20px !important;
      left: auto !important;
    }
  }
`

const TheTitle = styled(props => <BlockTitle {...props} />)`
  margin-bottom: 40px;
  padding: 30px 0 0 0;
  @media only screen and (min-width: ${md}px) {
    margin-bottom: 60px;
    padding: 30px 0 10px 0;
  }
`

const FindNearYou = () => {
  return (
    <Box>
      <TheTitle line="mobileTop">
        Find Live Resin <MobileBr />
        Near You
      </TheTitle>
      <Grid>
        <BottomGrid>
          <BottomBox className="first">
            <div className="text">
              <H4>{`Ancient Remedies\nCannabis Weed\nDispensary`}</H4>
              <Text>{`2350 State Street\nSalem, OR 97301`}</Text>
            </div>
            <Link to="#">
              Get Directions <Arrow borderColor="#000" />
            </Link>
          </BottomBox>
        </BottomGrid>
        <BottomGrid>
          <BottomBox>
            <div className="text">
              <H4>{`Ancient Remedies\nCannabis Weed\nDispensary`}</H4>
              <Text>{`2350 State Street\nSalem, OR 97301`}</Text>
            </div>
            <Link to="#">
              Get Directions <Arrow borderColor="#000" />
            </Link>
          </BottomBox>
        </BottomGrid>
        <BottomGrid>
          <BottomBox className="last">
            <Link to="/store-locator" className="store-locator">
              Store Locator
            </Link>
          </BottomBox>
        </BottomGrid>
      </Grid>
    </Box>
  )
}

export default FindNearYou
