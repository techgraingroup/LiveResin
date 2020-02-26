import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import Header from "../components/header"
import Footer from "../components/footer"
import AgeGate from "../components/agegate"
import { StateProvider } from "../context"
import { GlobalStyle } from "./global-style"
import { THEME, AGE_GATE_KEY, LOCATION_KEY } from "../data"
import { useScrollPosition } from "../utils"

const {
  breakpoints: { md },
} = THEME

const AgeGateWrapper = styled.div`
  background-color: #000;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: ${props => (props.passed ? "none" : "flex")};
  height: ${props => (props.passed ? "0px" : "70vh")};
  @media only screen and (max-width: ${md}px) and (max-aspect-ratio: 16/9) {
    height: ${props => (props.passed ? "0px" : "80vh")};
  }
`

const ContentWrapper = styled.div`
  display: ${props => (props.passed ? "block" : "none")};
`

const Layout = ({ children }) => {
  const [passed, setPassed] = useState(false)
  const [userState, setUserState] = useState("")
  const [hideNav, setHideNav] = useState(false)
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
      const threshold = 150
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
        <ContentWrapper passed={passed}>
          <main>{children}</main>
          <Footer userState={userState} />
        </ContentWrapper>
        <AgeGateWrapper passed={passed}>
          <AgeGate passed={passed} passAgeGate={passAgeGate} />
        </AgeGateWrapper>
      </StateProvider>
    </ThemeProvider>
  )
}

export default Layout
