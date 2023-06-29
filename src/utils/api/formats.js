import { getTree } from '@/utils/api/api'

let formatsCached = false
let formats = {}

let formatsFiltersCached = false
let formatsFilters = {}

export async function getFormats () {
  if (!formatsCached) {
    const tree = await getTree(process.env.REST_API_FORMATS_ROOT_ID)
    filter(Object.values(tree.children)).forEach(format => {
      formats[format.id] = format
    })

    formatsCached = true
  }

  return formats
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

export async function getFormatsFilters () {
  if (!formatsFiltersCached) {
    const tree = await getTree(process.env.REST_API_FORMATS_ROOT_ID)

    const getChildren = (current) => {
      Object.values(current.children).forEach(child => {
        if (child.template === 'format-element') {
          formatsFilters[child.id] = {
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

    formatsFiltersCached = true
  }

  return formatsFilters
}
