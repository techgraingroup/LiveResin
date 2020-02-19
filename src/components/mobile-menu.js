import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Box } from "./box"
import { SocialList } from "./footer"
import { SocialButton } from "./button"
import { Arrow } from "./icons"
import { THEME } from "../data"

const {
  breakpoints: { md },
} = THEME

const MobileMenuWrap = styled(({ children, active, ...rest }) => (
  <div {...rest}>{children}</div>
))`
  position: fixed;
  top: 100px;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  z-index: 1000;
  transition: all 0.5s ease-in-out;
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
        line-height: 60px;
        font-size: 40px;
        font-family: MontHeavy, sans-serif;
        text-decoration: none;
        border-bottom: 1px solid #000;
        color: #000;
        padding-top: 4px;
        position: relative;
        svg {
          position: absolute !important;
          left: auto !important;
          top: 25px !important;
          right: 0;
        }
      }
    }
  }
`

const MobileMenu = ({ menu, active }) => {
  console.log(active)
  return (
    <MobileMenuWrap active={active}>
      <Box top="0">
        <ul className="menu">
          {menu.map(item => (
            <li className="menu-item" key={item.link}>
              <Link to={item.link}>
                {item.label}
                <Arrow borderColor="#000" />
              </Link>
            </li>
          ))}
        </ul>
        <SocialList>
          <li>
            <SocialButton dark href="#" target="_blank" type="facebook" />
          </li>
          <li>
            <SocialButton dark href="#" target="_blank" type="twitter" />
          </li>
          <li>
            <SocialButton dark href="#" target="_blank" type="instagram" />
          </li>
        </SocialList>
      </Box>
    </MobileMenuWrap>
  )
}

export default MobileMenu
