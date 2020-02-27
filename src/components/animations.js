import React, {
  useState,
  useRef,
  createRef,
  useEffect,
  forwardRef,
} from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { timingFunctions } from "polished"

export const Image = styled(({ className, style, ...rest }) => {
  const imgRef = useRef(null)
  const [isFullSize, setIsFullSize] = useState(false)
  let imgClassName = `${className} prepare-in-view`
  if (isFullSize) {
    imgClassName = className
  }
  useEffect(() => {
    const getImagePosition = () => {
      if (
        imgRef.current &&
        imgRef.current.imageRef &&
        imgRef.current.imageRef.current
      ) {
        const wHeight = window.innerHeight
        const observer = new IntersectionObserver(
          () => {
            if (!isFullSize) {
              setIsFullSize(true)
            }
          },
          {
            rootMargin: `${wHeight / 2}px`,
          }
        )
        observer.observe(imgRef.current.imageRef.current)
      }
    }
    getImagePosition()
    window.addEventListener("scroll", getImagePosition)
    return () => window.removeEventListener("scroll", getImagePosition)
  }, [])
  return (
    <div style={style} className={imgClassName}>
      <Img ref={imgRef} {...rest} />
    </div>
  )
})`
  overflow: hidden;
  padding: 0;
  margin: 0;
  .gatsby-image-wrapper {
    transform-origin: bottom center;
    opacity: 1;
    transform: scale3d(1, 1, 1);
    transition: all 0.5s ${timingFunctions("easeOutQuart")};
  }
  &.prepare-in-view {
    .gatsby-image-wrapper {
      transform: scale3d(1.15, 1.15, 1.15);
      opacity: 0.3;
    }
  }
`

export const Animate = styled(({ children, className, ...rest }) => {
  const animRef = useRef(null)
  const [doneAnimating, setDoneAnimating] = useState(false)
  let animClassName = `${className} animate prepare-in-view`
  if (doneAnimating) {
    animClassName = `${className} animate`
  }
  useEffect(() => {
    const getAnimPosition = () => {
      if (animRef.current) {
        const wHeight = window.innerHeight
        const observer = new IntersectionObserver(
          () => {
            if (!doneAnimating) {
              setDoneAnimating(true)
            }
          },
          {
            rootMargin: `${wHeight * 2}px`,
          }
        )
        observer.observe(animRef.current)
      }
    }
    getAnimPosition()
    window.addEventListener("scroll", getAnimPosition)
    return () => window.removeEventListener("scroll", getAnimPosition)
  }, [])
  return (
    <div ref={animRef} className={animClassName} {...rest}>
      {children}
    </div>
  )
})`
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: all 1s ${timingFunctions("easeOutQuart")} 1s;
  &.prepare-in-view {
    transform: translate3d(0, 50px, 0);
    opacity: 0;
  }
`
