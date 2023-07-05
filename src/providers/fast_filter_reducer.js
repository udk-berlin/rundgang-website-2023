
export default function fastFilterReducer (state, action) {
  switch (action.type) {
    case 'filter-structure': {
      let filteredProjects = state.projects

      const filteredStructures = filterByNodeId(state.structures, action.id)
      let itemNodeIds = getItemNodeIds(filteredStructures)

      if (state.format) {
        const filteredFormats = filterByNodeId(state.formats, state.format)
        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredFormats))
      }

      filteredProjects = filterProjectsByNodeIds(filteredProjects, itemNodeIds)

      return {
        projects: state.projects,
        filteredProjects: filteredProjects,

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
      let itemNodeIds

      if (state.format) {
        const filteredFormats = filterByNodeId(state.formats, state.format)
        itemNodeIds = getItemNodeIds(filteredFormats)
      }

      filteredProjects = filterProjectsByNodeIds(filteredProjects, itemNodeIds)

      return {
        projects: state.projects,
        filteredProjects: filteredProjects,

        formats: state.formats,
        format: state.format,
        formatsFilters: state.formatsFilters,

        structures: state.structures,
        structuresFilters: state.structuresFilters,
      }
    }
    case 'filter-format': {
      let filteredProjects = state.projects

      const filteredFormats = filterByNodeId(state.formats, action.id)
      let itemNodeIds = getItemNodeIds(filteredFormats)

      if (state.structure) {
        const filteredStructures = filterByNodeId(state.structures, state.structure)
        itemNodeIds = filterItemNodeIds(itemNodeIds, getItemNodeIds(filteredStructures))
      }

      filteredProjects = filterProjectsByNodeIds(filteredProjects, itemNodeIds)

      return {
        projects: state.projects,
        filteredProjects: filteredProjects,

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
      let itemNodeIds

      if (state.structure) {
        const filteredStructures = filterByNodeId(state.structures, state.structure)
        itemNodeIds = getItemNodeIds(filteredStructures)
      }

      filteredProjects = filterProjectsByNodeIds(filteredProjects, itemNodeIds)

      return {
        projects: state.projects,
        filteredProjects: filteredProjects,

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
