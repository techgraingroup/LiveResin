import React, { Fragment, useState } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import Grid from "styled-components-grid"
import { Box } from "./box"
import { H2, Text, BlockTitle, BlockTitleHorz } from "./text"
import { Button } from "./button"

import { FORMS_TEXTURES_DATA } from "../data"

const TabBtn = styled(({ isActive, children, ...rest }) => (
  <button {...rest}>{children}</button>
))`
  position: relative;
  border: 0;
  background: transparent;
  padding-top: 25px;
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

const Image = styled(({ src, alt, ...rest }) => <div {...rest}>{alt}</div>)`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border: 4px solid #000;
  text-indent: -100em;
  overflow: hidden;
  margin-bottom: 30px;
  height: 350px;
`

const FormsTextures = () => {
  const [active, setActive] = useState(0)
  const formsCount = FORMS_TEXTURES_DATA.length
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
        {FORMS_TEXTURES_DATA.map((item, i) => (
          <Grid.Unit
            key={`item-${i}`}
            size={{ sm: 1 / formsCount }}
            style={{ textAlign: "center" }}>
            <TabBtn isActive={i === active} onClick={() => setActive(i)}>
              <img src={item.icon} alt={item.name} />
              <div
                style={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  marginTop: 15,
                }}>
                {item.name}
              </div>
            </TabBtn>
          </Grid.Unit>
        ))}
      </Grid>
      <Grid>
        {FORMS_TEXTURES_DATA.map((item, i) => {
          let ele = null
          if (active === i) {
            ele = (
              <Fragment key={`item-${i}`}>
                <Grid.Unit size={8 / 17}>
                  <Image src={item.image} alt={item.name} />
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
                      <h4>Comfort Level</h4>
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
