import { createContext, useContext, useReducer } from 'react'

const LocationContext = createContext(null)
const LocationDispatchContext = createContext(null)

export function LocationProvider ({ children }) {
  const [location, dispatch] = useReducer(
    locationReducer,
    initialLocation
  )

  return (
    <LocationContext.Provider value={location}>
      <LocationDispatchContext.Provider value={dispatch}>
        {children}
      </LocationDispatchContext.Provider>
    </LocationContext.Provider>
  )
}

export function useLocation () {
  return useContext(LocationContext)
}

export function useLocationDispatch () {
  return useContext(LocationDispatchContext)
}

function locationReducer (location, action) {
  switch (action.type) {
    case 'select-location': {
      return {
        location: action.location
      }
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

const initialLocation = {}
