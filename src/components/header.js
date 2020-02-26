import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import Grid from "styled-components-grid"
import { AppContext } from "../context"
import Logo from "./logo"
import { Box } from "./box"
import { Arrow, MenuHamburger, MenuNearMe, ChevronDown } from "./icons"
import { THEME } from "../data"

const {
  breakpoints: { md, xl },
  headerHeight,
} = THEME

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 1001;
  transition: all 0.3s ease-in-out;
  ${props =>
    !props.passed
      ? `
        height: 30vh;
        position: static;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        @media only screen and (max-width: ${md}px) and (max-aspect-ratio: 16/9) {
            height: 20vh;
        }
  `
      : ""}
  &.hidden {
    transform: translate3d(0, -100%, 0);
  }
  &.higher {
    z-index: 1500;
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
  height: ${headerHeight.mobile};
  @media only screen and (min-width: ${md}px) {
    height: ${headerHeight.desktop};
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
      letter-spacing: 0.1em;
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

const MenuLink = styled(({ activeColor, isActive, external, ...rest }) => {
  let ele
  if (external) {
    ele = <a {...rest} />
  } else {
    ele = <Link {...rest} />
  }
  return ele
})`
  display: block;
  color: #000;
  text-transform: uppercase;
  height: 100%;
  text-decoration: none;
  position: relative;
  font-size: 16px;
  font-weight: 800;
  font-family: MontBold, sans-serif;
  line-height: ${headerHeight.mobile};
  letter-spacing: 0.1em;
  @media only screen and (min-width: ${md}px) {
    line-height: ${headerHeight.desktop};
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
    height: 10px;
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
    z-index: 1001;
    background: transparent;
    border: 0;
    outline: none;
    font-family: MontBold, sans-serif;
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

const BrandLogo = styled(props => <Logo {...props} />)`
  width: ${props => (props.passed ? "450px" : "auto")};
  height: ${props => (props.passed ? "auto" : "120px")};
  @media only screen and (max-width: ${md}px) and (max-aspect-ratio: 16/9) {
    height: ${props => (props.passed ? "auto" : "80px")};
  }
`

const Header = ({ passed, userState, hideNav }) => {
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
  // kalau data.mobileMenuVisible,
  let hideHeader = false
  if (data.mobileMenuVisible) {
    hideHeader = false
  } else {
    hideHeader = hideNav
  }
  let className = ""
  if (hideHeader) className = "hidden"
  if (data.mobileMenuVisible) className = "higher"

  const handleMobileMenuClick = e => {
    e.preventDefault()
    const value = !data.mobileMenuVisible
    if (value) {
        document.body.style.position = 'fixed'
        document.body.style.top = `-${window.scrollY}px`
    } else {
        const scrollY = document.body.style.top
        document.body.style.position = ''
        document.body.style.top = ''
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
    }
    dispatch({
      type: "mobileMenu",
      value,
    })
  }
  return (
    <HeaderWrap passed={passed} className={className}>
      <Grid>
        <BrandWrapper size={passed ? { xs: 1 / 3, sm: 1 / 4 } : 1}>
          <Box top="0" bottom="0" right="0">
            <Link to="/">
              <BrandLogo passed={passed} />
            </Link>
          </Box>
        </BrandWrapper>
        <Grid.Unit
          size={{ xs: 2 / 3, sm: 3 / 4 }}
          style={{ display: passed ? "block" : "none" }}>
          <Box right="0" top="0" bottom="0">
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
                    <Arrow borderColor="#FFF" left="20px" />
                  </Link>
                </li>
              </DesktopMenu>
              <MobileMenu>
                <MenuItem>
                  <MenuLink to="/store-locator/">
                    <MenuNearMe style={{ position: "relative", top: 7 }} />
                  </MenuLink>
                </MenuItem>
                <MenuItem style={{ marginLeft: 20, marginRight: 20 }}>
                  <MenuLink external href="#" onClick={handleMobileMenuClick}>
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
      {passed && userState && (
        <LocationButton>
          {userState.value}
          <ChevronDown color="#888" />
        </LocationButton>
      )}
    </HeaderWrap>
  )
}

export default Header
