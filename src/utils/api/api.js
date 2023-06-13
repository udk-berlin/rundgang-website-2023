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

  const buildItem = (item, location, level = null, room = null) => {
    const _item = {
      id: item.id,
      name: item.name,
      type: item.type,
      template: item.template,
      location: {
        id: location.id,
        name: location.name,
        type: location.type,
        template: location.template,
      }
    }

    if (level) {
      _item.level = {
        id: level.id,
        name: level.name,
        type: level.type,
        template: level.template,
      }
    }

    if (room) {
      _item.room = {
        id: room.id,
        name: room.name,
        type: room.type,
        template: room.template,
      }
    }

    return _item
  }

  console.log(tree)

  // tree.children.forEach(location => {
  //   location.children.forEach(level => {
  //     if (level.type === 'item') {
  //       items[level.id] = buildItem(level, location)
  //     } else if (level.type === 'context' && level.template === 'location-level') {
  //       level.children.forEach(room => {
  //         if (room.type === 'item') {
  //           items[room.id] = buildItem(room, location, level)
  //         } else if (room.type === 'context' && room.template === 'location-room') {
  //           room.children.forEach(event => {
  //             if (event.type === 'item') {
  //               items[event.id] = buildItem(event, location, level, room)
  //             } else {
  //               throw new Error(`Type "${event.type}" and template "${event.template}" of item/event not recognized!`);
  //             }
  //           })
  //         } else {
  //           throw new Error(`Type "${room.type}" and template "${room.template}" of item/room not recognized!`);
  //         }
  //       })
  //     } else {
  //       throw new Error(`Type "${level.type}" and template "${level.template}" of item/level not recognized!`);
  //     }
  //   })
  // })

  // const locations = tree.children.filter(location => {
  //   const levels = location.children.filter(level => {
  //     const rooms = level.children.filter(room => {
  //       return room.children.length > 0
  //     })
  //
  //     return rooms.length > 0
  //   })
  //
  //   return levels.length > 0
  // })

  return items;
}
