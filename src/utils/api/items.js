import { get, getTree } from "@/utils/api/api";

const ROOT_LOCATION_ID = '!QEMZncAAlhtFVagfSI:content.udk-berlin.de'
const ROOT_CONTEXT_ID = '!suNRlIyeorKnuZHfld:content.udk-berlin.de'

export async function getItems () {
    const locationTree = await getTree(ROOT_LOCATION_ID)
    const contextTree = await getTree(ROOT_CONTEXT_ID)

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
                if (child.id in items) {
                    items[child.id] = {...items[child.id], ...buildItem(child, data)}
                } else {
                    items[child.id] = buildItem(child, data)
                }
            } else {
                extractChildren(child, data)
            }
        })
    }

    Object.values(locationTree.children).forEach(location => {
        extractChildren(location)
    })

    Object.values(contextTree.children).forEach(context => {
        extractChildren(context)
    })

    const itemDetails = await getItemDetails(Object.keys(items))

    Object.keys(items).forEach(id => {
        items[id] = {...items[id], ...itemDetails[id]}
    })

    return items;
}

async function getItemDetails(itemIds) {
    const promises = []
    const itemDetails = {}

    const buildItemDetail = (data) => {
        const itemDetail = {
            id: data.id,
            thumbnail: data.thumbnail,
            thumbnail_full_size: data.thumbnail_full_size,
            description: data.description,
            authors: data.origin.authors
        }

        if ('temporal' in data.allocation)
            itemDetail.temporal = data.allocation.temporal


        return itemDetail
    }

    itemIds.forEach(itemId => {promises.push(get(itemId))})

    await Promise
        .all(promises)
        .then(data => {data.forEach(d => {itemDetails[d.id] = buildItemDetail(d)})})

    return itemDetails
}