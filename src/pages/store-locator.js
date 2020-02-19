import React, { useEffect, useContext } from "react"
import Grid from "styled-components-grid"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { AppContext } from "../context"
import SEO from "../components/seo"
import { Box } from "../components/box"
import { H2, Text } from "../components/text"
import { PageTitle } from "../components/text"
import { Arrow } from "../components/icons"

const Store = styled.div`
  border-bottom: 4px solid #000;
  h2 {
    margin-top: 0;
    margin-bottom: 0;
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
        title={`Store Locator`}
        text={`Donec eget imperdiet dui. Mauris lorem lacus, porttitor quis vehicula vitae, pretium non purus. Morbi nec rhoncus massa`}
      />
      <Box top="0">
        {storeLocator.map((store, i) => (
          <Store key={`item-${i}`}>
            <Grid>
              <Grid.Unit size={11 / 12}>
                <H2>{store.name}</H2>
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
