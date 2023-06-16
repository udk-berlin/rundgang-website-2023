const API_ENDPOINT = 'https://api.rundgang.udk-berlin.de/api/v2'

export async function fetcher (url) { return fetch(url).then((res) => res.json()) }

function getUrl (query) {
  return `${API_ENDPOINT}/${query}`
}

export async function get (query) {
  return await fetcher(getUrl(query))
}

export async function getId (id) {
  return await get(id)
}

export async function getTree (id) {
  return await get(`${id}/tree`)
}

export function getRenderJsonUrl (id) {
  return getUrl(`${id}/render/json`)
}
