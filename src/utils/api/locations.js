import { getTreeUrl } from '@/utils/api/api'

const REST_API_LOCATIONS_ROOT_ID = '!ZEZxbNWFYYsDgpkhCL:content.udk-berlin.de'

export function getLocationsTreeUrl() {
  return getTreeUrl(REST_API_LOCATIONS_ROOT_ID)
}
