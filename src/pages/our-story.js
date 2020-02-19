import React, { useEffect, useContext } from "react"
import { navigate } from "gatsby"
import Grid from "styled-components-grid"
import { AppContext } from "../context"
import SEO from "../components/seo"
import { Box } from "../components/box"
import { Button } from "../components/button"
import { H2, Quote, PageTitle, BlockTitleHorz } from "../components/text"
import Timeline from '../components/timeline'
import MeetTheTeam from "../components/meettheteam"
import Friends from "../components/friends"

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
        title={`Our Story`}
        text={`Led by William "Kind Bill" Fenger, our team has more experience with this product category than anyone else, dating back to its creation in 2013. While the rest of the industry was hung up on shatter and wax, we were focusing on retaining volatile terpenes by freezing the plant material and extracting it cold in order to provide the most authentic and flavorful cannabis experience possible.`}
      />
      <Timeline />
      <Box>
        <H2>{`We lead by example.\nWe champion new experiences.\nWe travel beyond borders.\nWe are doing it live.`}</H2>
      </Box>
      <MeetTheTeam />
      <Box bgColor="#1DCAD3">
        <Quote withSignature>
          “Believe me, you’ve never felt something like this. You will taste
          color and smell flavor. There’s a multidimensional experience waiting
          for you.”
        </Quote>
      </Box>
      <Friends />
      <Box top="0">
        <BlockTitleHorz
          style={{ marginBottom: 100 }}
          title="Get In Touch"
          description="Donec eget imperdiet dui. Mauris lorem lacus, porttitor quis vehicula vitae, pretium non purus."
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
