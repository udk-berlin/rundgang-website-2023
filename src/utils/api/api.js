const API_ENDPOINT = 'https://api.rundgang.udk-berlin.de/api/v2/'

export async function get (id) {
  const url = `${API_ENDPOINT}${id}`
  const res = await fetch(url)
  return await res.json()
}

export async function getTree (id) {
  const url = `${API_ENDPOINT}${id}/tree`
  const res = await fetch(url)
  return await res.json()
}

export async function getContexts (contexts) {
  const promises = []
  const data = []

  contexts.forEach(context => { promises.push(get(context.id)) })

  await Promise
    .all(promises)
    .then(res => { data.push(res) })

  return data.flat()
}