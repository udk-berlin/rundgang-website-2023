import { getLocations } from "@/utils/api/locations";
import { getItems } from "@/utils/api/items";
import { getStructures } from "@/utils/api/structures";

export async function getTimelineLocations() {
  const timelineLocations = {}
  const locations = await getLocations()
  const items = await getItems()

  filter(Object.values(locations), items).forEach(location => timelineLocations[location.id] = location)
  return timelineLocations
}

export async function getTimelineStructures() {
  const timelineStructure = {}
  const structures = await getStructures()
  const items = await getItems()

  filter(Object.values(structures), items).forEach(structure => timelineStructure[structure.id] = structure)
  return timelineStructure
}

function filter(array, items) {
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

  return array.reduce(getChildren, []);
}
