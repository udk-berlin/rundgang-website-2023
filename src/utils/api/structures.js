import { getTree, REST_API_STRUCTURES_ROOT_ID } from '@/utils/api/api'

export async function getStructures () {
  const structures = {}

  const data = await getTree(REST_API_STRUCTURES_ROOT_ID)
  if ('statusCode' in data && data.statusCode === 404) {}
  else {
    Object.values(data.children).forEach(structure => {
      structures[structure.id] = structure
    })
  }

  return structures
}

export async function getStructuresFilters () {
  let filters = {}

  const getChildren = (current) => {
    Object.values(current.children).forEach(child => {
      if (child.template === 'centre' || child.template === 'faculty') {
        filters[child.id] = {
          id: child.id,
          name: child.name,
          template: child.template
        }
      } else {
        getChildren(child)
      }
    })
  };

  const data = await getTree(REST_API_STRUCTURES_ROOT_ID)
  if ('statusCode' in data && data.statusCode === 404) {}
  else {
    getChildren(data)
  }

  return filters
}
