import { createContext, useContext, useReducer } from 'react'

const FilterContext = createContext(null)
const FilterDispatchContext = createContext(null)

export function FilterProvider ({ projects, children }) {
  const [filter, dispatch] = useReducer(
    filterReducer,
    {projects: projects, filteredProjects: projects}
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

function filterReducer (state, action) {
  switch (action.type) {
    case 'select-location': {
      const filteredProjects = {}
      Object.values(state.projects).forEach(project => {
        if (
          ('location-building' in project && project['location-building'].id === action.location.id) ||
          ('location-external' in project && project['location-external'].id === action.location.id)
        ) {
          filteredProjects[project.id] = project
        }
      })

      return {
        projects: state.projects,
        filteredProjects: filteredProjects,
        location: action.location
      }
    }
    case 'all-locations': {
      return {
        projects: state.projects,
        filteredProjects: state.projects,
      }
    }
    case 'select-floor': {
      const filteredProjects = {}
      Object.values(state.projects).forEach(project => {
        if ('location-level' in project && project['location-level'].id === action.floor.id) {
          filteredProjects[project.id] = project
        }
      })

      return {
        projects: state.projects,
        filteredProjects: filteredProjects,
        location: state.location,
        floor: action.floor
      }
    }
    case 'all-floors': {
      const filteredProjects = {}
      Object.values(state.projects).forEach(project => {
        if (
          ('location-building' in project && project['location-building'].id === state.location.id) ||
          ('location-external' in project && project['location-external'].id === state.location.id)
        ) {
          filteredProjects[project.id] = project
        }
      })

      return {
        projects: state.projects,
        filteredProjects: filteredProjects,
        location: state.location
      }
    }
    case 'select-room': {
      const filteredProjects = {}
      Object.values(state.projects).forEach(project => {
        if ('location-room' in project && project['location-room'].id === action.room.id) {
          filteredProjects[project.id] = project
        }
      })

      return {
        projects: state.projects,
        filteredProjects: filteredProjects,
        location: state.location,
        floor: state.floor,
        room: action.room
      }
    }
    case 'all-rooms': {
      const filteredProjects = {}
      Object.values(state.projects).forEach(project => {
        if ('location-level' in project && project['location-level'].id === state.floor.id) {
          filteredProjects[project.id] = project
        }
      })

      return {
        projects: state.projects,
        filteredProjects: filteredProjects,
        location: state.location,
        floor: state.floor
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
