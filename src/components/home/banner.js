import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { Button } from "../button"
import { Box } from "../box"
import bannerImg from "../../images/home-banner-bg.jpg"

const BannerTitle = styled.h2`
  color: #fff;
  font-size: 96px;
  line-height: 87px;
  font-family: MontHeavy;
  padding-bottom: 50px;
  border-bottom: 4px solid #fff;
  margin-bottom: 30px;
`

const Tagline = styled.p`
  margin-bottom: 30px;
  font-size: 24px;
  line-height: 140%;
`

const HomeBanner = () => {
  return (
    <Box bgColor="#000" bgImage={bannerImg} top={240} bottom={215}>
      <BannerTitle>
        Our Adventures
        <br />
        in extraction.
      </BannerTitle>
      <Tagline>Learn more about the Live Resin Project</Tagline>
      <Button
        bgColor="#FFF"
        color="#000"
        onClick={() => navigate("/our-process/")}>
        Our Process
      </Button>
    </Box>
  )
}

export default HomeBanner
