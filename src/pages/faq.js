import React, { useEffect, useContext } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { AppContext } from "../context"

const FaqPage = () => {
  const { dispatch } = useContext(AppContext)
  useEffect(() => {
    dispatch({
      type: "activeMenu",
      value: "/faq/",
    })
  }, [])
  return (
    <>
      <SEO title="FAQ" />
      <h1>FAQ</h1>
    </>
  )
}
export default FaqPage
