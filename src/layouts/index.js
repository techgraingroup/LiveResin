import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { ThemeProvider } from "styled-components"
import Header from "../components/header"
import Footer from "../components/footer"
import { StateProvider } from "../context"
import { GlobalStyle } from "./global-style"

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
}

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
    <ThemeProvider theme={theme}>
      <StateProvider>
        <GlobalStyle />
        <Header />
        <div>
          <main>{children}</main>
          <Footer />
        </div>
      </StateProvider>
    </ThemeProvider>
  )
}

export default Layout
