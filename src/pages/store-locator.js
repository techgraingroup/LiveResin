import React, { useEffect, useContext } from "react"
import Grid from "styled-components-grid"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { fluidRange } from "polished"
import { AppContext } from "../context"
import SEO from "../components/seo"
import { Box } from "../components/box"
import { Text } from "../components/text"
import { PageTitle } from "../components/text"
import { Arrow } from "../components/icons"
import { THEME } from "../data"

const {
  breakpoints: { md, xl },
} = THEME

const Store = styled.a`
  display: block;
  border-bottom: 4px solid #000;
  color: #000;
  text-decoration: none;
  h2 {
    font-family: MontHeavy, sans-serif;
    margin-top: 0;
    margin-bottom: 0;
    line-height: 105.8%;
    padding-top: 30px;
    ${fluidRange(
      {
        prop: "font-size",
        fromSize: "30px",
        toSize: "48px",
      },
      `${md}px`,
      `${xl}px`
    )}
  }
  &:first-child {
    h2 {
      padding-top: 0;
    }
  }
  p {
    margin-bottom: 25px;
  }
`

const StoreLocatorPage = () => {
  const { dispatch } = useContext(AppContext)
  const {
    dataJson: { storeLocator },
  } = useStaticQuery(graphql`
    query {
      dataJson {
        storeLocator {
          name
          address
          link
        }
      }
    }
  `)
  useEffect(() => {
    dispatch({
      type: "activeMenu",
      value: "/store-locator/",
    })
    dispatch({ type: "mobileMenu", value: false })
  }, [])
  return (
    <>
      <SEO title="Store Locator" />
      <PageTitle
        top="200"
        bottom="140"
        mobileTop="72"
        mobileBottom="60"
        title={`Store Locator`}
      />
      <Box top="0">
        {storeLocator.map((store, i) => (
          <Store
            key={`item-${i}`}
            href={store.link}
            target="_blank"
            rel="noopener noreferrer">
            <Grid>
              <Grid.Unit size={11 / 12}>
                <h2>{store.name}</h2>
                <Text>{store.address}</Text>
              </Grid.Unit>
              <Grid.Unit
                size={1 / 12}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}>
                <Arrow borderColor="#000" left="0" />
              </Grid.Unit>
            </Grid>
          </Store>
        ))}
      </Box>
    </>
  )
}

export default StoreLocatorPage
