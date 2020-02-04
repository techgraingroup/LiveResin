import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import { StateProvider } from "../context"
import { GlobalStyle } from './global-style'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StateProvider>
      <GlobalStyle />
      <Header />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </StateProvider>
  )
}

export default Layout
