import React, { useEffect, useContext } from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import styled from "styled-components"
import Grid from "styled-components-grid"
import { AppContext } from "../context"
import SEO from "../components/seo"
import { Box, SquareBox } from "../components/box"
import { Quote, BlockTitle, Text } from "../components/text"
import { Button } from "../components/button"
import { Arrow, Collab } from "../components/icons"
import Hero from "../components/hero"
import RCBanner from "../components/rcbanner"
import MeetTheTeam from "../components/meettheteam"
import Friends from "../components/friends"
import InstagramFeed from "../components/instagram"
import {
  OnlyMobile,
  OnlyDesktop,
  MobileBr,
  DesktopBr,
} from "../components/responsive"
import { getImageFromList, useWindowSize } from "../utils"
import { THEME } from "../data"

const halfSize = {
  sm: 1 / 1,
  md: 1 / 2,
}

const {
  breakpoints: { md },
} = THEME

const GoldGrid = styled(props => <Grid.Unit {...props} />)`
  position: relative;
  top: 0;
  text-align: left;
  @media only screen and (min-width: ${md}px) {
    top: -5px;
    text-align: right;
  }
  svg.arrow {
    position: absolute !important;
    left: auto !important;
    right: 0;
    top: -17px !important;
    @media only screen and (min-width: ${md}px) {
      top: 17px !important;
    }
  }
`

const ProductBox = styled(props => <Box {...props} />)`
  padding-top: 250px;
  padding-bottom: 900px;
  @media only screen and (min-width: ${md}px) {
    padding-top: 175px;
    padding-bottom: 750px;
  }
`

