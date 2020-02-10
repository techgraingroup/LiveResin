import React from "react"
import styled from "styled-components"
import { fluidRange } from "polished"
import { navigate } from "gatsby"
import { Button } from "./button"
import { Box } from "./box"

const BannerTitle = styled.h2`
  color: #fff;
  font-family: MontHeavy;
  padding-bottom: 50px;
  border-bottom: 4px solid #fff;
  margin-bottom: 30px;
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
`

const Banner = ({ bannerImg, title, tagLine, withButton, link, linkText }) => {
  return (
    <Box bgColor="#000" bgImage={bannerImg} top={240} bottom={215}>
      <BannerTitle>{title}</BannerTitle>
      <Tagline>{tagLine}</Tagline>
      {withButton && link && linkText && (
        <Button bgColor="#FFF" color="#000" onClick={() => navigate(link)}>
          {linkText}
        </Button>
      )}
    </Box>
  )
}

export default Banner
