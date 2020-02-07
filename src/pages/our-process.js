import React, { useEffect, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "styled-components-grid"

import SEO from "../components/seo"
import Banner from "../components/banner"
import FormsTextures from "../components/formsntextures"
import { H2, PageTitle, Quote } from "../components/text"
import { Box } from "../components/box"
import { AppContext } from "../context"

import bannerImg from "../images/process-banner-bg.jpg"

const OurProcessPage = () => {
  const { dispatch } = useContext(AppContext)
  const {
    dataJson: { processSteps },
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
    }
  `)
  useEffect(() => {
    dispatch({
      type: "activeMenu",
      value: "/our-process/",
    })
  }, [])
  return (
    <>
      <SEO title="Our Process" />
      <Banner
        bannerImg={bannerImg}
        title={`The true essence\nof cannabis.`}
        tagLine="Live Resin is the purest way to consume cannabis. It harnesses all of the flavor, aroma, and potency of a live cannabis plant, and delivers it in an authentic concentrate."
      />
      <PageTitle
        title={`Our\nProcess`}
        text="Creating live resin is an intensive labor of love. It requires precision and care from the beginning to end, to ensure we harness the greatest qualities of cannabis and extract them into a powerful dab. And we should know. After all, we invented it."
      />
      {processSteps.map(item => (
        <Box key={`box-${item.color}`} bgColor={item.color}>
          <Grid valign="center">
            <Grid.Unit
              size={{ xs: 1, sm: 1 / 2 }}
              style={{ textAlign: "center" }}>
              <img src={item.image.publicURL} />
            </Grid.Unit>
            <Grid.Unit size={{ xs: 1, sm: 1 / 2 }}>
              <H2 style={{ color: "white" }}>{item.title}</H2>
              <p>{item.text}</p>
            </Grid.Unit>
          </Grid>
        </Box>
      ))}
      <FormsTextures />
      <Box bgColor="#FF9E18">
        <Quote withSignature>
          “The real thing about mastering a craft isn’t that you get to make it
          perfect, but it’s about really knowing how great it can be.”
        </Quote>
      </Box>
    </>
  )
}

export default OurProcessPage
