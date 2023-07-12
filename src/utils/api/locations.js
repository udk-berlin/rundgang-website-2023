import { getTreeUrl } from '@/utils/api/api'

import { REST_API_LOCATIONS_ROOT_ID } from "@/utils/api/items";

export function getLocationsTreeUrl() {
  return getTreeUrl(REST_API_LOCATIONS_ROOT_ID)
}
