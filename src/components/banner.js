import React from "react"
import styled from "styled-components"
import Grid from "styled-components-grid"
import { fluidRange } from "polished"
import { navigate } from "gatsby"
import { Button } from "./button"
import { Box } from "./box"

const BannerTitle = styled.h2`
  color: #fff;
  font-family: MontHeavy, sans-serif;
  font-weight: 800;
  padding-bottom: 50px;
  border-bottom: 4px solid #fff;
  margin-bottom: 30px;
  line-spacing: -0.04em;
  ${fluidRange({
    prop: "line-height",
    fromSize: "41px",
    toSize: "87px",
  })}
  ${fluidRange({
    prop: "font-size",
    fromSize: "45px",
    toSize: "96px",
  })}
`

const Tagline = styled.p`
  margin-bottom: 30px;
  font-size: 24px;
  line-height: 140%;
  font-family: MontBold, sans-serif;
`

const Banner = ({
  top,
  bottom,
  bannerImg,
  title,
  tagLine,
  withButton,
  link,
  linkText,
  children,
}) => {
  const Title = title
  return (
    <Box
      bgColor="#000"
      bgImage={bannerImg}
      top={top || 240}
      bottom={bottom || 215}>
      {children || (
        <>
          <BannerTitle>
            <Title />
          </BannerTitle>
          <Grid>
            <Grid.Unit size={{ xs: 1, sm: 1 / 2 }}>
              <Tagline>{tagLine}</Tagline>
            </Grid.Unit>
          </Grid>
          {withButton && link && linkText && (
            <Button bgColor="#FFF" color="#000" onClick={() => navigate(link)}>
              {linkText}
            </Button>
          )}
        </>
      )}
    </Box>
  )
}

export default Banner
