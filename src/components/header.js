import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Grid from "styled-components-grid"
import { AppContext } from "../context"
import Logo from "./logo"
import { Box } from "./box"

const halfSize = {
  sm: 1 / 1,
  md: 1 / 2,
}

const BrandWrapper = styled(props => <Grid.Unit {...props} />)`
  display: flex;
  align-items: center;
`

const Nav = styled.nav`
  height: 200px;
`

const Menu = styled.ul`
  list-style: none;
  text-align: right;
  padding: 0;
  margin: 0;
`

const MenuItem = styled.li`
  display: inline-block;
  margin: 0;
  padding: 0 25px;
`

const MenuLink = styled(({ activeColor, isActive, ...rest }) => (
  <Link {...rest} />
))`
  display: block;
  color: #000;
  text-transform: uppercase;
  height: 100%;
  line-height: 200px;
  text-decoration: none;
  position: relative;
  font-size: 16px;
  font-weight: bold;
  font-family: Mont, sans-serif;
  &:hover {
    opacity: 40%;
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

const MENU_ITEMS = [
  { link: `/products/`, label: `Products`, color: `#FF4438` },
  { link: `/our-process/`, label: `Our Process`, color: `#FF9E18` },
  { link: `/our-story/`, label: `Our Story`, color: `#1DCAD3` },
  { link: `/faq/`, label: `FAQ`, color: null },
]

const Header = () => {
  const {
    state: { data },
  } = useContext(AppContext)
  return (
    <header>
      <Grid>
        <BrandWrapper size={halfSize}>
          <Box top="0" bottom="0">
            <Link to="/">
              <Logo />
            </Link>
          </Box>
        </BrandWrapper>
        <Grid.Unit size={halfSize}>
          <Box right="0" top="0" bottom="0">
            <Nav>
              <Menu>
                {MENU_ITEMS.map(item => (
                  <MenuItem key={item.link}>
                    <MenuLink
                      activeColor={item.color}
                      isActive={data.activeMenu === item.link}
                      to={item.link}>
                      {item.label}
                    </MenuLink>
                  </MenuItem>
                ))}
              </Menu>
            </Nav>
          </Box>
        </Grid.Unit>
      </Grid>
    </header>
  )
}

export default Header
