import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Grid from "styled-components-grid"
import styled from "styled-components"
import { Box } from "./box"
import { BlockTitle } from "./text"

const FriendImg = styled(({ src, to, alt, ...rest }) => (
  <div {...rest}>
    <a href={to || "#"} target="_blank" rel="noopener noreferrer">
      <Img alt={alt} fluid={src.childImageSharp.fluid} />
    </a>
  </div>
))`
  margin: 15px;
  img {
    max-width: 100%;
    height: auto;
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
          image {
            childImageSharp {
              fluid(maxWidth: 768){
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
      <BlockTitle line="top" color="#000">
        Friends of the Project
      </BlockTitle>
      <Grid halign="left" valign="center" style={{ marginTop: 40 }}>
        {friends.map(item => (
          <Grid.Unit key={item.name} size={{ sm: 1 / 4, xs: 1 / 2 }}>
            <FriendImg to={item.link} src={item.image} alt={item.name} />
          </Grid.Unit>
        ))}
      </Grid>
    </Box>
  )
}

export default Friends
