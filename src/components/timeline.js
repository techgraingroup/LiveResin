import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Grid from "styled-components-grid"
import { Box } from "./box"
import { Text } from "./text"
import { TIMELINE_DATA } from "../data"

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
    left: 50%;
    margin-left: -2px;
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

const TimelineItem = styled(
  ({ title, description, photo, position, ...rest }) => (
    <Grid {...rest}>
      {position === "right" && <Grid.Unit size={1 / 2} />}
      <Grid.Unit className="text-wrap" size={1 / 2}>
        <div className="text">
          <div className="h3-wrap">
            <h3>{title}</h3>
          </div>
          <div className="text-wrap">
            <Text>{description}</Text>
          </div>
        </div>
      </Grid.Unit>
      {position === "left" && <Grid.Unit size={1 / 2} />}
    </Grid>
  )
)`
  margin-bottom: 60px;
  .text-wrap {
    .text {
      .h3-wrap {
        border-bottom: 1px solid #000;
        display: flex;
        position: relative;
        ${props => props.position === "right" && `justify-content: flex-end;`}
        h3 {
          font-size: 24px;
          text-transform: uppercase;
          line-height: 100%;
          width: 250px;
        }
        &::after {
          position: absolute;
          content: "";
          display: block;
          ${props =>
            props.photo
              ? `
              width: 250px;
              height: 250px;
              border-radius: 125px;
              background: url(${
                props.photo.childImageSharp.fluid.src
              }) center center no-repeat transparent;
              background-size: 100%;
              bottom: -125px;
              ${props.position === "right" ? `left: -125px` : `right: -125px`};
              `
              : `
              width: 20px;
              height: 20px;
              border-radius: 10px;
              background: #fff;
              border: 1px solid #000;
              bottom: -10px;
              ${props.position === "right" ? `left: -12px` : `right: -12px`};
              `}
        }
      }
      .text-wrap {
        display: flex;
        ${props => props.position === "right" && `justify-content: flex-end;`}
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
              fluid(maxWidth: 250) {
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
