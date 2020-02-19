import React, { useState, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import Grid from "styled-components-grid"
import { AppContext } from "../context"
import Logo from "./logo"
import { Box } from "./box"
import { Arrow, MenuHamburger, MenuNearMe, ChevronDown } from "./icons"
import { THEME } from "../data"
import { useScrollPosition } from "../utils"

const {
  breakpoints: { md, lg, xl },
  headerHeight,
} = THEME

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 1000;
  transition: all 0.1s ease-in-out;
  &.hidden {
    transform: translate3d(0, -100%, 0);
  }
`

const BrandWrapper = styled(props => <Grid.Unit {...props} />)`
  display: flex;
  align-items: center;
  svg {
    max-width: 100%;
  }
`

const Nav = styled.nav`
  height: ${headerHeight.mobile}px;
  @media only screen and (min-width: ${md}px) {
    height: ${headerHeight.desktop}px;
  }
`

const Menu = styled.ul`
  list-style: none;
  text-align: right;
  padding: 0;
  margin: 0;
  .store-locator {
    display: inline-block;
    margin-left: 55px;
    a {
      display: block;
      background: #ff9e18;
      color: #fff;
      height: 60px;
      text-decoration: none;
      line-height: 60px;
      padding-left: 30px;
      padding-right: 50px;
      text-transform: uppercase;
      font-family: MontBold, sans-serif;
    }
  }
`

const DesktopMenu = styled(props => <Menu {...props} />)`
  @media only screen and (max-width: ${md}px) {
    display: none;
  }
`

const MobileMenu = styled(props => <Menu {...props} />)`
  @media only screen and (min-width: ${md}px) {
    display: none;
  }
`

const MenuItem = styled.li`
  display: inline-block;
  margin: 0;
  padding: 0 10px;
  @media only screen and (min-width: ${xl}px) {
    padding: 0 25px;
  }
`

const MenuLink = styled(({ activeColor, isActive, ...rest }) => (
  <Link {...rest} />
))`
  display: block;
  color: #000;
  text-transform: uppercase;
  height: 100%;
  text-decoration: none;
  position: relative;
  font-size: 16px;
  font-weight: 800;
  font-family: MontBold, sans-serif;
  line-height: ${headerHeight.mobile}px;
  @media only screen and (min-width: ${md}px) {
    line-height: ${headerHeight.desktop}px;
  }
  &:hover {
    opacity: 0.4;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 5px;
    background: ${props =>
      props.isActive && props.activeColor ? props.activeColor : "transparent"};
  }
`

const LocationButton = styled.button`
  display: none;
  @media only screen and (min-width: ${md}px) {
    display: block;
    height: 70px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
    background: transparent;
    border: 0;
    outline: none;
    font-family: MontHeavy, sans-serif;
    font-size: 16px;
    color: #888;
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

const Header = ({ passed }) => {
  const [hideNav, setHideNav] = useState(false)
  const {
    dispatch,
    state: { data },
  } = useContext(AppContext)
  const {
    dataJson: { mainMenu },
  } = useStaticQuery(graphql`
    query {
      dataJson {
        mainMenu {
          color
          label
          link
        }
      }
    }
  `)
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const threshold = 300
      const isScrollDown = currPos.y > prevPos.y
      const absY = Math.abs(currPos.y)
      if (absY >= threshold) {
        setHideNav(false)
      }
      if (!isScrollDown && absY >= threshold) {
        setHideNav(true)
      }
    },
    [hideNav]
  )
  return (
    <HeaderWrap className={hideNav ? "hidden" : ""}>
      <Grid>
        <BrandWrapper size={{ xs: 1 / 3, sm: 1 / 4 }}>
          <Box top={passed ? "0" : 75} bottom={passed ? "0" : 75} right="0">
            <Link to="/">
              <Logo width={!passed ? 450 : null} showSubtext={!passed} />
            </Link>
          </Box>
        </BrandWrapper>
        <Grid.Unit size={{ xs: 2 / 3, sm: 3 / 4 }}>
          <Box
            right="0"
            top="0"
            bottom="0"
            style={{ display: passed ? "inherit" : "none" }}>
            <Nav>
              <DesktopMenu>
                {mainMenu.map(item => (
                  <MenuItem key={item.link}>
                    <MenuLink
                      activeColor={item.color}
                      isActive={data.activeMenu === item.link}
                      to={item.link}>
                      {item.label}
                    </MenuLink>
                  </MenuItem>
                ))}
                <li className="store-locator">
                  <Link to="/store-locator/">
                    Store Locator
                    <Arrow borderColor="#FFF" left="20" />
                  </Link>
                </li>
              </DesktopMenu>
              <MobileMenu>
                <MenuItem>
                  <MenuLink to="#">
                    <MenuNearMe style={{ position: "relative", top: 7 }} />
                  </MenuLink>
                </MenuItem>
                <MenuItem style={{ marginLeft: 40, marginRight: 20 }}>
                  <MenuLink
                    to="#"
                    onClick={e => {
                      e.preventDefault()
                      dispatch({
                        type: "mobileMenu",
                        value: !data.mobileMenuVisible,
                      })
                    }}>
                    <MenuHamburger
                      active={data.mobileMenuVisible}
                      style={{ position: "relative", top: 7 }}
                    />
                  </MenuLink>
                </MenuItem>
              </MobileMenu>
            </Nav>
          </Box>
        </Grid.Unit>
      </Grid>
      {passed && (
        <LocationButton>
          CA
          <ChevronDown color="#888" />
        </LocationButton>
      )}
    </HeaderWrap>
  )
}

export default Header
