import React, { useState } from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "styled-components-grid"
import styled from "styled-components"
import { Box } from "./box"
import { H1 } from "./text"
import { Select } from "./forms"
import { MobileBr, DesktopBr } from "./responsive"
import { THEME } from "../data"

const {
  breakpoints: { md },
} = THEME

const Button = styled.button`
  display: inline-block !important;
  font-family: MontHeavy, sans-serif;
  letter-spacing: 0.1em;
  border: 1px solid #fff;
  text-transform: uppercase;
  text-align: center;
  color: ${props => (props.negative ? "#FFF" : "#000")};
  background: ${props => (props.negative ? "#000" : "#FFF")};
  font-size: 14px;
  width: 80px;
  height: 80px;
  line-height: 80px;
  border-radius: 40px;
  margin-right: 10px;
  @media only screen and (min-width: ${md}px) {
    font-size: 18px;
    width: 120px;
    height: 120px;
    line-height: 120px;
    border-radius: 60px;
    margin-right: 30px;
  }
  &:hover {
    cursor: pointer;
  }
`

const Title = styled(props => <H1 {...props} />)`
  margin-top: 0;
  color: #fff;
  letter-spacing: -0.03em;
  @media only screen and (max-width: ${md}px) and (max-aspect-ratio: 16/9) {
    margin-bottom: 25px;
    font-size: 36px;
    line-height: 90.24%;
  }
`

const StateSelect = styled(props => <Select {...props} />)`
  margin-bottom: 50px;
  @media only screen and (max-width: ${md}px) and (max-aspect-ratio: 16/9) {
    margin-bottom: 25px;
  }
`

const AgeGate = ({ passed, passAgeGate }) => {
  const [selectedState, setSelectedState] = useState("")
  const {
    dataJson: { states },
  } = useStaticQuery(graphql`
    query {
      dataJson {
        states {
          name
          abbreviation
        }
      }
    }
  `)
  const statesList = states.map(s => ({
    label: s.name,
    value: s.abbreviation,
  }))
  const selectState = abbr => {
    const state = statesList.find(state => state.value === abbr)
    setSelectedState(state)
  }
  return (
    <>
      <Helmet bodyAttributes={{ class: passed ? "" : "age-gate" }} />
      <Box top="0" bottom="0" bgColor="#000">
        <Grid>
          <Grid.Unit size={1}>
            <Title>
              Are you at <MobileBr />
              least 21 <DesktopBr />
              years <MobileBr />
              of age?
            </Title>
            <StateSelect
              color="#FFF"
              bgColor="#000"
              label="Your State"
              name="place"
              placeholder="Choose Your State"
              options={statesList}
              onChange={e => selectState(e.target.value)}
            />
            <div>
              <Button onClick={() => passAgeGate(selectedState)}>Yes</Button>
              <Button negative>Nope</Button>
            </div>
          </Grid.Unit>
        </Grid>
      </Box>
    </>
  )
}

export default AgeGate
