import React, { useState, useEffect, useContext } from "react"
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
  SubTitle,
  CollabWrap,
  CollabLabel,
  CollabIcon,
  Description,
  LowerBlock,
} from "../components/rcbanner"
import {
  OnlyMobile,
  OnlyDesktop,
  MobileBr,
  DesktopBr,
} from "../components/responsive"
import { getImageFromList, isClient, getWindowSize } from "../utils"
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

const GoldSeal = styled(props => <span {...props}>Gold Seal SF</span>)`
  display: inline-box;
  margin-left: 18px;
  margin-right: 60px;
  position: relative;
  text-transform: uppercase;
  top: 1px;
  @media only screen and (min-width: ${md}px) {
    top: -2px;
  }
`

const ProductBox = styled(props => <Box {...props} />)`
  padding-top: 250px;
  padding-bottom: 900px;
  @media only screen and (min-width: ${md}px) {
    padding-top: 175px;
    padding-bottom: 52.5%;
  }
`

const ProductText = styled(props => <Grid.Unit {...props} />)`
  margin-top: 10px;
  @media only screen and (min-width: ${md}px) {
    margin-top: 0;
  }
`

const IndexPage = () => {
  const [isMobile, setIsMobile] = useState(false)
  const { dispatch } = useContext(AppContext)

  useEffect(() => {
    dispatch({
      type: "activeMenu",
      value: "/",
    })
    dispatch({ type: "mobileMenu", value: false })
    const { width } = getWindowSize()
    setIsMobile(width < md)
  }, [setIsMobile])

  useEffect(() => {
    const handleResize = () => {
      const { width } = getWindowSize()
      setIsMobile(width < md)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
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
        withOverlay
        aspectRatio={800 / 1440}
        aspectRatioMobile={829 / 375}
        bgImage={bannerImg}
        bgImageMobile={bannerMobileImg}
        vAlign="center"
        vAlignMobile="flex-end"
        title={() => (
          <>
            Our <MobileBr />
            Adventures <DesktopBr />
            in <MobileBr />
            extraction.
          </>
        )}
        description={() => <>Learn more about the Live Resin Project</>}
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
            <CollabIcon />
            <GoldSeal />
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
      <Grid reverse={isMobile}>
        <Grid.Unit size={halfSize}>
          <SquareBox bgColor="#1DCAD3">
            <BlockTitle color="#FFF" line="bottom" style={{ paddingTop: 0 }}>
              {`The Inventor of\nLive Resin`}
            </BlockTitle>
            <Text color="#FFF" style={{ marginTop: 30 }}>
              Our fearless leader, William “Kind Bill” <MobileBr />
              Fenger, was <DesktopBr />
              inspired by his experience of <MobileBr />
              growing cannabis, but <DesktopBr />
              frustrated by the <MobileBr />
              quality of extracts made from <DesktopBr />
              traditional <MobileBr />
              techniques. In 2013, he did something <DesktopBr />
              <MobileBr />
              about it.
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
            <Text color="#FFF" style={{ marginTop: 30 }}>
              Creating live resin is a scientific process <MobileBr />
              designed <DesktopBr />
              to preserve all the characteristics <MobileBr />
              of fresh flower <DesktopBr />
              that dry out and degrade in <MobileBr />
              other form factors.
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
          <ProductText size={{ sm: 2 / 5, xs: 1 }}>
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
              bgColor="transparent"
              borderColor="#FFF"
              onClick={() => navigate("/store-locator/")}>
              Store Locator
            </Button>
          </ProductText>
        </Grid>
      </ProductBox>
      <OnlyDesktop>
        <RCBanner />
      </OnlyDesktop>
      <OnlyMobile>
        <Grid>
          <Grid.Unit size={halfSize}>
            <Box top={35} bottom={35} bgColor="#BBA135">
              <SubTitle>Latest Collaboration</SubTitle>
              <BlockTitle
                line="mobileTop"
                fontSize="66px"
                lineHeight="100%"
                color="#000">
                {`Red\nCongolese`}
              </BlockTitle>
              <CollabWrap>
                <CollabIcon />
                <CollabLabel>GOLD SEAL SF</CollabLabel>
              </CollabWrap>
              <Grid>
                <Grid.Unit size={{ xs: 1, sm: 1, md: 2 / 3 }}>
                  <Description style={{ minHeight: 120 }}>
                    This special collaboration <DesktopBr />
                    showcases <MobileBr />
                    Gold Seal’s signature <DesktopBr />
                    Red Congolese, a 12+ <MobileBr />
                    week <DesktopBr />
                    flowering Sativa that we believe <DesktopBr />
                    is <MobileBr />
                    truly special.
                  </Description>
                </Grid.Unit>
                <LowerBlock size={{ xs: 1, sm: 1, md: 1 / 3 }}>
                  <Button color="#000" bgColor="#BBA135" borderColor="#000">
                    Learn More
                  </Button>
                </LowerBlock>
              </Grid>
            </Box>
          </Grid.Unit>
          <Grid.Unit size={halfSize}>
            <Box top={35} bottom={35} bgColor="#000">
              <SubTitle color="#FFC700">Recent Drop</SubTitle>
              <BlockTitle
                line="mobileTop"
                fontSize="66px"
                lineHeight="100%"
                color="#FFC700">
                {`Skywalker\nOG`}
              </BlockTitle>
              <CollabWrap borderColor="#FFC700">{`&nbsp;`}</CollabWrap>
              <Grid>
                <Grid.Unit size={{ xs: 1, sm: 1, md: 2 / 3 }}>
                  <Description color="#FFC700" style={{ minHeight: 120 }}>
                    It's everything we love about OG - gassy, <MobileBr />
                    rich a little earthy.
                  </Description>
                </Grid.Unit>
                <LowerBlock size={{ xs: 1, sm: 1, md: 1 / 3 }}>
                  <Button bgColor="#000" color="#FFC700" borderColor="#FFC700">
                    Learn More
                  </Button>
                </LowerBlock>
              </Grid>
            </Box>
          </Grid.Unit>
        </Grid>
      </OnlyMobile>
      <Box fullHeight top={190} bottom={190} bgColor="#F3DCAD">
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
