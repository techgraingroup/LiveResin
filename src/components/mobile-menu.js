import React from "react"
import { navigate, Link } from "gatsby"
import styled from "styled-components"
import { Box } from "./box"
import { SocialList } from "./footer"
import { SocialButton } from "./button"
import { Arrow } from "./icons"
import { Select } from "./forms"
import { THEME } from "../data"

const {
  breakpoints: { md, sm },
} = THEME

const MobileMenuWrap = styled(({ children, active, activeMenu, ...rest }) => (
  <div {...rest}>{children}</div>
))`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding-top: 100px;
  background: #fff;
  z-index: 1000;
  transition: all 0.2s ease-in-out;
  transform: ${props =>
    props.active ? "translate3d(0, 0, 0)" : "translate3d(100%, 0, 0)"};
  @media only screen and (min-width: ${md}px) {
    display: none;
  }
  ul.menu {
    border-top: 4px solid #000;
    list-style: none;
    padding: 0;
    margin: 0;
    li.menu-item {
      a {
        display: block;
        font-family: MontHeavy, sans-serif;
        text-decoration: none;
        border-bottom: 1px solid #000;
        color: #000;
        padding-top: 4px;
        position: relative;
        font-size: 26px;
        line-height: 38px;
        @media only screen and (min-width: ${sm}px) {
          line-height: 60px;
          font-size: 40px;
        }
        svg {
          position: absolute !important;
          left: auto !important;
          right: 0;
          top: 11px !important;
          @media only screen and (min-width: ${sm}px) {
            top: 25px !important;
          }
        }
      }
    }
  }
`

const Socials = styled(props => <SocialList {...props} />)`
  margin: 20px 0 30px 0 !important;
  @media only screen and (min-width: ${sm}px) {
    margin-bottom: 30px 0 60px 0 !important;
  }
`

const MenuItem = styled(({ children, isActive, activeColor, ...rest }) => (
  <a {...rest}>{children}</a>
))`
  position: relative;
  ${props =>
    props.isActive &&
    `
    &::after {
        position: absolute;
        top: 0;
        right: 0;
        content: '';
        display: block;
        width: 10px;
        height: 100%;
        background-color: ${props.activeColor}
    }
`}
`

const LittleLink = styled(props => <Link {...props} />)`
  color: #000;
  text-decoration: none;
  font-size: 10px;
  font-family: Mont, sans-serif;
`

const StateSelect = styled(props => <Select {...props} />)`
  border-top: 4px solid #000;
  select {
    height: 50px;
    line-height: 50px;
    padding: 0;
    margin: 0;
    font-size: 20px;
    width: 100%;
    max-width: 100%;
    background-position: 100% 50%;
  }
`

const MobileMenu = ({ menu, states, userState, active, activeMenu, onStateChange }) => {
  const mobileMenus = menu.filter((m, i) => i !== 0)
  const handleMobileMenuClick = (e, link) => {
    const scrollY = document.body.style.top
    document.body.style.position = ""
    document.body.style.top = ""
    window.scrollTo(0, parseInt(scrollY || "0", 10) * -1)
    e.preventDefault()
    navigate(link)
  }
  return (
    <MobileMenuWrap active={active}>
      <Box top="0">
        {userState && (
          <StateSelect
            borderColor="#FFF"
            color="#000"
            bgColor="#FFF"
            options={states}
            defaultValue={userState.value}
            onChange={e => onStateChange(e.target.value)}
          />
        )}
        <ul className="menu">
          {mobileMenus.map(item => (
            <li className="menu-item" key={item.link}>
              <MenuItem
                href="#"
                onClick={e => handleMobileMenuClick(e, item.link)}
                isActive={item.link === activeMenu}
                activeColor={item.color}>
                {item.label}
                {item.link === activeMenu && item.color ? null : (
                  <Arrow borderColor="#000" />
                )}
              </MenuItem>
            </li>
          ))}
        </ul>
        <Socials>
          <li>
            <SocialButton
              dark
              href={`${process.env.FACEBOOK_URL}`}
              target="_blank"
              type="facebook"
            />
          </li>
          <li>
            <SocialButton
              dark
              href={`https://twitter.com/${process.env.TWITTER_USER}`}
              target="_blank"
              type="twitter"
            />
          </li>
          <li>
            <SocialButton
              dark
              href={`https://www.instagram.com/${process.env.INSTAGRAM_USER}`}
              target="_blank"
              type="instagram"
            />
          </li>
        </Socials>
        <LittleLink to="/privacy">Privacy</LittleLink>
        <span
          style={{
            fontSize: 10,
            color: "#000",
            fontFamily: "Mont, sans-serif",
          }}>{` and `}</span>
        <LittleLink to="/terms">Terms</LittleLink>
      </Box>
    </MobileMenuWrap>
  )
}

export default MobileMenu
