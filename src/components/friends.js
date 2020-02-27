import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Box } from "./box"
import { Image } from './animations'
import { BlockTitle } from "./text"
import { THEME } from "../data"

const {
  breakpoints: { md },
} = THEME

const FriendImg = styled(({ width, height, src, to, alt, ...rest }) => (
  <div {...rest}>
    <a href={to || "#"} target="_blank" rel="noopener noreferrer">
      <Image
        style={{
          width: "100%",
          height: "auto",
          maxWidth: width,
          maxHeight: height,
        }}
        alt={alt}
        fluid={src.childImageSharp.fluid}
      />
    </a>
  </div>
))`
  width: ${props => (props.width ? `${props.width}px` : "100px")};
  height: ${props => (props.height ? `${props.height}px` : "100px")};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  display: block;
  @media only screen and (min-width: ${md}px) {
    margin-right: 70px;
    margin-left: 0;
    margin-bottom: 0;
    display: inline-block;
  }
  a {
    display: block;
    .gatsby-image-wrapper {
      margin-left: auto;
      margin-right: auto;
    }
  }
`

const Friends = () => {
  const {
    dataJson: { friends },
  } = useStaticQuery(graphql`
    query {
      dataJson {
        friends {
          link
          name
          width
          height
          image {
            childImageSharp {
              fluid(quality: 100, maxWidth: 768) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Box>
      <BlockTitle line="mobileTop" color="#000">
        Friends of the Project
      </BlockTitle>
      <div style={{ textAlign: "left", marginTop: 60 }}>
        {friends.map(item => (
          <FriendImg
            key={item.name}
            width={item.width}
            height={item.height}
            to={item.link}
            src={item.image}
            alt={item.name}
          />
        ))}
      </div>
    </Box>
  )
}

export default Friends
