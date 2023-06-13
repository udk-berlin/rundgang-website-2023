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



  // if (data.location) {
  //   _item.location = {
  //     id: data.location.id,
  //     name: data.location.name,
  //     type: data.location.type,
  //     template: data.location.template,
  //   }
  // }
  //
  // if (data.level) {
  //   _item.level = {
  //     id: data.level.id,
  //     name: data.level.name,
  //     type: data.level.type,
  //     template: data.level.template,
  //   }
  // }
  //
  // if (data.room) {
  //   _item.room = {
  //     id: data.room.id,
  //     name: data.room.name,
  //     type: data.room.type,
  //     template: data.room.template,
  //   }
  // }
  //
  // if (data.some) {
  //   _item.some = {
  //     id: data.some.id,
  //     name: data.some.name,
  //     type: data.some.type,
  //     template: data.some.template,
  //   }
  // }
  //
  // if (data.center) {
  //   _item.center = {
  //     id: data.center.id,
  //     name: data.center.name,
  //     type: data.center.type,
  //     template: data.center.template,
  //   }
  // }
  //
  // if (data.subject) {
  //   _item.subject = {
  //     id: data.subject.id,
  //     name: data.subject.name,
  //     type: data.subject.type,
  //     template: data.subject.template,
  //   }
  // }

  return _item
}

export async function getItemsWithLocation () {
  const tree = await getTree(ROOT_LOCATION_ID)
  //const items = {}

  // console.log(typeof Object.values(tree.children))

  // console.log(tree.children)

  Object.values(tree.children).forEach(location => {
    // extractLocationChildren(location)

    extractSomeChildren(location)
    // Object.values(location.children).forEach(level => {
    //
    //   if (level.type === 'item') {
    //     items[level.id] = buildItem(level, location)
    //   } else if (level.type === 'context' && level.template === 'location-level') {
    //     Object.values(level.children).forEach(room => {
    //       if (room.type === 'item') {
    //         items[room.id] = buildItem(room, location, level)
    //       } else if (room.type === 'context' && room.template === 'location-room') {
    //         Object.values(room.children).forEach(course => {
    //           if (course.type === 'item') {
    //             items[course.id] = buildItem(course, location, level, room)
    //           } else if (course.type === 'context' && (course.template === 'class' || course.template === 'course' || course.template === 'seminar' || course.template === 'initiative' || course.template === 'subject')) {
    //             Object.values(course.children).forEach(clazz => {
    //               if (clazz.type === 'item') {
    //                 items[clazz.id] = buildItem(clazz, location, level, room, course)
    //               } else if (clazz.type === 'context' && (course.template === 'class' || course.template === 'course' || course.template === 'seminar' || course.template === 'initiative' || course.template === 'subject')) {
    //                 Object.values(clazz.children).forEach(event => {
    //                   if (event.type === 'item') {
    //                     items[event.id] = buildItem(event, location, level, room, course, clazz)
    //                   } else if (event.type === 'context' && (event.template === 'class' || event.template === 'course' || event.template === 'seminar' || event.template === 'initiative' || event.template === 'subject')) {
    //                     console.log("WOOOP")
    //                     console.log(event.children)
    //                   } else {
    //                     throw new Error(`Type "${event.type}" and template "${event.template}" of item/event not recognized!`);
    //                   }
    //                 })
    //               } else {
    //                 throw new Error(`Type "${clazz.type}" and template "${clazz.template}" of item/clazz not recognized!`);
    //               }
    //             })
    //           } else {
    //             throw new Error(`Type "${course.type}" and template "${course.template}" of item/clazz/course not recognized!`);
    //           }
    //         })
    //       } else {
    //         throw new Error(`Type "${room.type}" and template "${room.template}" of item/room not recognized!`);
    //       }
    //     })
    //   } else {
    //     // throw new Error(`Type "${level.type}" and template "${level.template}" of item/level not recognized!`);
    //   }
    // })
  })

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

function extractLocationChildren(location) {
  Object.values(location.children).forEach(child => {extractLocationChild(child, {location: location})})
}

function extractLocationChild(child, current){
  if (child.type === 'item') {
    items[child.id] = buildItem(child, current)
  } else if (child.type === 'context' && child.template === 'location-level') {
    extractLevelChildren(child, current)
  } else if (child.type === 'context' && child.template === 'centre') {
    extractCenterChildren(child, current)
  } else {
    throw new Error(`Type "${child.type}" and template "${child.template}" of extractLocationChild() not recognized!`);
  }
}

function extractLevelChildren(level, current) {
  Object.values(level.children).forEach(child => {extractLevelChild(child, {...current, level: level})})
}

function extractLevelChild(child, current){
  if (child.type === 'item') {
    items[child.id] = buildItem(child, current)
  } else if (child.type === 'context' && child.template === 'location-room') {
    extractRoomChildren(child, current)
  } else {
    throw new Error(`Type "${child.type}" and template "${child.template}" of extractLevelChild() not recognized!`);
  }
}

function extractCenterChildren(center, current) {
  Object.values(center.children).forEach(child => {extractCenterChild(child, {...current, center: center})})
}

function extractCenterChild(child, current){
  if (child.type === 'item') {
    items[child.id] = buildItem(child, current)
  } else if (child.type === 'context' && child.template === 'subject') {
    extractSubjectChildren(child, current)
  } else {
    throw new Error(`Type "${child.type}" and template "${child.template}" of extractCenterChild() not recognized!`);
  }
}

function extractRoomChildren(room, current) {
  Object.values(room.children).forEach(child => {extractRoomChild(child, {...current, room: room})})
}

function extractRoomChild(child, current){
  if (child.type === 'item') {
    items[child.id] = buildItem(child, current)
  } else if (child.type === 'context' && (child.template === 'class' || child.template === 'course' || child.template === 'seminar' || child.template === 'initiative' || child.template === 'subject')) {
    extractSomeChildren(child, current)
  } else {
    throw new Error(`Type "${child.type}" and template "${child.template}" of extractRoomChild() not recognized!`);
  }
}

function extractSubjectChildren(subject, current) {
  Object.values(subject.children).forEach(child => {extractSubjectChild(child, {...current, subject: subject})})
}

function extractSubjectChild(child, current){
  if (child.type === 'item') {
    items[child.id] = buildItem(child, current)
  } else {
    throw new Error(`Type "${child.type}" and template "${child.template}" of extractSubjectChild() not recognized!`);
  }
}

function extractSomeChildren(some, current) {
  Object.values(some.children).forEach(child => {extractSomeChild(child, {...current, [some.template]: some})})
}

function extractSomeChild(child, current){
  if (child.type === 'item') {
    items[child.id] = buildItem(child, current)
  } else {//if (child.type === 'context' && (child.template === 'class' || child.template === 'course' || child.template === 'seminar' || child.template === 'initiative' || child.template === 'subject')) {
    extractSomeChildren(child, current)
  }
  // else {
  //   throw new Error(`Type "${child.type}" and template "${child.template}" of extractSomeChild() not recognized!`);
  // }
}