import React, { useRef, useState } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { fluidRange, cover } from "polished"
import { navigate, useStaticQuery, graphql } from "gatsby"
import Grid from "styled-components-grid"
import { Button, PlayButton } from "./button"
import { BlockTitle, Text } from "./text"
import { THEME } from "../data"

const {
  breakpoints: { md, xl },
  sideGutter,
} = THEME

const MeetTheTeamBox = styled(({ children, ...rest }) => (
  <div {...rest}>
    <div className="box-container">{children}</div>
  </div>
))`
  height: 167vh;
  padding-top: 0;
  padding-bottom: 0;
  background-color: #a2d45e;
  position: relative;
  overflow: hidden;
  @media only screen and (min-width: ${md}px) {
    padding-top: 56.25%;
    height: auto;
  }
  .box-container {
    ${cover()}
    padding-top: 67vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: ${md}px) {
      padding-top: 0;
    }
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

const TheGrid = styled(props => <Grid {...props} />)`
  ${fluidRange(
    {
      prop: "margin-left",
      fromSize: "20px",
      toSize: sideGutter,
    },
    `${md}px`,
    `${xl}px`
  )}
  ${fluidRange(
    {
      prop: "margin-right",
      fromSize: "20px",
      toSize: sideGutter,
    },
    `${md}px`,
    `${xl}px`
  )}
  &.show-video {
    @media only screen and (min-width: ${md}px) {
      display: none;
    }
  }
`

const MeetTheTeam = () => {
  const videoPlayer = useRef(null)
  const [showVideo, setShowVideo] = useState(false)
  const { image, videos } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "the-team.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2880) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      videos: file(relativePath: { eq: "video.mp4" }) {
        childVideoFfmpeg {
          webm: transcode(
            codec: "libvpx-vp9"
            maxWidth: 1280
            maxHeight: 720
            fileExtension: "webm"
            outputOptions: ["-crf 20", "-b:v 0"]
          ) {
            src
          }
          mp4: transcode(
            codec: "libx264"
            maxWidth: 1280
            maxHeight: 720
            fileExtension: "mp4"
            options: [["-profile:v", "main"], ["-pix_fmt", "yuv420p"]]
            outputOptions: ["-movflags faststart"]
          ) {
            src
          }
        }
      }
    }
  `)
  const playVideo = () => {
    setShowVideo(true)
    videoPlayer.current.play()
  }
  const pauseVideo = () => {
    setShowVideo(false)
    videoPlayer.current.currentTime = 0
  }
  return (
    <MeetTheTeamBox>
      <ImgBox
        style={{ display: showVideo ? "none" : "block" }}
        durationFadeIn={1000}
        fluid={image.childImageSharp.fluid}
      />
      <video
        controls
        ref={videoPlayer}
        onPause={pauseVideo}
        style={{
          display: showVideo ? "block" : "none",
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          width: "100%",
          height: "auto",
        }}>
        <source src={videos.childVideoFfmpeg.mp4.src} type="video/mp4" />
        <source src={videos.childVideoFfmpeg.webm.src} type="video/webm" />
      </video>
      <TheGrid className={showVideo ? "show-video" : ""}>
        <TextWrapper size={{ xs: 1, sm: 1, md: 1 / 3 }}>
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
      </TheGrid>
      {!showVideo && <PlayButton onClick={playVideo} />}
    </MeetTheTeamBox>
  )
}

export default MeetTheTeam
