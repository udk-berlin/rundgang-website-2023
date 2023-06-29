import { getItems } from "@/utils/api/items";
import { getLocations } from "@/utils/api/locations";
import { getStructures } from "@/utils/api/structures";
import { getFormats } from '@/utils/api/formats'

export async function getTimelineLocations() {
  const timelineLocations = {}
  const locations = await getLocations()
  const items = await getItems()

  filter(Object.values(locations), items).forEach(location => timelineLocations[location.id] = location)
  return timelineLocations
}

export async function getTimelineFormats() {
  const timelineFormats = {}
  const formats = await getFormats()
  const items = await getItems()

  filter(Object.values(formats), items).forEach(format => timelineFormats[format.id] = format)
  return timelineFormats
}

export async function getTimelineStructures() {
  const timelineStructures = {}
  const structures = await getStructures()
  const items = await getItems()

  filter(Object.values(structures), items).forEach(structure => timelineStructures[structure.id] = structure)
  return timelineStructures
}

function filter(array, items) {
  const getChildren = (result, object) => {
    if (object.type === 'item' && items[object.id].temporal) {
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
