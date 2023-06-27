import { createContext, useContext, useReducer } from 'react'

const FilterContext = createContext(null)
const FilterDispatchContext = createContext(null)

export function FilterProvider ({ projects, structures, locations, facultiesAndCenters, children }) {
  const [filter, dispatch] = useReducer(
    filterReducer,
    {projects: projects, filteredProjects: projects, structures: structures, locations: locations, filteredLocations: locations, facultiesAndCenters: facultiesAndCenters}
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
        structures: state.structures,
        locations: state.locations,

        facultiesAndCenters: state.facultiesAndCenters,

        filteredProjects: filteredProjects,
        location: action.location
      }
    }
    case 'all-locations': {
      return {
        projects: state.projects,
        structures: state.structures,
        locations: state.locations,

        facultiesAndCenters: state.facultiesAndCenters,

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
        structures: state.structures,
        locations: state.locations,

        facultiesAndCenters: state.facultiesAndCenters,

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
        structures: state.structures,
        locations: state.locations,

        facultiesAndCenters: state.facultiesAndCenters,

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
        structures: state.structures,
        locations: state.locations,

        facultiesAndCenters: state.facultiesAndCenters,

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
        structures: state.structures,
        locations: state.locations,

        facultiesAndCenters: state.facultiesAndCenters,

        filteredProjects: filteredProjects,
        location: state.location,
        floor: state.floor
      }
    }

    case 'filter-faculties-centres': {
      const filteredStructures = filterByNodeId(state.structures, action.id)
      const itemIds = getItemIds(filteredStructures)
      const filteredLocations = filterByNodeIds(state.locations, itemIds)

      return {
        projects: state.projects,
        structures: state.structures,
        locations: state.locations,

        facultiesAndCenters: state.facultiesAndCenters,

        filteredLocations: filteredLocations,

        facultyOrCenter: action.id
      }
    }

    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

function filterByNodeId(tree, nodeId) {
  const resultTree = {}

  const getChildren = (result, object) => {
    if (object.id === nodeId) {
      result.push(object);
      return result;
    }
    const children = Object.values(object.children).reduce(getChildren, []);
    if (children.length) result.push({ ...object, children });

    return result;
  };

  Object.values(tree).reduce(getChildren, []).forEach(subTree => resultTree[subTree.id] = subTree)
  return resultTree;
}

function getItemIds(tree) {
  const itemIds = []

  const getChildren = (current) => {
    Object.values(current.children).forEach(child => {
      if (child.type === 'item') {
        itemIds.push(child.id)
      } else {
        getChildren(child)
      }
    })
  };

  Object.values(tree).forEach(treePart => {
    getChildren(treePart)
  })

  return itemIds
}

function filterByNodeIds(tree, nodeIds) {
  const resultTree = {}

  const getChildren = (result, object) => {
    if (nodeIds.includes(object.id)) {
      result.push(object);
      return result;
    }
    const children = Object.values(object.children).reduce(getChildren, []);
    if (children.length) result.push({ ...object, children });

    return result;
  };

  Object.values(tree).reduce(getChildren, []).forEach(subTree => resultTree[subTree.id] = subTree)
  return resultTree;
}
