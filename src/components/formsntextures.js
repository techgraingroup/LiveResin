import React, { Fragment, useState } from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Grid from "styled-components-grid"
import { Box } from "./box"
import { H4, Text, BlockTitle, BlockTitleHorz } from "./text"
import { Button } from "./button"
import {
  TBudder,
  TDiamonds,
  TSauce,
  TSugar,
  TShatter,
  TThca,
  TVapes,
} from "./icons"

const icons = { TBudder, TDiamonds, TSauce, TSugar, TShatter, TThca, TVapes }

const TabBtn = styled(({ isActive, children, ...rest }) => (
  <button {...rest}>{children}</button>
))`
  position: relative;
  border: 0;
  background: transparent;
  padding-top: 25px;
  font-family: MontHeavy, sans-serif;
  &:focus {
    outline: none;
  }
  ${props =>
    props.isActive
      ? `
    &::before {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 8px;
        left: 0;
        top: 0;
        right: 0;
        background: #FF4438;
    }
  `
      : ""}
`

const Image = styled(({ fluid, alt, ...rest }) => <Image {...rest} />)`
  border: 4px solid #000;
  margin-bottom: 30px;
`

const FormsTextures = () => {
  const [active, setActive] = useState(0)
  const {
    dataJson: { formsTextures },
  } = useStaticQuery(graphql`
    query {
      dataJson {
        formsTextures {
          name
          description
          store
          level
          productLink
          icon
          image {
            childImageSharp {
              fluid(maxHeight: 350) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  const formsCount = formsTextures.length

  return (
    <Box>
      <BlockTitleHorz
        title={`Live Resin Forms &\nTextures`}
        description="
            Following the extraction process, we can make a consumable product
            in a variety of form factors. Here’s a look at each one, and how to
            decide which isright for you.
            "
      />
      <Grid
        halign="center"
        valign="center"
        style={{ marginTop: 60, marginBottom: 80 }}>
        {formsTextures.map((item, i) => {
          const Icon = icons[item.icon]
          return (
            <Grid.Unit
              key={`item-${i}`}
              size={{ sm: 1 / formsCount }}
              style={{ textAlign: "center" }}>
              <TabBtn isActive={i === active} onClick={() => setActive(i)}>
                <Icon active={i === active} />
                <div
                  style={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    marginTop: 15,
                    opacity: i === active ? 1 : 0.5,
                  }}>
                  {item.name}
                </div>
              </TabBtn>
            </Grid.Unit>
          )
        })}
      </Grid>
      <Grid>
        {formsTextures.map((item, i) => {
          let ele = null
          if (active === i) {
            ele = (
              <Fragment key={`item-${i}`}>
                <Grid.Unit size={8 / 17}>
                  <Img
                    fluid={{
                      ...item.image.childImageSharp.fluid,
                      aspectRatio: 4 / 3,
                    }}
                    alt={item.name}
                    style={{
                      border: "4px solid #000",
                      marginBottom: 30,
                    }}
                  />
                  <Button
                    color="#FFF"
                    bgColor="#000"
                    style={{ marginRight: 30 }}
                    onClick={() => navigate(item.productLink)}>
                    View Products
                  </Button>
                  <Button
                    withArrow
                    color="#000"
                    bgColor="#FFF"
                    borderColor="#000"
                    onClick={() => navigate(item.store)}>
                    Store Locator
                  </Button>
                </Grid.Unit>
                <Grid.Unit size={1 / 17} />
                <Grid.Unit size={8 / 17}>
                  <BlockTitle line="top">{item.name}</BlockTitle>
                  <Text>{item.description}</Text>
                  {item.level && (
                    <>
                      <H4>Comfort Level</H4>
                      <Text>{item.level}</Text>
                    </>
                  )}
                </Grid.Unit>
              </Fragment>
            )
          }
          return ele
        })}
      </Grid>
    </Box>
  )
}

export default FormsTextures
