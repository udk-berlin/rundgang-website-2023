
export default function filterReducer (state, action) {
  switch (action.type) {
    case 'filter-location': {
      let filteredLocations = filterByNodeId(state.locations, action.location.id)
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
      const filteredProjects = filterProjectsByNodeIds(state.projects, itemNodeIds)

      return {
        projects: state.projects,
        filteredProjects: filteredProjects,

        locations: state.locations,
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
      let filteredLocations = state.locations
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
      const filteredProjects = filterProjectsByNodeIds(state.projects, itemNodeIds)

      return {
        projects: state.projects,
        filteredProjects: filteredProjects,

        locations: state.locations,
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
      let filteredLocations = filterByNodeId(state.locations, action.floor.id)
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
      const filteredProjects = filterProjectsByNodeIds(state.projects, itemNodeIds)

      return {
        projects: state.projects,
        filteredProjects: filteredProjects,

        locations: state.locations,
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
      let filteredLocations = filterByNodeId(state.locations, state.location.id)
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
      const filteredProjects = filterProjectsByNodeIds(state.projects, itemNodeIds)

      return {
        projects: state.projects,
        filteredProjects: filteredProjects,

        locations: state.locations,
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
      let filteredLocations = filterByNodeId(state.locations, action.room.id)
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
      const filteredProjects = filterProjectsByNodeIds(state.projects, itemNodeIds)

      return {
        projects: state.projects,
        filteredProjects: filteredProjects,

        locations: state.locations,
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
      let filteredLocations = filterByNodeId(state.locations, state.floor.id)
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
      const filteredProjects = filterProjectsByNodeIds(state.projects, itemNodeIds)

      return {
        projects: state.projects,
        filteredProjects: filteredProjects,

        locations: state.locations,
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
      let filteredProjects = state.projects
      let itemNodeIds = getProjectsItemNodeIds(filteredProjects)

      const filteredStructures = filterByNodeId(state.structures, action.id)
      itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredStructures))

      if (state.format) {
        const filteredFormats = filterByNodeId(state.formats, state.format)
        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredFormats))
      }

      let filteredLocations = state.locations

      if (Object.keys(state.locations).length > 0) {
        filteredLocations = filterByNodeIds(filteredLocations, itemNodeIds)

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
        projects: state.projects,
        filteredProjects: filteredProjects,

        locations: state.locations,
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
      let filteredProjects = state.projects
      let itemNodeIds = getProjectsItemNodeIds(filteredProjects)

      if (state.format) {
        const filteredFormats = filterByNodeId(state.formats, state.format)
        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredFormats))
      }

      let filteredLocations = state.locations

      if (Object.keys(state.locations).length > 0) {
        filteredLocations = filterByNodeIds(filteredLocations, itemNodeIds)

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
        projects: state.projects,
        filteredProjects: filteredProjects,

        locations: state.locations,
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
      let filteredProjects = state.projects
      let itemNodeIds = getProjectsItemNodeIds(filteredProjects)

      const filteredFormats = filterByNodeId(state.formats, action.id)
      itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredFormats))

      if (state.structure) {
        const filteredStructures = filterByNodeId(state.structures, state.structure)
        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredStructures))
      }

      let filteredLocations = state.locations

      if (Object.keys(state.locations).length > 0) {
        filteredLocations = filterByNodeIds(filteredLocations, itemNodeIds)

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
        projects: state.projects,
        filteredProjects: filteredProjects,

        locations: state.locations,
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
      let filteredProjects = state.projects
      let itemNodeIds = getProjectsItemNodeIds(filteredProjects)

      if (state.structure) {
        const filteredStructures = filterByNodeId(state.structures, state.structure)
        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredStructures))
      }

      let filteredLocations = state.locations

      if (Object.keys(state.locations).length > 0) {
        filteredLocations = filterByNodeIds(filteredLocations, itemNodeIds)

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
        projects: state.projects,
        filteredProjects: filteredProjects,

        locations: state.locations,
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
        project: filterProjectsByNodeIds(state.projects, action.savedProjectIds),
        filteredProjects: filterProjectsByNodeIds(state.filteredProjects, action.savedProjectIds)
      }
    }
    case 'remove-saved-project': {
      return {
        ...state,
        project: rejectProjectsByNodeId(state.projects, action.savedProjectId),
        filteredProjects: rejectProjectsByNodeId(state.filteredProjects, action.savedProjectId)
      }
    }
    case 'add-projects': {
      return {
        ...state,
        project: action.projects,
        filteredProjects: action.projects,
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

function getProjectsItemNodeIds(projects) {
  return Object.keys(projects)
}

function filterItemNodeIds(itemNodeIdsA, itemNodeIdsB) {
  return itemNodeIdsA.filter(itemNodeId => itemNodeIdsB.includes(itemNodeId));
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

function filterProjectsByNodeIds(projects, nodeIds) {
  const filteredProjects = {}
  nodeIds.forEach(id => filteredProjects[id] = projects[id])

  return filteredProjects
}

function rejectProjectsByNodeId(projects, nodeId) {
  return projects.filter(project => project !== nodeId)
}
