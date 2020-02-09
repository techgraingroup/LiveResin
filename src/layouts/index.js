import React, { useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
import Header from "../components/header"
import Footer from "../components/footer"
import AgeGate from "../components/agegate"
import { StateProvider } from "../context"
import { GlobalStyle } from "./global-style"
import { THEME, AGE_GATE_KEY } from "../data"

const Layout = ({ children }) => {
  const [passed, setPassed] = useState(false)
  useEffect(() => {
    window.addEventListener("storage", () => {
      console.log("change")
    })
    return () =>
      window.removeEventListener("storage", () => {
        console.log("removed")
      })
  })
  useEffect(() => {
    const checkStatus = localStorage.getItem(AGE_GATE_KEY)
    if (checkStatus) {
      setPassed(true)
    } else {
      setPassed(false)
    }
  }, [passed, setPassed])
  return (
    <ThemeProvider theme={THEME}>
      <StateProvider>
        <GlobalStyle />
        <Header />
        {passed ? (
          <div>
            <main>{children}</main>
            <Footer />
          </div>
        ) : (
          <AgeGate />
        )}
      </StateProvider>
    </ThemeProvider>
  )
}

export default Layout
