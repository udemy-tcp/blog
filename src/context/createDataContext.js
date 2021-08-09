import React, { useReducer } from 'react'

export default (reducer, action, initialState) => {
  const Context = React.createContext()

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <Context.Provider value={state}>{children}</Context.Provider>
  }

  return { Context, Provider }
}
