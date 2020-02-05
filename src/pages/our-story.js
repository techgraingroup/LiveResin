import React, { useEffect, useContext } from "react"
import Grid from "styled-components-grid"
import { AppContext } from "../context"
import SEO from "../components/seo"
import { Box } from "../components/box"
import { H2, Quote, PageTitle } from "../components/text"
import MeetTheTeam from "../components/meettheteam"
import Friends from "../components/friends"

const OurStoryPage = () => {
  const { dispatch } = useContext(AppContext)
  useEffect(() => {
    dispatch({
      type: "activeMenu",
      value: "/our-story/",
    })
  }, [])
  return (
    <>
      <SEO title="Our Story" />
      <PageTitle
        title={`Our Story`}
        text={`Led by William "Kind Bill" Fenger, our team has more experience with this product category than anyone else, dating back to its creation in 2013. While the rest of the industry was hung up on shatter and wax, we were focusing on retaining volatile terpenes by freezing the plant material and extracting it cold in order to provide the most authentic and flavorful cannabis experience possible.`}
      />
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
    </>
  )
}

export default OurStoryPage
