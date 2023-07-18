import { createContext, useContext, useReducer } from 'react'

const LinkContext = createContext(null)
const LinkDispatchContext = createContext(null)

export function LinkProvider ({ children }) {
  const [link, dispatch] = useReducer(
    linkReducer,
    { clicked: false }
  )

  return (
    <LinkContext.Provider value={link}>
      <LinkDispatchContext.Provider value={dispatch}>
        {children}
      </LinkDispatchContext.Provider>
    </LinkContext.Provider>
  )
}

export function useLink () {
  return useContext(LinkContext)
}

export function useLinkDispatch () {
  return useContext(LinkDispatchContext)
}

function linkReducer (state, action) {
  switch (action.type) {
    case 'clicked': {
      return {
        clicked: true,
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
