import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "styled-components-grid"
import { Box } from "./box"
import { Button, PlayButton } from "./button"
import { BlockTitle, Text } from "./text"

const MeetTheTeam = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "the-team.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Box
      bgColor="#A2D45E"
      bgImage={file}
      bgPosition="bottom center"
      top={274}
      bottom={274}
      bgSize="contain">
      <Grid>
        <Grid.Unit size={{ sm: 1 / 3, xs: 1 }}>
          <BlockTitle line="bottom" color="#FFF">
            Meet the Team
          </BlockTitle>
          <Text color="#FFF">Say hello to Bill, Philip and Ry.</Text>
          <Button bgColor="#FFF" color="#A2D45E">
            Learn More
          </Button>
        </Grid.Unit>
      </Grid>
      <PlayButton />
    </Box>
  )
}

export default MeetTheTeam
