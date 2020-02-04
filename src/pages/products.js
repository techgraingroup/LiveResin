import React, { useEffect, useContext } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { AppContext } from "../context"

const ProductsPage = () => {
  const { dispatch } = useContext(AppContext)
  useEffect(() => {
    dispatch({
      type: "activeMenu",
      value: "/products/",
    })
  }, [])
  return (
    <>
      <SEO title="Products" />
      <h1>Products</h1>
    </>
  )
}

export default ProductsPage
