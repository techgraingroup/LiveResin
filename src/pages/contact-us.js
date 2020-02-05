import React, { useEffect, useContext } from "react"
import { Link } from "gatsby"
import { AppContext } from "../context"
import SEO from "../components/seo"
import { PageTitle } from "../components/text"

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
      <PageTitle title={`Contact Us`} />
    </>
  )
}

export default ContactUsPage
