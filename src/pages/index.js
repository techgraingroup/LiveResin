import React, { useEffect, useContext } from "react"
import { AppContext } from "../context"
import SEO from "../components/seo"
import HomeBanner from "../components/home/banner"

const IndexPage = () => {
  const { dispatch } = useContext(AppContext)
  useEffect(() => {
    dispatch({
      type: "activeMenu",
      value: "/",
    })
  }, [])
  return (
    <>
      <SEO title="Home" />
      <HomeBanner />
    </>
  )
}

export default IndexPage
