import { getStructures } from "@/utils/api/structures";
import { getFormats } from '@/utils/api/formats'

export async function getProgramStructures() {
  const programStructures = {}
  const structures = await getStructures()

  filter(Object.values(structures)).forEach(structure => programStructures[structure.id] = structure)
  return programStructures
}

export async function getProgramFormats() {
  const programFormats = {}
  const formats = await getFormats()

  filter(Object.values(formats)).forEach(format => programFormats[format.id] = format)
  return programFormats
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
