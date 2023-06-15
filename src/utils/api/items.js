import { get, getId, getTree } from '@/utils/api/api'

const ROOT_ID ='!CszUweVEGwuKVEiJBg:content.udk-berlin.de'
const ROOT_LOCATION_ID = '!QEMZncAAlhtFVagfSI:content.udk-berlin.de'
const ROOT_CONTEXT_ID = '!suNRlIyeorKnuZHfld:content.udk-berlin.de'

let itemsCached = false;
const items = {};

let itemDetailsCached = false;
const itemDetails = {};

export async function getListFilterTypeItems () {
  return await get(`${ROOT_ID}/list/filter/type/item`)
}

export async function getItemIds() {
  const items = await getListFilterTypeItems();
  let ids = items.map(item => item.id)
  return [...new Set(ids)];
}

export async function getItem (id) {
  const items = await getItems();
  return items[id]
}

export async function getItems () {
  if (!itemsCached) {
    const locationTree = await getTree(ROOT_LOCATION_ID)
    const contextTree = await getTree(ROOT_CONTEXT_ID)

    const buildItem = (item, data) => {
      const _item = {
        id: item.id,
        name: item.name,
        type: item.type,
        template: item.template
      }

      Object.entries(data).forEach(([key, value]) => {
        _item[key] = {
          id: value.id,
          name: value.name,
          type: value.type,
          template: value.template
        }
      })

      return _item
    }

    const extractChildren = (current, data) => {
      data = { ...data, [current.template]: current }

      Object.values(current.children).forEach(child => {
        if (child.type === 'item') {
          if (child.id in items) {
            items[child.id] = { ...items[child.id], ...buildItem(child, data) }
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
      items[id] = { ...items[id], ...itemDetails[id] }
    })

    itemsCached = true;
  }

  return items;
}

async function getItemDetails (itemIds) {
  if (!itemDetailsCached) {
    const promises = []

    const buildItemDetail = (data) => {
      const itemDetail = {
        id: data.id,
        thumbnail: data.thumbnail,
        thumbnail_full_size: data.thumbnail_full_size,
        description: data.description,
        authors: data.origin.authors
      }

      if ('temporal' in data.allocation) { itemDetail.temporal = data.allocation.temporal }

      return itemDetail
    }

    itemIds.forEach(itemId => { promises.push(getId(itemId)) })

    await Promise
      .all(promises)
      .then(data => { data.forEach(d => { itemDetails[d.id] = buildItemDetail(d) }) })

    itemDetailsCached= true;
  }

  return itemDetails;
}