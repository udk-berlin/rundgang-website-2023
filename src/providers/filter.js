import { createContext, useContext, useReducer, useState, useEffect } from 'react'

const FilterContext = createContext(null)
const FilterDispatchContext = createContext(null)

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array
}
export function FilterProvider ({ projects, location = null, floor = null, room = null, locations = null, format =  null, formats, formatFilters, structure = null, structures, structureFilters, children }) {
  projects = [...projects]
  shuffleArray(projects)

  const [filter, dispatch] = useReducer(
    filterReducer,
    {
      filteredProjects: initialFilter({
        projects,
        locations,
        location,
        floor,
        room,
        format,
        formats,
        structure,
        structures
      }),
      location: location,
      floor: floor,
      room: room,
      filteredLocations: locations,
      format: format,
      formats: formats,
      formatFilters: formatFilters,
      structure: structure,
      structures: structures,
      structureFilters: structureFilters
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
    case 'loaded': {
      return {
        ...state,
        filteredProjects: action.projects,
        filteredLocations: action.location,
      }
    }
    case 'filter-location': {
      let filteredLocations = filterByNodeId(action.locations, action.location.id)
      let itemNodeIds = getItemNodeIds(filteredLocations)

      if (state.format) {
        const filteredFormats = filterByNodeId(state.formats, state.format)
        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredFormats))
      }

      if (state.structure) {
        const filteredStructures = filterByNodeId(state.structures, state.structure)
        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredStructures))
      }

      filteredLocations = filterByNodeIds(filteredLocations, itemNodeIds)
      const filteredProjects = filterProjectsByNodeIds(action.projects, itemNodeIds)

      return {
        filteredProjects: filteredProjects,
        filteredLocations: filteredLocations,

        formats: state.formats,
        format: state.format,
        formatFilters: state.formatFilters,

        structures: state.structures,
        structure: state.structure,
        structureFilters: state.structureFilters,

        location: action.location
      }
    }
    case 'all-locations': {
      let filteredLocations = action.locations
      let itemNodeIds = getItemNodeIds(filteredLocations)

      if (state.format) {
        const filteredFormats = filterByNodeId(state.formats, state.format)
        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredFormats))
      }

      if (state.structure) {
        const filteredStructures = filterByNodeId(state.structures, state.structure)
        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredStructures))
      }

      filteredLocations = filterByNodeIds(filteredLocations, itemNodeIds)
      const filteredProjects = filterProjectsByNodeIds(action.projects, itemNodeIds)

      return {
        filteredProjects: filteredProjects,
        filteredLocations: state.locations,

        formats: state.formats,
        format: state.format,
        formatFilters: state.formatFilters,

        structures: state.structures,
        structure: state.structure,
        structureFilters: state.structureFilters,
      }
    }
    case 'filter-floor': {
      let filteredLocations = filterByNodeId(action.locations, action.floor.id)
      let itemNodeIds = getItemNodeIds(filteredLocations)

      if (state.format) {
        const filteredFormats = filterByNodeId(state.formats, state.format)
        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredFormats))
      }

      if (state.structure) {
        const filteredStructures = filterByNodeId(state.structures, state.structure)
        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredStructures))
      }

      filteredLocations = filterByNodeIds(filteredLocations, itemNodeIds)
      const filteredProjects = filterProjectsByNodeIds(action.projects, itemNodeIds)

      return {
        filteredProjects: filteredProjects,

        location: state.location,
        floor: action.floor,
        filteredLocations: filteredLocations,

        formats: state.formats,
        format: state.format,
        formatFilters: state.formatFilters,

        structures: state.structures,
        structure: state.structure,
        structureFilters: state.structureFilters,
      }
    }
    case 'all-floors': {
      let filteredLocations = filterByNodeId(action.locations, state.location.id)
      let itemNodeIds = getItemNodeIds(filteredLocations)

      if (state.format) {
        const filteredFormats = filterByNodeId(state.formats, state.format)
        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredFormats))
      }

      if (state.structure) {
        const filteredStructures = filterByNodeId(state.structures, state.structure)
        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredStructures))
      }

      filteredLocations = filterByNodeIds(filteredLocations, itemNodeIds)
      const filteredProjects = filterProjectsByNodeIds(action.projects, itemNodeIds)

      return {
        filteredProjects: filteredProjects,

        location: state.location,
        filteredLocations: filteredLocations,

        formats: state.formats,
        format: state.format,
        formatFilters: state.formatFilters,

        structures: state.structures,
        structure: state.structure,
        structureFilters: state.structureFilters,
      }
    }
    case 'filter-room': {
      let filteredLocations = filterByNodeId(action.locations, action.room.id)
      let itemNodeIds = getItemNodeIds(filteredLocations)

      if (state.format) {
        const filteredFormats = filterByNodeId(state.formats, state.format)
        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredFormats))
      }

      if (state.structure) {
        const filteredStructures = filterByNodeId(state.structures, state.structure)
        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredStructures))
      }

      filteredLocations = filterByNodeIds(filteredLocations, itemNodeIds)
      const filteredProjects = filterProjectsByNodeIds(action.projects, itemNodeIds)

      return {
        filteredProjects: filteredProjects,

        location: state.location,
        floor: state.floor,
        room: action.room,
        filteredLocations: filteredLocations,

        formats: state.formats,
        format: state.format,
        formatFilters: state.formatFilters,

        structures: state.structures,
        structure: state.structure,
        structureFilters: state.structureFilters,
      }
    }
    case 'all-rooms': {
      let filteredLocations = filterByNodeId(action.locations, state.floor.id)
      let itemNodeIds = getItemNodeIds(filteredLocations)

      if (state.format) {
        const filteredFormats = filterByNodeId(state.formats, state.format)
        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredFormats))
      }

      if (state.structure) {
        const filteredStructures = filterByNodeId(state.structures, state.structure)
        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredStructures))
      }

      filteredLocations = filterByNodeIds(filteredLocations, itemNodeIds)
      const filteredProjects = filterProjectsByNodeIds(action.projects, itemNodeIds)

      return {
        filteredProjects: filteredProjects,

        location: state.location,
        floor: state.floor,
        filteredLocations: filteredLocations,

        formats: state.formats,
        format: state.format,
        formatFilters: state.formatFilters,

        structures: state.structures,
        structure: state.structure,
        structureFilters: state.structureFilters,
      }
    }
    case 'filter-structure': {
      let filteredProjects = action.projects

      const filteredStructures = filterByNodeId(state.structures, action.id)
      let itemNodeIds = getItemNodeIds(filteredStructures)

      if (state.format) {
        const filteredFormats = filterByNodeId(state.formats, state.format)
        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredFormats))
      }

      let filteredLocations

      if (action.locations) {
        filteredLocations = filterByNodeIds(action.locations, itemNodeIds)

        if (state.room) {
          filteredLocations = filterByNodeId(filteredLocations, state.room.id)
        } else if (state.floor) {
          filteredLocations = filterByNodeId(filteredLocations, state.floor.id)
        } else if (state.location) {
          filteredLocations = filterByNodeId(filteredLocations, state.location.id)
        }

        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredLocations))
      }

      filteredProjects = filterProjectsByNodeIds(filteredProjects, itemNodeIds)

      return {
        filteredProjects: filteredProjects,

        location: state.location,
        floor: state.floor,
        room: action.room,
        filteredLocations: filteredLocations,

        formats: state.formats,
        format: state.format,
        formatFilters: state.formatFilters,

        structures: state.structures,
        structure: action.id,
        structureFilters: state.structureFilters,
      }
    }
    case 'all-structures': {
      let filteredProjects = action.projects
      let itemNodeIds = getProjectsNodeIds(filteredProjects)

      if (state.format) {
        const filteredFormats = filterByNodeId(state.formats, state.format)
        itemNodeIds = getItemNodeIds(filteredFormats)
      }

      let filteredLocations

      if (action.locations) {
        filteredLocations = filterByNodeIds(action.locations, itemNodeIds)

        if (state.room) {
          filteredLocations = filterByNodeId(filteredLocations, state.room.id)
        } else if (state.floor) {
          filteredLocations = filterByNodeId(filteredLocations, state.floor.id)
        } else if (state.location) {
          filteredLocations = filterByNodeId(filteredLocations, state.location.id)
        }

        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredLocations))
      }

      filteredProjects = filterProjectsByNodeIds(filteredProjects, itemNodeIds)

      return {
        filteredProjects: filteredProjects,

        location: state.location,
        floor: state.floor,
        room: action.room,
        filteredLocations: filteredLocations,

        formats: state.formats,
        format: state.format,
        formatFilters: state.formatFilters,

        structures: state.structures,
        structureFilters: state.structureFilters,
      }
    }
    case 'filter-format': {
      let filteredProjects = action.projects

      const filteredFormats = filterByNodeId(state.formats, action.id)
      let itemNodeIds = getItemNodeIds(filteredFormats)

      if (state.structure) {
        const filteredStructures = filterByNodeId(state.structures, state.structure)
        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredStructures))
      }

      let filteredLocations

      if (action.locations) {
        filteredLocations = filterByNodeIds(action.locations, itemNodeIds)

        if (state.room) {
          filteredLocations = filterByNodeId(filteredLocations, state.room.id)
        } else if (state.floor) {
          filteredLocations = filterByNodeId(filteredLocations, state.floor.id)
        } else if (state.location) {
          filteredLocations = filterByNodeId(filteredLocations, state.location.id)
        }

        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredLocations))
      }

      filteredProjects = filterProjectsByNodeIds(filteredProjects, itemNodeIds)

      return {
        filteredProjects: filteredProjects,

        location: state.location,
        floor: state.floor,
        room: action.room,
        filteredLocations: filteredLocations,

        formats: state.formats,
        format: action.id,
        formatFilters: state.formatFilters,

        structures: state.structures,
        structure: state.structure,
        structureFilters: state.structureFilters,
      }
    }
    case 'all-formats': {
      let filteredProjects = action.projects
      let itemNodeIds = getProjectsNodeIds(filteredProjects)

      if (state.structure) {
        const filteredStructures = filterByNodeId(state.structures, state.structure)
        itemNodeIds = getItemNodeIds(filteredStructures)
      }

      let filteredLocations

      if (action.locations) {
        filteredLocations = filterByNodeIds(action.locations, itemNodeIds)

        if (state.room) {
          filteredLocations = filterByNodeId(filteredLocations, state.room.id)
        } else if (state.floor) {
          filteredLocations = filterByNodeId(filteredLocations, state.floor.id)
        } else if (state.location) {
          filteredLocations = filterByNodeId(filteredLocations, state.location.id)
        }

        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredLocations))
      }

      filteredProjects = filterProjectsByNodeIds(filteredProjects, itemNodeIds)

      return {
        filteredProjects: filteredProjects,

        location: state.location,
        floor: state.floor,
        room: action.room,
        filteredLocations: filteredLocations,

        formats: state.formats,
        formatFilters: state.formatFilters,

        structures: state.structures,
        structure: state.structure,
        structureFilters: state.structureFilters,
      }
    }
    case 'set-saved-projects': {
      return {
        ...state,
        filteredProjects: filterProjectsByNodeIds(state.filteredProjects, action.savedProjectIds)
      }
    }
    case 'remove-saved-project': {
      return {
        ...state,
        filteredProjects: rejectProjectsByNodeId(state.filteredProjects, action.savedProjectId)
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

function initialFilter ({projects, locations, location, floor, room, format, formats, structure, structures}) {
  if (format) {
    return initialFilterByFormat(projects, format, formats)
  } else if (structure) {
    return initialFilterByStructure(projects, structure, structures)
  } else if (room) {
    return initialFilterByLocation(projects, room, locations)
  } else if (floor) {
    return initialFilterByLocation(projects, floor, locations)
  } else if (location) {
    return initialFilterByLocation(projects, location, locations)
  } else {
    return projects
  }
}

function initialFilterByLocation (projects, location, locations) {
  return filterProjectsByNodeIds(projects, getItemNodeIds(filterByNodeId(locations, location.id)))
}

function initialFilterByFormat (projects, format, formats) {
  return filterProjectsByNodeIds(projects, getItemNodeIds(filterByNodeId(formats, format)))
}

function initialFilterByStructure (projects, structure, structures) {
  return filterProjectsByNodeIds(projects, getItemNodeIds(filterByNodeId(structures, structure)))
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

function getProjectsNodeIds(projects) {
  return projects.map(project => project.id)
}

function filterItemNodeIds(itemNodeIdsA, itemNodeIdsB) {
  return itemNodeIdsA.filter(itemNodeId => itemNodeIdsB.includes(itemNodeId));
}

function filterProjectsByNodeIds(projects, nodeIds) {
  if (nodeIds) {
    return projects.filter(project => nodeIds.includes(project.id))
  } else {
    return projects
  }
}

function rejectProjectsByNodeId(projects, nodeId) {
  return projects.filter(project => project !== nodeId)
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