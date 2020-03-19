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

const StateName = styled.h2`
  font-family: MontHeavy, sans-sarif;
  letter-spacing: -0.035em;
  margin: 0;
  border-top: 4px solid #000;
  border-bottom: 4px solid #000;
  font-size: 30px;
  height: 80px;
  line-height: 80px;
  @media only screen and (min-width: ${md}px) {
    font-size: 48px;
    height: 100px;
    line-height: 100px;
  }
  @media only screen and (max-width: ${md}px) {
    &.first {
      border-top: 0;
      margin-top: -10px;
    }
  }
`

const LocationBlock = styled.div`
  border-top: 1px solid #000;
  &.first {
    border-top: 0;
  }
  padding: 25px 0;
  @media only screen and (min-width: ${md}px) {
    padding: 35px 0;
  }
`

const LocationName = styled.h3`
  font-family: MontHeavy, sans-sarif;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 25px 0;
  font-size: 20px;
  @media only screen and (min-width: ${md}px) {
    margin: 0 0 35px 0;
    font-size: 24px;
  }
`

const StoreList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    a {
      font-size: 16px;
      font-family: MontHeavy, sans-sarif;
      text-decoration: none;
      color: #000;
      line-height: 150%;
    }
  }
`

const StoreLocatorPage = () => {
  const { dispatch } = useContext(AppContext)
  const {
    dataJson: { stores },
  } = useStaticQuery(graphql`
    query {
      dataJson {
        stores {
          state
          locations {
            name
            stores {
              name
              address
              link
            }
          }
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
        bottom="20"
        mobileTop="72"
        mobileBottom="0"
        title={`Store\nLocator`}
      />
      <Box top="0">
        {stores.map((state, s) => (
          <div key={`${s}-state`}>
            <StateName className={s === 0 ? "first" : ""}>
              {state.state}
            </StateName>
            {state.locations.map((loc, l) => (
              <LocationBlock
                key={`${l}-loc`}
                className={l === 0 ? "first" : ""}>
                <LocationName>{loc.name}</LocationName>
                <StoreList>
                  {loc.stores.map((store, r) => (
                    <li key={`${r}-store`}>
                      <a
                        href={store.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        {store.name}
                      </a>
                    </li>
                  ))}
                </StoreList>
              </LocationBlock>
            ))}
          </div>
        ))}
      </Box>
    </>
  )
}

export default StoreLocatorPage
