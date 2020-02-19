import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Grid from "styled-components-grid"
import { Box } from "./box"
import { H4, Text, BlockTitle } from "./text"
import { Arrow } from "./icons"
import { THEME } from "../data"
import usMap from "../images/usmap.png"

const {
  breakpoints: { sm, md },
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
  height: 100%;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media only screen and (min-width: ${md}px) {
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
    padding: 30px;
    border-bottom: 1px solid #000;
    flex: 1;
    h4 {
      margin-top: 0;
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

const FindNearYou = () => {
  return (
    <Box>
      <BlockTitle line="top" style={{ marginBottom: 60 }}>
        Find Live Resin Near You
      </BlockTitle>
      <Grid>
        <BottomGrid>
          <BottomBox className="first">
            <div className="text">
              <H4>Ancient Remedies Cannabis Weed Dispensary</H4>
              <Text>{`2350 State Street\nSalem, OR 97301`}</Text>
            </div>
            <Link to="#">
              Get Direction <Arrow borderColor="#000" />
            </Link>
          </BottomBox>
        </BottomGrid>
        <BottomGrid>
          <BottomBox>
            <div className="text">
              <H4>Ancient Remedies Cannabis Weed Dispensary</H4>
              <Text>{`2350 State Street\nSalem, OR 97301`}</Text>
            </div>
            <Link to="#">
              Get Direction <Arrow borderColor="#000" />
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
