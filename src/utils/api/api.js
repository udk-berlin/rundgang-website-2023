export async function fetcher (url) { return fetch(url).then((res) => res.json()) }

export function getUrl (query) {
  return `${process.env.REST_API}/${query}`
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
