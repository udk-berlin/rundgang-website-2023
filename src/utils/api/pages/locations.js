import { getItems } from "@/utils/api/items";
import { getLocations } from "@/utils/api/locations";
import { getStructures } from "@/utils/api/structures";
import { getFormats } from '@/utils/api/formats'

export async function getLocationsLocations() {
  const locationsLocations = {}
  const locations = await getLocations()
  const items = await getItems()

  filter(Object.values(locations), items).forEach(location => locationsLocations[location.id] = location)
  return locationsLocations
}

export async function getLocationsFormats() {
  const programFormats = {}
  const formats = await getFormats()

  filter(Object.values(formats)).forEach(format => programFormats[format.id] = format)
  return programFormats
}

export async function getLocationsStructures() {
  const locationStructures = {}
  const structures = await getStructures()

  filter(Object.values(structures)).forEach(structure => locationStructures[structure.id] = structure)
  return locationStructures
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
