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
export function FilterProvider ({ locations, projects, formats, formatsFilters, structures, structuresFilters, children }) {
  projects = [...projects]
  shuffleArray(projects)

  const [filter, dispatch] = useReducer(
    filterReducer,
    {
      filteredProjects: projects,
      filteredLocations: locations,
      formats: formats,
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
        formatsFilters: state.formatsFilters,

        structures: state.structures,
        structure: state.structure,
        structuresFilters: state.structuresFilters,

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
        formatsFilters: state.formatsFilters,

        structures: state.structures,
        structure: state.structure,
        structuresFilters: state.structuresFilters,
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
        formatsFilters: state.formatsFilters,

        structures: state.structures,
        structure: state.structure,
        structuresFilters: state.structuresFilters,
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
        formatsFilters: state.formatsFilters,

        structures: state.structures,
        structure: state.structure,
        structuresFilters: state.structuresFilters,
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
        formatsFilters: state.formatsFilters,

        structures: state.structures,
        structure: state.structure,
        structuresFilters: state.structuresFilters,
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
        formatsFilters: state.formatsFilters,

        structures: state.structures,
        structure: state.structure,
        structuresFilters: state.structuresFilters,
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
        formatsFilters: state.formatsFilters,

        structures: state.structures,
        structure: action.id,
        structuresFilters: state.structuresFilters,
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
        formatsFilters: state.formatsFilters,

        structures: state.structures,
        structuresFilters: state.structuresFilters,
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
        formatsFilters: state.formatsFilters,

        structures: state.structures,
        structure: state.structure,
        structuresFilters: state.structuresFilters,
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
        formatsFilters: state.formatsFilters,

        structures: state.structures,
        structure: state.structure,
        structuresFilters: state.structuresFilters,
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