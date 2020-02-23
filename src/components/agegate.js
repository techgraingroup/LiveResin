import React, { useState } from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "styled-components-grid"
import styled from "styled-components"
import { Box } from "./box"
import { H1 } from "./text"
import { Select } from "./forms"

const Button = styled.button`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  display: inline-block !important;
  line-height: 120px;
  font-size: 18px;
  font-family: MontHeavy, sans-serif;
  letter-spacing: 0.1em;
  border: 1px solid #fff;
  text-transform: uppercase;
  text-align: center;
  color: ${props => (props.negative ? "#FFF" : "#000")};
  background: ${props => (props.negative ? "#000" : "#FFF")};
  &:hover {
    cursor: pointer;
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
      { !passed && <Helmet bodyAttributes={{ class: "age-gate" }} /> }
      <Box top="0" bottom="0" bgColor="#000">
        <Grid>
          <Grid.Unit size={{ xs: 1, sm: 3 / 4 }}>
            <H1 style={{ marginTop: 0, color: "#FFF" }}>Are you at least 21 years of age?</H1>
            <Select
              color="#FFF"
              bgColor="#000"
              label="Your State"
              name="place"
              placeholder="Choose Your State"
              style={{ marginBottom: 50 }}
              options={statesList}
              onChange={e => selectState(e.target.value)}
            />
            <div>
              <Button
                style={{ marginRight: 30 }}
                onClick={() => passAgeGate(selectedState)}>
                Yes
              </Button>
              <Button negative>Nope</Button>
            </div>
          </Grid.Unit>
        </Grid>
      </Box>
    </>
  )
}

export default AgeGate
