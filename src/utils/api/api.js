const API_ENDPOINT = 'https://api.rundgang.udk-berlin.de/api/v2/'
const ROOT_LOCATION_ID = '!QEMZncAAlhtFVagfSI:content.udk-berlin.de'

export async function getId (id) {
  const url = `${API_ENDPOINT}${id}`
  const res = await fetch(url)
  return await res.json()
}

export async function getContexts (contexts) {
  const promises = []
  const data = []

  contexts.forEach(context => { promises.push(getId(context.id)) })

  await Promise
    .all(promises)
    .then(res => { data.push(res) })

  return data.flat()
}

export async function getRootLocation () {
  return await getId(ROOT_LOCATION_ID)
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

  floors.forEach(location => { location.forEach(floor => { promises.push(getContexts(floor.context)) }) })

  await Promise
    .all(promises)
    .then(res => { data.push(res) })

  return data.flat()
}
