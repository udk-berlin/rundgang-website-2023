const REST_API = 'https://2023.api.rundgang.udk-berlin.de/api/v2'
const REST_API_LOCATIONS_ROOT_ID = '!ZEZxbNWFYYsDgpkhCL:content.udk-berlin.de'
const REST_API_STRUCTURES_ROOT_ID = '!qfrjabHDUXieMVAzFt:content.udk-berlin.de'
const REST_API_FORMATS_ROOT_ID = '!fAUMSBXRVvkiNdaXQe:content.udk-berlin.de'

export async function fetcher (url) { return fetch(url).then((res) => res.json()) }

export function getUrl (query) {
  return `${REST_API}/${query}`
}

export async function get (query) {
  return await fetcher(getUrl(query))
}

export async function getTree (id) {
  return await get(`${id}/tree`)
}

export function getTreeUrl (id) {
  return getUrl(`${id}/tree`)
}

export function getRenderJsonUrl (id) {
  return getUrl(`${id}/render/json`)
}

export function getLocationsTreeUrl() {
  return getTreeUrl(REST_API_LOCATIONS_ROOT_ID)
}

export function getStructuresTreeUrl() {
  return getTreeUrl(REST_API_STRUCTURES_ROOT_ID)
}

export function getFormatsTreeUrl() {
  return getTreeUrl(REST_API_FORMATS_ROOT_ID)
}
