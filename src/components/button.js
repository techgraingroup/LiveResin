import { math } from 'polished'
import styled from "styled-components"
import btnArrow from '../images/btn-arrow.png'

export const Button = styled.button`
  height: 60px;
  font-family: MontHeavy, sans-serif;
  padding: ${ props => props.withArrow ? '0 70px 0 30px' : '0 30px' };
  font-size: 16px;
  text-transform: uppercase;
  line-height: 60px;
  background: ${props => (props.withArrow || props.bordered ? "#fff" : "#000")};
  border: ${props => (props.withArrow || props.bordered ? "1px solid #000" : "1px solid #000")};
  color: ${props => (props.withArrow || props.bordered ? "#000" : "#fff")};
  position: relative;
  transition: transform .1s;
  ${props =>
    props.withArrow
      ? `&::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 25px;
    right: 22px;
    background: url(${btnArrow}) center center no-repeat transparent;
    background-size: 100% auto;
    transition: transform .1s;
  }`
      : ""}
  &:hover {
    cursor: pointer;
    padding: ${ props => props.withArrow ? '0 70px 0 22px' : '0 22px' };
    transform: scale(${math('52/60')});
    ${props => props.withArrow ? `
      &::after {
        transform: translateX(10px);
      }
    ` : ''}
  }
  &:active {
    padding: ${ props => props.withArrow ? '0 70px 0 26px' : '0 26px' };
    transform: scale(${math('56/60')});
  }
  &:disabled {
    opacity: 40%;
  }
`
