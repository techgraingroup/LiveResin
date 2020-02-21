import React, { useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
import Header from "../components/header"
import Footer from "../components/footer"
import AgeGate from "../components/agegate"
import { StateProvider } from "../context"
import { GlobalStyle } from "./global-style"
import { THEME, AGE_GATE_KEY, LOCATION_KEY } from "../data"
import { useScrollPosition } from "../utils"

const Layout = ({ children }) => {
  const [passed, setPassed] = useState(false)
  const [userState, setUserState] = useState("")
  const [hideNav, setHideNav] = useState(false)
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
    const checkState = localStorage.getItem(LOCATION_KEY)
    setUserState(JSON.parse(checkState))
    if (checkStatus) {
      setPassed(true)
    } else {
      setPassed(false)
    }
  }, [passed, setPassed])
  const passAgeGate = state => {
    localStorage.setItem(AGE_GATE_KEY, "true")
    localStorage.setItem(LOCATION_KEY, JSON.stringify(state))
    setPassed(true)
  }
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const threshold = 300
      const isScrollDown = currPos.y > prevPos.y
      const absY = Math.abs(currPos.y)
      if (isScrollDown) {
        setHideNav(false)
      } else {
        if (absY >= threshold) {
          setHideNav(true)
        }
      }
    },
    [hideNav],
    null,
    null,
    500
  )
  return (
    <ThemeProvider theme={THEME}>
      <StateProvider>
        <GlobalStyle />
        <Header passed={passed} hideNav={hideNav} userState={userState} />
        <div style={{ display: passed ? "block" : "none" }}>
          <main>{children}</main>
          <Footer userState={userState} />
        </div>
        <div style={{ display: passed ? "none" : "block" }}>
          <AgeGate passAgeGate={passAgeGate} />
        </div>
      </StateProvider>
    </ThemeProvider>
  )
}

export default Layout
