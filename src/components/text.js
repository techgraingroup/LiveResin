import React from 'react'
import styled from "styled-components"

export const H1 = styled.h1`
  font-weight: bold;
  font-family: MontHeavy, sans-serif;
  font-size: 96px;
  margin-bottom: 44px;
  line-height: 87px;
`

export const H2 = styled.h2`
  font-weight: bold;
  font-family: MontHeavy, sans-serif;
  font-size: 48px;
  margin-bottom: 30px;
  line-height: 105.8%;
`

export const H3 = styled.h3`
  font-weight: bold;
  font-family: MontHeavy, sans-serif;
  font-size: 24px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin-bottom: 18px;
  line-height: 100%;
`

export const BlockTitle = styled(({ color, line, ...rest }) => (
  <h3 {...rest} />
))`
  font-weight: bold;
  font-size: 48px;
  font-family: Mont, sans-serif;
  margin: 0;
  padding: 30px 0;
  line-height: 105.8%;
  color: ${props => (props.color ? props.color : "#000")};
  ${props =>
    props.line === "top" &&
    `border-top: 4px solid ${props.color || '#000'};`}
  ${props =>
    props.line === "bottom" &&
    `border-bottom: 4px solid ${props.color || '#000'};`}
`

export const H4 = styled.h4`
  font-weight: bold;
  font-family: MontHeavy, sans-serif;
  font-size: 24px;
  margin-bottom: 30px;
  line-height: 100%;
`
