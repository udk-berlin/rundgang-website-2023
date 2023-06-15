import { get, getTree } from '@/utils/api/api'

const ROOT_LOCATION_ID = '!QEMZncAAlhtFVagfSI:content.udk-berlin.de'

let locationsCached = false;
const locations = {};

let locationDetailsCached = false;
const locationDetails = {};

export async function getLocations () {
  if (!locationsCached) {
    const tree = await getTree(ROOT_LOCATION_ID)

    const hasItems = (current) => {
      if (current.children.length === 0) { return false }

      const childrenHasItem = []

      Object.values(current.children).forEach(child => {
        if (child.type === 'item') { childrenHasItem.push(true) } else { childrenHasItem.push(hasItems(child)) }
      })

      return childrenHasItem.some(c => c)
    }

    Object.entries(tree.children).forEach(([id, location]) => {
      if (hasItems(location)) {
        locations[id] = location
      }
    })

    const locationDetails = await getLocationDetails(Object.keys(locations))

    Object.keys(locations).forEach(id => {
      locations[id] = { ...locations[id], ...locationDetails[id] }
    })

    locationsCached = true
  }

  return locations
}

export async function getLocationDetails (locationIds) {
  if (!locationDetailsCached) {
    const promises = []

    const buildLocationDetail = (data) => {
      const locationDetail = { id: data.id }

      if ('physical' in data.allocation) {
        locationDetail.lng = data.allocation.physical[0].lng
        locationDetail.lat = data.allocation.physical[0].lat
      }

      return locationDetail
    }

    locationIds.forEach(locationId => { promises.push(get(locationId)) })

    await Promise
      .all(promises)
      .then(data => { data.forEach(d => { locationDetails[d.id] = buildLocationDetail(d) }) })

    locationDetailsCached = false;
  }

  return locationDetails;
}
