import React, { useEffect, useContext } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { fluidRange } from "polished"
import Grid from "styled-components-grid"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Hero from "../components/hero"
import { H2, BlockTitleHorz, PageTitle, Quote } from "../components/text"
import { Box } from "../components/box"
import { DesktopBr, MobileBr } from "../components/responsive"
import { AppContext } from "../context"
import { getImageFromList } from "../utils"
import { THEME } from "../data"

const {
  breakpoints: { md, xl },
  sideGutter,
} = THEME

const IconWrapper = styled(props => <Grid.Unit {...props} />)`
  margin-bottom: 80px;
  @media only screen and (min-width: ${md}px) {
    margin-bottom: 0;
  }
  img {
    max-width: 50%;
    @media only screen and (min-width: ${md}px) {
      max-width: auto;
    }
  }
`

const TextWrapper = styled(props => <Grid.Unit {...props} />)`
  text-align: center;
  @media only screen and (min-width: ${md}px) {
    text-align: left;
  }
`

const ProcessBox = styled.div`
  height: 100vh;
  background-color: ${props => props.bgColor || "#000"};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  ${fluidRange(
    {
      prop: "padding-left",
      fromSize: "20px",
      toSize: sideGutter,
    },
    `${md}px`,
    `${xl}px`
  )}
  ${fluidRange(
    {
      prop: "padding-right",
      fromSize: "20px",
      toSize: sideGutter,
    },
    `${md}px`,
    `${xl}px`
  )}
  @media only screen and (min-width: ${md}px) {
    height: 500px;
  }
`

const OurProcessPage = () => {
  const { dispatch } = useContext(AppContext)
  const {
    dataJson: { processSteps },
    banners: { edges },
  } = useStaticQuery(graphql`
    query {
      dataJson {
        processSteps {
          color
          text
          title
          image {
            publicURL
          }
        }
      }
      banners: allFile(
        filter: {
          relativePath: {
            in: ["process-banner-bg.jpg", "process-banner-mobile-bg.jpg"]
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
  useEffect(() => {
    dispatch({
      type: "activeMenu",
      value: "/our-process/",
    })
    dispatch({ type: "mobileMenu", value: false })
  }, [])
  const banner = getImageFromList("process-banner-bg.jpg", edges)
  const bannerMobile = getImageFromList("process-banner-mobile-bg.jpg", edges)
  return (
    <>
      <SEO title="Our Process" />
      <Hero
        withOverlay
        aspectRatio={900 / 1440}
        aspectRatioMobile={896 / 375}
        bgImage={banner}
        bgImageMobile={bannerMobile}
        vAlign="center"
        vAlignMobile="flex-end"
        title={() => (
          <>
            The true <MobileBr />
            essence <DesktopBr />
            of <MobileBr />
            cannabis.
          </>
        )}
        description={() => (
          <>
            Live resin delivers an authentic, <MobileBr />
            multi-sensory <DesktopBr />
            cannabis experience. <MobileBr />
            It harnesses all the aroma, <MobileBr />
            <DesktopBr />
            flavor, and uniqueness <MobileBr />
            of a live cannabis plant in a <DesktopBr />
            <MobileBr />
            variety of concentrate forms.
          </>
        )}
      />
      <PageTitle
        title={`Our\nProcess`}
        text="Creating live resin is an intensive labor of love. It requires precision and care from beginning to end to extract the essence of living cannabis and convert it into a variety of textures. As the inventors of live resin, we’ve been at it longer than anyone. "
      />
      {processSteps.map(item => (
        <ProcessBox key={`box-${item.color}`} bgColor={item.color}>
          <Grid valign="center">
            <IconWrapper
              size={{ xs: 1, sm: 1 / 2 }}
              style={{ textAlign: "center" }}>
              <img src={item.image.publicURL} alt={item.title} />
            </IconWrapper>
            <TextWrapper size={{ xs: 1, sm: 1 / 2 }}>
              <H2
                style={{ fontFamily: "MontHeavy, sans-serif", color: "white" }}>
                {item.title}
              </H2>
              <p>{item.text}</p>
            </TextWrapper>
          </Grid>
        </ProcessBox>
      ))}
      <Box>
        <BlockTitleHorz
          title={`Live Resin Forms &\nTextures`}
          ctaText="Learn More"
          ctaLink="/products/"
          description="Following the extraction process, we can make a consumable product in a variety of form factors. Explore each form factor and decide which product is right for you."
        />
      </Box>
      <Box fullHeight top={190} bottom={190} bgColor="#FF9E18">
        <Quote withSignature>
          “The real thing about <MobileBr />
          <DesktopBr />
          mastering a craft <MobileBr />
          isn’t that <DesktopBr />
          you get to <MobileBr />
          make it perfect, <DesktopBr />
          but <MobileBr />
          it’s about really <MobileBr />
          knowing <DesktopBr />
          how great it <MobileBr />
          can be.”
        </Quote>
      </Box>
    </>
  )
}

export default OurProcessPage
