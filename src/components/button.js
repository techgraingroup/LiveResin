import React from "react"
import { math, cover } from "polished"
import styled from "styled-components"
import { Arrow, Play, Facebook, Twitter, Instagram } from "./icons"
import { THEME } from "../data"

const {
  breakpoints: { md },
} = THEME

export const Button = styled(
  ({ withArrow, bgColor, borderColor, color, children, ...rest }) => (
    <button {...rest}>
      <span className="text">{children}</span>
      {withArrow && <Arrow borderColor={borderColor} />}
    </button>
  )
)`
  height: 50px;
  font-size: 14px;
  padding: ${props => (props.withArrow ? "0 70px 0 30px" : "0 30px")};
  font-family: MontHeavy, sans-serif;
  text-transform: uppercase;
  color: ${props => props.color || "#000"};
  position: relative;
  background: transparent;
  border: 0;
  outline: none;
  @media only screen and (min-width: ${md}px) {
    height: 60px;
    font-size: 16px;
    padding: ${props => (props.withArrow ? "0 80px 0 45.5px" : "0 45.5px")};
  }
  .text {
    position: relative;
    z-index: 10;
    height: 100%;
    display: inline-block;
    letter-spacing: 0.1em;
    line-height: 51px;
    @media only screen and (min-width: ${md}px) {
      line-height: 61px;
    }
  }
  svg {
    transition: transform 0.1s ease-in-out;
  }
  &::before {
    ${cover()};
    content: "";
    display: block;
    transition: transform 0.1s ease-in-out;
    background: ${props => props.bgColor || "transparent"};
    border: ${props => `1px solid ${props.borderColor || "transparent"}`};
  }
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
    &::before {
      padding: ${props => (props.withArrow ? "0 70px 0 22px" : "0 22px")};
      transform: scale(${math("52/60")});
    }
    ${props => (props.withArrow ? `svg { transform: translateX(5px); }` : "")}
  }
  &:active {
    &::before {
      padding: ${props => (props.withArrow ? "0 70px 0 26px" : "0 26px")};
      transform: scale(${math("56/60")});
    }
  }
  &:disabled {
    opacity: 40%;
  }
`

export const SocialButton = styled(({ type, dark, ...rest }) => (
  <a {...rest}>
    {type === "facebook" && <Facebook dark={dark} />}
    {type === "twitter" && <Twitter dark={dark} />}
    {type === "instagram" && <Instagram dark={dark} />}
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
  margin-left: -50px;
  left: 50%;
  margin-top: -50px;
  top: 20%;
  @media only screen and (min-width: ${md}px) {
    top: 50%;
  }
  &:hover {
    cursor: pointer;
  }
`
