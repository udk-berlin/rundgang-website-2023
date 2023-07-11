import { getTree } from '@/utils/api/api'

import { REST_API_LOCATIONS_ROOT_ID } from "@/utils/api/items";

export async function getLocations () {
  const locations = {}
  const data = await getTree(REST_API_LOCATIONS_ROOT_ID)

  if ('statusCode' in data && data.statusCode === 404) {}
  else {
    Object.values(data.children).forEach( location => {
      locations[location.id] = location
    })
  }

  return locations
}
