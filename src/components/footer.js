import { Link } from "gatsby"
import React from "react"
import Logo from "./logo"
import styled from "styled-components"
import Grid from "styled-components-grid"
import { BlockTitle } from "./text"
import { Box } from "./box"
import { SocialButton } from "./button"
import arrow from "../images/sign-up-arrow.png"

const halfSize = {
  sm: 1 / 1,
  md: 1 / 2,
}

const MENU_ITEMS = [
  { link: `/`, label: `Home` },
  { link: `/products/`, label: `Products` },
  { link: `/our-process/`, label: `Our Process` },
  { link: `/our-story/`, label: `Our Story` },
  { link: `/faq/`, label: `FAQ` },
  { link: `/contact-us/`, label: `Contact` },
  { link: `/store-locator/`, label: `Store Locator` },
]

const FooterBlock = styled.footer`
  background: #000;
`

const FooterMenu = styled.ul`
  margin: 46px 0 0 0;
  padding: 0;
  list-style: none;
  a {
    color: white;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    &:hover {
      opacity: 0.4;
    }
  }
`

const SubscribeForm = styled.form`
  margin: 30px 0 0 0;
  width: 100%;
  display: flex;
  input[type="text"] {
    flex: 1;
    border: 0;
    padding: 25px;
    color: #000;
  }
  button {
    background: #ff9e18;
    color: white;
    text-transform: uppercase;
    font-size: 18px;
    border: 0;
    height: 70px;
    width: 200px;
    letter-spacing: 0.1em;
    position: relative;
    padding: 0 30px;
    text-align: left;
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
  }
`

const SocialList = styled.ul`
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

const Footer = ({ siteTitle }) => (
  <FooterBlock>
    <Grid>
      <Grid.Unit size={halfSize}>
        <Box>
          <Link to="/">
            <Logo mono width={230} />
          </Link>
          <FooterMenu>
            {MENU_ITEMS.map(item => (
              <li key={item.link}>
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </FooterMenu>
        </Box>
      </Grid.Unit>
      <Grid.Unit size={halfSize}>
        <Box>
          <BlockTitle color="#FFF" line="top">
            Get Notified
          </BlockTitle>
          <p>
            Sign up here to stay up-to-date on our upcoming retail locations,
            events, and new product drops.
          </p>
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
        </Box>
      </Grid.Unit>
    </Grid>
  </FooterBlock>
)

export default Footer
