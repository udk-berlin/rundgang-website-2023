import { createContext, useContext, useReducer } from 'react'

const FilterContext = createContext(null)
const FilterDispatchContext = createContext(null)

export function FilterProvider ({ projects = {}, locations = {}, formatsFilters, structures, structuresFilters, children }) {
  const [filter, dispatch] = useReducer(
    filterReducer,
    {
      projects: projects,
      filteredProjects: projects,
      locations: locations,
      filteredLocations: locations,
      formatsFilters: formatsFilters,
      structures: structures,
      structuresFilters: structuresFilters
    }
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
    case 'filter-location': {
      let filteredLocations = filterByNodeId(state.locations, action.location.id)

      if (state.structure) {
        const filteredStructures = filterByNodeId(state.structures, state.structure)
        const itemNodeIds = getItemNodeIds(filteredStructures)
        filteredLocations = filterByNodeIds(filteredLocations, itemNodeIds)
      }

      const filteredProjects = {}
      getItemNodeIds(filteredLocations).forEach(id => filteredProjects[id] = state.projects[id])

      return {
        projects: state.projects,
        filteredProjects: filteredProjects,

        locations: state.locations,
        filteredLocations: filteredLocations,

        structures: state.structures,
        structuresFilters: state.structuresFilters,

        structure: state.structure,
        location: action.location
      }
    }
    case 'all-locations': {
      return {
        projects: state.projects,
        filteredProjects: state.projects,

        locations: state.locations,
        filteredLocations: state.locations,

        structures: state.structures,
        structuresFilters: state.structuresFilters,

        structure: state.structure,
      }
    }
    case 'filter-floor': {
      let filteredLocations = filterByNodeId(state.locations, action.floor.id)

      if (state.structure) {
        const filteredStructures = filterByNodeId(state.structures, state.structure)
        const itemNodeIds = getItemNodeIds(filteredStructures)
        filteredLocations = filterByNodeIds(filteredLocations, itemNodeIds)
      }

      const filteredProjects = {}
      getItemNodeIds(filteredLocations).forEach(id => filteredProjects[id] = state.projects[id])

      return {
        projects: state.projects,
        filteredProjects: filteredProjects,

        locations: state.locations,
        filteredLocations: filteredLocations,

        structures: state.structures,
        structuresFilters: state.structuresFilters,

        structure: state.structure,
        location: state.location,
        floor: action.floor
      }
    }
    case 'all-floors': {
      let filteredLocations = filterByNodeId(state.locations, state.location.id)

      if (state.structure) {
        const filteredStructures = filterByNodeId(state.structures, state.structure)
        const itemNodeIds = getItemNodeIds(filteredStructures)
        filteredLocations = filterByNodeIds(filteredLocations, itemNodeIds)
      }

      const filteredProjects = {}
      getItemNodeIds(filteredLocations).forEach(id => filteredProjects[id] = state.projects[id])


      return {
        projects: state.projects,
        filteredProjects: filteredProjects,

        locations: state.locations,
        filteredLocations: filteredLocations,

        structures: state.structures,
        structuresFilters: state.structuresFilters,

        structure: state.structure,
        location: state.location
      }
    }
    case 'filter-room': {
      let filteredLocations = filterByNodeId(state.locations, action.room.id)

      if (state.structure) {
        const filteredStructures = filterByNodeId(state.structures, state.structure)
        const itemNodeIds = getItemNodeIds(filteredStructures)
        filteredLocations = filterByNodeIds(filteredLocations, itemNodeIds)
      }

      const filteredProjects = {}
      getItemNodeIds(filteredLocations).forEach(id => filteredProjects[id] = state.projects[id])

      return {
        projects: state.projects,
        filteredProjects: filteredProjects,

        locations: state.locations,
        filteredLocations: filteredLocations,

        structures: state.structures,
        structuresFilters: state.structuresFilters,

        structure: state.structure,
        location: state.location,
        floor: state.floor,
        room: action.room
      }
    }
    case 'all-rooms': {
      let filteredLocations = filterByNodeId(state.locations, state.floor.id)

      if (state.structure) {
        const filteredStructures = filterByNodeId(state.structures, state.structure)
        const itemNodeIds = getItemNodeIds(filteredStructures)
        filteredLocations = filterByNodeIds(filteredLocations, itemNodeIds)
      }

      const filteredProjects = {}
      getItemNodeIds(filteredLocations).forEach(id => filteredProjects[id] = state.projects[id])

      return {
        projects: state.projects,
        filteredProjects: filteredProjects,

        locations: state.locations,
        filteredLocations: filteredLocations,

        structures: state.structures,
        structuresFilters: state.structuresFilters,

        structure: state.structure,
        location: state.location,
        floor: state.floor
      }
    }
    case 'filter-structure': {
      const filteredStructures = filterByNodeId(state.structures, action.id)
      let itemNodeIds = getItemNodeIds(filteredStructures)
      let filteredLocations = state.filteredLocations

      if (Object.keys(state.locations).length > 0) {
        filteredLocations = filterByNodeIds(state.locations, itemNodeIds)

        if (state.room) {
          filteredLocations = filterByNodeId(filteredLocations, state.room.id)
        } else if (state.floor) {
          filteredLocations = filterByNodeId(filteredLocations, state.floor.id)
        } else if (state.location) {
          filteredLocations = filterByNodeId(filteredLocations, state.location.id)
        }

        itemNodeIds = getItemNodeIds(filteredLocations)
      }

      const filteredProjects = {}
      itemNodeIds.forEach(id => filteredProjects[id] = state.projects[id])

      return {
        projects: state.projects,
        filteredProjects: filteredProjects,

        locations: state.locations,
        filteredLocations: filteredLocations,

        structures: state.structures,
        structuresFilters: state.structuresFilters,

        structure: action.id,
        location: state.location,
        floor: state.floor,
        room: action.room
      }
    }
    case 'all-structures': {
      let filteredProjects = {}
      let filteredLocations = state.filteredLocations

      if (Object.keys(state.locations).length > 0) {
        filteredLocations = state.locations

        if (state.room) {
          filteredLocations = filterByNodeId(filteredLocations, state.room.id)
        } else if (state.floor) {
          filteredLocations = filterByNodeId(filteredLocations, state.floor.id)
        } else if (state.location) {
          filteredLocations = filterByNodeId(filteredLocations, state.location.id)
        }

        getItemNodeIds(filteredLocations).forEach(id => filteredProjects[id] = state.projects[id])
      } else {
        filteredProjects = state.projects
      }

      return {
        projects: state.projects,
        filteredProjects: filteredProjects,

        locations: state.locations,
        filteredLocations: filteredLocations,

        structures: state.structures,
        structuresFilters: state.structuresFilters,

        location: state.location,
        floor: state.floor,
        room: action.room
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

function getItemNodeIds(tree) {
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
