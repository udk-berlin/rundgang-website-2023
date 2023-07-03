import { getTree } from '@/utils/api/api'

let structuresCached = false
let structures = {}

let structuresFiltersCached = false
let structuresFilters = {}

export async function getStructures () {
  if (!structuresCached) {
    const tree = await getTree(process.env.REST_API_STRUCTURES_ROOT_ID)
    filter(Object.values(tree.children)).forEach( structure => {
      structures[structure.id] = structure
    })

    structuresCached = true
  }

  return structures
}

function filter(array) {
  const getChildren = (result, object) => {
    if (object.type === 'item') {
      result.push(object);
      return result;
    }
    const children = Object.values(object.children).reduce(getChildren, []);
    if (children.length) result.push({ ...object, children });

    return result;
  };

  return array.reduce(getChildren, []);
}

export async function getStructuresFilters () {
  if (!structuresFiltersCached) {
    const tree = await getTree(process.env.REST_API_STRUCTURES_ROOT_ID)

    const getChildren = (current) => {
      Object.values(current.children).forEach(child => {
        if (child.template === 'centre' || child.template === 'faculty') {
          structuresFilters[child.id] = {
            id: child.id,
            name: child.name,
            template: child.template
          }
        } else {
          getChildren(child)
        }
      })
    };

    getChildren(tree)

    structuresFiltersCached = true
  }

  return structuresFilters
}
