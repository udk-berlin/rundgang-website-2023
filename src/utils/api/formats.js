import { getTree } from '@/utils/api/api'

import {REST_API_FORMATS_ROOT_ID} from "@/utils/api/items";

export async function getFormats () {
  let formats = {}

  const data = await getTree(REST_API_FORMATS_ROOT_ID)
  if ('statusCode' in data && data.statusCode === 404) {}
  else {
    Object.values(data.children).forEach(format => {
      formats[format.id] = format
    })
  }

  return formats
}

export async function getFormatsFilters () {
  let filters = {}

  const getChildren = (current) => {
    Object.values(current.children).forEach(child => {
      if (child.template === 'format-element') {
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

  const data = await getTree(REST_API_FORMATS_ROOT_ID)
  if ('statusCode' in data && data.statusCode === 404) {}
  else {
    getChildren(data)
  }

  return filters
}
