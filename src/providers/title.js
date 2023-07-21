import { createContext, useContext, useReducer } from 'react'

const MetaHeaderTitleContext = createContext(null)
const MetaHeaderTitleDispatchContext = createContext(null)

export function MetaHeaderTitleProvider ({ initialTitle, children }) {
  const [title, dispatch] = useReducer(
    metaHeaderTitleReducer,
    { name: initialTitle }
  )

  return (
    <MetaHeaderTitleContext.Provider value={title}>
      <MetaHeaderTitleDispatchContext.Provider value={dispatch}>
        {children}
      </MetaHeaderTitleDispatchContext.Provider>
    </MetaHeaderTitleContext.Provider>
  )
}

export function useMetaHeaderTitle () {
  return useContext(MetaHeaderTitleContext)
}

export function useMetaHeaderTitleDispatch () {
  return useContext(MetaHeaderTitleDispatchContext)
}

function metaHeaderTitleReducer (state, action) {
  switch (action.type) {
    case 'set-title': {
      return {
        name: action.name,
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
