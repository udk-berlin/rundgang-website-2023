import {get, getTree, getContexts} from "@/utils/api/api";

const ROOT_LOCATION_ID = '!QEMZncAAlhtFVagfSI:content.udk-berlin.de'

export async function getRootLocation () {
    return await get(ROOT_LOCATION_ID)
}

export async function getLocations () {
    const rootLocation = await getRootLocation()
    return await getContexts(rootLocation.context)
}

export async function getLocationFloors () {
    const locations = await getLocations()

    const promises = []
    const data = []

    locations.forEach(location => {
        promises.push(getContexts(location.context))
    })

    await Promise
        .all(promises)
        .then(res => { data.push(res) })

    return data.flat()
}

export async function getLocationRooms () {
    const floors = await getLocationFloors()

    const promises = []
    const data = []

    floors.forEach(location => {
        location.forEach(floor => {
            promises.push(getContexts(floor.context))
        })
    })

    await Promise
        .all(promises)
        .then(res => {
            data.push(res)
        })

    return data.flat()
}

export async function getItemsWithLocation () {
    const tree = await getTree(ROOT_LOCATION_ID)
    const items = {}

    const buildItem = (item, data) => {
        const _item = {
            id: item.id,
            name: item.name,
            type: item.type,
            template: item.template,
        }

        Object.entries(data).forEach(([key, value]) => {
            _item[key] = {
                id: value.id,
                name: value.name,
                type: value.type,
                template: value.template,
            }
        })

        return _item
    }

    const extractChildren = (current, data) => {
        data = {...data, [current.template]: current}

        Object.values(current.children).forEach(child => {
            if (child.type === 'item') {
                items[child.id] = buildItem(child, data)
            } else {
                extractChildren(child, data)
            }
        })
    }

    Object.values(tree.children).forEach(location => {
        extractChildren(location)
    })

    return items;
}


export async function getLocationsWithItems () {
    const tree = await getTree(ROOT_LOCATION_ID)
    const locations = {}

    const hasItems = (current) => {
        if (current.children.length === 0)
            return false

        let childrenHasItem = []

        Object.values(current.children).forEach(child => {
            if (child.type === 'item')
                childrenHasItem.push(true)
            else
                childrenHasItem.push(hasItems(child))
        })

        return childrenHasItem.some(c => c)
    }

    Object.entries(tree.children).forEach(([id, location]) => {
        if (hasItems(location)) {
            locations[id] = location
        }
    })

    const detailedLocations = await getLocations();

    detailedLocations.forEach(detailedLocation => {
        if (detailedLocation.id in locations) {
            locations[detailedLocation.id] = {
                ...locations[detailedLocation.id],
                lng: detailedLocation.allocation.physical[0].lng,
                lat: detailedLocation.allocation.physical[0].lat,
            }
        }
    })

    return locations;
}