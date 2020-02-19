import React, { createContext, useReducer } from "react"

const defaultContextValue = {
  data: {
    mobileMenuVisible: false,
    activeMenu: "/products/",
  },
}

export const AppContext = createContext(defaultContextValue)
const { Provider } = AppContext

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "activeMenu":
        const activeMenuState = {
          data: {
            ...state.data,
            activeMenu: action.value,
          },
        }
        return activeMenuState
      case "mobileMenu":
        const mobileMenuState = {
          data: {
            ...state.data,
            mobileMenuVisible: action.value,
          },
        }
        return mobileMenuState
      default:
        throw new Error()
    }
  }, defaultContextValue)
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}
