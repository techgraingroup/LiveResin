import { useState, useRef, useEffect, useLayoutEffect } from "react"
export const getImageFromList = (name, list) =>
  list.find(item => item.node.relativePath === name).node

const isBrowser = typeof window !== "undefined"

function getScrollPosition({ element, useWindow }) {
  if (!isBrowser) return { x: 0, y: 0 }
  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()
  return useWindow
    ? {
        x: window.scrollX,
        y: window.scrollY,
      }
    : {
        x: position.left,
        y: position.top,
      }
}

export function useScrollPosition(effect, deps, element, useWindow, wait) {
  const position = useRef(getScrollPosition({ useWindow }))
  let throttleTimeout = null
  const callback = () => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }
  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callback, wait)
        }
      } else {
        callback()
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, deps)
}

export function useWindowSize() {
  const isClient = typeof window === "object"
  const getSize = () => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }
  const [windowSize, setWindowSize] = useState(getSize)
  useEffect(() => {
    setWindowSize(getSize())
  }, [])
  useEffect(() => {
    if (!isClient) {
      return false
    }
    const handleResize = () => {
      setWindowSize(getSize())
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  // Empty array ensures that effect is only run on mount and unmount
  return windowSize
}
