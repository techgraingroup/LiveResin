import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "styled-components-grid"
import Img from "gatsby-image"
import { Box } from "./box"
import { Text } from "./text"

const InstagramFeed = () => {
  const { allInstaNode } = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 4) {
        edges {
          node {
            localFile {
              childImageSharp {
                fluid(maxWidth: 500, quality: 95) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <Box bgColor="#000" top={100} bottom={100}>
        <Text color="#FFF">
          <span
            style={{
              fontFamily: "MontHeavy, sans-serif",
              lineHeight: "100%",
              fontSize: 24,
              display: "block",
              marginBottom: 20,
            }}>{`@${process.env.INSTAGRAM_USER}`}</span>
          <a
            href={`https://www.instagram.com/${process.env.INSTAGRAM_USER}`}
            target="_blank"
            rel="noreferrer noopener"
            style={{
              color: "white",
              textDecoration: "none",
              lineSpacing: "0.1em",
              fontFamily: "MontBold, sans-serif",
            }}>
            VIEW INSTAGRAM
          </a>
        </Text>
      </Box>
      <Grid>
        {allInstaNode.edges.map(item => (
          <Grid.Unit
            key={item.node.id}
            size={{
              sm: 1 / 4,
              xs: 1 / 2,
            }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.instagram.com/p/${item.node.id}`}>
              <Img
                fluid={{
                  ...item.node.localFile.childImageSharp.fluid,
                  aspectRatio: 1,
                }}
              />
            </a>
          </Grid.Unit>
        ))}
      </Grid>
    </div>
  )
}

export default InstagramFeed
