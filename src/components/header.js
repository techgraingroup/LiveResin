import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import Grid from "styled-components-grid"
import { AppContext } from "../context"
import Logo from "./logo"
import { Box } from "./box"
import { Arrow } from "./icons"

const gridSize = {
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
  font-weight: 800;
  font-family: MontBold, sans-serif;
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

const Header = ({ passed }) => {
  const {
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
        <BrandWrapper size={{ xs: 1, sm: 1 / 4 }}>
          <Box top={passed ? "0" : 75} bottom={passed ? "0" : 75} right="0">
            <Link to="/">
              <Logo width={!passed ? 450 : null} showSubtext={!passed} />
            </Link>
          </Box>
        </BrandWrapper>
        <Grid.Unit size={{ xs: 1, sm: 3 / 4 }}>
          <Box
            right="0"
            top="0"
            bottom="0"
            style={{ display: passed ? "inherit" : "none" }}>
            <Nav>
              <Menu>
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
              </Menu>
            </Nav>
          </Box>
        </Grid.Unit>
      </Grid>
    </header>
  )
}

export default Header
