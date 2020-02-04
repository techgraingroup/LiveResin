import React, { useEffect, useContext } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { AppContext } from "../context"

const OurProcessPage = () => {
  const { dispatch } = useContext(AppContext)
  useEffect(() => {
    dispatch({
      type: "activeMenu",
      value: "/our-process/",
    })
  }, [])
  return (
    <>
      <SEO title="Our Process" />
      <h1>Our Process</h1>
    </>
  )
}

export default OurProcessPage
