import React, { useEffect, useContext } from "react"
import { AppContext } from "../context"
import SEO from "../components/seo"
import { PageTitle } from "../components/text"

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
      <PageTitle
        title={`FAQs`}
        text={`Donec eget imperdiet dui. Mauris lorem lacus, porttitor quis vehicula vitae, pretium non purus. Morbi nec rhoncus massa`}
      />
    </>
  )
}
export default FaqPage
