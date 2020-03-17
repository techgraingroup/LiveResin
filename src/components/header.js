import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import Grid from "styled-components-grid"
import { fluidRange } from "polished"
import { AppContext } from "../context"
import Logo from "./logo"
import { Arrow, MenuHamburger, MenuNearMe, ChevronDown } from "./icons"
import { THEME } from "../data"

const {
  breakpoints: { md, lg, xl, xxl },
  headerHeight,
  sideGutter,
} = THEME

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 1001;
  transition: all 0.1s ease;
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

const BrandWrapper = styled(({ children, ...rest }) => (
  <Grid.Unit {...rest}>
    <div>{children}</div>
  </Grid.Unit>
))`
  display: flex;
  align-items: center;
  div {
    padding-top: 0;
    padding-right: 0;
    padding-bottom: 0;
    ${fluidRange(
      {
        prop: "padding-left",
        fromSize: "20px",
        toSize: sideGutter,
      },
      `${md}px`,
      `${xl}px`
    )}
    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
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
  display: flex;
  justify-content: flex-end;
  height: ${headerHeight.mobile}px;
  @media only screen and (min-width: ${md}px) {
    height: ${headerHeight.desktop}px;
  }
  align-items: center;
  .store-locator {
    display: inline-block;
    margin-left: 25px;
    @media only screen and (min-width: ${xl}px) {
      margin-left: 55px;
    }
    a {
      background: #ff9e18;
      color: #fff;
      text-decoration: none;
      text-transform: uppercase;
      font-family: MontBold, sans-serif;
      letter-spacing: 0.1em;
      height: 60px;
      line-height: 20px;
      text-align: left;
      padding-top: 0;
      padding-left: 15px;
      padding-right: 25px;
      width: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      @media only screen and (min-width: ${xl}px) {
        line-height: 60px;
        text-align: center;
        padding-top: 3px;
        padding-left: 30px;
        padding-right: 50px;
        width: auto;
      }
      svg {
        transition: transform 0.1s ease-in-out;
      }
      &:hover {
        svg {
          transform: translateX(5px);
        }
      }
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

const MenuItem = styled(({ isActive, activeColor, ...rest }) => (
  <li {...rest} />
))`
  display: inline-block;
  margin: 0;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: ${headerHeight.mobile}px;
  @media only screen and (min-width: ${md}px) {
    height: ${headerHeight.desktop}px;
  }
  ${fluidRange(
    {
      prop: "padding-left",
      fromSize: "7px",
      toSize: "25px",
    },
    `${lg}px`,
    `${xxl}px`
  )}
  ${fluidRange(
    {
      prop: "padding-right",
      fromSize: "7px",
      toSize: "25px",
    },
    `${lg}px`,
    `${xxl}px`
  )}
  &::before {
    content: "";
    position: absolute;
    top: 0;
    ${fluidRange(
      {
        prop: "left",
        fromSize: "7px",
        toSize: "25px",
      },
      `${md}px`,
      `${xxl}px`
    )}
    ${fluidRange(
      {
        prop: "right",
        fromSize: "7px",
        toSize: "25px",
      },
      `${md}px`,
      `${xxl}px`
    )}
    height: 10px;
    background: ${props =>
      props.isActive && props.activeColor ? props.activeColor : "transparent"};
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
  text-align: center;
  color: #000;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 16px;
  font-weight: 800;
  font-family: MontBold, sans-serif;
  letter-spacing: 0.1em;
  line-height: 20px;
  height: auto;
  &:hover {
    opacity: 0.4;
  }
`

const LocationButton = styled.button`
  display: none;
  @media only screen and (min-width: ${md}px) {
    display: block;
    height: 50px;
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
  ${props =>
    props.passed
      ? `
      width: auto;
      height: ${0.58 * 150}px;
      @media only screen and (max-width: ${md}px) and (max-aspect-ratio: 16/9) {
        height: ${0.58 * 80}px;
      }`
      : `
      width: auto;
      height: 220px;
      @media only screen and (max-width: ${md}px) and (max-aspect-ratio: 16/9) {
        height: 120px;
      }`}
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
      document.body.style.position = "fixed"
      document.body.style.top = `-${window.scrollY}px`
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1)
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
          <Link to="/">
            <BrandLogo passed={passed} />
          </Link>
        </BrandWrapper>
        <Grid.Unit
          size={{ xs: 2 / 3, sm: 3 / 4 }}
          style={{ display: passed ? "block" : "none" }}>
          <Nav>
            <DesktopMenu>
              {mainMenu.map(item => (
                <MenuItem
                  key={item.link}
                  activeColor={item.color}
                  isActive={data.activeMenu === item.link}>
                  <MenuLink to={item.link}>{item.label}</MenuLink>
                </MenuItem>
              ))}
              <li className="store-locator">
                <Link to="/store-locator/">
                  <span>Store Locator</span>
                  <Arrow
                    borderColor="#FFF"
                    left="20px"
                    style={{ top: "-1px" }}
                  />
                </Link>
              </li>
            </DesktopMenu>
            <MobileMenu>
              <MenuItem>
                <MenuLink to="/store-locator/">
                  <MenuNearMe style={{ position: "relative", top: 3 }} />
                </MenuLink>
              </MenuItem>
              <MenuItem style={{ marginLeft: 20, marginRight: 20 }}>
                <MenuLink external href="#" onClick={handleMobileMenuClick}>
                  <MenuHamburger
                    active={data.mobileMenuVisible}
                    style={{ position: "relative", top: 3 }}
                  />
                </MenuLink>
              </MenuItem>
            </MobileMenu>
          </Nav>
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
