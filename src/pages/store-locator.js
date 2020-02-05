import React, { useEffect, useContext } from "react"
import { AppContext } from "../context"
import SEO from "../components/seo"
import { PageTitle } from "../components/text"

const StoreLocatorPage = () => {
  const { dispatch } = useContext(AppContext)
  useEffect(() => {
    dispatch({
      type: "activeMenu",
      value: "/store-locator/",
    })
  }, [])
  return (
    <>
      <SEO title="Store Locator" />
      <PageTitle
        title={`Store Locator`}
        text={`Donec eget imperdiet dui. Mauris lorem lacus, porttitor quis vehicula vitae, pretium non purus. Morbi nec rhoncus massa`}
      />
    </>
  )
}

export default StoreLocatorPage
