import React, { useContext } from "react"
import styled from "styled-components"
import Grid from "styled-components-grid"
import { Link, useStaticQuery, graphql } from "gatsby"
import Logo from "./logo"
import { AppContext } from "../context"
import { BlockTitle } from "./text"
import { Box } from "./box"
import Subscribe from "./signupform"
import { SocialButton } from "./button"
import MobileMenu from "./mobile-menu"
import { ChevronDown } from "./icons"
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
  padding-bottom: 50px;
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

const GetNotified = styled(props => <h3 {...props}>Get Notified</h3>)`
  color: #fff;
  font-size: 45px;
  font-family: MontHeavy, sans-serif;
  line-height: 105.8%;
  letter-spacing: -0.035em;
  border-top: 0;
  border-bottom: 4px solid #fff;
  padding: 30px 0 10px 0;
  margin-top: 0;
  margin-bottom: 0;
  @media only screen and (min-width: ${md}px) {
    border-top: 4px solid #fff;
    border-bottom: 0;
    font-size: 48px;
  }
`

const LittleLink = styled(props => <Link {...props} />)`
  color: #fff;
  text-decoration: none;
  font-size: 10px;
  font-family: Mont, sans-serif;
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
              <GetNotified />
              <NotifiedBox>
                Sign up here to stay up-to-date on our upcoming retail
                locations, events, and new product drops
              </NotifiedBox>
              <Subscribe />
              <SocialList>
                <li>
                  <SocialButton
                    href={`${process.env.FACEBOOK_URL}`}
                    rel="noreferrer noopener"
                    target="_blank"
                    type="facebook"
                  />
                </li>
                <li>
                  <SocialButton
                    href={`https://twitter.com/${process.env.TWITTER_USER}`}
                    rel="noreferrer noopener"
                    target="_blank"
                    type="twitter"
                  />
                </li>
                <li>
                  <SocialButton
                    href={`https://www.instagram.com/${process.env.INSTAGRAM_USER}`}
                    rel="noreferrer noopener"
                    target="_blank"
                    type="instagram"
                  />
                </li>
              </SocialList>
            </RightBox>
          </Grid.Unit>
        </Grid>
        <Grid>
          <Grid.Unit size={1}>
            <Box top="0">
              <LittleLink to="/privacy">Privacy</LittleLink>
              <span style={{ fontSize: 10, color: "#FFF", fontFamily: 'Mont, sans-serif' }}>{` and `}</span>
              <LittleLink to="/terms">Terms</LittleLink>
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