const IndexPage = () => {
  const { dispatch } = useContext(AppContext)
  const size = useWindowSize()
  useEffect(() => {
    dispatch({
      type: "activeMenu",
      value: "/",
    })
    dispatch({ type: "mobileMenu", value: false })
  }, [])
  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativePath: {
            in: [
              "home-banner-bg.jpg"
              "home-banner-mobile-bg.jpg"
              "inventor.png"
              "extract.jpg"
              "products.jpg"
              "products_mobile.jpg"
            ]
          }
        }
      ) {
        edges {
          node {
            id
            relativePath
            childImageSharp {
              fluid(quality: 100, maxWidth: 2880) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  const bannerImg = getImageFromList("home-banner-bg.jpg", edges)
  const bannerMobileImg = getImageFromList("home-banner-mobile-bg.jpg", edges)
  const inventor = getImageFromList("inventor.png", edges)
  const extract = getImageFromList("extract.jpg", edges)
  const products = getImageFromList("products.jpg", edges)
  const productsMobile = getImageFromList("products_mobile.jpg", edges)
  return (
    <>
      <SEO title="Home" />
      <Hero
        aspectRatio={800 / 1440}
        aspectRatioMobile={829 / 375}
        bgImage={bannerImg}
        bgImageMobile={bannerMobileImg}
        vAlign="flex-end"
        title={() => (
          <>
            Our <MobileBr />
            Adventures <DesktopBr />
            in <MobileBr />
            extraction.
          </>
        )}
        description="Learn more about the Live Resin Project"
        btnText="Our Process"
        btnLink="/our-process/"
      />
      <Box bgColor="#BBA135" top={20} bottom={20}>
        <Grid valign="center">
          <Grid.Unit size={halfSize}>
            <span
              style={{
                fontFamily: "MontHeavy, sans-serif",
                display: "block",
                lineHeight: "140%",
              }}>
              Latest Collaboration
            </span>
            <span
              style={{
                display: "block",
                fontSize: 36,
                fontFamily: "MontHeavy, sans-serif",
                letterSpacing: "-0.04em",
                lineHeight: "96%",
              }}>
              Red Congolese
            </span>
          </Grid.Unit>
          <GoldGrid size={halfSize}>
            <Collab right="0" />
            <span
              style={{
                display: "inline-block",
                marginLeft: 18,
                marginRight: 60,
              }}>
              GOLD SEAL SF
            </span>
            <Arrow borderColor="#000" left="0" />
          </GoldGrid>
        </Grid>
      </Box>
      <Box fullHeight top={190} bottom={190} bgColor="#FF4438">
        <Quote>
          The Live Resin Project <MobileBr />
          began <DesktopBr />
          when we were <MobileBr />
          harvesting <DesktopBr />
          fresh <MobileBr />
          flower. We thought, <MobileBr />
          <DesktopBr />
          “There must be a <MobileBr />
          better way <DesktopBr />
          to <MobileBr />
          harness this aroma, <MobileBr />
          <DesktopBr />
          flavor, and <MobileBr />
          sensation.” So, <DesktopBr />
          we <MobileBr />
          found a way.
        </Quote>
      </Box>
      <Grid reverse={size && size.width < md}>
        <Grid.Unit size={halfSize}>
          <SquareBox bgColor="#1DCAD3">
            <BlockTitle color="#FFF" line="bottom" style={{ paddingTop: 0 }}>
              {`The Inventor of\nLive Resin`}
            </BlockTitle>
            <Text color="#FFF">
              Our fearless leader, William “Kind Bill” Fenger, was inspired by
              his experience of growing cannabis, but frustrated by the quality
              of extracts made from traditional techniques. In 2013, he did
              something about it.
            </Text>
            <Button
              bgColor="#FFF"
              color="#1DCAD3"
              onClick={() => navigate("/our-story/")}>
              About us
            </Button>
          </SquareBox>
        </Grid.Unit>
        <Grid.Unit size={halfSize}>
          <SquareBox mobileHeight="65vh" bgColor="#d4d4d4" bgImage={inventor} />
        </Grid.Unit>
      </Grid>
      <Grid>
        <Grid.Unit size={halfSize}>
          <SquareBox mobileHeight="65vh" bgColor="#d4d4d4" bgImage={extract} />
        </Grid.Unit>
        <Grid.Unit size={halfSize}>
          <SquareBox bgColor="#FF9E18">
            <BlockTitle color="#FFF" line="bottom" style={{ paddingTop: 0 }}>
              An Extract Science
            </BlockTitle>
            <Text color="#FFF">
              Creating live resin is a scientific process designed to preserve
              all the characteristics of fresh flower that dry out and degrade
              in other form factors.
            </Text>
            <Button
              bgColor="#FFF"
              color="#FF9E18"
              onClick={() => navigate("/our-process/")}>
              Our Process
            </Button>
          </SquareBox>
        </Grid.Unit>
      </Grid>
      <ProductBox
        bgColor="rgba(217, 35, 25, 1)"
        top={175}
        bottom={750}
        bgImage={products}
        bgImageMobile={productsMobile}
        bgSize="contain"
        bgPosition="bottom center">
        <BlockTitle line="top" color="#FFF">
          Our Products
        </BlockTitle>
        <Grid>
          <Grid.Unit size={{ sm: 2 / 5, xs: 1 }}>
            <Text color="#FFF">
              Our goal is to preserve the essence of a live plant until you’re
              holding our concentrates in your hand. We’re always looking for
              the best fresh flower to turn into vape cartridges, sauces,
              budders, diamonds, sugars, shatters and THCA crystalline.
            </Text>
            <Button
              style={{ marginRight: 30 }}
              bgColor="#FFF"
              color="#D73121"
              onClick={() => navigate("/products/")}>
              Explore
            </Button>
            <Button
              withArrow
              color="#FFF"
              bgColor="#D73121"
              borderColor="#FFF"
              onClick={() => navigate("/store-locator/")}>
              Store Locator
            </Button>
          </Grid.Unit>
        </Grid>
      </ProductBox>
      <OnlyDesktop>
        <RCBanner />
      </OnlyDesktop>
      <OnlyMobile>
        <Grid>
          <Grid.Unit size={halfSize}>
            <Box top={35} bottom={35} bgColor="#BBA135">
              <Text bottom={20}>Latest Collaboration</Text>
              <BlockTitle
                line="mobileTop"
                fontSize="66px"
                lineHeight="96%"
                color="#000">
                Red
                <br />
                Congolese
              </BlockTitle>
              <div>
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
              <Text
                style={{
                  marginTop: 30,
                  paddingTop: 30,
                  borderTop: "1px solid #000",
                }}>
                This special collaboration showcases Gold Seal’s signature Red
                Congolese, a 12+ week flowering Sativa that we believe is truly
                special.
              </Text>
              <Button borderColor="#000" color="#000" bgColor="#BBA135">
                Learn More
              </Button>
            </Box>
          </Grid.Unit>
          <Grid.Unit size={halfSize}>
            <Box top={35} bottom={35} bgColor="#000">
              <Text color="#FFC700" bottom={20}>
                Recent Drop
              </Text>
              <BlockTitle
                line="mobileTop"
                fontSize="66px"
                lineHeight="96%"
                color="#FFC700">
                Skywalker
                <br />
                OG
              </BlockTitle>
              <Text
                color="#FFC700"
                style={{
                  marginTop: 70,
                  paddingTop: 30,
                  borderTop: "1px solid #FFC700",
                }}>
                It's everything we love about OG - gassy, rich a little earthy.
              </Text>
              <Button borderColor="#FFC700" color="#FFC700" bgColor="#000">
                Learn More
              </Button>
            </Box>
          </Grid.Unit>
        </Grid>
      </OnlyMobile>
      <Box fullHeight top={190} bottom={190} bgColor="#FCD199">
        <Quote withSignature>
          “My philosophy is <MobileBr />
          <DesktopBr />
          Japanese <MobileBr />
          Materialism. <DesktopBr />
          That <MobileBr />
          everything takes its
          <MobileBr />
          <DesktopBr />
          higher form. And I <MobileBr />
          believe <DesktopBr />
          that live resin <MobileBr />
          is the highest <DesktopBr />
          form of <MobileBr />
          the cannabis plant.”
        </Quote>
      </Box>
      <MeetTheTeam />
      <Friends />
      <InstagramFeed />
    </>
  )
}

export default IndexPage
