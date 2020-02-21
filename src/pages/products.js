import React, { useState, useEffect, useContext } from "react"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Grid from "styled-components-grid"
import { fluidRange } from "polished"
import { AppContext } from "../context"
import SEO from "../components/seo"
import Banner from "../components/banner"
import { Collab } from "../components/icons"
import FindNearYou from "../components/findnearyou"
import { Box } from "../components/box"
import RedCongoleseBanner from "../components/redCongoleseBanner"
import { H4, Text, BlockTitle, BlockTitleHorz, Quote } from "../components/text"
import { Button } from "../components/button"
import { THEME } from "../data"
import {
  TBudder,
  TDiamonds,
  TSauce,
  TSugar,
  TShatter,
  TThca,
  TVapes,
} from "../components/icons"

const icons = { TBudder, TDiamonds, TSauce, TSugar, TShatter, TThca, TVapes }
const halfSize = {
  sm: 1 / 1,
  md: 1 / 2,
}

const {
  breakpoints: { sm, md, xl },
} = THEME

const IconsWrap = styled(props => <Grid {...props} />)`
  margin-bottom: 0;
  padding-top: 30px;
  border-top: 1px solid #000;
  text-align: center;
  padding-bottom: 20px;
  @media only screen and (min-width: ${md}px) {
    padding-bottom: 75px;
  }
  span {
    display: block;
    font-family: 16px;
    font-family: MontHeavy, sans-serif;
    line-height: 100%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    min-height: 32px;
  }
  svg {
    display: inline-block;
    margin-top: 5px;
    margin-bottom: 40px;
    @media only screen and (min-width: ${md}px) {
      margin-top: 40px;
      margin-bottom: 0;
    }
  }
`

const ProductTitle = styled(props => <Grid {...props} />)`
  border-top: 4px solid #000;
  border-bottom: 4px solid #000;
  margin-bottom: 40px;
  h2 {
    font-family: MontHeavy, sans-serif;
    line-height: 105.8%;
    letter-spacing: -0.035em;
    ${fluidRange(
      {
        prop: "font-size",
        fromSize: "30px",
        toSize: "48px",
      },
      `${md}px`,
      `${xl}px`
    )}
  }
  .icon-wrap {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    svg {
      width: auto;
      ${fluidRange(
        {
          prop: "height",
          fromSize: "45px",
          toSize: "65px",
        },
        `${md}px`,
        `${xl}px`
      )}
    }
  }
`

const ProductInfo = styled(props => (
  <Grid.Unit size={{ xs: 1, sm: 1, md: 1 / 2 }} {...props} />
))`
  padding-top: 20px;
  h3 {
    margin-top: 0;
    text-transform: uppercase;
    font-family: MontHeavy, sans-serif;
    line-height: 100%;
    letter-spacing: 0.1em;
    ${fluidRange(
      {
        prop: "font-size",
        fromSize: "20px",
        toSize: "24px",
      },
      `${md}px`,
      `${xl}px`
    )}
  }
  h4 {
    font-family: MontHeavy, sans-serif;
    font-size: 16px;
    line-height: 140%;
    padding-top: 20px;
    border-top: 1px solid #000;
  }
  p {
    margin-bottom: 55px;
  }
`

const StrainBox = styled.div`
  width: 120px;
  height: 120px;
  background: ${props => props.bg || "#000"};
  color: ${props => props.color || "#FFF"};
  padding: 15px;
  box-sizing: border-box;
  font-size: 15px;
  font-family: MontHeavy, sans-serif;
  letter-spacing: -0.02em;
  line-height: 100%;
  margin: 0 30px 0 0;
`

const Title = styled.h2`
  width: 80%;
  color: #fff;
  font-family: MontHeavy, sans-serif;
  letter-spacing: -0.04em;
  ${fluidRange({
    prop: "line-height",
    fromSize: "41px",
    toSize: "87px",
  })}
  ${fluidRange({
    prop: "font-size",
    fromSize: "45px",
    toSize: "96px",
  })}
`

const ProductsPage = () => {
  const { dispatch } = useContext(AppContext)
  useEffect(() => {
    dispatch({
      type: "activeMenu",
      value: "/products/",
    })
    dispatch({ type: "mobileMenu", value: false })
  }, [])
  const {
    dataJson: { products },
    banner,
  } = useStaticQuery(graphql`
    query {
      dataJson {
        products {
          name
          icon
          what
          how
          who
          strains {
            name
            color
            bg
          }
          image {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      banner: file(relativePath: { eq: "products-banner.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title="Products" />
      <Banner top={500} bottom={100} bannerImg={banner}>
        <Title>We create fresh extracts in a variety of formats.</Title>
      </Banner>
      <Box bottom="0">
        <BlockTitleHorz
          title="Our Formats"
          titleStyle={{
            fontSize: 24,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
          description="Live resin is both a cannabis extraction process and a type of concentrate. It exclusively uses fresh plants, harvested at their absolute peak. The plants are then frozen and extracted at cryogenic temperatures using solvents to help preserve the terpenes. Terpenes are crucial for aroma and flavor, giving each strain its own unique profile."
        />
      </Box>
      <Box top="0" bottom="0">
        <IconsWrap>
          {products.map(p => {
            const Icon = icons[p.icon]
            return (
              <Grid.Unit
                size={{ xs: 1 / 2, sm: 1 / 2, md: 1 / products.length }}>
                <span className="label">{p.name}</span>
                <Icon active />
              </Grid.Unit>
            )
          })}
        </IconsWrap>
      </Box>
      {products.map(p => {
        const Icon = icons[p.icon]
        return (
          <Box top="0" bottom="0" key={p.name} style={{ marginBottom: 100 }}>
            <ProductTitle>
              <Grid.Unit size={1 / 2}>
                <h2>{p.name}</h2>
              </Grid.Unit>
              <Grid.Unit size={1 / 2} className="icon-wrap">
                <Icon active />
              </Grid.Unit>
            </ProductTitle>
            <Grid>
              <Grid.Unit size={{ xs: 1, sm: 1, md: 1 / 2 }}>
                <Img
                  style={{
                    width: "100%",
                    maxWidth: 510,
                    height: "auto",
                    marginBottom: 40,
                  }}
                  fluid={p.image.childImageSharp.fluid}
                />
              </Grid.Unit>
              <ProductInfo>
                <h3>What is it?</h3>
                <Text>{p.what}</Text>
                <h3>How is it made?</h3>
                <Text>{p.how}</Text>
                <h3>Who is it for?</h3>
                <Text>{p.who}</Text>
                <h4>Popular Strain</h4>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "top",
                  }}>
                  {p.strains.map(s => (
                    <StrainBox color={s.color} bg={s.bg}>
                      {s.name}
                    </StrainBox>
                  ))}
                </div>
              </ProductInfo>
            </Grid>
          </Box>
        )
      })}
      <Box bottom={40}>
        <BlockTitleHorz
          title="Colloborations"
          titleStyle={{
            fontSize: 24,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
          description="Our current lineup won’t be our lineup forever. We’re always looking for new collaborations and the freshest flower. Here’s what we have today."
        />
      </Box>
      <RedCongoleseBanner />
      <FindNearYou />
    </>
  )
}

export default ProductsPage
