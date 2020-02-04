import React, { useEffect, useContext } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { AppContext } from "../context"

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
      <h1>Our Story</h1>
    </>
  )
}

export default OurStoryPage
