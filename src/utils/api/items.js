import { get, getId, getTree } from '@/utils/api/api'

export async function getListFilterTypeItems () {
  return await get(`${process.env.REST_API_ROOT_ID}/list/filter/type/item`)
}

export async function getItemIds () {
  let ids = []

  const items = await getListFilterTypeItems()
  if ('statusCode' in items && items.statusCode === 404) {}
  else {
    ids = items.map(item => item.id)
  }

  return [...new Set(ids)]
}

export async function getItems () {
  const items = {}

  const buildItem = (item, data) => {
    const _item = {
      id: item.id,
      name: item.name,
      type: item.type,
      template: item.template
    }

    Object.entries(data).forEach(([key, value]) => {
      _item[key] = {
        id: value.id,
        name: value.name,
        type: value.type,
        template: value.template
      }
    })

    return _item
  }

  const extractChildren = (current, data) => {
    data = { ...data, [current.template]: current }

    Object.values(current.children).forEach(child => {
      if (child.type === 'item') {
        if (child.id in items) {
          items[child.id] = { ...items[child.id], ...buildItem(child, data) }
        } else {
          items[child.id] = buildItem(child, data)
        }
      } else {
        extractChildren(child, data)
      }
    })
  }

  const locationsData = await getTree(process.env.REST_API_LOCATIONS_ROOT_ID)

  if ('statusCode' in locationsData && locationsData.statusCode === 404) {}
  else {
    extractChildren(locationsData, {})
  }

  const formatsData = await getTree(process.env.REST_API_FORMATS_ROOT_ID)

  if ('statusCode' in formatsData && formatsData.statusCode === 404) {}
  else {
    extractChildren(formatsData, {})
  }

  const structuresData = await getTree(process.env.REST_API_STRUCTURES_ROOT_ID)

  if ('statusCode' in structuresData && structuresData.statusCode === 404) {}
  else {
    extractChildren(structuresData, {})
  }

  const details = await getDetails(Object.keys(items))

  Object.keys(items).forEach(id => {
    items[id] = { ...items[id], ...details[id] }
  })

  return items
}

async function getDetails (itemIds) {
  const details = {}
  const promises = []

  const buildDetail = (data) => {
    console.log(data)

    const detail = {
      id: data.id,
      thumbnail: data.thumbnail,
      thumbnail_full_size: data.thumbnail_full_size,
      description: data.description,
      authors: data.origin.authors
    }

    if ('temporal' in data.allocation) {
      detail.temporal = []

      data.allocation.temporal.forEach(time => {
        detail.temporal.push({
          start: time.start * 1000 - 7200000,
          end: time.end * 1000  - 7200000,
        })
      })
    }

    return detail
  }

  itemIds.forEach(itemId => { promises.push(getId(itemId)) })

  await Promise
    .all(promises)
    .then(data => {
      if ('statusCode' in data && data.statusCode === 404) {}
      else {
        data.forEach(d => {
          details[d.id] = buildDetail(d)
        })
      }
    })

  return details
}
