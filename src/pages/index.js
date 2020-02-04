import React, { useEffect, useContext } from "react"
import { Link } from "gatsby"
import { Button } from "../components/button"
import { H1, H2, H3, H4 } from "../components/text"

import SEO from "../components/seo"
import { AppContext } from "../context"

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
      <H1>Hi people</H1>
      <H2>Hi people</H2>
      <H3>Hi people</H3>
      <H4>Hi people</H4>
      <p>Welcome to your new Gatsby site.</p>
      <Button>Halo</Button>
      <Button bordered>Halo</Button>
      <Button withArrow>Halo</Button>
    </>
  )
}

export default IndexPage
