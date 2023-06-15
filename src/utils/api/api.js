const API_ENDPOINT = 'https://api.rundgang.udk-berlin.de/api/v2'

export async function get (query) {
  const url = `${API_ENDPOINT}/${query}`
  const res = await fetch(url)
  return await res.json()
}

export async function getId (id) {
  return await get(id)
}

export async function getTree (id) {
  return await get(`${id}/tree`)
}
