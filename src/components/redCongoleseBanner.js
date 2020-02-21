import React from "react"
import Grid from 'styled-components-grid'
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Box } from "./box"
import { BlockTitle } from "./text"
import { Collab } from "./icons"
import { THEME } from "../data"

const {
  breakpoints: { md },
} = THEME

const BigBox = styled(({ children, ...rest }) => (
  <Box {...rest}>{children}</Box>
))`
  padding-top: 100%;
  position: relative;
  @media only screen and (min-width: ${md}px) {
    padding: 120px 0;
    margin-bottom: 0;
  }
`

const SmallBox = styled(({ children, ...rest }) => (
  <Box {...rest}>{children}</Box>
))`
  box-sizing: border-box;
  width: 100%;
  top: 100%;
  left: 0;
  right: 0;
  padding: 30px 20px;
  @media only screen and (min-width: ${md}px) {
    position: static;
    width: 45%;
    padding: 45px 60px 45px 133px;
  }
  h3 {
    font-size: 45px;
    @media only screen and (min-width: ${md}px) {
      font-size: 66px;
    }
  }
`

const RedCongoleseBanner = () => {
  const { winner, banner } = useStaticQuery(graphql`
    query {
      winner: file(relativePath: { eq: "2019-winner.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      banner: file(relativePath: { eq: "product-banner.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BigBox left="0" right="0" bgImage={banner}>
      <SmallBox bgColor="#BBA135">
        <h4 style={{ fontSize: 24, fontFamily: "MontHeavy, sans-serif" }}>
          Latest Colloboration
        </h4>
        <BlockTitle
          fontSize="66px"
          line="mobileTop">{`Red\nCongolese`}</BlockTitle>
        <div
          style={{
            borderBottom: "1px solid #000",
            paddingBottom: 30,
            marginBottom: 20,
          }}>
          <Collab right="0" />
          <span
            style={{
              display: "inline-block",
              marginLeft: 18,
              marginRight: 60,
            }}>
            GOLD SEAL SF
          </span>
        </div>
        <Grid>
          <Grid.Unit size={2 / 3}>
            <p style={{ color: "#000", marginTop: 0, marginBottom: 50 }}>
              This special collaboration showcases Gold Seal’s signature Red
              Congolese, a 12+ week flowering Sativa that we believe is truly
              special.
            </p>
          </Grid.Unit>
          <Grid.Unit size={1 / 3} style={{ textAlign: 'right' }}>
            <Img
              style={{ marginTop: 10, display: 'inline-block', width: 115, height: 115 }}
              fluid={winner.childImageSharp.fluid}
            />
          </Grid.Unit>
        </Grid>
      </SmallBox>
    </BigBox>
  )
}

export default RedCongoleseBanner
