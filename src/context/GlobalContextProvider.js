import React from 'react'

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  userName: '',
  userId: null,
  loggedIn: false,
  theme: 'red'
}

const reducer = (state, action) => {
  switch (action.type) {
    // THEME REDUCER
    case 'THEME_RED' : 
      return {
        ...state,
        theme: 'red'
      } 
    case 'THEME_ORANGE' :
      return {
        ...state,
        theme: 'orange'
      }
    case 'THEME_YELLOW' :
      return {
        ...state,
        theme: 'yellow'
      }
    case 'THEME_GREEN' :
      return {
        ...state,
        theme: 'green'
      }
    case 'THEME_BLUE' :
      return {
        ...state,
        theme: 'blue'
      }
    case 'THEME_VIOLET' :
      return {
        ...state,
        theme: 'violet'
      }

      // USER REDUCER
      case 'USER_NAME' :
        return {
          ...state,
          userName: action.payload
        }

    default:
      throw new Error('Bad action Type')
  }
}

const GlobalContextProvider = ({children}) => {
  const [ state, dispatch ] = React.useReducer(reducer, initialState)

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider