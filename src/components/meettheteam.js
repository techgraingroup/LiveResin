import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { fluidRange } from "polished"
import { navigate, useStaticQuery, graphql } from "gatsby"
import Grid from "styled-components-grid"
import { Box } from "./box"
import { Button, PlayButton } from "./button"
import { BlockTitle, Text } from "./text"
import { THEME } from "../data"

const {
  breakpoints: { md, xl },
} = THEME

const MeetTheTeamBox = styled(props => <div {...props} />)`
  padding-top: 67vh;
  padding-bottom: 0;
  background-color: #A2D45E;
  position: relative;
  overflow: hidden;
  ${fluidRange(
    {
      prop: "padding-left",
      fromSize: "20px",
      toSize: "135px",
    },
    `${md}px`,
    `${xl}px`
  )}
  ${fluidRange(
    {
      prop: "padding-right",
      fromSize: "20px",
      toSize: "135px",
    },
    `${md}px`,
    `${xl}px`
  )}
  @media only screen and (min-width: ${md}px) {
    padding-top: 320px;
    padding-bottom: 320px;
  }
`

const TextWrapper = styled(props => <Grid.Unit {...props} />)`
  position: relative;
  z-index: 100;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: ${md}px) {
    height: auto;
  }
`

const ImgBox = styled(props => <Img {...props} />)`
  position: absolute !important;
  height: auto;
  top: 0;
  right: 0;
  bottom: 60%;
  left: 25%;
  @media only screen and (min-width: ${md}px) {
    bottom: 0;
    left: 0;
  }
`

const MeetTheTeam = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "the-team.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <MeetTheTeamBox>
      <ImgBox durationFadeIn={1000} fluid={file.childImageSharp.fluid} />
      <Grid>
        <TextWrapper size={{ sm: 1 / 3, xs: 1 }}>
          <div>
            <BlockTitle line="bottom" color="#FFF">
              Meet the Team
            </BlockTitle>
            <Text color="#FFF">
              Creating live resin is a scientific process designed to preserve
              all the characteristics of fresh flower that dry out and degrade
              in other form factors.
            </Text>
            <Button
              bgColor="#FFF"
              color="#A2D45E"
              onClick={() => navigate("/our-story")}>
              About Us
            </Button>
          </div>
        </TextWrapper>
      </Grid>
      <PlayButton />
    </MeetTheTeamBox>
  )
}

export default MeetTheTeam
