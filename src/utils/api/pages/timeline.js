import { getStructures } from "@/utils/api/structures";
import { getFormats } from '@/utils/api/formats'

export async function getTimelineFormats() {
  const timelineFormats = {}
  const formats = await getFormats()

  filter(Object.values(formats)).forEach(format => timelineFormats[format.id] = format)
  return timelineFormats
}

export async function getTimelineStructures() {
  const timelineStructures = {}
  const structures = await getStructures()

  filter(Object.values(structures)).forEach(structure => timelineStructures[structure.id] = structure)
  return timelineStructures
}

function filter(array) {
  const getChildren = (result, object) => {
    if (object.type === 'item') {
      result.push(object);
      return result;
    }
    const children = Object.values(object.children).reduce(getChildren, []);
    if (children.length) result.push({ ...object, children });

    return result;
  };

  return array.reduce(getChildren, []);
}
