import { getTree } from '@/utils/api/api'

const ROOT_STRUCTURES_ID = '!suNRlIyeorKnuZHfld:content.udk-berlin.de'

let structuresCached = false
let structures = {}

let facultiesAndCentersCached = false
let facultiesAndCenters = {}

export async function getStructures () {
  if (!structuresCached) {
    const tree = await getTree(ROOT_STRUCTURES_ID)
    filterStructures(Object.values(tree.children)).forEach( structure => {
      structures[structure.id] = structure
    })

    structuresCached = true
  }

  return structures
}

function filterStructures(array) {
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

export async function getFacultiesAndCenters () {
  if (!facultiesAndCentersCached) {
    const tree = await getTree(ROOT_STRUCTURES_ID)

    const getChildren = (current) => {
      Object.values(current.children).forEach(child => {
        if (child.template === 'centre' || child.template === 'faculty') {
          facultiesAndCenters[child.id] = {
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

    facultiesAndCentersCached = true
  }

  return facultiesAndCenters
}