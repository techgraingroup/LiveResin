import React from "react"
import styled from "styled-components"
import Grid from "styled-components-grid"
import { fluidRange, cover } from "polished"
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"
import { Collab } from "./icons"
import { BlockTitle } from "./text"
import { OnlyMobile } from "./responsive"
import { Button } from "./button"
import { THEME } from "../data"

const {
  breakpoints: { md, xl },
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
    padding-top: 112.267%;
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
      background-color: #bba135;
      box-sizing: border-box;
      width: 100%;
      margin-top: -1px;
      @media only screen and (min-width: ${md}px) {
       width: 700px;
       margin-top: 0;
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
          toSize: "195px",
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

export const SubTitle = styled.h4`
  font-family: MontHeavy, sans-serif;
  line-height: 140%;
  color: ${props => props.color || "#000"};
  margin-bottom: 24px;
  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "12px",
      toSize: "16px",
    },
    `${md}px`,
    `${xl}px`
  )}
`

export const CollabWrap = styled.div`
  padding-bottom: 29px;
  margin-bottom: 20px;
  border-bottom: 1px solid #000;
  border-bottom: ${props =>
    props.borderColor ? `1px solid ${props.borderColor}` : `1px solid #000`};
  ${fluidRange(
    {
      prop: "margin-top",
      fromSize: "0px",
      toSize: "30px",
    },
    `${md}px`,
    `${xl}px`
  )}
`

export const CollabLabel = styled.span`
  letter-spacing: 0.1em;
  line-height: 100%;
  font-family: Mont, sans-serif;
  text-transform: uppercase;
  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "14px",
      toSize: "24px",
    },
    `${md}px`,
    `${xl}px`
  )}
`

export const CollabIcon = styled(props => <Collab {...props} />)`
  ${fluidRange(
    {
      prop: "width",
      fromSize: "20px",
      toSize: "30px",
    },
    `${md}px`,
    `${xl}px`
  )}
  ${fluidRange(
    {
      prop: "margin-right",
      fromSize: "10px",
      toSize: "20px",
    },
    `${md}px`,
    `${xl}px`
  )}
  position: relative;
  right: 0;
  top: 10px;
  @media only screen and (min-width: ${md}px) {
    top: 7px;
  }
`

export const Description = styled.p`
  color: ${props => props.color || "#000"};
  margin-top: 0;
  font-size: 16px;
  ${fluidRange(
    {
      prop: "margin-bottom",
      fromSize: "20px",
      toSize: "50px",
    },
    `${md}px`,
    `${xl}px`
  )}
`

export const LowerBlock = styled(props => <Grid.Unit {...props} />)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: ${md}px) {
    justify-content: flex-end;
  }
`

const RCBanner = props => {
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
    <div style={{ position: "relative" }} {...props}>
      <ImgWrap>
        <BgImg fluid={banner.childImageSharp.fluid} />
      </ImgWrap>
      <SmallBox>
        <SubTitle>Latest Collaboration</SubTitle>
        <BlockTitle
          lineHeight="100%"
          fontSize="66px"
          line="mobileTop">{`Red\nCongolese`}</BlockTitle>
        <CollabWrap>
          <CollabIcon />
          <CollabLabel>GOLD SEAL SF</CollabLabel>
        </CollabWrap>
        <Grid>
          <Grid.Unit size={{ xs: 1, sm: 1, md: 2 / 3 }}>
            <Description>
              This special collaboration showcases Gold Seal’s signature Red
              Congolese, a 12+ week flowering Sativa that we believe is truly
              special.
            </Description>
          </Grid.Unit>
          <LowerBlock size={{ xs: 1, sm: 1, md: 1 / 3 }}>
            <OnlyMobile>
              <Button color="#000" bgColor="#bba135" borderColor="#000">
                Learn More
              </Button>
            </OnlyMobile>
            <Img
              style={{
                marginTop: 10,
                display: "inline-block",
                width: 115,
                height: 115,
              }}
              fluid={winner.childImageSharp.fluid}
            />
          </LowerBlock>
        </Grid>
      </SmallBox>
    </div>
  )
}

export default RCBanner
