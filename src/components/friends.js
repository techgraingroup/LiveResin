import React from "react"
import Grid from "styled-components-grid"
import styled from "styled-components"
import { Box } from "./box"
import { BlockTitle } from "./text"
import { FRIENDS_DATA } from "../data"

const FriendImg = styled(({ src, to, alt, ...rest }) => (
  <div {...rest}>
    <a href={to || "#"} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} />
    </a>
  </div>
))`
  margin: 15px;
  img {
    max-width: 100%;
    height: auto;
  }
`

const Friends = () => (
  <Box>
    <BlockTitle line="top" color="#000">
      Friends of the Project
    </BlockTitle>
    <Grid halign="left" valign="center" style={{ marginTop: 40 }}>
      {FRIENDS_DATA.map(item => (
        <Grid.Unit key={item.name} size={{ sm: 1 / 4, xs: 1 / 2 }}>
          <FriendImg to={item.link} src={item.image} alt={item.name} />
        </Grid.Unit>
      ))}
    </Grid>
  </Box>
)

export default Friends
