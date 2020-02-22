import React, { useEffect, useContext } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "styled-components-grid"
import SEO from "../components/seo"
import Banner from "../components/banner"
import { H2, BlockTitleHorz, PageTitle, Quote } from "../components/text"
import { Box } from "../components/box"
import { AppContext } from "../context"
import { THEME } from "../data"

const {
  breakpoints: { md },
} = THEME

const IconWrapper = styled(props => <Grid.Unit {...props} />)`
  margin-bottom: 80px;
  @media only screen and (min-width: ${md}px) {
    margin-bottom: 0;
  }
`

const TextWrapper = styled(props => <Grid.Unit {...props} />)`
  text-align: center;
  @media only screen and (min-width: ${md}px) {
    text-align: left;
  }
`

const OurProcessPage = () => {
  const { dispatch } = useContext(AppContext)
  const {
    file,
    dataJson: { processSteps },
  } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "process-banner-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
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
    }
  `)
  useEffect(() => {
    dispatch({
      type: "activeMenu",
      value: "/our-process/",
    })
    dispatch({ type: "mobileMenu", value: false })
  }, [])
  return (
    <>
      <SEO title="Our Process" />
      <Banner
        bannerImg={file}
        title={`The true essence\nof cannabis.`}
        tagLine="Live Resin is the purest way to consume cannabis. It harnesses all of the flavor, aroma, and potency of a live cannabis plant, and delivers it in an authentic concentrate."
      />
      <PageTitle
        title={`Our\nProcess`}
        text="Creating live resin is an intensive labor of love. It requires precision and care from the beginning to end, to ensure we harness the greatest qualities of cannabis and extract them into a powerful dab. And we should know. After all, we invented it."
      />
      {processSteps.map(item => (
        <Box
          fullHeight
          top={90}
          bottom={90}
          key={`box-${item.color}`}
          bgColor={item.color}>
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
        </Box>
      ))}
      <Box>
        <BlockTitleHorz
          title="Live Resin Forms & Textures"
          ctaText="Learn More"
          ctaLink="/products/"
          description="Following the extraction process, we can make a consumable product in a variety of form factors. Explore each form factor and decide which product is right for you"
        />
      </Box>
      <Box fullHeight top={190} bottom={190} bgColor="#FF9E18">
        <Quote withSignature>
          “The real thing about mastering a craft isn’t that you get to make it
          perfect, but it’s about really knowing how great it can be.”
        </Quote>
      </Box>
    </>
  )
}

export default OurProcessPage
