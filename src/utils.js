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
        width: position.width,
        height: position.height,
      }
    : {
        x: position.left,
        y: position.top,
        width: position.width,
        height: position.height,
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

export const isClient = typeof window === "object"

export function getWindowSize() {
  return {
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  }
}

export function useOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting)
      },
      {
        rootMargin,
      }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.unobserve(ref.current)
    }
  }, [])

  return isIntersecting
}

export const useStateWithCallback = (initialState, next) => {
  const [state, setState] = useState(initialState)
  useEffect(() => next(state), [state, next])
  return [state, setState]
}
