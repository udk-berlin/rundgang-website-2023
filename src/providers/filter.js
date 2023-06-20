import { createContext, useContext, useReducer } from 'react'

const FilterContext = createContext(null)
const FilterDispatchContext = createContext(null)

export function FilterProvider ({ children }) {
  const [filter, dispatch] = useReducer(
    filterReducer,
    initialFilter
  )

  return (
    <FilterContext.Provider value={filter}>
      <FilterDispatchContext.Provider value={dispatch}>
        {children}
      </FilterDispatchContext.Provider>
    </FilterContext.Provider>
  )
}

export function useFilter () {
  return useContext(FilterContext)
}

export function useFilterDispatch () {
  return useContext(FilterDispatchContext)
}

function filterReducer (filter, action) {
  switch (action.type) {
    case 'select-location': {
      return {
        location: action.location
      }
    }
    case 'all-locations': {
      return {}
    }
    case 'select-floor': {
      return {
        location: location.location,
        floor: action.floor
      }
    }
    case 'all-floors': {
      return {
        location: location.location
      }
    }
    case 'select-room': {
      return {
        location: location.location,
        floor: location.floor,
        room: action.room
      }
    }
    case 'all-rooms': {
      return {
        location: location.location,
        floor: location.floor
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

const initialFilter = {}
