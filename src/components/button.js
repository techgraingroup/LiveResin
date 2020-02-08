import React from "react"
import { math } from "polished"
import styled from "styled-components"
import { Arrow, Play, Facebook, Twitter, Instagram } from "./icons"

export const Button = styled(
  ({ withArrow, bgColor, borderColor, color, children, ...rest }) => (
    <button {...rest}>
      {children}
      {withArrow && <Arrow borderColor={borderColor} />}
    </button>
  )
)`
  height: 60px;
  font-family: MontHeavy, sans-serif;
  padding: ${props => (props.withArrow ? "0 70px 0 30px" : "0 30px")};
  font-size: 16px;
  text-transform: uppercase;
  line-height: 60px;
  background: ${props => props.bgColor || "transparent"};
  border: ${props => `1px solid ${props.borderColor || "transparent"}`};
  color: ${props => props.color || "#000"};
  position: relative;
  transition: transform 0.1s;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
    padding: ${props => (props.withArrow ? "0 70px 0 22px" : "0 22px")};
    transform: scale(${math("52/60")});
    ${props =>
      props.withArrow
        ? `
      &::after {
        transform: translateX(10px);
      }
    `
        : ""}
  }
  &:active {
    padding: ${props => (props.withArrow ? "0 70px 0 26px" : "0 26px")};
    transform: scale(${math("56/60")});
  }
  &:disabled {
    opacity: 40%;
  }
`

export const SocialButton = styled(({ type, ...rest }) => (
  <a {...rest}>
    {type === "facebook" && <Facebook />}
    {type === "twitter" && <Twitter />}
    {type === "instagram" && <Instagram />}
  </a>
))`
  display: block;
  width: 45px;
  height: 45px;
  border-radius: 22.5px;
`

export const PlayButton = styled(({ color, ...rest }) => (
  <button {...rest}>
    <Play color={color} />
  </button>
))`
  background: none;
  border: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
`
