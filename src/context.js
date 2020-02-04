import React, { createContext, useReducer } from "react"

const defaultContextValue = {
  data: {
    activeMenu: "/our-process/",
  },
}

export const AppContext = createContext(defaultContextValue)
const { Provider } = AppContext

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "activeMenu":
        const newState = {
          data: {
            ...state.data,
            activeMenu: action.value,
          },
        }
        return newState
      default:
        throw new Error()
    }
  }, defaultContextValue)
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}
