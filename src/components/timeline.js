import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Grid from "styled-components-grid"
import { Box } from "./box"
import { Text } from "./text"
import { THEME } from "../data"

const {
  breakpoints: { md },
} = THEME

const Wrapper = styled(({ children, ...rest }) => (
  <div {...rest}>
    <span></span>
    {children}
  </div>
))`
  position: relative;
  min-height: 450px;
  border-top: 1px solid #000;
  padding-top: 150px;
  span {
    display: block;
    width: 4px;
    background: #000;
    position: absolute;
    top: 150px;
    bottom: 0;
    margin-left: -2px;
    left: 40px;
    @media only screen and (min-width: ${md}px) {
      left: 50%;
    }
    &::before {
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -10px;
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 10px;
      background: #000;
    }
  }
`

const HollowGridUnit = styled(props => <Grid.Unit {...props} />)`
  display: none;
  @media only screen and (min-width: ${md}px) {
    display: block;
  }
`

const TimelineItem = styled(
  ({ title, description, photo, position, ...rest }) => (
    <Grid {...rest}>
      {position === "right" && <HollowGridUnit size={1 / 2} />}
      <Grid.Unit className="text-wrap" size={{ xs: 1, sm: 1, md: 1 / 2 }}>
        <div className="text">
          <div className="h3-wrap">
            <h3>{title}</h3>
          </div>
          <div className="text-wrap-inner">
            <Text>{description}</Text>
          </div>
        </div>
      </Grid.Unit>
      {position === "left" && <HollowGridUnit size={1 / 2} />}
    </Grid>
  )
)`
  margin-bottom: 60px;
  .text-wrap {
    padding-left: 40px;
    @media only screen and (min-width: ${md}px) {
      padding-left: 0;
    }
    .text {
      .h3-wrap {
        border-bottom: 1px solid #000;
        display: flex;
        position: relative;
        @media only screen and (min-width: ${md}px) {
          ${props => props.position === "right" && `justify-content: flex-end;`}
        }
        h3 {
          font-family: MontHeavy, sans-serif;
          font-size: 24px;
          text-transform: uppercase;
          line-height: 100%;
          width: 250px;
          padding-left: 60px;
          @media only screen and (min-width: ${md}px) {
            padding-left: 0;
          }
        }
        &::after {
          position: absolute;
          content: "";
          display: block;
          ${props =>
            props.photo
              ? `
              width: 80px;
              height: 80px;
              border-radius: 40px;
              border: 2px solid #000;
              box-sizing: border-box;
              background: url(${
                props.photo.childImageSharp.fluid.src
              }) center center no-repeat transparent;
              background-size: 100%;
              bottom: -50%;
              left: -40px;
              @media only screen and (min-width: ${md}px) {
                  bottom: -125px;
                  width: 250px;
                  height: 250px;
                  border-radius: 125px;
                  border: 4px solid #000;
                  ${
                    props.position === "right"
                      ? `left: -125px`
                      : `right: -125px`
                  };
                  ${props.position === "right" ? `right: auto` : `left: auto`};
              }
              `
              : `
              width: 20px;
              height: 20px;
              border-radius: 10px;
              background: #fff;
              border: 1px solid #000;
              bottom: -10px;
              left: -11px; 
              @media only screen and (min-width: ${md}px) {
                  ${
                    props.position === "right" ? `left: -12px` : `right: -12px`
                  };
                  ${props.position === "right" ? `right: auto` : `left: auto`};
              }
              `}
        }
      }
      .text-wrap-inner {
        display: flex;
        padding-left: 60px;
        @media only screen and (min-width: ${md}px) {
          padding-left: 0;
          ${props => props.position === "right" && `justify-content: flex-end;`}
        }
        p {
          width: 250px;
        }
      }
    }
  }
`

const Timeline = () => {
  const {
    dataJson: { timeline },
  } = useStaticQuery(graphql`
    query {
      dataJson {
        timeline {
          title
          description
          position
          photo {
            childImageSharp {
              fluid(maxWidth: 350, quality: 100) {
                src
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Box top="0" bottom="0">
      <Wrapper>
        {timeline.map((item, i) => {
          return <TimelineItem key={`item-${i}`} {...item} />
        })}
      </Wrapper>
    </Box>
  )
}

export default Timeline
