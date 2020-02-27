import React, { useEffect, useContext } from "react"
import styled from "styled-components"
import { fluidRange } from "polished"
import { navigate } from "gatsby"
import { AppContext } from "../context"
import SEO from "../components/seo"
import { Box } from "../components/box"
import { Button } from "../components/button"
import { Quote, PageTitle, BlockTitleHorz } from "../components/text"
import Timeline from "../components/timeline"
import MeetTheTeam from "../components/meettheteam"
import Friends from "../components/friends"
import { MobileBr, DesktopBr } from "../components/responsive"
import { THEME } from "../data"

const {
  breakpoints: { md, xl },
} = THEME

const BlockTitle = styled(props => <BlockTitleHorz {...props} />)`
  margin-bottom: 0;
  @media only screen and (min-width: ${md}px) {
    margin-bottom: 100px;
  }
`

const QuoteBox = styled(props => <Box {...props} />)`
  padding-top: 40px;
  padding-bottom: 100px;
  @media only screen and (min-width: ${md}px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }
`

const SimpleQuote = styled.div`
  font-family: MontHeavy, sans-serif;
  line-height: 105.8%;
  white-space: pre-wrap;
  letter-spacing: -0.04em;
  ${fluidRange(
    {
      prop: "font-size",
      fromSize: "22px",
      toSize: "48px",
    },
    `${md}px`,
    `${xl}px`
  )}
`

const OurStoryPage = () => {
  const { dispatch } = useContext(AppContext)
  useEffect(() => {
    dispatch({
      type: "activeMenu",
      value: "/our-story/",
    })
    dispatch({ type: "mobileMenu", value: false })
  }, [])
  return (
    <>
      <SEO title="Our Story" />
      <PageTitle
        top="200"
        bottom="40"
        mobileTop="72"
        mobileBottom="60"
        title={`Our Story`}
        text="Led by William “Kind Bill” Fenger, our team has more experience with this product category than anyone else, dating back to its creation in 2013. While the rest of the industry was hung up on shatter and wax, we were focusing on retaining volatile terpenes by freezing the plant material and extracting it cold in order to provide the most authentic and flavorful cannabis experience possible."
      />
      <Timeline />
      <QuoteBox>
        <SimpleQuote>{`We lead by example.\nWe champion new experiences.\nWe travel beyond borders.\nWe are doing it live.`}</SimpleQuote>
      </QuoteBox>
      <MeetTheTeam />
      <Box fullHeight top={190} bottom={190} bgColor="#1DCAD3">
        <Quote withSignature>
          “Believe me, you’ve <MobileBr />
          never <DesktopBr />
          felt something <MobileBr />
          like this. You <DesktopBr />
          will taste
          <MobileBr />
          color and smell <MobileBr />
          <DesktopBr />
          flavor. There’s a <MobileBr />
          <DesktopBr />
          multidimensional <MobileBr />
          <DesktopBr />
          experience waiting
          <MobileBr />
          for you.”
        </Quote>
      </Box>
      <Friends />
      <Box top="0">
        <BlockTitle
          mobileTop
          title="Get In Touch"
          description="Have questions about the Live Resin Project? Get in touch and we’ll help you out. "
        />
        <Button
          color="#FFF"
          bgColor="#000"
          style={{ marginRight: 30 }}
          onClick={() => navigate("/contact-us/")}>
          Contact Us
        </Button>
        <Button
          withArrow
          color="#000"
          bgColor="#FFF"
          borderColor="#000"
          onClick={() => navigate("/store-locator/")}>
          Store Locator
        </Button>
      </Box>
    </>
  )
}

export default OurStoryPage
