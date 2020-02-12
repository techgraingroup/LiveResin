import React from "react"
import { math, cover } from "polished"
import styled from "styled-components"
import { Arrow, Play, Facebook, Twitter, Instagram } from "./icons"

export const Button = styled(
  ({ withArrow, bgColor, borderColor, color, children, ...rest }) => (
    <button {...rest}>
      <span className="bg" />
      <span className="text">{children}</span>
      {withArrow && <Arrow borderColor={borderColor} />}
    </button>
  )
)`
  height: 60px;
  font-family: MontHeavy, sans-serif;
  padding: ${props => (props.withArrow ? "0 70px 0 30px" : "0 30px")};
  font-size: 16px;
  text-transform: uppercase;
  color: ${props => props.color || "#000"};
  position: relative;
  background: transparent;
  border: 0;
  outline: none;
  .text {
    position: relative;
    z-index: 10;
    line-height: 61px;
    height: 100%;
    display: inline-block;
  }
  svg {
    transition: transform 0.1s ease-in-out;
  }
  .bg {
    ${cover()};
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
    .bg {
      padding: ${props => (props.withArrow ? "0 70px 0 22px" : "0 22px")};
      transform: scale(${math("52/60")});
    }
    ${props => (props.withArrow ? `svg { transform: translateX(10px); }` : "")}
  }
  &:active {
    .bg {
      padding: ${props => (props.withArrow ? "0 70px 0 26px" : "0 26px")};
      transform: scale(${math("56/60")});
    }
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
