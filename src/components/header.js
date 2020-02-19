import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import Grid from "styled-components-grid"
import { AppContext } from "../context"
import Logo from "./logo"
import { Box } from "./box"
import { Arrow, MenuHamburger, MenuNearMe } from "./icons"
import { THEME } from "../data"

const {
  breakpoints: { md, lg, xl },
} = THEME

const BrandWrapper = styled(props => <Grid.Unit {...props} />)`
  display: flex;
  align-items: center;
  svg {
    max-width: 100%;
  }
`

const Nav = styled.nav`
  height: 100px;
  @media only screen and (min-width: ${md}px) {
    height: 200px;
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
  line-height: 100px;
  @media only screen and (min-width: ${md}px) {
    line-height: 200px;
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

const Header = ({ passed }) => {
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
  return (
    <header>
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
                  <MenuLink>
                    <MenuNearMe style={{ position: "relative", top: 7 }} />
                  </MenuLink>
                </MenuItem>
                <MenuItem style={{ marginLeft: 40, marginRight: 20 }}>
                  <MenuLink
                    onClick={e => {
                      e.preventDefault()
                      dispatch({
                        type: "mobileMenu",
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
    </header>
  )
}

export default Header
