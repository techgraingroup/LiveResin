import React, {
  Component,
  useState,
  useRef,
  createRef,
  useEffect,
  forwardRef,
} from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { timingFunctions } from "polished"

export const Animate = styled(({ children, className, ...rest }) => {
  const [ready, setReady] = useState("")
  const animRef = useRef(null)
  useEffect(() => {
    const getPosition = () => {
      const wHeight = window.innerHeight
      if (animRef && animRef.current) {
        const myPosition = animRef.current.getBoundingClientRect()
        if (myPosition.top < wHeight / 2) {
          setReady("ready")
        }
      }
    }
    window.addEventListener("scroll", getPosition)
    return () => window.removeEventListener("scroll", getPosition)
  }, [])
  return (
    <div
      ref={animRef}
      style={{ position: "relative" }}
      className={`${ready} ${className}`}>
      {children}
    </div>
  )
})`
  transition: all 0.5s ${timingFunctions("easeOutQuart")};
  transform: translate3d(0, 50px, 0);
  opacity: 0;
  &.ready {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`

export const Image = styled(({ className, ...rest }) => {
  const [ready, setReady] = useState("")
  const imgRef = useRef(null)
  useEffect(() => {
    const getPosition = () => {
      const wHeight = window.innerHeight
      if (imgRef && imgRef.current) {
        const myPosition = imgRef.current.getBoundingClientRect()
        if (myPosition.top < (wHeight * 4) / 5) {
          setReady("ready")
        }
      }
    }
    window.addEventListener("scroll", getPosition)
    return () => window.removeEventListener("scroll", getPosition)
  }, [])
  return (
    <div ref={imgRef} className={`${ready} ${className}`}>
      <Img {...rest} />
    </div>
  )
})`
  overflow: hidden;
  padding: 0;
  margin: 0;
  .gatsby-image-wrapper {
    transform-origin: bottom center;
    transition: all 0.5s ${timingFunctions("easeOutQuart")};
    transform: scale3d(1.15, 1.15, 1.15);
    opacity: 0.3;
  }
  &.ready {
    .gatsby-image-wrapper {
      transform: scale3d(1, 1, 1);
      opacity: 1;
    }
  }
`
