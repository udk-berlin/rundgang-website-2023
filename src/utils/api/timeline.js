import { getLocations } from "@/utils/api/locations";
import { getItems } from "@/utils/api/items";

function filterLocations(locations, items) {
  const getChildren = (result, object) => {
    if (object.type === 'item' &&  items[object.id].temporal) {
      result.push(
        {
          ...object,
          temporal: items[object.id].temporal,
          thumbnail: items[object.id].thumbnail
        }
      );
      return result;
    }
    const children = Object.values(object.children).reduce(getChildren, []);
    if (children.length) result.push({ ...object, children });

    return result;
  };

  return locations.reduce(getChildren, []);
}

export default async function getTimelineLocations() {
  const locations = await getLocations()
  const items = await getItems()

  return filterLocations(Object.values(locations), items)
}