import React from "react"
import { ThemeProvider } from "styled-components"
import Header from "../components/header"
import Footer from "../components/footer"
import { StateProvider } from "../context"
import { GlobalStyle } from "./global-style"
import { THEME } from '../data'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={THEME}>
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
