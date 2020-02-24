import React, { useContext } from "react"
import styled from "styled-components"
import Grid from "styled-components-grid"
import { Link, useStaticQuery, graphql } from "gatsby"
import Logo from "./logo"
import { AppContext } from "../context"
import { BlockTitle } from "./text"
import { Box } from "./box"
import { SocialButton } from "./button"
import MobileMenu from "./mobile-menu"
import { ChevronDown } from "./icons"
import arrow from "../images/sign-up-arrow.png"
import { THEME } from "../data"

const {
  breakpoints: { md },
} = THEME

const FooterBlock = styled.footer`
  background: #000;
`

const FooterMenu = styled.ul`
  margin: 46px 0 15px 0;
  padding: 0 0 15px 0;
  list-style: none;
  border-bottom: 1px solid #fff;
  a {
    color: white;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    font-family: MontHeavy, sans-serif;
    &:hover {
      opacity: 0.4;
    }
  }
  @media only screen and (max-width: ${md}px) {
    display: none;
  }
`

const SubscribeForm = styled.form`
  margin: 50px 0 0 0;
  width: 100%;
  display: block;
  @media only screen and (min-width: ${md}px) {
    display: flex;
  }
  input[type="text"] {
    border: 0;
    padding: 25px;
    color: #000;
    width: calc(100% - 50px);
    font-family: MontBold, sans-serif;
    margin-bottom: 10px;
    @media only screen and (min-width: ${md}px) {
      width: auto;
      flex: 1;
      margin-bottom: 0;
    }
  }
  button {
    background: #ff9e18;
    color: white;
    text-transform: uppercase;
    font-size: 18px;
    border: 0;
    height: 72px;
    letter-spacing: 0.1em;
    position: relative;
    padding: 0 30px;
    width: 100%;
    text-align: left;
    font-family: MontHeavy, sans-serif;
    &:after {
      content: "";
      display: block;
      width: 28px;
      height: 19px;
      background: url(${arrow}) center center no-repeat;
      background-size: 100% 100%;
      position: absolute;
      margin-top: -9.5px;
      top: 50%;
      right: 30px;
    }
    @media only screen and (min-width: ${md}px) {
      width: 200px;
    }
  }
`

export const SocialList = styled.ul`
  list-style: none;
  margin: 30px 0 0 0;
  padding: 0;
  text-align: left;
  li {
    display: inline-block;
    margin-right: 12px;
    a {
      display: block;
    }
  }
`

const FooterLogo = styled(props => <Logo {...props} />)`
  width: 130px;
  @media only screen and (min-width: ${md}px) {
    width: 230px;
  }
`

const LeftBox = styled(({ children, ...rest }) => (
  <Box {...rest}>{children}</Box>
))`
  padding-top: 50px;
  padding-bottom: 100px;
  @media only screen and (min-width: ${md}px) {
    padding-top: 120px;
    padding-bottom: 30px;
  }
`

const RightBox = styled(({ children, ...rest }) => (
  <Box {...rest}>{children}</Box>
))`
  padding-top: 30px;
  padding-bottom: 100px;
  @media only screen and (min-width: ${md}px) {
    padding-top: 120px;
    padding-bottom: 30px;
  }
`

const LocationButton = styled.button`
  display: none !important;
  margin-bottom: 50px;
  @media only screen and (min-width: ${md}px) {
    display: block !important;
    background: #000;
    color: #fff;
    font-family: MontHeavy, sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    border: 0;
    outline: none;
    letter-spacing: 0.1em;
    padding-left: 0;
    padding-right: 30px;
    &:hover {
      cursor: pointer;
    }
    svg {
      position: relative;
      margin-left: 10px;
      top: -1px;
    }
  }
`

const NotifiedBox = styled.p`
  margin-top: 20px;
  @media only screen and (min-width: ${md}px) {
    margin-top: 15px;
  }
`

const Footer = ({ userState }) => {
  const {
    state: { data },
  } = useContext(AppContext)
  const {
    dataJson: { footerMenu },
  } = useStaticQuery(graphql`
    query {
      dataJson {
        footerMenu {
          label
          link
          color
        }
      }
    }
  `)
    console.log('footer', userState)
  return (
    <>
      <FooterBlock>
        <Grid>
          <Grid.Unit size={{ sm: 1, md: 3 / 8 }}>
            <LeftBox>
              <Link to="/">
                <FooterLogo mono />
              </Link>
              <FooterMenu>
                {footerMenu.map(item => (
                  <li key={item.link}>
                    <Link to={item.link}>{item.label}</Link>
                  </li>
                ))}
              </FooterMenu>
              {userState && (
                <LocationButton>
                  {userState.label}
                  <ChevronDown color="#FFF" />
                </LocationButton>
              )}
            </LeftBox>
          </Grid.Unit>
          <Grid.Unit size={{ sm: 1, md: 1 / 8 }} />
          <Grid.Unit size={{ sm: 1, md: 1 / 2 }}>
            <RightBox>
              <BlockTitle color="#FFF" line="top">
                Get Notified
              </BlockTitle>
              <NotifiedBox>
                We will be launching soon in California and Oregon. Sign up to
                stay up to date on when you can get your hands on Live Resin.
              </NotifiedBox>
              <SubscribeForm method="POST" action="#">
                <input type="text" placeholder="Your email" />
                <button type="submit">Sign Up</button>
              </SubscribeForm>
              <SocialList>
                <li>
                  <SocialButton href="#" target="_blank" type="facebook" />
                </li>
                <li>
                  <SocialButton href="#" target="_blank" type="twitter" />
                </li>
                <li>
                  <SocialButton href="#" target="_blank" type="instagram" />
                </li>
              </SocialList>
            </RightBox>
          </Grid.Unit>
        </Grid>
        <Grid>
          <Grid.Unit size={1}>
            <Box top="0">
              <Link
                to="/privacy-terms"
                style={{
                  color: "#FFF",
                  textDecoration: "none",
                  fontSize: "10px",
                  fontFamily: "MontHeavy, sans-serif",
                }}>
                Privacy and Terms
              </Link>
            </Box>
          </Grid.Unit>
        </Grid>
      </FooterBlock>
      <MobileMenu
        userState={userState}
        menu={footerMenu}
        active={data.mobileMenuVisible}
        activeMenu={data.activeMenu}
      />
    </>
  )
}

export default Footer
