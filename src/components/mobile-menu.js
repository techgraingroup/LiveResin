import React from "react"
import { navigate, Link } from "gatsby"
import styled from "styled-components"
import { Box } from "./box"
import { SocialList } from "./footer"
import { SocialButton } from "./button"
import { Arrow, ChevronDown } from "./icons"
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

const LocationButton = styled.button`
  display: block;
  border: 0;
  border-top: 4px solid #000;
  outline: none;
  background: transparent;
  width: 100%;
  font-family: MontHeavy, sans-serif;
  font-size: 20px;
  text-align: left;
  letter-spacing: 0.1em;
  padding: 13px 0;
  text-transform: uppercase;
  position: relative;
  margin-bottom: 0 !important;
  svg {
    position: absolute;
    right: 0;
    top: 20px;
  }
`

const MobileMenu = ({ menu, userState, active, activeMenu }) => {
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
          <LocationButton>
            {userState.label}
            <ChevronDown />
          </LocationButton>
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
            <SocialButton dark href="#" target="_blank" type="facebook" />
          </li>
          <li>
            <SocialButton dark href="#" target="_blank" type="twitter" />
          </li>
          <li>
            <SocialButton dark href="#" target="_blank" type="instagram" />
          </li>
        </Socials>
        <Link
          to="/privacy-terms"
          style={{
            color: "#000",
            textDecoration: "none",
            fontSize: "10px",
            fontFamily: "Mont, sans-serif",
          }}>
          Privacy and Terms
        </Link>
      </Box>
    </MobileMenuWrap>
  )
}

export default MobileMenu
