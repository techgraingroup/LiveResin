import React, { useEffect, useContext } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { AppContext } from "../context"

const ContactUsPage = () => {
  const { dispatch } = useContext(AppContext)
  useEffect(() => {
    dispatch({
      type: "activeMenu",
      value: "/contact-us/",
    })
  }, [])
  return (
    <>
      <SEO title="Contact Us" />
      <h1>Contact Us</h1>
    </>
  )
}

export default ContactUsPage
