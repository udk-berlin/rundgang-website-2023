const API_ENDPOINT = 'https://api.rundgang.udk-berlin.de/api/v2/'
const ROOT_LOCATION_ID = '!QEMZncAAlhtFVagfSI:content.udk-berlin.de'

export async function getItems (id) {
    const url = `${API_ENDPOINT}${id}/list/filter/type/item`
    const res = await fetch(url)
    return await res.json()
}

export async function getItemsWithLocation () {
    return await getItems(ROOT_LOCATION_ID)
}