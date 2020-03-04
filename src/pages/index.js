import React, { useState, useEffect, useContext } from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import styled from "styled-components"
import Grid from "styled-components-grid"
import { fluidRange } from "polished"
import AnchorLink from "react-anchor-link-smooth-scroll"
import debounce from "lodash/debounce"
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
  CollabIcon,
  CollabLabel,
  Description,
  LowerBlock,
} from "../components/rcbanner"
import {
  OnlyMobile,
  OnlyDesktop,
  MobileBr,
  DesktopBr,
} from "../components/responsive"
import { getImageFromList, getWindowSize } from "../utils"
import { THEME } from "../data"

const halfSize = {
  sm: 1 / 1,
  md: 1 / 2,
}

const {
  breakpoints: { md, xl },
} = THEME

export const LocalCollabIcon = styled(props => <Collab {...props} />)`
  ${fluidRange(
    {
      prop: "width",
      fromSize: "20px",
      toSize: "30px",
    },
    `${md}px`,
    `${xl}px`
  )}
  position: relative;
  top: -1px;
  right: 0;
`

const LatestCollabSpan = styled(props => <span {...props} />)`
  font-family: MontHeavy, sans-serif;
  display: block;
  line-height: 140%;
  color: #000;
  text-decoration: none;
  margin-bottom: 7px;
  @media only screen and (min-width: ${md}px) {
    margin-bottom: 0;
  }
`

const GoldGridWrap = styled(props => <Grid {...props} />)`
  box-sizing: border-box;
  height: 120px;
  @media only screen and (min-width: ${md}px) {
    height: 100px;
  }
`

const GoldGridLeft = styled(props => <Grid.Unit {...props} />)`
  margin-bottom: 0;
  margin-top: 10px;
  @media only screen and (min-width: ${md}px) {
    margin-top: 0;
  }
`

const GoldGridRight = styled(props => <Grid.Unit {...props} />)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0;
  margin-bottom: 10px;
  @media only screen and (min-width: ${md}px) {
    justify-content: flex-end;
    margin-bottom: 0;
  }
  svg.arrow {
    position: absolute !important;
    left: auto !important;
    right: 0;
    top: 50%;
    margin-top: -9px;
  }
`

const GoldSeal = styled(props => <span {...props}>Gold Seal SF</span>)`
  color: #000;
  text-docartion: none;
  display: inline-box;
  position: relative;
  text-transform: uppercase;
  margin-right: 60px;
  margin-left: 10px;
  @media only screen and (min-width: ${md}px) {
    margin-right: 88px;
    margin-left: 18px;
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

const LatestTitle = styled(props => <BlockTitle {...props} />)`
  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "45px",
      toSize: "66px",
    },
    `${md}px`,
    `${xl}px`
  )}
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
    const handleResize = debounce(() => {
      const { width } = getWindowSize()
      setIsMobile(width < md)
    }, 500)
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
        childElement={() => (
          <Box bgColor="#BBA135" top="0" bottom="0">
            <AnchorLink
              style={{
                display: "block",
                color: "#000",
                textDecoration: "none",
              }}
              href={isMobile ? "#rc-banner-mobile" : "#rc-banner-desktop"}>
              <GoldGridWrap valign="center">
                <GoldGridLeft size={halfSize}>
                  <LatestCollabSpan style={{}}>
                    Latest Collaboration
                  </LatestCollabSpan>
                  <span
                    style={{
                      display: "block",
                      fontSize: 36,
                      fontFamily: "MontHeavy, sans-serif",
                      letterSpacing: "-0.04em",
                      lineHeight: "96%",
                      color: "#000",
                      textDecoration: "none",
                    }}>
                    Red Congolese
                  </span>
                </GoldGridLeft>
                <GoldGridRight size={halfSize}>
                  <LocalCollabIcon />
                  <GoldSeal />
                  <Arrow borderColor="#000" left="0" />
                </GoldGridRight>
              </GoldGridWrap>
            </AnchorLink>
          </Box>
        )}
        btnText="Our Process"
        btnLink="/our-process/"
      />
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
              {`The Inventors of\nLive Resin`}
            </BlockTitle>
            <Text color="#FFF" style={{ marginTop: 30 }}>
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
            <Text color="#FFF" style={{ marginTop: 30 }}>
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
          <ProductText size={{ sm: 9 / 25, xs: 1 }}>
            <Text color="#FFF">
              Our goal is to preserve the essence of a live plant until you’re
              holding our concentrates in your hand. We’re always looking for
              the best fresh flower to turn into vape cartridges, sauces,
              budders, diamonds, sugars, shatters and THCA crystalline.
            </Text>
          </ProductText>
        </Grid>
        <Grid>
          <Grid.Unit size={1}>
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
          </Grid.Unit>
        </Grid>
      </ProductBox>
      <OnlyDesktop>
        <RCBanner id="rc-banner-desktop" />
      </OnlyDesktop>
      <OnlyMobile>
        <Grid>
          <Grid.Unit size={halfSize}>
            <Box id="rc-banner-mobile" top={35} bottom={35} bgColor="#BBA135">
              <SubTitle>Latest Collaboration</SubTitle>
              <LatestTitle line="mobileTop" lineHeight="100%" color="#000">
                {`Red\nCongolese`}
              </LatestTitle>
              <CollabWrap>
                <CollabIcon />
                <CollabLabel>GOLD SEAL SF</CollabLabel>
              </CollabWrap>
              <Grid>
                <Grid.Unit size={{ xs: 1, sm: 1, md: 2 / 3 }}>
                  <Description style={{ minHeight: 120 }}>
                    This special collaboration showcases Gold Seal’s signature
                    Red Congolese, a 12+ week flowering Sativa that we believe
                    is truly special.
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
              <LatestTitle line="mobileTop" lineHeight="100%" color="#FFC700">
                {`Skywalker\nOG`}
              </LatestTitle>
              <CollabWrap borderColor="#FFC700">{`&nbsp;`}</CollabWrap>
              <Grid>
                <Grid.Unit size={{ xs: 1, sm: 1, md: 2 / 3 }}>
                  <Description color="#FFC700" style={{ minHeight: 120 }}>
                    It's everything we love about OG - gassy, rich a little
                    earthy.
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
