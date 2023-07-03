import { getId, getTree } from '@/utils/api/api'

import { REST_API_LOCATIONS_ROOT_ID } from "@/utils/api/items";


export async function getLocations () {
  const locations = {}
  const data = await getTree(REST_API_LOCATIONS_ROOT_ID)

  if ('statusCode' in data && data.statusCode === 404) {}
  else {
    Object.values(data.children).forEach( location => {
      locations[location.id] = location
    })

    const locationDetails = await getLocationDetails(Object.keys(locations))

    Object.keys(locations).forEach(id => {
      if ('lng' in locationDetails[id] && 'lat' in locationDetails[id]) {
        locations[id] = {
          ...locations[id],
          ...locationDetails[id]
        }
      }
    })
  }

  return locations
}

export async function getLocationDetails ( locationIds ){
  const details = {}
  const promises = []

  const buildLocationDetail = (data) => {
    const locationDetail = { id: data.id }

    if ('physical' in data.allocation) {
      locationDetail.lng = data.allocation.physical[0].lng
      locationDetail.lat = data.allocation.physical[0].lat
    }

    if ('temporal' in data.allocation) {
      locationDetail.temporal = []

      data.allocation.temporal.forEach(time => {
        locationDetail.temporal.push({
          start: parseInt(time.start) * 1000,
          end: parseInt(time.end) * 1000,
        })
      })
    }

    return locationDetail
  }

  locationIds.forEach(locationId => { promises.push(getId(locationId)) })

  await Promise
    .all(promises)
    .then(data => {
      data.forEach(d => {
        if ('statusCode' in data) {}
        else {
          details[d.id] = buildLocationDetail(d)
        }
      })
    })

  return details
}
