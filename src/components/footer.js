import { Link } from "gatsby"
import React from "react"
import Logo from "./logo"
import styled from "styled-components"
import { Grid, Cell } from "styled-css-grid"
import { BlockTitle } from "./text"
import { Box } from "./box"

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
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    text-decoration: none;
    &:hover {
      opacity: 0.4;
    }
  }
`

const Footer = ({ siteTitle }) => (
  <FooterBlock>
    <Grid>
      <Cell width={6}>
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
      </Cell>
      <Cell width={6}>
        <Box>
          <BlockTitle color="#FFF" line="top">
            Get Notified
          </BlockTitle>
          <p style={{ color: "white" }}>
            Sign up here to stay up-to-date on our upcoming retail locations,
            events, and new product drops.
          </p>
        </Box>
      </Cell>
    </Grid>
  </FooterBlock>
)

export default Footer
