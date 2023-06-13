const API_ENDPOINT = 'https://api.rundgang.udk-berlin.de/api/v2/'
const ROOT_LOCATION_ID = '!QEMZncAAlhtFVagfSI:content.udk-berlin.de'

export async function get (id) {
  const url = `${API_ENDPOINT}${id}`
  const res = await fetch(url)
  return await res.json()
}

export async function getTree (id) {
  const url = `${API_ENDPOINT}${id}/tree`
  const res = await fetch(url)
  return await res.json()
}

export async function getContexts (contexts) {
  const promises = []
  const data = []

  contexts.forEach(context => { promises.push(get(context.id)) })

  await Promise
    .all(promises)
    .then(res => { data.push(res) })

  return data.flat()
}

export async function getRootLocation () {
  return await get(ROOT_LOCATION_ID)
}

export async function getLocations (onlyLocationBuildings = true) {
  const rootLocation = await getRootLocation()
  let locations = await getContexts(rootLocation.context)

  if (onlyLocationBuildings) { locations = locations.filter(location => location.template === 'location-building') }

  return locations
}

export async function getLocationFloors () {
  const locations = await getLocations()

  const promises = []
  const data = []

  locations.forEach(location => {
    promises.push(getContexts(location.context))
  })

  await Promise
    .all(promises)
    .then(res => { data.push(res) })

  return data.flat()
}

export async function getLocationRooms () {
  const floors = await getLocationFloors()

  const promises = []
  const data = []

  floors.forEach(location => {
    location.forEach(floor => {
      promises.push(getContexts(floor.context))
    })
  })

  await Promise
      .all(promises)
      .then(res => {
        data.push(res)
      })

  return data.flat()
}

export async function getItemsWithLocation () {
  const tree = await getTree(ROOT_LOCATION_ID)
  const items = {}

  const buildItem = (item, data) => {
    const _item = {
      id: item.id,
      name: item.name,
      type: item.type,
      template: item.template,
    }

    Object.entries(data).forEach(([key, value]) => {
      _item[key] = {
        id: value.id,
        name: value.name,
        type: value.type,
        template: value.template,
      }
    })

    return _item
  }

  const extractChildren = (current, data) => {
    data = {...data, [current.template]: current}

    Object.values(current.children).forEach(child => {
      if (child.type === 'item') {
        items[child.id] = buildItem(child, data)
      } else {
        extractChildren(child, data)
      }
    })
  }

  Object.values(tree.children).forEach(location => {
    extractChildren(location)
  })

  return items;
}