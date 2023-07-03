import { get, getTree } from '@/utils/api/api'

let locationsCached = false
let locations = {}

let locationDetailsCached = false
const locationDetails = {}

export async function getLocations () {
  if (!locationsCached) {
    const tree = await getTree(process.env.REST_API_LOCATIONS_ROOT_ID)
    Object.values(tree.children).forEach( location => {
      locations[location.id] = location
    })
    locationsCached = true
  }

  const locationDetails = await getLocationDetails(Object.keys(locations))

  Object.keys(locations).forEach(id => {
    locations[id] = { ...locations[id], ...locationDetails[id] }
  })

  return locations
}

export async function getLocationDetails ( locationIds ){
  if (!locationDetailsCached) {
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

    locationIds.forEach(locationId => { promises.push(get(locationId)) })

    await Promise
      .all(promises)
      .then(data => { data.forEach(d => { locationDetails[d.id] = buildLocationDetail(d) }) })

    locationDetailsCached = false
  }

  return locationDetails
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
