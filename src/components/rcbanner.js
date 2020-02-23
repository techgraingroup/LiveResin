import React from "react"
import styled from "styled-components"
import Grid from "styled-components-grid"
import Img from "gatsby-image"
import { fluidRange, cover } from "polished"
import { useStaticQuery, graphql } from "gatsby"
import { Collab } from "./icons"
import { BlockTitle } from "./text"
import { THEME } from "../data"

const {
  breakpoints: { md, xl },
  sideGutter,
} = THEME

const ImgWrap = styled(({ children, ...rest }) => (
  <div {...rest}>
    <div className="wrap">
      <div className="content">{children}</div>
    </div>
  </div>
))`
  width: 100%;
  .wrap {
    height: auto;
    position: relative;
    padding-top: 100%;
    @media only screen and (min-width: ${md}px) {
      padding-top: 62.5%;
    }
    .content {
      ${cover()}
    }
  }
`

const BgImg = styled(props => <Img {...props} />)`
  width: auto;
  height: 100%;
  @media only screen and (min-width: ${md}px) {
    width: 100%;
    height: auto;
  }
`

const SmallBox = styled(({ children, ...rest }) => (
  <div {...rest}>
    <div className="wrap">{children}</div>
  </div>
))`
  position: static;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: static;
  @media only screen and (min-width: ${md}px) {
   ${cover()}
  }
    .wrap {
      background-color: #bba123;
      box-sizing: border-box;
      width: 100%;
      @media only screen and (min-width: ${md}px) {
      width: 47.5%;
      }
      ${fluidRange(
        {
          prop: "padding-top",
          fromSize: "30px",
          toSize: "45px",
        },
        `${md}px`,
        `${xl}px`
      )}
      ${fluidRange(
        {
          prop: "padding-bottom",
          fromSize: "30px",
          toSize: "45px",
        },
        `${md}px`,
        `${xl}px`
      )}
      ${fluidRange(
        {
          prop: "padding-right",
          fromSize: "20px",
          toSize: "60px",
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
      h3 {
      ${fluidRange(
        {
          prop: "font-size",
          fromSize: "45px",
          toSize: "66px",
        },
        `${md}px`,
        `${xl}px`
      )}
      }
    }
`

const RCBanner = () => {
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
          fluid(quality: 100, maxWidth: 2880) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div style={{ position: "relative" }}>
      <ImgWrap>
        <BgImg fluid={banner.childImageSharp.fluid} />
      </ImgWrap>
      <SmallBox>
        <h4 style={{ fontSize: 24, fontFamily: "MontHeavy, sans-serif" }}>
          Latest Colloboration
        </h4>
        <BlockTitle
          lineHeight="100%"
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
          <Grid.Unit size={1 / 3} style={{ textAlign: "right" }}>
            <Img
              style={{
                marginTop: 10,
                display: "inline-block",
                width: 115,
                height: 115,
              }}
              fluid={winner.childImageSharp.fluid}
            />
          </Grid.Unit>
        </Grid>
      </SmallBox>
    </div>
  )
}

export default RCBanner
