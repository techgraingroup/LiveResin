import styled from 'styled-components'
import { THEME } from '../data'

const { breakpoints: { md } } = THEME

export const OnlyDesktop = styled.div`
  display: none !important;
  @media only screen and (min-width: ${md}px) {
    display: block !important;
  }
`

export const OnlyMobile = styled.div`
  display: block;
  @media only screen and (min-width: ${md}px) {
    display: none;
  }
`
