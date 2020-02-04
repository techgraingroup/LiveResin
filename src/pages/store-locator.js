import React, { useEffect, useContext } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { AppContext } from "../context"

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
      <h1>Store Locator</h1>
    </>
  )
}

export default StoreLocatorPage
